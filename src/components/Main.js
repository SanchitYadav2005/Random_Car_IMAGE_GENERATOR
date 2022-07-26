import React from "react";
import Data from "../CarData"


function Main() {

    // here all are my hooks . for getting and setting the useState.
    const [carName, setCarName] = React.useState("");
    const [carOrigin, setCarOrigin] = React.useState("")
    const [cylenders, setCylenders] = React.useState("")
    const [horsePower, setHorsePower] = React.useState("")
    const [year, setYear] = React.useState("")


    let carInfoArray // seted an outside variable for using it in every function.
    function getCarInfo() {
        function getCarName() {
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setCarName(Data[randomNum].Name)
        }
        getCarName();


        function getCarCylenders() {
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setCylenders(Data[randomNum].Cylinders)
        }
        getCarCylenders();

        function getHorsePower() {
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setHorsePower(Data[randomNum].Horsepower)
        }
        getHorsePower()

        function getYear() {
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setYear(Data[randomNum].Year)
        }
        getYear()

        function getCarOrigin() {
            carInfoArray = Data;
            const randomNum = Math.floor(Math.random() * carInfoArray.length)
            setCarOrigin(Data[randomNum].Origin)
        }
        getCarOrigin();




    }
    return (
        // here is my jsx.
        <main>
            <div className="container">
                <div className="container__text">
                    <blockquote>Car Name: <span>{carName}</span></blockquote>
                    <blockquote>Cylenders: <span>{cylenders}</span></blockquote>
                    <blockquote>Origin: <span>{carOrigin}</span></blockquote>
                    <blockquote>Horse Power: <span>{horsePower}</span></blockquote>
                    <blockquote>Year: <span>{year}</span></blockquote>
                </div>
            </div>
            <button className="btn" onClick={getCarInfo}>Click to get another</button>
        </main>
    )
}


export default Main;