import { FC } from "react";
import { Box, Typography } from "@mui/material";

const Footer: FC = () => {
  return (
    <Box
      sx={{
        padding: 0,
        marginX: "-24px",
        marginBottom: "-20px",
        backgroundColor: "other.lightGrey",
        height: "3em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "other.grey",
        }}
        variant="body1"
      >
        Playtix 2023
      </Typography>
    </Box>
  );
};

export default Footer;
