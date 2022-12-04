import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props){
    let navigate = useNavigate();
    const routeLogin = () => {
        let path = `/addprod`;
        navigate(path);
    }
    console.log(props.name)

    const obj = {email: "", password: ""};
    const [formData, setFormData] = React.useState(obj);
    const [employee, setEmployee] = React.useState({});
    const [msg, setMsg] = React.useState("");
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
        await fetch(`http://localhost:8092/emp/${formData.email}/${formData.password}`)
      .then(response => response.json())
      .then(data => {
        setEmployee(data);
        setMsg("Successfully logged in")
        routeLogin();
        console.log(employee)})
        .catch(err => {
            // Do something for an error here
            setMsg("Incorrect username password");
          })
      
  }

    return (
        <div>
            <section className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Info</h3>
            <Link to="/register">Register if not already registered</Link>
            <p>{msg}</p>
            <form className="px-md-2" onSubmit={handleSubmit}>



              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

                  <div className="form-outline">
                    <input type="email" id="form3Example1w" name="email" className="form-control"value={formData.email} onChange={handleChange} />
                    <label className="form-label"   htmlFor="form3Example1w">Email</label>
                  </div>

                </div>
              </div>
     
              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="password"  value={formData.password} onChange={handleChange} id="exampleDatepicker1" />
                    <label htmlFor="exampleDatepicker1" className="form-label" >Password</label>
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

export default Login;