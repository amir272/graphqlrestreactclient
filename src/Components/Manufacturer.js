import React from "react";
import { gql, useQuery} from '@apollo/client';

const getProductByName = gql`
query GetManByName($manuName: String!)
    {
    findManufacturer(name: $manuName){
    id
    name
    origin
    userRatings
    noOfProductAvailable
    annualRevenue
  }
  }`

function Manufacturer(){
  const [manuName, setName] = React.useState("");
  const [show, setShow] = React.useState(false);
  const { loading, error, data } = useQuery(getProductByName, {
    variables: {manuName}
});
console.log(data)

  const showEmp = ()=>{
     if(loading) return <p>loading</p>
     if(error) return <p>Error</p>
    return data.findManufacturer.map((pro)=>{
         return(
            <tr key={pro.id}>
            <td>{pro.name}</td>
            <td>{pro.origin}</td>
            <td>{pro.userRatings}</td>
            <td>{pro.noOfProductAvailable}</td>
            <td>{pro.annualRevenue}</td>
          </tr>
          ) 

    })
  }

  function handleSubmit(e){
    e.preventDefault();
    setShow(true);
    showEmp();
  }

  return (
    <div>
        <div className="container">
        <div className="row justify-content-center">
            </div>

        <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm" onSubmit={handleSubmit}>
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    <div className="col">
                                    <select onChange={(event)=>setName(event.target.value)}  name="name" className="select">
                                            <option value="">Select Manufacturer</option>
                                            <option value="Tata">Tata</option>
                                            <option value="Hitachi">Hitachi</option>
                                            <option value="Mahindra">Mahindra</option>
                                            <option value="Dell">Dell</option>                    
                                            <option value="HP">HP</option>
                                            <option value="Samsung">Samsung</option>
                                     </select>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                   {manuName!=="" && show &&  <div className="row justify-content-center ">
       <table className="table">
  <thead>
    <tr>
      <th scope="col">Manufacturer name</th>
      <th scope="col">Manufacturer Origin</th>
      <th scope="col">User Ratings</th>
      <th scope="col">No. of product available</th>
      <th scope="col">Annual Revenue</th>
    </tr>
  </thead>
  <tbody>
    {showEmp()}
  </tbody>
</table>
    </div> }
</div>
    </div>
  )
}

export default Manufacturer;