import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: "userAppointments",
  initialState,
  reducers: {
    setAppointments(state, action) {
      state.appointments = action.payload;
    },
    clearAppointments(state) {
      state.appointments = [];
    },
  },
});

export const { setAppointments, clearAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
