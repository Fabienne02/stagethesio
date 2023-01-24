import { FC } from "react";
import { Box } from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Logo from "../../Images/Playtix-logo.png";
import RoundedIcon from "../Atoms/Icons/RoundedIcon";
import Menu from "../HomePage/Menu";

const Header: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Menu />
      <Box
        component="img"
        sx={{
          height: "8vw",
          maxHeight: "3em",
        }}
        alt="Logo Playtix"
        src={Logo}
      />
      <RoundedIcon sx={{ padding: "0.7em" }}>
        <PersonOutlineOutlinedIcon
          sx={{
            color: "white",
            transform: "scale(1.2)",
          }}
        ></PersonOutlineOutlinedIcon>
      </RoundedIcon>
    </Box>
  );
};

export default Header;
