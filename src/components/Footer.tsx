import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:chiragbellara7@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://www.linkedin.com/in/chiragbellara/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://github.com/chiragbellara" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p>A portfolio built by Chirag Bellara with 💜</p>
    </footer>
  );
}

export default Footer;