import * as React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import "./CommonButton.css";

export default function CommonButton({ setCurrentPage }) {
  function handleChange(page) {
    setCurrentPage(page);
    window.scroll(0, 0);
  }
  return (
    <div
      style={{
        margin: "50px auto",
      }}
    >
      <Stack spacing={2}>
        <Pagination
          onChange={(e) => handleChange(e.target.textContent)}
          count={500}
          variant="outlined"
          hideNextButton
          hidePrevButton
        />
      </Stack>
    </div>
  );
}
