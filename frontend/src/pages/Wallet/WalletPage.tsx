import { FC, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import Header from "../../components/HomePage/Header";
import AgendaMonths from "../../components/Atoms/AgendaMonths";
import ActivityTicket from "../../components/Molecules/ActivityTicket";
import Footer from "../../components/HomePage/Footer";
import TicketDialog from "../../components/Molecules/Dialog/TicketDialog";

import {
  useAllActivitiesQuery,
  useActivityQuery,
} from "../../graphql/generated/hooks";
import { notMaybe } from "../../Utils/utils";
import CircularLoader from "../../components/Atoms/Loaders/CircularLoader";

import { generatePath, useNavigate, useParams } from "react-router-dom";
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

const WalletPage: FC = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { activityId } = useParams();

  const { data, loading } = useAllActivitiesQuery();
  const { data: activityQueryData } = useActivityQuery({
    variables: { id: activityId ?? "" },
  });

  let boughtState = data?.allActivities?.map((item) => item?.bought);
  const beenBought = boughtState?.filter((state) => (state = true));

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

  if (!data?.allActivities) return <CircularLoader />;
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
          disabled
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
          onClick={() => {
            navigate(generatePath(AppRoutes.MyEvents));
          }}
        >
          <Typography variant="button">My events</Typography>
        </Button>
      </Box>
      <AgendaMonths
        onClick1={MonthsDecrease}
        onClick2={MonthsIncrease}
        SelectedMonth={selectedMonthName}
      />
      <TicketDialog open={open} onClose={handleClose} />
      <Box display="grid" rowGap={3} mb={3} mt={5}>
        {data?.allActivities
          ?.filter(notMaybe)
          .map(
            (activity) =>
              activity.bought === true &&
              activity.fullMonth === selectedMonthName && (
                <ActivityTicket
                  image={activity.imageUrl}
                  day={activity.day}
                  month={activity.month}
                  title={activity.title}
                  description={activity.description}
                  onClick={handleClickOpen}
                  beginTime={activity.beginTime}
                  endTime={activity.endTime}
                  ticketAmount={activity.ticketAmount}
                />
              )
          )}
      </Box>

      <Box
        sx={{
          padding: 3,
          marginX: "-24px",
          background: "rgba(240, 240, 240, 0.3)",
          borderRadius: "14px 14px 0px 0px",
        }}
      >
        <Typography variant="h1">Suggestion</Typography>

        <Box display="grid" rowGap={3} mb={3} mt={5}>
          {data?.allActivities
            ?.filter(notMaybe)
            .slice(2)
            .map(
              (activity) =>
                activity.bought === false && (
                  <ActivityTicket
                    position={activity.id}
                    hasTimeInfo={false}
                    hasTicketInfo={false}
                    image={activity.imageUrl}
                    day={activity.day}
                    month={activity.month}
                    title={activity.title}
                    description={activity.description}
                    onClick={() => {
                      navigate(
                        generatePath(AppRoutes.Detail, {
                          activityId: activity.id.toString(),
                        })
                      );
                    }}
                  />
                )
            )}
        </Box>

        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2em",
          }}
        >
          View more
        </Typography>
      </Box>

      <Footer />
    </>
  );
};

export default WalletPage;
