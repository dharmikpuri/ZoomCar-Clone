import React from 'react';
import './Checkout.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
class Checkout extends React.Component {
 
 
  render() {
  
     
    return (
    
      <div className="maincontainer">
       <div  class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          {/* <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5> */}
                    
          <a className='d-flex-anchor' style={{marginLeft:"1000px"}} class="btn btn-outline-primary" href="#">Sign up</a>
        </div>
        <div class="container">
          
          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product Cost</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$0</span>
                </li>
               
             
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              <form class="card p-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Promo code"/>
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form>
            </div>


            <div Id='hope' class="col-md-8 order-md-1">
              <h4 class="mb-3">Billing address</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username" required />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select style={{height:"35px",borderRadius:"10px"}} class="custom-select d-block w-100" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                      <option>INDIA</option>
                      <option>France</option>
                      <option>Indonesia</option>
                      <option>Maldives</option>
                      <option>Italy</option>
                      <option>Switzerland</option>
                      <option>Japan</option>
                      <option>Costa Rica</option>
                      <option>South Korea</option>
                      <option>Nepal</option>
                      <option>Peru</option>
                      <option>United Kingdom</option>
                      <option>South Africa</option>
                      <option>Tanzania</option>
                      <option>New Zealand</option>
                      <option>Indiana</option>
                      <option>Veranda</option>
                      <option>Sri Lanka</option>
                      <option>Pakistan</option>
                      <option>Dubai</option>
                      <option>Canada</option>

                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select style={{height:"35px",borderRadius:"10px"}} class="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                      <option>Kansas</option>
                      <option>Indiana</option>
                      <option>Illinois</option>
                      <option>Iowa</option>
                      <option>Oklahoma</option>
                      <option>Hawaii</option>
                      <option>Alaska</option>
                      <option>Utah</option>
                      <option>Washington</option>
                      <option>Oregon</option>
                      <option>Michigan</option>
                      <option>Arizona</option>
                      <option>Wyoming</option>
                      <option>Montana</option>
                      <option>North Carolina</option>
                      <option>Vermont</option>
                      <option>New Mexico</option>
                      <option> Maine</option>
                      <option> Idaho</option>
                
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address" />
                  <label style={{textAlign:"center"}} class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="save-info" />
                  <label style={{textAlign:"center"}} class="custom-control-label" for="save-info">Save this information for next time</label>
                </div>
                <hr class="mb-4" />
                <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="credit">Credit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                    <label class="custom-control-label" for="debit">Debit card</label>
                  </div>
                
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label style={{paddingBottom:"10px"}} for="cc-name">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label style={{paddingBottom:"10px"}} for="cc-number">Card Number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                    <div class="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                    <div class="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="button">Continue to checkout</button>
              </form>
            </div>
          </div>
          <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="mb-1">&copy; 2020-2021 therichpost.com</p>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#">Privacy</a></li>
              <li class="list-inline-item"><a href="#">Terms</a></li>
              <li class="list-inline-item"><a href="#">Support</a></li>
            </ul>
          </footer>
        </div>
     
      </div>
      
)
};
}
export default Checkout;