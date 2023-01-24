import { Box } from "@mui/material";

interface AgeIconProps {
  children?: React.ReactNode;
}

const AgeIcon = (props: AgeIconProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "other.lightGrey",
        borderRadius: 4,
        padding: 1,
        width: "6em",
      }}
    >
      {props.children}
    </Box>
  );
};

export default AgeIcon;
