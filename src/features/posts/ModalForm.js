import Box from "@mui/material/Box";
import React from "react";
import Modal from "@mui/material/Modal";
import { CommentModal } from "./CommentModal";

const style = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  position: "absolute",
};

export default function ModalForm({ open, onClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CommentModal />
        </Box>
      </Modal>
    </div>
  );
}
