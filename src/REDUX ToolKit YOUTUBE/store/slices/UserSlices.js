import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUSer(state, action) {},
    removeUSer(state, action) {},
    deleteUSer(state, action) {},
  },
});

export default userSlice.reducer;
