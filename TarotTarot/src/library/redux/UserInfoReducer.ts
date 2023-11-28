import { createSlice } from "@reduxjs/toolkit";

// Declare Initial State
const initialState = {
    id: "",
    username: "",
    profilePic: "",
    createdAt: "",
};

const userInfoSlice = createSlice({
    name: "userinfo",
    initialState,
    reducers: {
        storeUserInfo(state, action) {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.profilePic = action.payload.profilePic;
            state.createdAt = action.payload.createdAt;
        },
    },
});

export const { storeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
export type UserInfo = typeof initialState;
