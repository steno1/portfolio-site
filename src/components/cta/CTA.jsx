import Title from "../../Assets/Title.pdf"
const CTA=()=>{
    return(
        <div className="cta">
<a href={Title} download className="btn">Download CV</a>
<a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
    )
}
export default CTA;