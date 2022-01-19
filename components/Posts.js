/** @format */
import React from "react";
import Post from "../shared/Post";

const Dummy_data = [
  {
    name: "dybala",
    id: 1,
    userImg:
      "https://cdn.vox-cdn.com/thumbor/m2-k-R1l2oI04DSKFT77dOUDr8c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23069630/1357348925.jpg",
    messageImg:
      "https://cdn.vox-cdn.com/thumbor/m2-k-R1l2oI04DSKFT77dOUDr8c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23069630/1357348925.jpg",
    caption: "football always!",
  },
  {
    name: "downey",
    id: 2,
    userImg:
      "https://cdn.vox-cdn.com/thumbor/m2-k-R1l2oI04DSKFT77dOUDr8c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23069630/1357348925.jpg",
    messageImg:
      "https://cdn.vox-cdn.com/thumbor/m2-k-R1l2oI04DSKFT77dOUDr8c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23069630/1357348925.jpg",
    caption: "football always!",
  },
];

function Posts() {
  return (
    <div>
      {Dummy_data.map((person, index) => (
        <Post
          key={index}
          personImg={person.userImg}
          personName={person.name}
          messageImg={person.messageImg}
          caption={person.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
