import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    postsData: [],
    editedPost: null
}
export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        storePosts: (state, action) => {
            state.postsData = action.payload;
        },
        setEditedPost: (state, action) => {
            state.editedPost = action.payload;
        }
    }
});
export const { storePosts, setEditedPost } = postsSlice.actions;
export default postsSlice.reducer


