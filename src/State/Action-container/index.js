export const display = (items) => {
  // console.log("action", items);
  return {
    type: "display",
    payload: items,
  };
};
export const addcart = (items) => {
  return {
    type: "addcart",
    payload: items,
  };
};
export const removecart = (items) => {
  console.log("action", items);
  return {
    type: "removecart",
    payload: items,
  };
};
export const viewdetails = (items) => {
  return {
    type: "viewdetails",
    payload: items,
  };
};
export const logout = () => {
  return {
    type: "logout",
  };
};
export const cleardata = () => {
  return {
    type: "cleardata",
  };
};
