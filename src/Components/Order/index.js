import React from "react";
import OrderForm from "./OrderForm";
import { useForm } from "../../hooks/useForm";
import { Grid } from "@material-ui/core";
import SearchedFoodItems from "./SearchedFoodItems";
import OrderedFoodItems from "./OrderedFoodItems";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
  orderMasterId: 0,
  orderNumber: generateOrderNumber(),
  customerId: 0,
  pMethod: "none",
  gTotal: 0,
  deletedOrderItemIds: "",
  orderDetails: [],
});

export default function Order() {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  } = useForm(getFreshModelObject);

  const addFoodItem = (foodItem) => {
    let x = {
      orderMasterId: values.orderMasterId,
      orderDetailId: 0,
      foodItemId: foodItem.foodItemId,
      quantity: 1,
      foodItemPrice: foodItem.foodItemPrice,
      foodItemName: foodItem.foodItemName,
    };
    setValues({
      ...values,
      orderDetails: [...values.orderDetails, x],
    });
  };

  const removeFoodItem = (index, id) => {
    let x = { ...values };
    x.orderDetails = x.orderDetails.filter((_, i) => i != index);
    setValues({ ...x });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <OrderForm {...{ values, errors, handleInputChange }} />
      </Grid>
      <Grid item xs={6}>
        <SearchedFoodItems {...{ addFoodItem }} />
      </Grid>
      <Grid item xs={6}>
        {console.log(values)}
        <OrderedFoodItems
          {...{ orderedFoodItems: values.orderDetails, removeFoodItem }}
        />
      </Grid>
    </Grid>
  );
}
