import {
  Dialog,
  Box,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ActivityTicket from "../ActivityTicket";
import QRCode from "../../../Images/QR-Code.png";
import RoundedIcon from "../../Atoms/Icons/RoundedIcon";
import {
  CloseRounded,
  FullscreenExitOutlined,
  FullscreenRounded,
  ShareOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useActivityQuery } from "../../../graphql/generated/hooks";

export interface TicketDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function TicketDialog(props: TicketDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const [showFullScreen, setShowFullScreen] = useState(true);

  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { activityId } = useParams();

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullScreen={mobileScreen}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "525px",
          overflowX: "hidden",
          height: "fit-content",
        },
      }}
    >
      {showFullScreen && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flex: 1,
          }}
        >
          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography variant="h1">Your Tickets</Typography>
            <CloseRounded onClick={handleClose} />
          </Box>

          <Box
            sx={{
              padding: 3,
              flexDirection: "column",
            }}
          >
            <Typography variant="h3">Jan Versteeg</Typography>
            <Typography variant="h2">Kinderkaart</Typography>
          </Box>
        </Box>
      )}
      <Box sx={{ padding: 3 }}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "other.lightGrey",
            height: "100%",
            padding: 3,
            boxShadow: "none",
          }}
        >
          <Box
            component="img"
            sx={{
              minWidth: "20px",
              width: { sm: "250px", xs: "60%" },
            }}
            alt="QR code"
            src={QRCode}
          />
          <Box
            sx={{
              position: "absolute",
              left: 10,
              top: 10,
              display: "flex",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <RoundedIcon
              sx={{ backgroundColor: "white" }}
              onClick={() => setShowFullScreen(!showFullScreen)}
            >
              {showFullScreen ? (
                <FullscreenRounded />
              ) : (
                <FullscreenExitOutlined />
              )}
            </RoundedIcon>
            <RoundedIcon sx={{ backgroundColor: "white" }}>
              <ShareOutlined />
            </RoundedIcon>
          </Box>
        </Paper>
      </Box>
    </Dialog>
  );
}
