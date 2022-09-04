import React from 'react'
import './Sign.css'
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
export const Sign = () => {
  // const [show, setShow] = React.useState(false)
  // const handleClick = () => setShow(!show)
  const { setUser } = React.useContext(LoginContext)
  const [emailRegister, setEmailRegister] = React.useState('')
  const [passwordRegister, setPasswordRegister] = React.useState('')
  // const [nameRegister, setNameRegister] = React.useState('')
  const navigate = useNavigate()
  const [checkedItems1, setCheckedItems1] = React.useState([false, false])
  const Checked1 = checkedItems1.every(Boolean)
  const isIndeterminate1 = checkedItems1.some(Boolean) && !Checked1
  const [checkedItems2, setCheckedItems2] = React.useState([false, false])
  const Checked2 = checkedItems2.every(Boolean)
  const isIndeterminate2 = checkedItems2.some(Boolean) && !Checked2
  const [checkedItems3, setCheckedItems3] = React.useState([false, false])
  const Checked3 = checkedItems3.every(Boolean)
  const isIndeterminate3 = checkedItems3.some(Boolean) && !Checked3
  const responseFacebookRegister = (response) => {
    console.log(response)
  }
  const responseGoogleRegister = async (res) => {
    console.log(res)
    let user = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
    }
    try {
      let data = await fetch('http://localhost:8080/createUser', {
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
    <Popover>
      <PopoverTrigger>
        <Button>Sign-up</Button>
      </PopoverTrigger>
      <PopoverContent width={780}>
        {/* <PopoverArrow /> */}
        <PopoverCloseButton />
        <PopoverHeader
          textAlign={'left'}
          fontWeight={"700"}
          color="000000"
          fontSize={30}
          fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
        >
         CREATE YOUR ACCOUNT
        </PopoverHeader>
          <PopoverBody textAlign={'left'}>
            <p style={{ paddingBottom: 20 }}>
              {' '}
              Sign up now and get 15% off your first order.
            </p>
            {/* <Input
            type={"text"}
              onChange={(e) => {
                setNameRegister(e.target.value)
              }}
              color={767677}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              placeholder="Name *"
              size="lg"
            /> */}
            {/* <br /> */}
            <Input
              value={emailRegister}
              type={"email"}
              onChange={(e) => {
                setEmailRegister(e.target.value)
              }}
              color={767677}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              placeholder="Email *"
              size="lg"
            />
            <Input
              color={'#767677'}
              type={"password"}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              marginTop={7}
              value={passwordRegister}
              onChange={(e) => {
                setPasswordRegister(e.target.value)
              }}
              placeholder="Password *"
              size="lg"
            />
              <p style={{marginLeft:"18px",fontFamily:'AdineuePRO, Helvetica, Arial, sans-serif', fontSize:"14px"}} >Minimum 8 Characters</p>
            <br />
            {/* <br /> */}
            <Checkbox
              isChecked={Checked1}
              color="000"
              fontSize={26}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              isIndeterminate={isIndeterminate1}
              onChange={(e) =>
                setCheckedItems1([e.target.checked, e.target.checked])
              }
            >
              <p style={{fontSize:"16px", color:"000000"}}>Yes, I am over 18 years old *</p>
            </Checkbox>
            <br />
            <br/>
            <Checkbox
              isChecked={Checked2}
              color="000000"
              fontSize={16}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              isIndeterminate={isIndeterminate2}
              onChange={(e) =>
                setCheckedItems2([e.target.checked, e.target.checked])
              }
            >
              <p style={{fontSize:"16px"}}>I would like to stay up to date with addidas. I agree to recieve
              personalised email marketing messages from adidas India Marketing
              Pvt. Ltd.</p>
            </Checkbox>
            <br />
            <br/>
            <Checkbox
              isChecked={Checked3}
              color="000000"
              fontSize={16}
              fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
              isIndeterminate={isIndeterminate3}
              onChange={(e) =>
                setCheckedItems3([e.target.checked, e.target.checked])
              }
            >
              <p style={{fontSize:"16px"}}>I have read and accepted the Terms & Conditions, the adiClub Terms
              & Conditions and the adidas Privacy Policy. *</p>
            </Checkbox>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                // width: 970,
              }}
            >
              <Button
                onClick={handleRegister}
                backgroundColor={'black'}
                marginTop={5}
                color={'#FFFFFF'}
                fontFamily={'AdineuePRO, Helvetica, Arial, sans-serif'}
                className="register"
                borderRadius={0}
                height={38}
                width={150}
              >
                REGISTER{' '}
              </Button>
            </div>
            <p
              style={{
                color: '#767677',
                marginTop:"10px",
                marginLeft:"10px",
                fontSize: '16',
                fontFamily: 'AdineuePRO, Helvetica, Arial, sans-serif',
              }}
            >
              OR
            </p>
            <Box   width={"500px"}  >
            <Box marginTop={"10px"} >
                {/* <div className='google-box'> */}
                <GoogleLogin
                  clientId="183711882186-6kc3gqcn2clsoipt9svo6omjk81no3p5.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                  buttonText="Sign up with Google"
                  className="login-with-google"
                  icon={true}
                  onSuccess={responseGoogleRegister}
                  onFailure={responseGoogleRegister}
                />
                 </Box>
                {/* </div> */}
              <Box   marginTop={"10px"} className="login-with-facebook">
                <FaFacebook color="blue" size={22} />
                <FacebookLogin
                  appId="358532346452010" //APP ID NOT CREATED YET
                  fields="name,email,picture"
                  textButton="Sign up with Facebook"
                  cssClass=""
                  callback={responseFacebookRegister}
                />
              </Box>
            </Box>
          </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}





