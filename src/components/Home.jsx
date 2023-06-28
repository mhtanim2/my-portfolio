import { animate, motion } from "framer-motion";
import React, { useRef } from "react";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import me from "../assets/logo.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, This is <br /> Mehrab Hasan Tanim
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                "MongoDb",
                "Express",
                "React",
                "Web Application Developer",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:mhtanim2@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )
            </p>
            <span>Clients</span>
          </article>

          <aside>
            <article>
              <p>
                +
                (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    10
                  </motion.span>
                )
              </p>
              <span>Projects</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>mhtanim2@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Mehrab" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
