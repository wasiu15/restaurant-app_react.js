import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Paper,
} from "@material-ui/core";
import React from "react";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

export default function OrderedFoodItems(props) {
  const { orderedFoodItems, removeFoodItem } = props;
  return (
    <List>
      <div>Hello from the other side</div>
      {orderedFoodItems.map((item, idx) => (
        <Paper key={idx}>
          <ListItem>
            <ListItemText
              primary={item.foodItemName}
              primaryTypographyProps={{
                component: "h1",
                style: {
                  fontWeight: "500",
                  fontSize: "1.2em",
                },
              }}
            />
            <ListItemSecondaryAction>
              <IconButton
                disableRipple
                onClick={(e) => removeFoodItem(idx, item.orderDetailsId)}
              >
                <DeleteTwoToneIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      ))}
    </List>
  );
}
