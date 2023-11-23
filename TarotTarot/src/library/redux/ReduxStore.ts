import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import logger from "redux-logger";

// Import Reducers
import userInfoSlice from "./UserInfoReducer";

// Make combined reducers and make it persist -----------
// 1. Make combined reducers
const reducers = combineReducers({
    userInfo: userInfoSlice,
});

// 2. Declare configuration for make store persist
// We should write whitelist to which reducer will be persist
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["userInfo"],
};

// 3. Make persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Make store based on persisted reducer and make persisted store ------------
const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger],
});

const persistedStore = persistStore(store);

// ------------------------------------
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
export const useAppDispatch = () => useDispatch<StoreDispatch>();
export { store, persistedStore };
