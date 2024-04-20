import { configureStore } from '@reduxjs/toolkit'
import { wrapperAPI } from "./helper/wrapperApi.js"
import postsSlice from './postsSlice.js'
export const Store = configureStore({
    reducer: {
        posts: postsSlice,
        [wrapperAPI.reducerPath]: wrapperAPI.reducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        wrapperAPI.middleware
    ]

})