import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModalForm from "./ModalForm";
import { ComBox } from "./ComBox";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const [opening, setOpening] = React.useState(false);

  const handleClickOpen = () => {
    setOpening(true);
  };

  const handleClose = () => {
    setOpening(false);
  };

  const [rendPosts, setRenPosts] = useState(posts);

  useEffect(() => {
    setRenPosts(posts);
  }, [posts]);

  const handlerRecent = () => {
    const recent = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    console.log(recent);
    setRenPosts(recent);
  };

  const handlerTrending = () => {
    const tre = posts
      .slice()
      .sort((a, b) => b.reactions.thumbsUp - a.reactions.thumbsUp);
    console.log(tre);
    setRenPosts(tre);
  };

  const renderedPosts = rendPosts.map((post) => {
    return (
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
            <ReactionButtons post={post} /> <ComBox post={post} />
            <ModalForm
              open={opening}
              handleOpen={handleClickOpen}
              onClose={handleClose}
            />
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
          <Button
            variant="contained"
            style={{ marginRight: "15px" }}
            onClick={handlerTrending}
          >
            Trending
          </Button>
          <Button variant="contained" onClick={handlerRecent}>
            Recent
          </Button>
        </div>
      </div>
      {renderedPosts}
    </section>
  );
};
