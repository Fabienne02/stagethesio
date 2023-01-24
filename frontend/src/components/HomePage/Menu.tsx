import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { HomeOutlined, AccountBalanceWalletRounded } from "@material-ui/icons";

import { useState } from "react";
import { Box } from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logo from "../../Images/Playtix-logo.png";

import { generatePath, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../pages/AppRoutes";

const data = [
  {
    name: "Home",
    icon: <HomeOutlined />,
    url: AppRoutes.Home,
  },
  {
    name: "Wallet",
    icon: <AccountBalanceWalletRounded />,
    url: AppRoutes.Wallet,
  },
];

function Menu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const getList = () => (
    <Box sx={{ width: 250 }} onClick={() => setOpen(false)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          padding: 4,
        }}
      >
        <Box
          component="img"
          sx={{
            height: "8vw",
            maxHeight: "3em",
          }}
          alt="Logo Playtix"
          src={Logo}
        />
      </Box>
      <Box sx={{ marginLeft: 2 }}>
        {data.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              navigate(generatePath(item.url));
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </Box>
    </Box>
  );
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>
        <MenuRoundedIcon sx={{ fontSize: "3em" }} />
      </Button>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </Box>
  );
}

export default Menu;
