import { wrapperAPI } from "../helper/wrapperApi";
export const PostsApi = wrapperAPI.injectEndpoints({
    reducerPath: "Posts",
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: (options) => `posts?_page=${options?.currentPage}&_limit=25`,
            providesTags: (result = [], error, arg) => [
                "Posts",
                ...result.map(({ id }) => ({ type: "Posts", id }))
            ],
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Posts", id: post.id }]
        }),
    })
})
export const {
    useGetAllPostsQuery,
    useDeletePostMutation
} = PostsApi;