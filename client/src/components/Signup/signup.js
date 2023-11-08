import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <>
        <div className='signupCont'>

         <div className='logo'>
           <img class="fb_logo _agiv img" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" width="100%" height="100%" />
         </div>

         <div className='signupDiv'>
            
            <h3 className='signupH1'>Create a new account</h3>
            <p className='signupP'>It's quick and easy.</p>

            <form className='signupForm'>
              <input type='text' className='signupInputs signupName' placeholder='First Name'/>
              <input type='text' className='signupInputs signupLastName' placeholder='Surname'/>
              <input type='text' className='signupInputs signupPass' placeholder='Mobile number or email address'/>
              <input type='password' className='signupInputs signupPin' placeholder='New password'/>

              <p className='signupSubTitle signupSubTitle2'>Date of birth</p>


              <select className="signupSelect" type='selector'>
                <option value="" >1</option>
                <option value="" >2</option>
                <option value="" >3</option>
                <option value="" >4</option>
                <option value="" >5</option>
                <option value="" >6</option>
                <option value="" >7</option>
                <option value="" >8</option>
                <option value="" >9</option>
                <option value="" >10</option>
                <option value="" >11</option>
                <option value="" >12</option>
                <option value="" >13</option>
                <option value="" >14</option>
                <option value="" >15</option>
                <option value="" >16</option>
                <option value="" >17</option>
                <option value="" >18</option>
                <option value="" >19</option>
                <option value="" >20</option>
                <option value="" >21</option>
                <option value="" >22</option>
                <option value="" >23</option>
                <option value="" >24</option>
                <option value="" >25</option>
                <option value="" >26</option>
                <option value="" >27</option>
                <option value="" >28</option>
                <option value="" >29</option>
                <option value="" >30</option>
                <option value="" >31</option>
              </select>
              <select className="signupSelect signupSelect2" type='selector'>
                <option value="" >Jan</option>
                <option value="" >Feb</option>
                <option value="" >Mar</option>
                <option value="" >Apr</option>
                <option value="" >May</option>
                <option value="" >Jun</option>
                <option value="" >Jul</option>
                <option value="" >Aug</option>
                <option value="" >Sep</option>
                <option value="" >Oct</option>
                <option value="" >Nov</option>
                <option value="" >Dec</option>
              </select>
              <select className="signupSelect signupSelect2" type='selector'>
                <option value="" >2000</option>
                <option value="" >2001</option>
                <option value="" >2002</option>
                <option value="" >2003</option>
                <option value="" >2004</option>
                <option value="" >2005</option>
                <option value="" >2006</option>
                <option value="" >2007</option>
                <option value="" >2008</option>
                <option value="" >2009</option>
                <option value="" >2010</option>
                <option value="" >2011</option>
                <option value="" >2012</option>
                <option value="" >2013</option>
                <option value="" >2014</option>
                <option value="" >2015</option>
                <option value="" >2016</option>
                <option value="" >2017</option>
                <option value="" >2018</option>
                <option value="" >2019</option>
                <option value="" >2020</option>
                <option value="" >2021</option>
                <option value="" >2022</option>
                <option value="" >2023</option>
              </select>

              <p className='signupSubTitle'>Gender</p>

              <div className='signupRadioDiv'>
                <div className='signupRadio'>
                <label for="radio-1">Female</label>
                <input type='radio' id='radio-1' name='radio'/>
                </div>

                <div className='signupRadio'>
                <label for="radio-2">Male</label>
                <input type='radio' id='radio-2' name='radio'/>
                </div>

                <div className='signupRadio'>
                <label for="radio-3">Custom</label>
                <input type='radio' id='radio-3' name='radio'/>
                </div>
              </div>



              <p className="signupFooter">People who use our service may have uploaded your contact information to Facebook. <a href='https://www.facebook.com/help/637205020878504'>Learn more</a>.</p>

              <p className="signupFooter">By clicking Sign Up, you agree to our <a href='https://www.facebook.com/legal/terms/update'>Terms</a>, <a href='https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0'>Privacy Policy</a> and <a href='https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0'>Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>

              <div className='signupButtonDiv'>
                <button type='submit' className='signupButton'>Sign Up</button>
              </div>

            </form>

            <p className='loginLink'>Already have an account?</p>

         </div>

        
        
        </div>
    </>
  )
}

export default Signup