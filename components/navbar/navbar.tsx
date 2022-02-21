import React, { ReactElement , useRef } from "react";
import LoginButton from "../loginButton/loginButton";
import { user } from "@/mock/media.mock";
import { List } from "phosphor-react";
import styles from "./navbar.module.scss";

const Navbar = (): ReactElement => {

  const navbarRef = useRef<HTMLDivElement>(null);

  if (typeof window !== "undefined") {

      let previousPosition = window.pageYOffset;
      window.onscroll = function () {
      let currentPosition = window.pageYOffset;
      if (previousPosition > currentPosition) {
        navbarRef.current!.style.position= "fixed";
        navbarRef.current!.style.animation = "showOnScroll 3s ease-in-out 2";
        
        

      } else {
        navbarRef.current!.style.position= "relative";
        navbarRef.current!.style.animation = "showOnScroll 3s ease-in-out infinite";
        console.log(navbarRef.current!.style)
      }
      previousPosition = currentPosition;
    };
  }

  return (
    <div ref={navbarRef} className={styles.navbar}>
      <div className={styles.navbar__profile}>
        <figure>
          <img
            src={user.profile}
            className={styles.navbar__profile_image}
            alt="user profile picture"
          />
        </figure>
        <div className={styles.navbar__profile_name}>
          <p>Samy Halim</p>
        </div>
      </div>

      <div className={styles.navbar__links_container}>
        <ul className={styles.navbar__links}>
          <li className={styles.navbar__link}>Latest Drop</li>
          <li className={styles.navbar__link}>Auctions</li>
          <li className={styles.navbar__link}>Marketplace</li>
        </ul>
      </div>

      <div className={styles.navbar__mobile}>
        <p>Menu</p>
        <List size={22} />
      </div>

      <div className={styles.navbar__button}>
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
