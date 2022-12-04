import React from "react";
function AddProduct(){
const obj = {
    manufacturer: "",
    price: 0,
    productName: "",
    productType: "",
    unitSoldSoFar: ""
};
    const [formData, setFormData] = React.useState(obj);
    const [product, setProduct] = React.useState({});
    const [registered, setRegistered] = React.useState(false);

    function handleChange(e){
        e.preventDefault();
        setFormData(prevData =>{
           return{
            ...prevData,
            [e.target.name]: e.target.value
           } 
        })
    }
    async function handleSubmit(e){
        e.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
             manufacturer: formData.manufacturer, price: formData.price, productName: formData.productName,
            productType: formData.productType, unitSoldSoFar: formData.unitSoldSoFar})
    };

          await fetch('http://localhost:8092/addprod', requestOptions)
        .then(response => response.json())
        .then(data => {setProduct(data);})
        .then(()=>setRegistered(true))
        .then(()=>setFormData(obj));

        console.log(product)
    }


    return (
        <div>

<section className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Add a new product</h3>
            {registered &&<p>Successfully added</p>}
            <form className="px-md-2" onSubmit={handleSubmit}>

              <div className="fmorm-outline mb-4">
                <input type="text" id="form3Example1q" name="manufacturer" value={formData.manufacturer} onChange={handleChange}  className="form-control" />
                <label className="form-label" htmlFor="form3Example1q">Manufacturer</label>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="price"  value={formData.price} onChange={handleChange} id="exampleDatepicker1" />
                    <label htmlFor="exampleDatepicker1" className="form-label" >Price</label>
                  </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="productName"  value={formData.productName} onChange={handleChange} id="exampleDatepicker1" />
                    <label htmlFor="exampleDatepicker1" className="form-label" >Product Name</label>
                    </div>

               </div>
              </div>

              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

                  <div className="form-outline">
                    <input type="text" id="form3Example1w" name="productType" className="form-control"value={formData.productType} onChange={handleChange} />
                    <label className="form-label"   htmlFor="form3Example1w">Product Type</label>
                  </div>

                </div>
              </div>


              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

                  <div className="form-outline">
                    <input type="text" id="form3Example1w" name="unitSoldSoFar" className="form-control" value={formData.unitSoldSoFar} onChange={handleChange} />
                    <label className="form-label"  htmlFor="form3Example1w">Unit Sold So Far</label>
                  </div>

                </div>
              </div>

              <button type="submit" className="btn btn-success btn-lg mb-1">Add</button>

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

export default AddProduct;
