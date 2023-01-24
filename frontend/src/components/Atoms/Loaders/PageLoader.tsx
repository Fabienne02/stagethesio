import { Box, LinearProgress, LinearProgressProps } from '@mui/material';
import { FC } from 'react';

export type PageLoaderProps = LinearProgressProps;

const PageLoader: FC<PageLoaderProps> = (props) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: (theme) => theme.zIndex.drawer - 1, // Drawer = 1200, see https://mui.com/material-ui/customization/default-theme/
        height: 0,
        overflow: 'visible',
      }}
    >
      <LinearProgress color="secondary" {...props} />
    </Box>
  );
};

export default PageLoader;
