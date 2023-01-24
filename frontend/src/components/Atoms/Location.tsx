import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

import { useActivityQuery } from "../../graphql/generated/hooks";
import CircularLoader from "./Loaders/CircularLoader";

const Location: FC = () => {
  const { activityId } = useParams();

  const { data, loading } = useActivityQuery({
    variables: { id: activityId as string },
  });

  if (!data?.Activity) return <CircularLoader />;
  return (
    <Box sx={{ position: "relative", marginTop: "2em" }}>
      <Typography variant="h3">Location</Typography>
      <Typography variant="body1" color="other.grey">
        {data.Activity.street} {data.Activity.houseNumber},{" "}
        {data.Activity.place}
      </Typography>
      <iframe
        src={data.Activity.mapsLink}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google maps map"
        style={{
          border: "none",
          borderRadius: "16px",
          width: "100%",
          height: "15em",
          marginTop: "1em",
          position: "relative",
        }}
      />
    </Box>
  );
};

export default Location;
