import { FC } from "react";
import { Box, Typography } from "@mui/material";

import TuneIcon from "@mui/icons-material/Tune";
import RoundedIcon from "../Atoms/Icons/RoundedIcon";

const ActivityBar: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 3 }}>
      <Typography variant="h3" color="black">
        Nearest Activities
      </Typography>
      <RoundedIcon sx={{ padding: "0.7em" }}>
        <TuneIcon sx={{ color: "white" }}></TuneIcon>
      </RoundedIcon>
    </Box>
  );
};

export default ActivityBar;
