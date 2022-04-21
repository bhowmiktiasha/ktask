import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

// import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { BiCommentDetail } from "react-icons/bi";

export const PostsList = ({ handleOpen, handleClose }) => {
  const posts = useSelector((state) => state.posts);
  // const [trend, setTrend] = useState(posts);

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  // const handlerTrending = () =>
  // setTrend((trend) =>
  // 	 posts.filter((reactions) => {
  // 		return  reactions.reactions >= 5;
  // 	})
  // );

  const handlerRecent = () => {
    const recent = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    console.log(recent);
  };

  const handlerTrending = () => {
    const trend = posts.slice().sort((a, b) => b.reactions - a.reactions);
    console.log(trend);
  };

  const renderedPosts = orderedPosts.map((post) => {
    return (
      // <article className="post-excerpt" key={post.id}>
      //   <h3>{post.title}</h3>
      //   <div>
      //     <PostAuthor userId={post.user} />
      //
      //   </div>
      //   <p className="post-content">{post.content.substring(0, 100)}</p>

      //   <ReactionButtons post={post} />
      //   <Link to={`/posts/${post.id}`} className="button muted-button">
      //     View Post
      //   </Link>
      // </article>
      <Card
        sx={{ maxWidth: 600 }}
        style={{ margin: "auto", marginBottom: "10px" }}
        key={post.id}
      >
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" />}
          title={post.title}
          subheader={
            <>
              <PostAuthor userId={post.user} />{" "}
              <TimeAgo timestamp={post.date} />
            </>
          }
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.content.substring(0, 100)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Box alignItems="center" gap="0.4rem" display="contents">
            <ReactionButtons post={post} />

            <IconButton
              aria-label="Like"
              isRound={true}
              onClick={handleOpen}
              style={{ paddingLeft: "20px" }}
            >
              <BiCommentDetail size="1.5rem" cursor="pointer" />
            </IconButton>
            <Typography as="h5" size="sm" color="gray.600">
              {/* {likes?.length} */} 2
            </Typography>
          </Box>
        </CardActions>
      </Card>
    );
  });

  return (
    <section
      className="posts-list"
      style={{
        background: "deepskyblue",
        borderRadius: "15px",
        marginTop: "10px",
        paddingBottom: "12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Posts</h2>
        <div style={{ marginTop: "20px" }}>
          <Button variant="contained"  style={{ marginRight: "15px" }} onClick={handlerTrending}>
            Trending
          </Button>
          <Button
            variant="contained"
           
            // onClick={() => {window.location.reload(false);handlerRecent()}}
            onClick={handlerRecent}
          >
            Recent
          </Button>
        </div>
      </div>
      {renderedPosts}
    </section>
  );
};
