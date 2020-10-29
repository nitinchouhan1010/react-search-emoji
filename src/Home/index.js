import React from "react";
import Emoji from "./../Emoji.json";

const Home = () => {
  return (
    <div>
      {Emoji.map((EmojiValue, index) => (
        <div className="d-flex p-2 border-bottom" key={index}>
          <div className="mr-2">{EmojiValue.symbol}</div>
          <div>{EmojiValue.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
