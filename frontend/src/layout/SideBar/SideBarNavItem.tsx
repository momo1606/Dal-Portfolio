import { useLocation } from 'react-router';
import { FC, MouseEventHandler } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { Icon, Link } from 'components';
import { LinkToPage } from 'utils/type';

interface Props extends LinkToPage {
  openInNewTab?: boolean;
  selected?: boolean;
  onClick?: MouseEventHandler;
}

const SideBarNavItem: FC<Props> = ({
  openInNewTab,
  icon,
  path,
  selected: propSelected = false,
  subtitle,
  title,
  onClick,
}) => {
  const location = useLocation();
  const selected =
    propSelected ||
    (path && path.length > 1 && location.pathname.startsWith(path)) ||
    false;

  return (
    <ListItemButton
      component={Link}
      selected={selected}
      to={path}
      href=""
      openInNewTab={openInNewTab}
      onClick={onClick}
    >
      <ListItemIcon>{icon && <Icon name={icon} />}</ListItemIcon>
      <ListItemText primary={title} secondary={subtitle} />
    </ListItemButton>
  );
};

export default SideBarNavItem;
