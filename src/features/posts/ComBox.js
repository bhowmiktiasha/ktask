import React from "react";
// import { useDispatch } from "react-redux";
import ModalForm from "./ModalForm";
import { BiCommentDetail } from "react-icons/bi";
// import { commentAdded } from "./postsSlice";

const reactionEmoji = {
  com: <BiCommentDetail size="1.5rem" cursor="pointer" />,
};

export const ComBox = ({ post }) => {
  // const dispatch = useDispatch();
  const [opening, setOpening] = React.useState(false);

  const handleClickOpen = () => {
    setOpening(true);
  };

  const handleClose = () => {
    setOpening(false);
  };

  const comBox = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <>
        <button
          key={name}
          type="button"
          className="muted-button reaction-button"
          // onClick={() =>
          //   dispatch(commentAdded({ postId: post.id, comm: name }))
          // }
          onClick={handleClickOpen}
        >
          {emoji} {post.comments[name]}
        </button>
        <ModalForm
          open={opening}
          handleOpen={handleClickOpen}
          onClose={handleClose}
        />
      </>
    );
  });

  return <div>{comBox}</div>;
};
