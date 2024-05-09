//Author: Sushank Saini
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReplyDisplay from "components/DiscussionForum/ReplyDisplay";
import MainPost from "components/DiscussionForum/MainPost";
import Banner from "components/DiscussionForum/banner";

const DiscussionThread = () => {
  const location = useLocation();
  const [post, setPost] = useState(null);
  const reversedReplies = post ? post.replies.slice().reverse() : null;
  useEffect(() => {
    if (location.state) {
      const { id, email, title, description, date, replies } = location.state;
      setPost({ id, email, title, description, date, replies });
    }
  }, [location]);

  const deleteReply = (replyId) => {
    setPost((post) => {
      const prevPost = { ...post };
      let replies = [...prevPost.replies];
      const updatedReplies = replies.filter((reply) => reply._id !== replyId);
      prevPost.replies = [...updatedReplies];
      return { ...prevPost };
    });
  };
  return (
    <div>
      <Banner />
      <MainPost {...post} />
      {reversedReplies &&
        reversedReplies.map((reply) => (
          <div key={reply.id}>
            <ReplyDisplay
              onDelete={deleteReply}
              postId={post.id}
              id={reply._id}
              email={reply.userName}
              date={reply.date}
              description={reply.description}
            />
          </div>
        ))}
    </div>
  );
};

export default DiscussionThread;
