import React, { useState, useEffect } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";
import { getUser } from "../../api/UserRequests";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));//bool
  const [likes, setLikes] = useState(data.likes.length);
  const [sharedByUsername, setSharedByUsername] = useState(""); 

  useEffect(() => {
    let isMounted = true; 

    const fetchSharedByUsername = async () => {
      try {
        const { data: userData } = await getUser(data.userId);
        
        
        if (isMounted) {
          setSharedByUsername(userData.username);
        }
      } catch (error) {
        console.log("Error fetching shared by username:", error);
      }
    };

    fetchSharedByUsername();

    return () => {
      isMounted = false;
    };
  }, [data.userId]);

  const handleLike = () => {
    likePost(data._id, user._id);//post req
    setLiked((prev) => !prev);//set neg of prev
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        {/* <img src={Comment} alt="" />
        <img src={Share} alt="" /> */}
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>
        <span><b>{sharedByUsername} </b>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
