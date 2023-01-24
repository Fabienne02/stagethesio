import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState, FC } from "react";

import PaypalIcon from "../../Images/PaypalIcon.png";
import AppleIcon from "../../Images/AppleIcon.png";
import IdealIcon from "../../Images/IdealIcon.png";
import DebitIcon from "../../Images/depitIcon.png";

// @TO DO:
// GENERIC ONCLICK

const PaymentButtons: FC = () => {
  const [showIdeal, setShowIdeal] = useState(false);

  const [Bank, setBank] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setBank(event.target.value as string);
  };

  return (
    <Box sx={{ paddingX: "2.5em" }}>
      <Typography variant="h1" sx={{ marginBottom: "0.7em" }}>
        Payment
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          rowGap: "1em",
          flexWrap: "wrap",
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          className="paypal"
          sx={{
            borderRadius: 1.2,
            padding: 1,
            width: "10em",
            height: "70px",
          }}
          onClick={() => setShowIdeal(false)}
        >
          <Box
            component="img"
            sx={{
              minWidth: "100px",
              width: { sm: "100px", xs: "100%" },
              height: "100%",
              maxHeight: { sm: "100%", xs: "100px" },
              objectFit: "contain",
              borderRadius: 2,
            }}
            alt="Paypal Icon"
            src={PaypalIcon}
          />
        </Button>
        <Button
          color="secondary"
          variant="contained"
          className="applepay"
          sx={{
            borderRadius: 1.2,
            padding: 1,
            width: "10em",
            height: "70px",
          }}
          onClick={() => setShowIdeal(false)}
        >
          <Box
            component="img"
            sx={{
              minWidth: "80px",
              width: { sm: "80px", xs: "100%" },
              height: "100%",
              maxHeight: { sm: "100%", xs: "100px" },
              objectFit: "contain",
              borderRadius: 2,
            }}
            alt="Apple Icon"
            src={AppleIcon}
          />
        </Button>
        <Button
          color="secondary"
          variant="contained"
          className="ideal"
          sx={{
            borderRadius: 1.2,
            padding: 1,
            width: "10em",
            height: "70px",
          }}
        >
          {showIdeal ? (
            <Box sx={{ width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    fontSize: "0.6rem",
                  }}
                >
                  Selecteer uw bank
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Bank}
                  label="Selecteer uw bank"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Rabobank</MenuItem>
                  <MenuItem value={20}>Bank 2</MenuItem>
                  <MenuItem value={30}>Bank 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : (
            <Box
              sx={{ width: "100%", height: "100%" }}
              onClick={() => setShowIdeal(!showIdeal)}
            >
              <Box
                component="img"
                sx={{
                  minWidth: "70px",
                  width: { sm: "60px", xs: "100%" },
                  height: "100%",
                  maxHeight: { sm: "100%", xs: "50px" },
                  objectFit: "contain",
                  borderRadius: 2,
                }}
                alt="Ideal Icon"
                src={IdealIcon}
              />
            </Box>
          )}
        </Button>
        <Button
          color="secondary"
          variant="contained"
          className="credit"
          sx={{
            borderRadius: 1.2,
            padding: 1,
            width: "10em",
            height: "70px",
          }}
          onClick={() => setShowIdeal(false)}
        >
          <Box
            component="img"
            sx={{
              minWidth: "130px",
              width: { sm: "80px", xs: "100%" },
              height: "100%",
              maxHeight: { sm: "100%", xs: "100px" },
              objectFit: "contain",
              borderRadius: 2,
            }}
            alt="Debit Icon"
            src={DebitIcon}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentButtons;
