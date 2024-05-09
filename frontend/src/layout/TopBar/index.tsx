import { FC, ReactNode } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useAppStore } from 'store';

interface Props {
  content?: ReactNode;
}

const TopBar: FC<Props> = ({ content, ...restOfProps }) => {
  const [state] = useAppStore();
  return (
    <AppBar
      component="div"
      sx={{
        background: state.darkMode ? "#242424" : "#fff",
        borderBottom: "1px solid #fcd405",
        boxShadow: "none",
      }}
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1, width: "100%" }}>
        {content}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
