import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testName: "This is Test name",
  testAge: 24,
  testItems: ["Kareem", "Mahmoud", "Noga", "LALA"],
};

const testReduxSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    updateName: (state) => {
      state.name = "Changed Name Now";
    },
  },
});

export const { updateName } = testReduxSlice.actions;
export default testReduxSlice.reducer;
