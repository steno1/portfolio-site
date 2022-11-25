import "./headerSocial.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { FaDribbble } from 'react-icons/fa';
const HeaderSocial=()=>{
    return(
        <div className="headerSocial">
            <a href="https://linkedin.com" target="_blank"><LinkedInIcon/></a>
            <a href="https://github.com" target="_blank"><GitHubIcon/></a>
            <a href="https://dribbble.com" target="_blank"><FaDribbble/></a>
        </div>
    )
}
export default HeaderSocial;