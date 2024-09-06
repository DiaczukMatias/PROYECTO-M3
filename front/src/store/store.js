import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import appointmentsReducer from "./slices/appointmentsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userAppointments: appointmentsReducer,
  },
});

export default store;
