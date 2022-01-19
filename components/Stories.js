/** @format */
import React, { useEffect, useState } from "react";
import { People } from "../data/People";
import Story from "../shared/Story";

function Stories() {
  return (
    <div className="flex space-x-4 p-4 bg-white mt-4 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-color-black mb-8">
      {People.map((person, id) => (
        <Story userImg={person.avatar} username={person.username} key={id}/>
      ))}
    </div>
  );
}

export default Stories;
