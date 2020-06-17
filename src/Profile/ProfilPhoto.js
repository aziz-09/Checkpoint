import React from 'react'
import myImage from "../img1.png"
import "./photo.css"

 function ProfilPhoto() {
    return (
        <div className ="photo"> 
        <img className=" photo1" src={myImage} width="50px" />
        </div>
    );
}
export default ProfilPhoto;