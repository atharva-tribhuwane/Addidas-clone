import React from 'react'
import './Sign.css'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import { gapi } from 'gapi-script'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import {ImCross } from "react-icons/im"
import { FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export const Sign=()=> {
    const [emailRegister, setEmailRegister] = React.useState('');
    const [passwordRegister, setPasswordRegister] = React.useState('')
    const navigate = useNavigate();
    const responseGoogleRegister = async (res) => {
      console.log(res)
      let user = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        password: res.profileObj.googleId,
      }
      try {
        let data = await fetch('https://backend-gamma-vert.vercel.app/reg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
        let res = await data.json()
        if (res.message) {
          alert(res.message)
        } else {
          alert('User created successfully')
        }
      } catch (error) {
        console.log(error)
      }
    }
    const handleRegister = async (e) => {
      const user = {
        email: emailRegister,
        password: passwordRegister
        // name: nameRegister,
      }
      console.log(user.password.length)
      if(user.email =="" ){
        alert("Enter Valid Details")
        return
      }
      if(user.password.length<=8){
        alert("Enter Valid Details")
        return
      }
      // for( let i in user){
      //   if(user[i]==""){
      //     alert("Enter valid Details")
      //     return
      //   }
      // }
      try {
        let data = await fetch('https://backend-gamma-vert.vercel.app/reg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
        let res = await data.json()
        if (res.message) {
          alert(res.message)
        } else {
          alert('User created successfully');
          navigate("/login")
        }
        // setNameRegister("")
        setEmailRegister("")
        setPasswordRegister("")
      } catch (error) {
        console.log(error)
      }
    }
    React.useEffect(() => {
      function start() {
        gapi.client.init({
          clientId:
            '183711882186-6kc3gqcn2clsoipt9svo6omjk81no3p5.apps.googleusercontent.com',
          scope: 'email',
        })
      }
      gapi.load('client:auth2', start)
    }, [])
  return (
    <div style={{width:"60%", margin:"auto",padding:"2%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <p style={{
            textAlign:'left', 
            fontWeight:"700px",
          color:"000000",
          fontSize:"30px",
          margin:"0px",
          fontFamily:'AdineuePRO, Helvetica, Arial, sans-serif'
        }}
        >
         CREATE YOUR ACCOUNT
        </p>
        <ImCross/>
        </div>
        <p style={{  textAlign:"left" }}>
              {' '}
              Sign up now and get 15% off your first order.
            </p>
            <div style={{display:"flex", flexDirection:"column", width:"70%", justifyContent:"start"}}>
        <TextField
          label="Email*"
          value={emailRegister}
              type={"email"}
              onChange={(e) => {
                setEmailRegister(e.target.value)
                console.log("email",e.target.value)
              }}
          //     color={767677}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              placeholder="Email *"
              size="lg"
          id="outlined"
          defaultValue="Email*"
          marginbottom={'100px'}
        /></div>
        <div style={{marginTop:"25px",display:"flex", flexDirection:"column", width:"70%", justifyContent:"start"}}>
      <TextField
          label="Password*"
          value={passwordRegister}
              type={"password"}
              onChange={(e) => {
                setPasswordRegister(e.target.value)
                console.log("password",e.target.value)
              }}
          //     color={767677}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              placeholder="Password *"
              size="lg"
          id="outlined"
          defaultValue="Password*"
          marginLeft='100px'
          style={{color:"black"}}
        />
        </div>
        <p style={{marginRight:"820px",marginTop:"4px",fontFamily:'AdineuePRO, Helvetica, Arial, sans-serif', fontSize:"14px"}} >Minimum 8 Characters*</p>
       <div>
       </div>
      <div style={{display:"flex", height:"20px", marginTop:"0",marginBottom:"10px"}} ><input type="checkbox"  /> <p style={{fontSize:"16px", color:"000000", marginLeft:"10px",fontFamily:'AdineuePRO, Helvetica, Arial, sans-serif', marginTop:"0px"}}>Yes, I am over 18 years old *</p></div>
      <div style={{display:"flex", height:"40px",width:"790px", marginTop:"5px",marginBottom:"10px"}} ><input type="checkbox"  className='checkbox2' /> <p style={{fontSize:"16px",textAlign:"left", color:"000000", marginLeft:"5px",fontFamily:'AdineuePRO, Helvetica, Arial, sans-serif', marginTop:"0px"}}>I would like to stay up to date with addidas. I agree to recieve
              personalised email marketing messages from  adidas India Marketing Pvt Ltd.</p></div>
      <div style={{display:"flex", height:"20px", marginTop:"0",marginBottom:"10px"}} ><input type="checkbox"  /> <p style={{fontSize:"16px", color:"000000", marginLeft:"5px",fontFamily:'AdineuePRO, Helvetica, Arial, sans-serif', marginTop:"0px"}}>I have read and accepted the Terms & Conditions, the adiClub Terms
              & Conditions and the adidas Privacy Policy. *</p></div>
              <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                // width: 970,
              }}
            >
              <button style={{
                backgroundColor:'black',
                marginTop:"5px",
                color:'#FFFFFF',
                fontFamily:'AdineuePRO, Helvetica, Arial, sans-serif',
                className:"register",
                borderRadius:0,
                height:"38px",
                width:"150px",
              }}
                onClick={handleRegister}
              >
                REGISTER{' '}
              </button>
            </div>
            <p
              style={{
                color: '#767677',
                marginTop:"10px",
                marginRight:"1000px",
                fontSize: '16',
                fontFamily: 'AdineuePRO, Helvetica, Arial, sans-serif',
              }}
            >
              OR
            </p>
            <div   width={"500px"}  >
            <div style={{marginTop:"10px"}} >
                {/* <div className='google-box'> */}
                <GoogleLogin
                  clientId="183711882186-6kc3gqcn2clsoipt9svo6omjk81no3p5.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                  buttonText="Sign up with Google"
                  className="login-with-google"
                  icon={true}
                  onSuccess={responseGoogleRegister}
                  onFailure={responseGoogleRegister}
                />
                 </div>
                {/* </div> */}
            </div>
    </div>
  )
}