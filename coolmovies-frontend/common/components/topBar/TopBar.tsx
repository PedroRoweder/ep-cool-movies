import {
  AppBar,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Home, Menu, RateReview } from "@mui/icons-material";
import styles from "./styles";
import { useState } from "react";
import { useRouter } from "next/router";

interface Props {
  title: string;
}

const TopBar = ({ title }: Props) => {
  const { push } = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((isOpen) => !isOpen);

  return (
    <AppBar position="static" color="primary" css={styles.root}>
      <IconButton
        size="medium"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <Typography variant="body1" css={styles.title}>
        {title}
      </Typography>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => push("/")}>
            <ListItemIcon>
              <Home color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => push("/reviews")}>
            <ListItemIcon>
              <RateReview color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItemButton>
        </ListItem>
      </Drawer>
    </AppBar>
  );
};

export default TopBar;
