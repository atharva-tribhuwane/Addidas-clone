import React from 'react'
// import './Sign.css'
import {MdCheck} from "react-icons/md"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  InputGroup,
  Checkbox,
  Box,
  useDisclosure,
  // show,
  InputRightElement,
} from '@chakra-ui/react'
import { gapi } from 'gapi-script'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { Input } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext'

export const Login = () => {
  
  
  const [emailLogin, setEmailLogin] = React.useState('')
  const [passwordLogin, setPasswordLogin] = React.useState('')
  const { setUser } = React.useContext(LoginContext)
 
  const navigate = useNavigate()
   const responseFacebookLogin = (response) => {
    console.log(response)
  }

  const responseGoogleLogin = async(res) => {
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
      if(response.message){
        alert(response.message)
      }else{
      let token = response.token
      localStorage.setItem('token', token)
      setUser(token)
      alert('User logged in successfully')
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
    for( let i in body){
      if(body[i]==""){
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
     
      if(response.error){
        alert(response.error)
      }else{
      let token = response.token
      localStorage.setItem('token', token)
      setUser(token)
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
    <Popover>
      <PopoverTrigger>
        <Button>Login</Button>
      </PopoverTrigger>
      <PopoverContent width={450}>
        {/* <PopoverArrow /> */}
        <PopoverCloseButton />
        <PopoverHeader
          textAlign={'left'}
          fontWeight="600"
          color="000000"
          fontSize={30}
          fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
        >
          ENJOY ADICLUB BENEFITS WHEN YOU LOG IN
        </PopoverHeader>
        
          <PopoverBody textAlign={'left'}>
          
            <div style={{display:"flex",width:"210px", justifyContent:"space-between"}}>
            <MdCheck style={{fontSize:"24px" }} />
            <p style={{marginBottom:"5px",fontSize:"16px",fontFamily:"AdineuePRO, Helvetica, Arial, sans-serif"}}> Unlock discount voucher</p>
            </div>

            <div style={{display:"flex",width:"160px", justifyContent:"space-between"}}>
            <MdCheck style={{fontSize:"24px" }} />
            <p style={{marginBottom:"5px",fontSize:"16px",fontFamily:"AdineuePRO, Helvetica, Arial, sans-serif"}}> Get free shipping</p>
            </div>

            <div style={{display:"flex",width:"280px", justifyContent:"space-between"}}>
            <MdCheck style={{fontSize:"24px" }} />
            <p style={{marginBottom:"5px",fontSize:"16px",fontFamily:"AdineuePRO, Helvetica, Arial, sans-serif"}}> Gain access to exclusive products</p>
            </div>
            
             
              
              
              <p style={{fontSize:"18px", marginTop:"15px", color:"000000", fontFamily:"AdineuePRO, Helvetica, Arial, sans-serif", fontWeight:"700"}}>LOG IN</p>
              <p style={{fontSize:"16px", color:"000000", fontFamily:"AdineuePRO, Helvetica, Arial, sans-serif"}}>Let's check if you already have an account</p>
           
            <Input
              value={emailLogin}
              type={"email"}
              onChange={(e) => {
                setEmailLogin(e.target.value)
              }}
              color={767677}
              marginTop="10px"
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              placeholder="Email *"
              size="lg"
            />

            <Input
              color={'#767677'}
              type={"password"}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              marginTop={7}
              value={passwordLogin}
              onChange={(e) => {
                setPasswordLogin(e.target.value)
              }}
              placeholder="Password *"
              size="lg"
            />

            <br />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                
              }}
            >
              <Button
                onClick={handleLogin}
                backgroundColor={'black'}
                marginTop={5}
                color={'#ffffff'}
                textAlign={"left"}
                fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
                className="register"
                borderRadius={0}
                height={38}
                width={600}
              >
                CONTINUE{' '}
              </Button>

              {/* <Button
                backgroundColor={'black'}
                marginTop={5}
                color={'#ffffff'}
                fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
                className="alreadyAccount"
                borderRadius={0}
                height={38}
                width={250}
                onClick={() => {
                  setLoginPopup(!loginPopup)
                }}
              >
                Create An Account
              </Button> */}
            </div>

            {/* <p
              style={{
                marginLeft: 380,
                color: '#767677',
                fontSize: '16',
                fontFamily: 'AdineuePRO, Helvetica, Arial, sans-serif',
              }}
            >
              OR
            </p> */}

            <Box >
            <Box marginTop={'10px'}>
                {/* <div className='google-box'> */}
                <GoogleLogin
                  clientId="183711882186-6kc3gqcn2clsoipt9svo6omjk81no3p5.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                  buttonText="Sign in with Google"
                  className="login-with-google"
                  icon={true}
                  onSuccess={responseGoogleLogin}
                  onFailure={responseGoogleLogin}
                />
                {/* </div> */}
              </Box>
              <Box marginTop={'10px'} className="login-with-facebook">
                <FaFacebook color="blue" size={22} />
                <FacebookLogin
                  appId="358532346452010" //APP ID NOT CREATED YET
                  fields="name,email,picture"
                  textButton="Sign in with Facebook"
                  cssClass=""
                  callback={responseFacebookLogin}
                />
              </Box>
             
            </Box>
          </PopoverBody>
        ) 

    
      </PopoverContent>
    </Popover>
  )
}
