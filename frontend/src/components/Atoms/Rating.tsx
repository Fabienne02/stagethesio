import StarRateIcon from "@mui/icons-material/StarRate";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useActivityQuery } from "../../graphql/generated/hooks";
import CircularLoader from "./Loaders/CircularLoader";

const Rating: FC = () => {
  const { activityId } = useParams();

  const { data, loading } = useActivityQuery({
    variables: { id: activityId as string },
  });

  if (!data?.Activity) return <CircularLoader />;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(28, 28, 28, .5)",
        padding: "0.5em",
        borderRadius: 2,
      }}
    >
      <StarRateIcon
        sx={{
          color: "#f1c644",
          fontSize: 50,
        }}
      />
      <Box sx={{ display: "flex" }}>
        <Typography variant="h3" color="white" sx={{ marginRight: "0.2em" }}>
          {data.Activity.starsValue}
        </Typography>
        <Typography variant="body1" color="white" sx={{ marginTop: "0.2em" }}>
          Rating
        </Typography>
      </Box>
    </Box>
  );
};

export default Rating;
