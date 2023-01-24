import { Button, SxProps } from "@mui/material";

interface RoundedIconProps {
  children?: React.ReactNode;
  sx?: SxProps;
  onClick?: any;
}

const RoundedIcon = (props: RoundedIconProps) => {
  return (
    <Button sx={props.sx} onClick={props.onClick} color="primary">
      {props.children}
    </Button>
  );
};

export default RoundedIcon;
