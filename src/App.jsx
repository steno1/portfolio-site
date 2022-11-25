import React from "react";
import Header from "./components/header/Header.jsx"
import About from "./components/about/About.jsx"
import Experience from "./components/experience/Experience.jsx";
import Testimonial from "./components/testimonials/Testimonial.jsx";
import Contact from "./components/contact/Contact.jsx";
import Service from "./components/service/Service.jsx";
import Nav from "./components/nav/Nav.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.css"
const App=()=>{
return(
    <>
<Header/>
<Nav/>
<About/>
<Experience/>
<Service/>
<Testimonial/>
<Contact/>
<Footer/>


    </>
)
}
export default App;