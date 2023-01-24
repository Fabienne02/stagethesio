import { Button, SxProps } from "@mui/material";

interface PrimaryButtonProps {
  children?: React.ReactNode;
  onClick?: any;
  sx?: SxProps;
}

// @TODO: deprecate >> use default button theme style

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <Button
      sx={{
        backgroundColor: "other.neutralGrey",
        color: "other.black",
        borderRadius: 1.2,
        padding: 3,
        width: "100%",
        ...props.sx,
      }}
      onClick={props.onClick}
    >
      {/* COMPONENT ICON LATEN BEPALEN IPV ALGEMEN PROPS */}
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
