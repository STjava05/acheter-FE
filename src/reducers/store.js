import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import { editSlice } from "../components/EditSlice";


const store = configureStore({
    reducer: {
       api: apiReducer,
         edit: editSlice.reducer,
        

    },
});

export default store;