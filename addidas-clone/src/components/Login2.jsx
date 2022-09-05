// import React, { useEffect, useState } from "react";
// import styles from "./Login.module.css";
// // import Reward from "./Rewards/Reward";
// import { useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { authActions } from "../../Store/index";
// function Login() {
//     //   const navigate = useNavigate();
//     //   const dispatch = useDispatch();
//     // useEffect(()=>{

//     //   if(JSON.parse(localStorage.getItem("email"))){

//     //   }
//     // })
//     //   const data = [
//     //     { name: "Nitin", email: "nitin@gmail.com", password: "12345678" },
//     //     { name: "Anmol", email: "anmol@gmail.com", password: "12345678" },
//     //   ];
//     //   const intialState = {
//     //     email: "",
//     //     password: "",
//     //     loggedIn: false,
//     //   };
//     //   const [user, setUser] = useState(intialState);

//     //   function changeHandler(e) {
//     //     const { name, value, checked } = e.target;

//     //     setUser({
//     //       ...user,
//     //       [name]: name === "loggedIn" ? checked : value,
//     //     });
//     //   }
//     //   const { email, password, loggedIn } = user;
//     //   function login(e) {
//     //     e.preventDefault();

//     //     const user_email = data.find((el, i) => el.email === email);
//     //     console.log(user_email);
//     //     if (!user_email) {
//     //       alert("User not found");
//     //       setUser(intialState);
//     //       return;
//     //     }
//     //     if (user_email.password !== password) {
//     //       alert("Wrong password");
//     //       setUser({ ...user, password: "" });
//     //       return;
//     //     }
//     // if (loggedIn) {
//     //   localStorage.setItem("email", user_email);
//     // }
//     // const user_detail = data.filter((el)=>el)

//     // dispatch(authActions.login(user_email.name));

//     // setUser(intialState);
//     // navigate("/");
// // }

// return (
//     <div className={styles.flex__login}>
//         <div className={styles.login}>
//             <div className={styles.heading}>LOG IN</div>
//             <div>
//                 <a className={styles.forget} href="#">
//                     Forgotten Your Password
//                 </a>
//             </div>
//             <form  className={styles.form}>
//                 <div>
//                     <input
//                         className={styles.input_name}
//                         type="email"
//                         placeholder="Email *"
//                         name="email"
//                         // value={email}
//                         // onChange={changeHandler}
//                         required
//                     />
//                 </div>
//                 <div>
//                     {" "}
//                     <input
//                         className={styles.input_name}
//                         type="password"
//                         placeholder="Password *"
//                         name="password"
//                         // value={password}
//                         // onChange={changeHandler}
//                         required
//                     />
//                 </div>
//                 <div>
//                     {" "}
//                     <label htmlFor="leggedIn">
//                         <input
//                             type="checkbox"
//                             // checked={loggedIn}
//                             name="loggedIn"
//                             id="loggedIn"
//                             // onChange={changeHandler}
//                         />
//                         Keep me Logged In. <a href="#">Read more.</a>{" "}
//                     </label>
//                     <div></div>
//                 </div>
//                 <div className={styles.button_container}>
//                     <div className={styles.button}>
//                         <button type="submit">LOG IN</button>
//                     </div>
//                 </div>
//             </form>{" "}
//         </div>{" "}
//         {/* <Reward /> */}
//     </div>
// );
// }

// export default Login;