
import React from 'react'

// import './Login.css'

import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';

import { Input } from '@mui/material';

import { MdCheck } from "react-icons/md"

import { gapi } from 'gapi-script'

import FacebookLogin from 'react-facebook-login'

import GoogleLogin from 'react-google-login'

import { ImCross } from "react-icons/im"

import { FaFacebook } from 'react-icons/fa'

import { BsArrowRight } from "react-icons/bs"

import { useNavigate } from 'react-router-dom'



export const Login = () => {

  const [emailLogin, setEmailLogin] = React.useState('')

  const [passwordLogin, setPasswordLogin] = React.useState('')

  // const { setUser } = React.useContext(LoginContext)

  const [cross, setCross] = React.useState(false)

  const navigate = useNavigate()

  const responseGoogleLogin = async (res) => {

    console.log(res)

    let body = {

      email: res.profileObj.email,

      password: res.profileObj.googleId,

    }

    try {

      let data = await fetch('https://backend-gamma-vert.vercel.app/log', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(body),

      })

      let response = await data.json()

      console.log(response)

      if (response.message) {

        alert(response.message)

      } else {

        let token = response.token

        localStorage.setItem('token', token)

        // setUser(token)

        alert('User logged in successfully');
        navigate("/");

      }

    } catch (error) {

      console.log(error)

    }

  }

  const handleLogin = async (e) => {

    e.preventDefault()

    const body = {

      email: emailLogin,

      password: passwordLogin,

    }

    for (let i in body) {

      if (body[i] == "") {

        alert("Enter valid Details")

        return

      }

    }

    // console.log(body)

    try {

      let data = await fetch('https://backend-gamma-vert.vercel.app/log', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(body),

      })

      let response = await data.json()

      console.log(response)

      if (response.error) {

        alert(response.error)

      } else {

        let token = response.token

        localStorage.setItem('token', token)

        // setUser(token)

        alert('User logged in successfully')

      }

      setEmailLogin("")

      setPasswordLogin("")

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

    <div className='bg-model'>

      <div className='container'>

        <div style={{ width: "430px", margin: "auto" }}>

          <div style={{ display: "flex", justifyContent: "space-between" }}>

            <p style={{

              textAlign: 'left',

              fontWeight: "bold",

              color: "000000",

              fontSize: "30px",

              margin: "0px",

              fontFamily: 'AdineuePRO, Helvetica, Arial, sans-serif'

            }}

            >

              ENJOY ADICLUB BENEFITS WHEN YOU LOG IN

            </p>

            <ImCross />

          </div>

          <div style={{ display: "flex", width: "210px", justifyContent: "space-between" }}>

            <MdCheck style={{ fontSize: "24px", marginTop: "10px" }} />

            <p style={{ marginBottom: "5px", fontSize: "16px", fontFamily: "AdineuePRO, Helvetica, Arial, sans-serif" }}> Unlock discount voucher</p>

          </div>

          <div style={{ display: "flex", width: "160px", justifyContent: "space-between" }}>

            <MdCheck style={{ fontSize: "24px", marginTop: "10px" }} />

            <p style={{ marginBottom: "3px", fontSize: "16px", fontFamily: "AdineuePRO, Helvetica, Arial, sans-serif" }}> Get free shipping</p>

          </div>

          <div style={{ display: "flex", width: "280px", justifyContent: "space-between" }}>

            <MdCheck style={{ fontSize: "24px", marginTop: "10px" }} />

            <p style={{ marginBottom: "5px", fontSize: "16px", fontFamily: "AdineuePRO, Helvetica, Arial, sans-serif" }}> Gain access to exclusive products</p>

          </div>

          <p style={{ fontSize: "18px", textAlign: "left", marginTop: "15px", color: "000000", fontFamily: "AdineuePRO, Helvetica, Arial, sans-serif", fontWeight: "700" }}>LOG IN</p>

          <p style={{ fontSize: "16px", color: "000000", textAlign: "left", fontFamily: "AdineuePRO, Helvetica, Arial, sans-serif" }}>Let's check if you already have an account</p>

          <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "start" }}>

            <TextField

              label="Email*"

              value={emailLogin}

            type={"email"}

            onChange={(e) => {

              setEmailLogin(e.target.value)

            }}

// color={767677}

            fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}

            placeholder="Email *"

            size="lg"

            id="outlined-size-small"

            defaultValue="Email*"

// marginbottom={'100px'}

/></div>

          <div

            style={{

              // marginTop:"4px",

              display: 'flex',

              justifyContent: 'space-between',

              // width: 970,

            }}

          >

            <button style={{

              backgroundColor: 'black',

              marginTop: "20px",

              marginBottom: "20px",

              color: '#ffffff',

              textAlign: "left",

              fontFamily: 'AdineuePRO, Helvetica, Arial, sans-serif',

              className: "register",

              borderRadius: 0,

              height: "40px",

              fontSize: "16px",

              width: "100%",

              fontWeight: "600px"

            }}

              onClick={handleLogin}

            >

              CONTINUE{' '}

              {/* <BsArrowRight style={{marginLeft:"300px", width:"0px"}}/> */}

            </button>

          </div>

          <div width={"500px"} >

            <div style={{ marginTop: "10px" }} >

              {/* <div className='google-box'> */}

              <GoogleLogin

                clientId="183711882186-6kc3gqcn2clsoipt9svo6omjk81no3p5.apps.googleusercontent.com" //CLIENTID NOT CREATED YET

                buttonText="Sign in with Google"

                className="login-with-google"

                icon={true}

                onSuccess={responseGoogleLogin}

                onFailure={responseGoogleLogin}

              />

            </div>

            {/* </div> */}

          </div>

        </div>

      </div>

    </div>

  )

}