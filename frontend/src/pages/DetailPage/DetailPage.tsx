import { Typography, Box } from "@mui/material";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";

import AgeIcon from "../../components/Atoms/Icons/AgeIcon";
import Joined from "../../components/Atoms/Joined";
import Location from "../../components/Atoms/Location";

import Footer from "../../components/HomePage/Footer";
import DetailHeader from "../../components/Molecules/Ticketing/DetailHeader";
import RoundedIcon from "../../components/Atoms/Icons/RoundedIcon";
import BuyingDialog from "../../components/Molecules/Dialog/BuyingDialog";
import ConfirmDialog from "../../components/Molecules/Dialog/ConfirmDialog";
import {
  useActivityStateMutation,
  useActivityQuery,
} from "../../graphql/generated/hooks";

import AccessibleIcon from "@mui/icons-material/Accessible";
import NotAccessibleRoundedIcon from "@mui/icons-material/NotAccessibleRounded";
import PrimaryButton from "../../components/Atoms/Buttons/PrimaryButton";
import CircularLoader from "../../components/Atoms/Loaders/CircularLoader";

const DetailPage: FC = () => {
  const { activityId } = useParams();

  const { data: activityQueryData, loading } = useActivityQuery({
    variables: { id: activityId as string },
  });

  const [activityStateMutation, { data: activityStateMutationData, error }] =
    useActivityStateMutation({
      variables: {
        id: activityId ?? "",
        bought: true,
      },
    });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [showModalTwo, setShowModalTwo] = useState(false);

  if (!activityQueryData?.Activity) return <CircularLoader />;
  return (
    <>
      <DetailHeader />
      <Box mt={2}>
        <AgeIcon>
          <Typography
            sx={{ textAlign: "center", color: "other.black" }}
            variant="body2"
          >
            {activityQueryData.Activity.age}
          </Typography>
        </AgeIcon>
      </Box>
      <Typography variant="h1">{activityQueryData.Activity.title}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          marginBottom: { xs: "2em", sm: "0em" },
        }}
      >
        {Number(activityId) % 2 ? <Joined joined={3} /> : <Joined joined={2} />}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "7.5em",
          }}
        >
          <Box sx={{ marginBottom: "0.5em" }}>
            <RoundedIcon
              sx={{
                padding: "1.5em",
                width: "2em",
                height: "2em",
                marginRight: "0.5em",
              }}
            >
              <Typography variant="body2" color="Black">
                ${activityQueryData.Activity.price}
              </Typography>
            </RoundedIcon>
          </Box>
          <Box sx={{ marginBottom: "0.5em" }}>
            <RoundedIcon
              sx={{
                padding: "1.5em",
                width: "2em",
                height: "2em",
                marginRight: "0.5em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2" color="Black">
                {activityQueryData.Activity.day}
              </Typography>
              <Typography variant="body2" color="Black">
                {activityQueryData.Activity.month}
              </Typography>
            </RoundedIcon>
          </Box>
          <Box sx={{ marginBottom: "0.5em" }}>
            <RoundedIcon
              sx={{
                padding: "1.5em",
                width: "2em",
                height: "2em",
                marginRight: "0.5em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2" color="Black">
                {activityQueryData.Activity.duration}
              </Typography>
            </RoundedIcon>
          </Box>

          <Box sx={{ marginBottom: "0.5em" }}>
            <RoundedIcon
              sx={{
                padding: "1.5em",
                width: "2em",
                height: "2em",
                marginRight: "0.5em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2" color="Black">
                {activityQueryData.Activity.accessible ? (
                  <AccessibleIcon />
                ) : (
                  <NotAccessibleRoundedIcon />
                )}
              </Typography>
            </RoundedIcon>
          </Box>
        </Box>
      </Box>
      <Typography variant="h2">Description</Typography>
      <Typography variant="body1">
        {activityQueryData.Activity.description}
      </Typography>
      <Location />
      <Box sx={{ marginY: 5 }}>
        <PrimaryButton onClick={handleClickOpen}>
          <Typography variant="button">Buy your Tickets</Typography>
        </PrimaryButton>
      </Box>
      {showModalTwo ? (
        <ConfirmDialog open={open} onClose={handleClose} />
      ) : (
        <BuyingDialog open={open} onClose={handleClose}>
          <Box sx={{ paddingX: "2.5em", paddingY: "2em" }}>
            {/* Onclick to payment  */}
            <PrimaryButton
              onClick={() => {
                setShowModalTwo(!showModalTwo);
                activityStateMutation();
              }}
            >
              <Typography>Next</Typography>
            </PrimaryButton>
          </Box>
        </BuyingDialog>
      )}
      <Footer />
    </>
  );
};

export default DetailPage;
