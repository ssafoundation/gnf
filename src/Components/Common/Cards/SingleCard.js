import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ blogData }) => {
  const { image, isSaved, likes, tags, title, id, createdAt } = blogData;
  return (
    <div className="lws-card">
      <Link to={`blog-details/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up" /> {likes}
          </p>
        </div>
        <Link to={`blog-details/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags?.map((tag, idx) => (
            <span key={idx}>#{tag}</span>
          ))}
        </div>
        {/* Show this element if post is saved */}
        <div className="flex gap-2 mt-4">
          {isSaved && <span className="lws-badge"> Saved </span>}
        </div>
        {/* Show this element if post is saved Ends */}
      </div>
    </div>
  );
};

export default SingleCard;
