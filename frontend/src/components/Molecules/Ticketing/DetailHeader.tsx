import { Box } from "@mui/material";
import { FC } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useActivityQuery } from "../../../graphql/generated/hooks";

import RoundedIcon from "../../Atoms/Icons/RoundedIcon";

import { useNavigate, useParams } from "react-router-dom";
import Rating from "../../Atoms/Rating";
import CircularLoader from "../../Atoms/Loaders/CircularLoader";

const DetailHeader: FC = () => {
  const navigate = useNavigate();

  const { activityId } = useParams();

  const { data, loading } = useActivityQuery({
    variables: { id: activityId as string },
  });

  if (!data?.Activity) return <CircularLoader />;
  return (
    // Parent box
    <Box>
      {/* Header position box  */}
      <Box sx={{ position: "relative" }}>
        {/* Image box  */}
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            borderRadius: 2,
          }}
          alt="Activity Image 1"
          src={data.Activity.imageUrl}
        />
        {/* Box for onclick event on icon  */}
        <Box
          onClick={() => {
            navigate(-1);
          }}
        >
          <RoundedIcon
            sx={{
              backgroundColor: "white",
              borderRadius: 100,
              width: "2em",
              height: "2em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "other.black",
              position: "absolute",
              left: 20,
              top: 20,
            }}
          >
            <ArrowBackIosRoundedIcon />
          </RoundedIcon>
          <Box sx={{ position: "absolute", right: 20, bottom: 20 }}>
            <Rating />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailHeader;
