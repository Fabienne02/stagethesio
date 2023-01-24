import { FC, useState } from "react";
import { Box, Typography } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import PrimaryButton from "./Buttons/PrimaryButton";

// to do: fix height of month name
interface AgendaMonthsProps {
  onClick1: any;
  onClick2: any;
  SelectedMonth: string;
}

const AgendaMonths: FC<AgendaMonthsProps> = ({
  onClick1,
  onClick2,
  SelectedMonth,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "16em",
        gap: "8px",
      }}
    >
      <PrimaryButton
        sx={{
          padding: "0.7em",
        }}
        onClick={onClick1}
      >
        <ArrowBackIosIcon
          sx={{
            color: "other.grey",
          }}
        />
      </PrimaryButton>
      <Box
        sx={{
          backgroundColor: "other.lightGrey",
          padding: 1.8,
          borderRadius: 1.2,
          width: "7em",
          height: "3em",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "other.grey",
          }}
          variant="button"
        >
          {SelectedMonth}
        </Typography>
      </Box>
      <PrimaryButton
        sx={{
          padding: "0.7em",
        }}
        onClick={onClick2}
      >
        <ArrowForwardIosIcon sx={{ color: "other.grey" }} />
      </PrimaryButton>
    </Box>
  );
};

export default AgendaMonths;
