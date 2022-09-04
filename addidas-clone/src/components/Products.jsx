import React from 'react'
import { Product } from "./Product";
import "./css/Products.css";
import Filterandsort from './Filterandsort';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
export const Products = () => {
    const [Data, setData] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [sport, setSport] = React.useState("");
    const [filteredData, setFilteredData] = React.useState("")
    const handleoptionChange = (event, param) => {
        // console.log("param is:",param)
        if (param === "sport") {
            if (event.target.checked) {
                let temp = event.target.value;
                console.log("temp", temp)

                setSport(temp);
                console.log("appliedfilters", sport);
                let result = [];
                result = Data.filter((el) => {
                    return el.sub_cat === event.target.value;
                })
                console.log("result", result);
                setFilteredData(result);
            }
            else {
                setFilteredData(Data);
            }
        }
        else if (param === "price") {
            if (event.target.checked) {
                let temp = event.target.value;
                console.log("temp", temp)

                setSport(temp);
                console.log("appliedfilters", sport);
                let result = [];
                if (temp === "lowtohigh") {
                    result = Data.sort((a, b) => {
                        return a.price - b.price;
                    })
                }
                else {
                    result = Data.sort((a, b) => {
                        return b.price - a.price;
                    })
                }

                console.log("result", result);
                setFilteredData(result);
            }
            else {
                setFilteredData(Data);
            }
        }

    };
    async function getData() {
        setLoading(true);
        let res = await fetch("https://backend-gamma-vert.vercel.app/pro");
        let data = await res.json();
        data = data.slice(2);
        setData(data);
        setFilteredData(data);
        console.log("data", filteredData);
        setLoading(false);
    }
    React.useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            {
                loading ?null: <p style={{color:"000000",fontFamily:"AdihausDIN, Helvetics, Arial,sans-serif", fontSize:"27px",textAlign:"left" ,fontStyle:"italic", fontWeight:"bold", width:"80%", margin:"auto",marginTop:"15px",marginBottom:"15px"}}>OUTLET</p>
            }
            
            
            <div style={{marginTop:"2%", marginBottom:"1%"}}>
                {
                    loading ?null:<Filterandsort handleoptionChange={handleoptionChange}></Filterandsort>
                }
            </div>
            <div className="at-productsgrid">
                {
                    loading ? <div style={{width:"1200px", margin:"auto"}}><CircularProgress style={{color:"black", fontSize:"20px", marginTop:"20%"}}/></div> :
                        filteredData.map((el) => {
                            return (
                                <div key={el.id}>
                                    <Product prop={el}></Product>
                                </div>
                            )
                        })
                }
                 {/* <div style={{border:"1px solid red", width:"1200px", margin:"auto"}}><CircularProgress style={{color:"black", fontSize:"20px", marginTop:"20%"}}/></div> */}
            </div>
            {
                loading ? null : <Stack spacing={2} style={{ width:"80%", margin:"auto", display:"flex", justifyContent:"center"}}>
                    <Pagination count={3} shape="rounded" style={{display:"flex", alignItems:"center", justifyContent:"center"}}/>
                </Stack>
            }


            {/* <div>Footer</div> */}
        </div>
    )
}
