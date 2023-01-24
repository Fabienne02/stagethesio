import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

import { useActivityQuery } from "../../graphql/generated/hooks";
import CircularLoader from "./Loaders/CircularLoader";

export interface JoinedProps {
  joined: number;
}

const Joined: FC<JoinedProps> = ({ joined }) => {
  const { activityId } = useParams();

  const { data, loading } = useActivityQuery({
    variables: { id: activityId as string },
  });

  if (!data?.Activity) return <CircularLoader />;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "13em",
        marginY: "1.2em",
      }}
    >
      <Box sx={{ position: "relative", height: "4em" }}>
        <Typography variant="h3">Host</Typography>
        <Box
          component="img"
          alt="Avatar host"
          sx={{
            height: "3em",
            width: "3em",
            position: "absolute",
          }}
          src={`../Images/${data.Activity.hostImg}.png`}
        />
      </Box>
      <Box>
        <Typography variant="h3">Joined</Typography>
        <Box sx={{ display: "flex" }}>
          {joined >= 1 && (
            <Box
              className="col-sm-12"
              sx={{ width: "3em", marginRight: "-1em" }}
            >
              <img
                src={`../Images/${data.Activity.joined1}.png`}
                className="img-fluid"
                alt="joined img"
                style={{
                  height: "3em",
                  width: "3em",
                }}
              />
            </Box>
          )}
          {joined > 1 && (
            <Box
              className="col-sm-12"
              sx={{ width: "3em", marginRight: "-1em" }}
            >
              <img
                src={`../Images/${data.Activity.joined2}.png`}
                className="img-fluid"
                alt="joined img"
                style={{
                  height: "3em",
                  width: "3em",
                }}
              />
            </Box>
          )}
          {joined > 2 && (
            <Box
              className="col-sm-12"
              sx={{ width: "3em", marginRight: "-1em" }}
            >
              <img
                src={`../Images/${data.Activity.joined3}.png`}
                className="img-fluid"
                alt="joined img"
                style={{
                  height: "3em",
                  width: "3em",
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Joined;
