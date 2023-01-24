import { FC } from "react";
import { Box, Typography, Button, Divider, SxProps } from "@mui/material";

import RoundedIcon from "../Atoms/Icons/RoundedIcon";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

export interface ActivityTicketProps {
  // TODO: the real activity card props
  position?: number | string;
  sx?: SxProps;
  hasBuyButton?: boolean;
  hasTicketInfo?: boolean;
  onClick?: any;
  hasTimeInfo?: boolean;
  image?: string;
  day?: string;
  month?: string;
  title?: string;
  description?: string;
  beginTime?: string;
  endTime?: string;
  ticketAmount?: number;
}

const ActivityTicket: FC<ActivityTicketProps> = ({
  position,
  hasBuyButton = true,
  hasTicketInfo = true,
  hasTimeInfo = true,
  onClick,
  sx,
  image,
  day,
  month,
  title,
  description,
  beginTime,
  endTime,
  ticketAmount,
}) => {
  return (
    <Box onClick={onClick} sx={{ ...sx }}>
      {hasTimeInfo && (
        <Box
          sx={{
            display: "flex",
            width: "60%",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Typography>{beginTime}</Typography>
          <Divider
            sx={{
              backgroundColor: "other.black",
              color: "other.black",
              // border: "none",
              height: 1,
              width: "8em",
            }}
          />
          <Typography>{endTime}</Typography>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: 3,
          marginY: 1,
          padding: 2,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.18)",
          borderRadius: 1.2,
        }}
      >
        {/* Position box for imaging  */}
        <Box sx={{ position: "relative", flex: 1 }}>
          {/* box for image  */}
          <Box
            component="img"
            sx={{
              minWidth: "200px",
              width: { sm: "200px", xs: "100%" },
              height: "170px",
              maxHeight: { sm: "100%", xs: "130px" },
              objectFit: "cover",
              borderRadius: 2,
            }}
            alt="Activity Image 1"
            src={image}
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
                {day}
              </Typography>
              <Typography variant="body2" color="other.black">
                {month}
              </Typography>
            </RoundedIcon>
          </Box>
        </Box>

        {/* box for tekst  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 2,
            justifyContent: "space-between",
            paddingRight: { sm: 6 },
            minWidth: "250px",
            rowGap: 1,
          }}
        >
          <Box>
            <Typography variant="h3">{title}</Typography>
            <Typography
              variant="body1"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {description}
            </Typography>
          </Box>
          {hasTicketInfo && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "3.5em",
              }}
            >
              <ConfirmationNumberOutlinedIcon
                sx={{ transform: "rotate(-30deg)" }}
              />

              <Typography variant="h3">{ticketAmount}</Typography>
              <Typography variant="h3">x</Typography>
            </Box>
          )}

          {hasBuyButton && (
            <Button
              variant="contained"
              sx={{ width: "10em" }}
              href="https://www.google.com/maps/search/google+maps/@52.3377515,4.3116188,10z"
            >
              <NavigationOutlinedIcon sx={{ transform: "rotate(30deg)" }} />
              <Typography whiteSpace="nowrap">Navigate me</Typography>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ActivityTicket;
