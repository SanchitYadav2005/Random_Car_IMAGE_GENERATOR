import React from "react";
import Data from "../CarData"


function Main(){

    // here all are my hooks . for getting and setting the useState.
    const [carName, setCarName] = React.useState("");
    const [carOrigin, setCarOrigin] = React.useState("")
    const [cylenders, setCylenders] = React.useState("")
    const [horsePower, setHorsePower] = React.useState("")
    const [year, setYear] = React.useState("")


    let carInfoArray // seted an outside variable for using it in every function.
    function getCarInfo() {
        function getCarName(){
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setCarName(Data[randomNum].Name)
        }
        getCarName();


        function getCarCylenders(){
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setCylenders(Data[randomNum].Cylinders)
        }
        getCarCylenders();

        function getHorsePower(){
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setHorsePower(Data[randomNum].Horsepower)
        }
        getHorsePower()

        function getYear(){
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setYear(Data[randomNum].Year)
        }
        getYear()            

        function getCarOrigin(){
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setCarOrigin(Data[randomNum].Origin)
        }
        getCarOrigin();


        
        
    }
    return(
        // here is my jsx.
        <div className="container">
            <blockquote>Car Name: {carName}</blockquote>
            <blockquote>Cylenders: {cylenders}</blockquote>
            <blockquote>Origin: {carOrigin}</blockquote>
            <blockquote>Horse Power: {horsePower}</blockquote>
            <blockquote>Year: {year}</blockquote>
            <button className="btn" onClick={getCarInfo}>Click to get another</button>
        </div>
    )
}


export default Main;