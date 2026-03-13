import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice";
import productsReducer from "./productSlice";

export const store = configureStore({
	reducer: {
		dashboard: dashboardReducer,
		products: productsReducer,
	},
});
