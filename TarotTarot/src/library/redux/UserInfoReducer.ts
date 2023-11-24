import { createSlice } from "@reduxjs/toolkit";

// Declare Initial State
const initialState = {
    id: "",
    username: "",
    profilePic: "",
};

const userInfoSlice = createSlice({
    name: "userinfo",
    initialState,
    reducers: {
        storeUserInfo(state, action) {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.profilePic = action.payload.profilePic;
        },
    },
});

export const { storeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
