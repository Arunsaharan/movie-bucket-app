import * as React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import "./CommonButton.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff0000",
    },
  },
});

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
      <ThemeProvider theme={theme}>
        <Stack spacing={2}>
          <Pagination
            onChange={(e) => handleChange(e.target.textContent)}
            count={500}
            variant="outlined"
            color="primary"
            hideNextButton
            hidePrevButton
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
}
