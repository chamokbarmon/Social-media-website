import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <div className="avatar">
        <div className="w-12 h-12 items-center rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>

      <Link to={"/write-post"}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs bg-white"
        />
      </Link>
    </div>
  );
};

export default Post;
