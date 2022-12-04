import React from "react";
import { Link } from "react-router-dom";
function Main(){

return (
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sign up page</h5>
        <p class="card-text">If you have not signed up for our page then click below</p>
        <span className="btn btn-success"><Link to="/register">Register</Link></span>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Move to Login Page</h5>
        <p class="card-text">If you have signed up already click here</p>
        <span className="btn btn-success"><Link to="/login">Login</Link></span>
      </div>
    </div>
  </div>
</div>
)
}

export default Main;