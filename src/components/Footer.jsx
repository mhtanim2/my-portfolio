import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillProject,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/Photos.JPG";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder" />
        <h2>Mehrab Hasan Tanim</h2>
        <p>Thanks for visiting.</p>
      </div>
      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://github.com/mhtanim2" target={"blank"}>
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mehrab-hasan-tanim-b123301a6"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://leetcode.com/mhtanim2/" target={"blank"}>
            <AiFillProject />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
