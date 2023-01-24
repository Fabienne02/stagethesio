import { Box, InputBase, Typography } from "@mui/material";
import Header from "../HomePage/Header";
import { FC } from "react";

import SearchIcon from "@mui/icons-material/Search";

const HeaderWrapper: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "other.lightGrey",
        height: "100%",
        borderRadius: 4,
        padding: "2em",
      }}
    >
      <Header />
      <Box sx={{ marginTop: "5em", marginLeft: "2em" }}>
        <Typography sx={{ color: "other.grey" }} variant="h2">
          Hey There 👋
        </Typography>
        <Typography variant="h1">
          Find out the coolest activities near you!
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          borderRadius: 1,
          backgroundColor: "white",
          width: "90%",
          marginRight: "2em",
          marginLeft: "2em",
          marginTop: "3em",
        }}
      >
        <Box
          sx={{
            paddingLeft: "1em",
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "other.grey",
          }}
        >
          <SearchIcon />
        </Box>
        <InputBase
          sx={{
            padding: "0.5em",
            paddingLeft: "3em",
            width: "100%",
          }}
          placeholder="Search an activity"
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
      <Box />
    </Box>
  );
};

export default HeaderWrapper;
