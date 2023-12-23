import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: localStorage.getItem('zone_user_token') ?? '',
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
      localStorage.setItem('zone_user_token', action.payload.toString());
    },
    removeUserToken: (state) => {
      state.userToken = '';
      localStorage.removeItem('zone_user_token');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserToken, removeUserToken } = userSlice.actions;

export default userSlice.reducer;
