import React from "react";
import Data from "../CarData"


function Main(){
    const [carName, setCarName] = React.useState("");
    const [carOrigin, setCarOrigin] = React.useState("")
    let carInfoArray
    function getCarInfo() {
        function getCarName(){
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setCarName(Data[randomNum].Name)
        }
        getCarName();


        function getCarOrigin(){
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setCarOrigin(Data[randomNum].Origin)
        }
        getCarOrigin();

        
    }
    return(
        <div className="container">
            <h1>{carName}</h1>
            <h2>{carOrigin}</h2>
            <button className="btn" onClick={getCarInfo}>Click to get another</button>
        </div>
    )
}


export default Main;