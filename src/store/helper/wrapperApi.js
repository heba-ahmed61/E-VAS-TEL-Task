import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseUrl = import.meta.env.VITE_API_BASEURL
export const wrapperAPI = createApi({
    reducerPath: "wrapperApi",
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({
        mode: "cors",
        baseUrl,
        prepareHeaders: (header) => {
            const token = localStorage.getItem("token");
            if (token) {
                header.set("Authorization", `Bearer ${token}`);
            }
            return header;
        },
    }),
    endpoints: () => ({}),
})