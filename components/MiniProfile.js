/** @format */
import React from "react";
import styles from "../styles/Home.module.css";

function MiniProfile() {
  return (
    <div className={styles.profileDiv}>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQFOfPu93n6Kxw/profile-displayphoto-shrink_200_200/0/1632301101571?e=1648080000&v=beta&t=s1cIHzGanUx7AIMBOlWiB4pzrrkfwOb1pqFc3mW2lts"
        alt=""
        className={styles.profileImg}
      />
      <div className={styles.profile}>
        <p className={styles.p}>Oladipupo akorede</p>
        <span className={styles.span}>welcome to Instagram</span>
      </div>
      <button className={styles.signOutBtn}>Sign Out</button>
    </div>
  );
}

export default MiniProfile;
