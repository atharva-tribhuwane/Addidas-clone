
 import './payment.css'
import React, { useState } from 'react'
import { useEffect } from 'react';

export const Payment = () => {



    const[topHeader,setTopHeader]=useState([
        "FREE DELIVERY FOR ALL ORDERS NOW",
        "FREE RETURNS",
        "SIGN UP & GET 15% OFF"
    ]);


    let [show,setShow]=useState(true);
    let [codS,setCodS]=useState(false);

    let [card,setCard]=useState({checked:true});
    let [cod,setCod]=useState({checked:false});



    let [cardNum,setCardNum]=useState("");
    let [cardNam,setCardNam]=useState("");
    let [monYear,setMonYear]=useState("");
    let [cvvDet,setCvvDet]=useState("");
    var correctchar = /^[A-Za-z]+$/;



        useEffect(()=>{
        },[show,cod])
    function topHeaderSlideShow() {

        // let topHeader = document.getElementById("topHeader");

        let arrayLines = [
            "FREE DELIVERY FOR ALL ORDERS NOW",
            "FREE RETURNS",
            "SIGN UP & GET 15% OFF"
        ];

        let x = window.matchMedia("(max-width: 960px)")

        function showTextInHeader(x) {

            if (x.matches) {
                setTopHeader([arrayLines[0]])
                let c = 0;

                setInterval(function () {
                    if (c == arrayLines.length) {
                        c = 0;
                    }
                    setTopHeader([arrayLines[c]])
                    c++;

                }, 3000);
            }
        }
        showTextInHeader(x)
        // x.addListener(showTextInHeader)
        }

        React.useEffect(()=>{
            topHeaderSlideShow();
        },[])
        

        // let cod = document.getElementById("codBtn");
        // let card = document.getElementById("cardBtn");
        // let cardDetails = document.getElementById("showCCOption");
        // let newCardDet = cardDetails.innerHTML;
        // let cardBox = document.getElementById("creditOptionBox");

        // function selectCod(){
        //     console.log("Working for cod");
        //     console.log(cardDetails.innerHTML);
        //     cardDetails.innerHTML = null;
        //     cardBox.style.height = "10%";
        // }

        // function showCredit(){
        //     console.log("Working for card");
        //     console.log(newCardDet);
        //     cardDetails.innerHTML = newCardDet;
        //     cardBox.style.height = "75%";
        // }

        function checkNumbers(input, specialVal){
            let inputNum = input;
            let flag = true;

            for(let i = 0; i < inputNum.length; i++){
                if((inputNum[i] == "0") || (inputNum[i] == "1") || (inputNum[i] == "2") || (inputNum[i] == "3")
                || (inputNum[i] == "4") || (inputNum[i] == "5") || (inputNum[i] == "6") || (inputNum[i] == "7")
                || (inputNum[i] == "8") || (inputNum[i] == "9") || (inputNum[i] == specialVal)){
                    continue;
                }
                else{
                    flag = false;
                    break;
                }
            }
            return flag;
        }

        function checkSlash(val){
            let count = 0;
            for(let i = 0; i < val.length; i++){
                if(val[i] == "/"){
                    count++;
                }
            }
            if(count == 1){
                return true;
            }
            else if(count == 0 || count >= 2){
                console.log(count);
                return false;
            }
        }

        function checkChar(val){
            let correctchar = /^[A-Za-z]+$/; 
            let charCount = 0;
            let spaceCount = 0;

            for(let i = 0; i < val.length; i++){
                if(val[i].match(correctchar)){
                    charCount++;
                }
                if(val[i] == " "){
                    spaceCount++;
                }
            }

            if((charCount != 0 && spaceCount != 0) || (charCount != 0 && spaceCount == 0)){
                return true;
            }
            else if(charCount == 0 && spaceCount != 0){
                return false;
            }
        }




        //payment check

        function payment() {
            if(cod.checked){ 
                let interval = setTimeout(function () {
                alert("Your order has been placed succesfully. Happy Shopping!");
                window.location.href = "google.com";
                }, 2000);
            }

            if(card.checked){

                if (cardNum == "" || cardNam == "" || monYear == "" || cvvDet == "") {
                    alert("Please fill in all the details");
                }
                
                else if(cardNum.length != 16){
                    alert("Enter valid 16 digit Card Number");
                }
                
                else if(checkNumbers(cardNum, " ") == false){
                    alert("Enter valid Card number with numbers and spaces");
                }

                else if(checkChar(cardNam) == false){
                    alert("Enter valid name");
                }

                else if(monYear.length != 5){
                    alert("Enter valid 4 digit Expiry Date");
                }

                else if(checkNumbers(monYear, "/") == false){
                    alert("Enter valid Expiry Date");
                }

                else if(checkSlash(monYear) == false){
                    alert("Enter valid Expiry Date");
                }

                else if(cvvDet.length != 3){
                    alert("Enter three digit CVV number");
                }

                else{    
                    let interval = setTimeout(function () {
                        alert("Your order has been placed succesfully. Happy Shopping!");
                        window.location.href = "google.com";
                    }, 2000);
                }

            }

        }






        const cashon_delivery=()=>{
            setCodS(true) ;
            setShow(false);
        }




  return (
    <>


{/* <div id="topHeader">
        <div>FREE DELIVERY FOR ALL ORDERS NOW</div>
        <div>FREE RETURNS</div>
        <div>SIGN UP & GET 15% OFF</div>
    </div> */}

    {topHeader?.map((ele)=>(<div id="topHeader"><div>{ele}</div></div>))}
    

    <div id="header">
        <a href="adidas_home_page.html">
            <img class="adidasLogo" src="https://www.adidas.co.in/glass/react/16d1049/assets/img/icon-adidas-logo.svg" alt=""/>
        </a>
        <div id="rightSideBox">
            <button>sign up</button>
            <button>log in</button>
            <p>
                <a href="Newcart.html"><i class="material-icons">shopping_bag</i></a>
            </p>
        </div>
    </div>

    <div id="container">

        <div id="leftBox">
            <div id="paymentHeading">PAYMENT METHOD</div>
            <div class="subHead">All transactions are safe and secure</div>
            <hr/>

            <div id="cardDetails">

            <div id="creditOptionBox">
                    <input      onChange={(prev)=>{setCodS(false) ; setShow(true);setCard({checked:true});setCod({checked:false})}}  type="radio" id="cardBtn" class="creditcardBtn" name="payment" value="creditCard" checked/>
                    <label for="creditCard" class="creditCardOption">Credit/Debit Card</label>
                    { show?<div id="showCCOption">
                        <input type="text" id="cardNumber"  onChange={(e)=>setCardNum(e.target.value)} placeholder="Card Number"/>
                        <input type="text" id="cardName" onChange={(e)=>setCardNam(e.target.value)} placeholder="Name On Card"/>
                        <input type="text" id="cardDate" onChange={(e)=>setMonYear(e.target.value)} placeholder="MM / YY"/>
                        <input type="number" id="cvv" onChange={(e)=>setCvvDet(e.target.value)} placeholder="CVV"/>
                    </div>:"" }
                </div>

                <div class="codOptionBox">
                    <input    onChange={()=>{cashon_delivery();setCard({checked:true});setCod({checked:false})}}   type="radio" id="codBtn" name="payment" value="cod"/>
                    <label for="cod" class="creditCardOption">Cash on Delivery</label>

                    {codS?<p>some text</p>:""}
                    <button id="submitBtn" onClick={()=>{payment();}}>PLACE ORDER</button>
                </div>

            </div>

        </div>

        <div id="rightBox">

            <div id="orderSummary">
                <div class="orderHeading">ORDER SUMMARY</div>

                <table id="orderSummeryTable">
                    <tr>
                        <td id="item" class="orderSumStyle"></td>
                        <td id="totalPrice1" class="orderSumStyle"></td>
                    </tr>
                    <tr>
                        <td class="orderSumStyle">DELIVERY</td>
                        <td id="delivery" class="orderSumStyle"></td>
                    </tr>
                    <tr>
                        <td class="orderSumStyle"> <strong>TOTAL</strong><br/>(Inclusive of all taxes)</td>
                        <td id="totalPrice2"></td>
                    </tr>
                </table>
            </div>
            <div id="orderDetails">
                <div class="orderHeading, orderHeadingDetails">ORDER DETAILS</div>
                <div id="display"></div>
                <div id="displayShippingDetails"></div>
                <div class="extraDetails">
                    <h3>DELIVERY OPTION</h3>
                    <div class="deliveryConstants">
                        <p>Standard Delivery</p>
                        <p>within 3-9 Business Days</p>
                        <p>FREE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div id="footer">
            <p>India</p>
            <p id="f-2-p">Privacy Policy &nbsp; &nbsp; | &nbsp; &nbsp; Terms and Conditions &nbsp; &nbsp; | &nbsp; &nbsp; Cookies</p>
            <p>© 2021 adidas India Marketing Pvt Ltd</p>
        </div>
    </footer>    
    </>
  )
}

export default Payment;
