const initial = [];

const Displaydata = (state = initial, action) => {
  switch (action.type) {
    case "display":
      let data = action.payload.id;
      const exist = state.find((item) => item.id === data);
      if (exist) {
        return state.map((item) => {
          if (item.id === data) {
            return {
              ...item,
              qunty: item.qunty + 1,
            };
          }
          return item;
        });
      }

      return [...state, action.payload];
    case "addcart":
      let abc = action.payload;
      abc.qunty = action.payload.qunty + 1;
      // console.log("REDUCER", abc.qunty);

      return [...state];
    case "removecart":
      let abc1 = action.payload;
      // console.log(action.payload.qunty);
      if (abc1.qunty !== 0) {
        abc1.qunty = action.payload.qunty - 1;
      }
      let abcd = state.filter((item) => item.qunty !== 0);

      return (state = abcd);

    case "viewdetails":
      let xyz = action.payload;
      return;
    case "cleardata":
      return (state = "");
    case "logout":
      return (state = []);
    default:
      return state;
  }
};
export default Displaydata;
