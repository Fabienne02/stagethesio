import { Box, Typography, Button } from "@mui/material";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useActivityStateMutation } from "../../../graphql/generated/hooks";

interface TicketerProps {
  hasCounter?: boolean;
  label: string;
  price: number;
  onUpdate?: Dispatch<SetStateAction<number>>;
}

const Ticketer: FC<TicketerProps> = ({
  hasCounter = true,
  label,
  price,
  onUpdate,
}) => {
  const [count, setCount] = useState(1);

  var subtotal = count * price;

  useEffect(() => {
    onUpdate?.(subtotal);
  }, [subtotal, onUpdate]);

  const volumeDecrease = () => {
    if (count <= 0) return;
    setCount((count) => count - 1);
  };

  const volumeIncrease = () => {
    if (count >= 25) return;
    setCount((count) => count + 1);
  };

  const { activityId } = useParams();

  const [activityStateMutation, { data: activityStateMutationData, error }] =
    useActivityStateMutation({
      variables: {
        id: activityId ?? "",
        bought: false,
        ticketAmount: 1 + count,
      },
    });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: "other.lightGrey",
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
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body1" color="#a4a4a4">
            {label}
          </Typography>
          {hasCounter && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "8em",
                alignItems: "center",
                backgroundColor: "other.secondary",
                borderRadius: "50em",
              }}
            >
              <Button
                onClick={() => {
                  volumeDecrease();
                  activityStateMutation();
                }}
                sx={{ color: "#A1A1A1", borderRadius: "50em" }}
              >
                -
              </Button>
              <Typography sx={{ color: "#A1A1A1" }}>{count}</Typography>
              <Button
                onClick={() => {
                  volumeIncrease();
                  activityStateMutation();
                }}
                sx={{ color: "#A1A1A1", borderRadius: "50em" }}
              >
                +
              </Button>
            </Box>
          )}
          <Typography
            variant="body1"
            color="#a4a4a4"
            align="right"
            sx={{ width: "2em" }}
          >
            ${subtotal}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Ticketer;
