import { FC } from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import AgeIcon from "../Atoms/Icons/AgeIcon";

import RoundedIcon from "../Atoms/Icons/RoundedIcon";

import { generatePath, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../pages/AppRoutes";
import { ActivityCardFragment } from "../../graphql/generated/operations";

export interface ActivityCardProps {
  position: number | string;
  hasBuyButton?: boolean;
  data?: ActivityCardFragment;
  image?: string;
  price: number;
  day?: string;
  month?: string;
  title?: string;
  description?: string;
  age?: string;
  starsValue?: number;
  reviewAmount?: number;
}

const ActivityCard: FC<ActivityCardProps> = ({
  position,
  hasBuyButton = true,
  data,
  image,
  price,
  day,
  month,
  title,
  description,
  age,
  starsValue,
  reviewAmount,
}: ActivityCardProps) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        gap: 3,
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
            height: "100%",
            maxHeight: { sm: "100%", xs: "300px" },
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
          <RoundedIcon sx={{ width: "2em" }}>
            <Typography variant="body2" color="other.black">
              ${price}
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
        <AgeIcon>
          <Typography
            sx={{ textAlign: "center", color: "other.black" }}
            variant="body2"
          >
            {age}
          </Typography>
        </AgeIcon>
        <Typography variant="h3">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {description}
        </Typography>
        <Rating name="half-rating-read" defaultValue={starsValue} readOnly />
        <Typography variant="body2" color="other.grey">
          {reviewAmount} Reviews
        </Typography>
        {hasBuyButton && (
          <Button
            variant="contained"
            onClick={() => {
              navigate(
                generatePath(AppRoutes.Detail, {
                  activityId: position.toString(),
                })
              );
            }}
          >
            Buy Tickets
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ActivityCard;
