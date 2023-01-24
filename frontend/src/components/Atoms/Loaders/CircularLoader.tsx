import {
  CircularProgress,
  CircularProgressProps,
  SxProps,
} from "@mui/material";
import { FC } from "react";

export interface CircularLoaderProps extends CircularProgressProps {
  align?: "left" | "right" | "center";
  marginTop?: number;
  size?: "sm" | "md" | "lg";
  sx?: SxProps;
}

const sm = 30;
const lg = 60;
const md = 40;

const getSize = (size: CircularLoaderProps["size"]): number => {
  switch (size) {
    case "sm":
      return sm;
    case "lg":
      return lg;
    default:
      return md;
  }
};

const CircularLoader: FC<CircularLoaderProps> = ({
  align = "unset",
  marginTop = 0,
  size = "md",
  ...props
}) => {
  return (
    <div
      style={{
        display: align !== "unset" ? "flex" : "block",
        marginTop: marginTop,
        justifyContent: align,
      }}
    >
      <CircularProgress {...props} size={getSize(size)} sx={props.sx} />
    </div>
  );
};

export default CircularLoader;
