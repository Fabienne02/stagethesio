import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";

import Ticketer from "./Ticketer";
import { useActivityQuery } from "../../../graphql/generated/hooks";
import { useParams } from "react-router-dom";
import CircularLoader from "../../Atoms/Loaders/CircularLoader";

const BuyTickets: FC = () => {
  const { activityId } = useParams();

  const { data, loading } = useActivityQuery({
    variables: { id: activityId as string },
  });

  const [adultSubtotal, setAdultSubtotal] = useState(0);
  const [childSubtotal, setChildSubtotal] = useState(0);

  const registerFee = 3;

  const total = adultSubtotal + childSubtotal + registerFee;

  if (!data?.Activity) return <CircularLoader />;
  return (
    <Box sx={{ marginY: "1em" }}>
      <Ticketer
        hasCounter={true}
        price={data.Activity.price}
        label="Adult"
        onUpdate={setAdultSubtotal}
      />
      <Ticketer
        hasCounter={true}
        price={data.Activity.kidPrice}
        label="Child"
        onUpdate={setChildSubtotal}
      />
      <Ticketer
        hasCounter={false}
        price={registerFee}
        label="Ticket register fee"
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: "0.3em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Typography sx={{ fontWeight: 800 }}>Total</Typography>
          <Typography sx={{ fontWeight: 800 }}>${total}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyTickets;
