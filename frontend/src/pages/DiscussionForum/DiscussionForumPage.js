//Author: Sushank Saini
import React, { useState, useEffect } from "react";
import DiscussionPrompt from "components/DiscussionForum/DiscussionPrompt";
import DiscussionPost from "components/DiscussionForum/DiscussionPost";
import { Container, Grid } from "@mui/material";
import { GET } from "utils/axios";
import Banner from "components/DiscussionForum/banner";
const DiscussionForumPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await GET("api/discussionforum/get-all-posts");
      if (
        response.data &&
        response.data.listOfPosts &&
        Array.isArray(response.data.listOfPosts)
      ) {
        setPosts(response.data.listOfPosts);
      } else {
        console.error("Invalid data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Banner />
      <Container>
        <Grid container spacing={2} marginTop="10px">
          <Grid item xs={12} sm={5} md={5} lg={5} justifyContent={"center"}>
            <DiscussionPrompt getPosts={fetchData} />
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            {posts.map((post) => (
              <div key={post.id} style={{ marginBottom: "20px" }}>
                <DiscussionPost
                  getPosts={fetchData}
                  id={post._id}
                  email={post.userName}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  replyCount={post.replies.length}
                  replies={post.replies}
                />
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DiscussionForumPage;
