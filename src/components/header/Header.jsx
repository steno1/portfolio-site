import React from "react"
import "./header.css"
import CTA from "../cta/CTA"
import Me from "../../Assets/Me.jpg"
import HeaderSocial from "../headerSocial/HeaderSocial"
const Header=()=>{
    return(
        <header>
            <div className="container header_container">
<h5>Hello I am</h5>
<h1>Onu Princeley Toochukwu</h1>
<h5 className="text-light">Full stack developer</h5>
<CTA className="cta"/>
<HeaderSocial className="headerSocials"/>
<div className="me">
    <img src={Me} alt="my_pics"/>

</div>
<a href="#contact" className="Scroll__down">Scroll down</a>
            </div>
        </header>
    )
}
export default Header;