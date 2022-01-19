/** @format */
import React from "react";
import styles from "../styles/Home.module.css";

function Story({ userImg, username }) {
  return (
    <div className="">
      <img className={styles.storyImage} src={userImg} alt="" />
      <p className={styles.storyUserName}>{username}</p>
    </div>
  );
}

export default Story;
