import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Register(){
const obj = {firstName: "", lastName: "", contact: "", email: "", gender: ""};
    const [formData, setFormData] = React.useState(obj);
    const [employee, setEmployee] = React.useState([]);
    const [registered, setRegistered] = React.useState(false);
    const [noCorrect, setNoCorrect] = React.useState(false)

     let navigate = useNavigate();
    const routeLogin = () => {
        let path = `/login`;
        navigate(path);
    }
    function handleChange(e){
        e.preventDefault();
        setFormData(prevData =>{
           return{
            ...prevData,
            [e.target.name]: e.target.value
           } 
        })
        console.log(formData)
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        if(formData.contact.match(/\d/g).length!==10) {
            setNoCorrect(true)
        return 
    }
        if(validateEmail(formData.email)===false){

        }else{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
             firstName: formData.firstName.trim(), lastName: formData.lastName.trim(), email: formData.email.trim(),
            contact: formData.contact.trim(), gender: formData.gender, password: formData.firstName.trim()+formData.contact.trim()})
    };

          await fetch('http://localhost:8092/add', requestOptions)
        .then(response => response.json())
        .then(data => {
            setEmployee(data);
            document.getElementById("modal").style.display  = 'block';
            window.setTimeout(routeLogin, 5000);})
        .then(()=>setRegistered(true))
        .then(()=>setFormData(obj));
    }
}

    function validateEmail(email) {
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
          return true;
        } else {
          return false;
        }
      }

      const loginNow =<div id="modal" className="modal" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Registration successful</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p> You {formData.firstName} have successfully registered</p>
            <p>Your username is your email and password is Firstname+contact</p>
          </div>
        </div>
      </div>
    </div>

    return (
        <div>
    {loginNow}
<section className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
            <Link to="/login" name={employee}>Login if already registered</Link><p></p>
            {registered &&<p>Successfully registered</p>}
            <form className="px-md-2" onSubmit={handleSubmit}>

              <div className="fmorm-outline mb-4">
                <input type="text" id="form3Example1q" name="firstName" value={formData.firstName} onChange={handleChange}  className="form-control" />
                <label className="form-label" htmlFor="form3Example1q">First Name</label>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="lastName"  value={formData.lastName} onChange={handleChange} id="exampleDatepicker1" />
                    <label htmlFor="exampleDatepicker1" className="form-label" >Last Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <select value={formData.gender} onChange={handleChange} name="gender" className="select">
                    <option value="1">Select Gender</option>
                    <option value="M">Female</option>
                    <option value="F">Male</option>
                  </select>

                </div>
              </div>

              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

                  <div className="form-outline">
                    <input type="email" id="form3Example1w" name="email" className="form-control"value={formData.email} onChange={handleChange} />
                    <label className="form-label"   htmlFor="form3Example1w">Email</label>
                  </div>

                </div>
              </div>


              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

                  <div className="form-outline">
                    <input type="text" id="form3Example1w" name="contact" className="form-control" value={formData.contact} onChange={handleChange} />
                    <label className="form-label"  htmlFor="form3Example1w">Contact</label>
                    {noCorrect && <p>Enter 10 digit contact number</p>}
                  </div>

                </div>
              </div>

              <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
            </div>
    )

}

export default Register;
