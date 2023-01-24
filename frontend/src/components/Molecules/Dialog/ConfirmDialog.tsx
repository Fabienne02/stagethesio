import { Dialog, Box, Typography, Button, TextField } from "@mui/material";

import RoundedIcon from "../../Atoms/Icons/RoundedIcon";
import CircularLoader from "../../Atoms/Loaders/CircularLoader";

import { generatePath, useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "../../../pages/AppRoutes";
import { useActivityQuery } from "../../../graphql/generated/hooks";
import { useState } from "react";

// to do:
// - Make text wrap

export interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ConfirmDialog(props: ConfirmDialogProps) {
  const { activityId } = useParams();

  const { data, loading } = useActivityQuery({
    variables: { id: activityId as string },
  });

  const [showLoader, setShowLoader] = useState(false);
  const [showText, setShowText] = useState("send");

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 1000);
    setTimeout(() => setShowText("sended"), 1000);
  };

  if (!data?.Activity) return <CircularLoader />;
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "525px",
          overflowX: "hidden",
          height: "fit-content",
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ marginBottom: "0.7em" }}>
          Thank you!
        </Typography>
        <Typography variant="h2" sx={{ marginBottom: "0.7em" }}>
          We're looking forward seeing you
        </Typography>
        <Box sx={{ position: "relative", flex: 1 }}>
          {/* box for image  */}
          <Box
            component="img"
            sx={{
              minWidth: "100%",
              width: { sm: "450px", xs: "100%" },
              height: "200px",
              maxHeight: { sm: "100%", xs: "200px" },
              objectFit: "cover",
              borderRadius: 2,
            }}
            alt="Activity Image 1"
            src={data.Activity.imageUrl}
          />
          <Box
            sx={{
              position: "absolute",
              left: 10,
              top: 10,
              height: "3em",
              display: "flex",
              gap: "10px",
            }}
          >
            <RoundedIcon
              sx={{ width: "2em", display: "flex", flexDirection: "column" }}
            >
              <Typography variant="body2" color="other.black">
                {data.Activity.day}
              </Typography>
              <Typography variant="body2" color="other.black">
                {data.Activity.month}
              </Typography>
            </RoundedIcon>
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            marginY: "0.7em",
          }}
        >
          You can find you ticket in your wallet
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flex: 1,
            gap: 3,
            marginY: 2,
          }}
        >
          <Button
            sx={{
              color: "white",
              borderRadius: 1.2,
              padding: 1,
              width: "10em",
              height: "70px",
            }}
            onClick={() => {
              navigate(generatePath(AppRoutes.Wallet));
            }}
          >
            <Typography variant="button">Go to wallet</Typography>
          </Button>
          <Button
            sx={{
              color: "other.grey",
              backgroundColor: "other.lightGrey",
              borderRadius: 1.2,
              padding: 1,
              width: "10em",
              height: "70px",
            }}
            onClick={() => {
              navigate(generatePath(AppRoutes.Home));
            }}
          >
            <Typography variant="button">Keep Looking</Typography>
          </Button>
        </Box>
        <Typography variant="body1" sx={{ marginY: "0.7em" }}>
          Rather recieve by mail?
        </Typography>
        <Box
          sx={{
            position: "relative",
            flex: 1,
            display: "flex",
            gap: 3,
            width: "21em",
          }}
        >
          <TextField fullWidth label="Email" id="Email" />
          {showText === "send" ? (
            <Button
              sx={{
                color: "other.grey",
                backgroundColor: "other.lightGrey",
                borderRadius: 1.2,
                padding: 1,
                width: "10em",
                height: "63px",
                position: "relative",
              }}
              onClick={onSubmit}
            >
              {showText}
              {showLoader && (
                <CircularLoader
                  sx={{ position: "absolute", left: 45, top: 10 }}
                />
              )}
            </Button>
          ) : (
            <Button
              sx={{
                color: "other.grey",
                backgroundColor: "other.lightGrey",
                borderRadius: 1.2,
                padding: 1,
                width: "10em",
                height: "63px",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "other.secondary",
                },
              }}
              disableRipple={true}
            >
              {showText}
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
