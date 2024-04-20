import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storePosts } from "../../store/postsSlice";
const DeleteBtn = ({ item }) => {
    const dispatch = useDispatch();
    const storedPosts = useSelector((state) => state.posts.postsData);
    function deletePost(postId) {
        const newPosts = storedPosts?.filter(post => post.id != postId);
        dispatch(storePosts(newPosts));
    }
    return (
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => deletePost(item?.id)}>Delete</button>
    )
}
export default DeleteBtn