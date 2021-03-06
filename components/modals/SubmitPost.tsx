import React, { useState, useEffect } from "react";

import { Button, Modal, Box, Typography, Container } from "@mui/material";

export interface SubmitPostProps {
  open: boolean;
  handleClose: any;
}

export const SubmitPostModal = ({ open, handleClose }: SubmitPostProps) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "bg-white",
    p: 4,
  } as React.CSSProperties;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={style}
          className="bg-white rounded-xl shadow-lg p-8 justify-center"
        >
          <div className="text-xl py-8">Create New Post</div>
          <div>
            Pool Address<input></input>
          </div>
          POST URL <input></input>
          <div></div>
          <Button
            variant="contained"
            color="primary"
            className="w-40 flex-wrap py-4"
          >
            {" "}
            Submit Post
          </Button>{" "}
        </Box>
      </Modal>
    </div>
  );
};

export default SubmitPostModal;
