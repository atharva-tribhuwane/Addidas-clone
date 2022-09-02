import React from 'react'
import {Product} from "./Product";
import "./css/Products.css";
import  Filterandsort  from './Filterandsort';
export const Products = () => {
    const [Data,setData] = React.useState("");
    const [loading,setLoading] = React.useState(true);
    const [sport, setSport] = React.useState("");
    const [filteredData, setFilteredData] = React.useState("")
    const handleoptionChange = (event) => {
        if(event.target.checked){
            let temp = event.target.value;
            console.log("temp",temp)

            setSport(temp);
            console.log("appliedfilters",sport);
            let result = [];
            result = Data.filter((el)=>{
                return el.sub_cat === "Running"
            })
            console.log("result",result);
            setFilteredData(result);
        }
        else{
            setFilteredData(Data);
        }
    };
    async function getData() {
        setLoading(true);
        let res = await fetch("https://backend-gamma-vert.vercel.app/pro");
        let data = await res.json();
        data = data.slice(2);
        setData(data);
        setFilteredData(data);
        console.log("data",filteredData);
        setLoading(false);
    }
    React.useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div>
                <Filterandsort handleoptionChange={handleoptionChange}></Filterandsort>
            </div>
            <div className="at-productsgrid">
                {
                    loading?<div>Loading..... Please Wait</div>:
                    filteredData.map((el) => {
                        return(
                            <div key={el.id}>
                                <Product prop={el}></Product>
                            </div>
                        )
                    })
                }
            </div>
                <div>Footer</div>
        </div>
    )
}
