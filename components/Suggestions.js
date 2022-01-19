/** @format */
import React from "react";
import styles from "../styles/Home.module.css";
import { People } from "../data/People";

const Dummy_data = [
  {
    id: 1,
    username: "korede",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFOfPu93n6Kxw/profile-displayphoto-shrink_200_200/0/1632301101571?e=1647475200&v=beta&t=mn3e607trJc74pC6N2ZV4hHT7uB7xfavOKA7o_TRxKA",
  },
  {
    id: 2,
    username: "paul",
    avatar:
      "https://s.abcnews.com/images/GMA/paul-rudd-gty-jc-211111_1636673690293_mn_4x3_608.jpg",
  },
  {
    id: 3,
    username: "chris",
    avatar:
      "https://pagesix.com/wp-content/uploads/sites/3/2021/11/chris-evans069_.jpg?quality=80&strip=all&w=1024",
  },
  {
    id: 4,
    username: "Robert",
    avatar:
      "https://media.istockphoto.com/photos/portrait-of-happy-mature-man-smiling-picture-id1278978817?k=20&m=1278978817&s=170667a&w=0&h=OYcrjou1Jx9fK1IcZ_faKh8dwySUV5JOGhzYppzOLa0=",
  },
  {
    id: 5,
    username: "Mane",
    avatar:
      "https://img.a.transfermarkt.technology/portrait/big/200512-1559901727.jpg?lm=1",
  },
];

function Suggestions() {
  return (
    <div className={styles.suggestion}>
      <div className={styles.suggestionHeader}>
        <h3 className={styles.h3}>Suggestions for you</h3>
        <button className={styles.see}>See all</button>
      </div>
      {Dummy_data.map((person, id) => (
        <div className={styles.profileDiv}>
          <img src={person.avatar} alt="" className={styles.suggestionImg} />
          <div className={styles.profile}>
            <p className={styles.suggestionName}>{person.username}</p>
            <span className={styles.span}>welcome to Instagram</span>
          </div>
          <button className={styles.followBtn}>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
