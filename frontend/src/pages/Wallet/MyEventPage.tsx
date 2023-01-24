import { FC, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import Header from "../../components/HomePage/Header";
import AgendaMonths from "../../components/Atoms/AgendaMonths";
import Footer from "../../components/HomePage/Footer";

import { generatePath, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../pages/AppRoutes";

const monthNames = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "October",
  "November",
  "December",
];

const MyEventPage: FC = () => {
  const navigate = useNavigate();

  const currentDate = new Date();
  const [selectedMonth, setMonths] = useState(currentDate.getMonth());

  const selectedMonthName = monthNames[selectedMonth];

  const MonthsDecrease = () => {
    if (selectedMonth === 0) return;
    setMonths((m) => (m -= 1));
  };

  const MonthsIncrease = () => {
    if (selectedMonth === 11) return;
    setMonths((m) => m + 1);
  };

  const currentMonthName = monthNames[currentDate.getMonth()];

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
          gap: 3,
          marginY: 4,
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            color: "white",
            borderRadius: 1.2,
            padding: 1,
            width: "13em",
            height: "70px",
          }}
          color="secondary"
          variant="contained"
          onClick={() => {
            navigate(generatePath(AppRoutes.Wallet));
          }}
        >
          <Typography variant="button">Planned events</Typography>
        </Button>
        <Button
          sx={{
            color: "other.grey",
            backgroundColor: "other.lightGrey",
            borderRadius: 1.2,
            padding: 1,
            width: "13em",
            height: "70px",
          }}
          color="secondary"
          variant="contained"
          disabled
        >
          <Typography variant="button">My events</Typography>
        </Button>
      </Box>
      <AgendaMonths
        onClick1={MonthsDecrease}
        onClick2={MonthsIncrease}
        SelectedMonth={selectedMonthName}
      />
      <Box sx={{ height: "60vh", marginTop: "5em" }}>
        <Typography>You have no planned activities</Typography>
      </Box>

      <Footer />
    </>
  );
};

export default MyEventPage;
