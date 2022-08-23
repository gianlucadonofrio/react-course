import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlide";

export const SideBarItem = ({ title = "", body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);
  const newBody = useMemo(() => {
    return body.length > 17 ? body.substring(0, 17) + "..." : body;
  }, [body]);

  const onClickActiveNote = () => {
    dispatch(
      setActiveNote({
        title,
        body,
        id,
        date,
        imageUrls,
      })
    );
  };
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
