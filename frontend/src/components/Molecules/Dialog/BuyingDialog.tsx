import { Dialog, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import ActivityCard from "../ActivityCard";
import PaymentButtons from "../PaymentButtons";
import BuyTickets from "../Ticketing/BuyTickets";

import { useActivityQuery } from "../../../graphql/generated/hooks";
import CircularLoader from "../../Atoms/Loaders/CircularLoader";

export interface BuyingDialogProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function BuyingDialog(props: BuyingDialogProps) {
  const { activityId } = useParams();

  const { data, loading } = useActivityQuery({
    variables: { id: activityId as string },
  });

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
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
        },
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Typography variant="h1" sx={{ marginBottom: "0.7em" }}>
          Buy a ticket
        </Typography>
        <ActivityCard
          position={1}
          hasBuyButton={false}
          image={data.Activity.imageUrl}
          price={data.Activity.price}
          day={data.Activity.day}
          month={data.Activity.month}
          title={data.Activity.title}
          description={data.Activity.description}
          age={data.Activity.age}
          starsValue={data.Activity.starsValue}
          reviewAmount={data.Activity.reviewAmount}
        />
      </Box>
      <Box>
        <BuyTickets />
      </Box>
      <PaymentButtons />
      {props.children}
    </Dialog>
  );
}
