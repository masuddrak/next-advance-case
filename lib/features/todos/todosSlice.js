const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  value: 0,
};
export const todosSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});
