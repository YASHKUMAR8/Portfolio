import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/YASHKUMAR8"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/yash-kumar-224581223/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="mailto:yashkumar82002@gmail.com"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <MdEmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
