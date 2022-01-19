/** @format */
import React from "react";
import styles from "../styles/Home.module.css";
import {
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
  DotsHorizontalIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ personImg, personName, messageImg, caption }) {
  return (
    <div className={styles.post}>
      {/* header div */}
      <div className={styles.post_header}>
        <img src={personImg} className={styles.personImg} alt="" />
        <p className={styles.personName}>{personName}</p>
        <DotsHorizontalIcon className="h-4" />
      </div>
      {/* messageImg */}
      <img src={messageImg} className={styles.messageImg} />
      {/* reactions icon */}
      <div className="flex items-center mt-4 mx-8 relative">
        <div className={styles.reactionsDiv}>
          <HeartIcon className="h-7 cursor-pointer mr-7" />
          <ChatIcon className="h-7 cursor-pointer mr-7" />
          <PaperAirplaneIcon className="h-7 cursor-pointer" />
        </div>
        <div className={styles.bookMark}>
          <BookmarkIcon className="h-7" />
        </div>
      </div>
      {/* caption div */}
      <div className={styles.captionDiv}>
        <span className={styles.captionName}>{personName}</span>
        <span>{caption}</span>
      </div>
      {/* comments div */}
      <div></div>
      {/* input form div for comments */}
      <form className={styles.form}>
        <EmojiHappyIcon className="h-7 cursor-pointer" />
        <input
          type="text"
          className={styles.formInput}
          placeholder="Add a comment"
        />
        <button>Post</button>
      </form>
    </div>
  );
}

export default Post;
