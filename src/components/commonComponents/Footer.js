import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="logo">
        <img src="/images/movie-bucket-logo.png" alt="movie-bucket" />
      </div>
      <div className="address">The Last Stop For Your Movie Search </div>
      <div className="footer-icons">
        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/arun-saharan-512461258/"
        >
          <LinkedInIcon style={{ color: "#fff" }} />
        </a>
        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/arun.social.fb/"
        >
          <FacebookIcon style={{ color: "#fff" }} />
        </a>
        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/arun.social.ig"
        >
          <InstagramIcon style={{ color: "#fff" }} />
        </a>
        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://mail.google.com/"
        >
          <EmailIcon style={{ color: "#fff" }} />
        </a>
        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Arunsaharan"
        >
          <GitHubIcon style={{ color: "#fff" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
