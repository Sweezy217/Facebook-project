import React, { useState } from 'react'
import './signup.css'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const [userData, setUserData] = useState({
      firstName:"",
      surname:"",
      uniqueID:"",
      password:"",
      dayOfBirth:"",
      monthOfBirth:"",
      yearOfBirth:"",
      gender:"",
    })

  const navigate = useNavigate()

  const handleform = (e) => {
    e.preventDefault();
    console.log(userData)

    axios
    .post("", { userData })
    .then((result) => {
      console.log(result)
      navigate('/login')
    })
    .catch((err) => console.log(err));
    
  }

  return (
    <>
        <div className='signupCont'>

         <div className='logo'>
           <img class="fb_logo _agiv img" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" width="100%" height="100%" />
         </div>

         <div className='signupDiv'>
            
            <h3 className='signupH1'>Create a new account</h3>
            <p className='signupP'>It's quick and easy.</p>

            <form className='signupForm' onSubmit={handleform}>

              <input type='text' className='signupInputs signupName' placeholder='First Name' onChange={(e)=>setUserData({...userData,firstName:e.target.value})}/>
              <input type='text' className='signupInputs signupLastName' placeholder='Surname' onChange={(e)=>setUserData({...userData,surname:e.target.value})}/>
              <input type='text' className='signupInputs signupPass' placeholder='Mobile number or email address' onChange={(e)=>setUserData({...userData,uniqueID:e.target.value})}/>
              <input type='password' className='signupInputs signupPin' placeholder='New password' onChange={(e)=>setUserData({...userData,password:e.target.value})}/>

              <p className='signupSubTitle signupSubTitle2'>Date of birth</p>


              <select className="signupSelect" type='selector' onChange={(e)=>setUserData({...userData,dayOfBirth:e.target.value})}>
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
                <option value="6" >6</option>
                <option value="7" >7</option>
                <option value="8" >8</option>
                <option value="9" >9</option>
                <option value="10" >10</option>
                <option value="11" >11</option>
                <option value="12" >12</option>
                <option value="13" >13</option>
                <option value="14" >14</option>
                <option value="15" >15</option>
                <option value="16" >16</option>
                <option value="17" >17</option>
                <option value="18" >18</option>
                <option value="19" >19</option>
                <option value="20" >20</option>
                <option value="21" >21</option>
                <option value="22" >22</option>
                <option value="23" >23</option>
                <option value="24" >24</option>
                <option value="25" >25</option>
                <option value="26" >26</option>
                <option value="27" >27</option>
                <option value="28" >28</option>
                <option value="29" >29</option>
                <option value="30" >30</option>
                <option value="31" >31</option>
              </select>
              <select className="signupSelect signupSelect2" type='selector' onChange={(e)=>setUserData({...userData,monthOfBirth:e.target.value})}>
                <option value="Jan" >Jan</option>
                <option value="Feb" >Feb</option>
                <option value="Mar" >Mar</option>
                <option value="Apr" >Apr</option>
                <option value="May" >May</option>
                <option value="Jun" >Jun</option>
                <option value="Jul" >Jul</option>
                <option value="Aug" >Aug</option>
                <option value="Sep" >Sep</option>
                <option value="Oct" >Oct</option>
                <option value="Nov" >Nov</option>
                <option value="Dec" >Dec</option>
              </select>
              <select className="signupSelect signupSelect2" type='selector' onChange={(e)=>setUserData({...userData,yearOfBirth:e.target.value})}>
                <option value="2000" >2000</option>
                <option value="2001" >2001</option>
                <option value="2002" >2002</option>
                <option value="2003" >2003</option>
                <option value="2004" >2004</option>
                <option value="2005" >2005</option>
                <option value="2006" >2006</option>
                <option value="2007" >2007</option>
                <option value="2008" >2008</option>
                <option value="2009" >2009</option>
                <option value="2010" >2010</option>
                <option value="2011" >2011</option>
                <option value="2012" >2012</option>
                <option value="2013" >2013</option>
                <option value="2014" >2014</option>
                <option value="2015" >2015</option>
                <option value="2016" >2016</option>
                <option value="2017" >2017</option>
                <option value="2018" >2018</option>
                <option value="2019" >2019</option>
                <option value="2020" >2020</option>
                <option value="2021" >2021</option>
                <option value="2022" >2022</option>
                <option value="2023" >2023</option>
              </select>

              <p className='signupSubTitle'>Gender</p>

              <div className='signupRadioDiv'>
                <div className='signupRadio'>
                <label for="radio-1">Female</label>
                <input type='radio' id='radio-1' name='radio' value="Female" onChange={(e)=>setUserData({...userData,gender:e.target.value})}/>
                </div>

                <div className='signupRadio'>
                <label for="radio-2">Male</label>
                <input type='radio' id='radio-2' name='radio' value="Male" onChange={(e)=>setUserData({...userData,gender:e.target.value})}/>
                </div>

                <div className='signupRadio'>
                <label for="radio-3">Custom</label>
                <input type='radio' id='radio-3' name='radio' value="Custom" onChange={(e)=>setUserData({...userData,gender:e.target.value})}/>
                </div>
              </div>



              <p className="signupFooter">People who use our service may have uploaded your contact information to Facebook. <a href='https://www.facebook.com/help/637205020878504'>Learn more</a>.</p>

              <p className="signupFooter">By clicking Sign Up, you agree to our <a href='https://www.facebook.com/legal/terms/update'>Terms</a>, <a href='https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0'>Privacy Policy</a> and <a href='https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0'>Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>

              <div className='signupButtonDiv'>
                <button type='submit' className='signupButton'>Sign Up</button>
              </div>

            </form>

            <Link className='loginLink' to="/login"><p>Already have an account?</p></Link>

         </div>

        
        
        </div>
    </>
  )
}

export default Signup