import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditedPost } from "../../store/postsSlice";
const EditBtn = ({ item }) => {
    const dispatch = useDispatch();
    const { postsData: storedPosts, editedPost } = useSelector((state) => state.posts);
    function editPost(postId) {
        const targetPost = storedPosts?.find(post => post.id === postId);
        dispatch(setEditedPost(targetPost));
    }
    return (
        <button className="inline-flex mr-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring--300 dark:bg-red-600 dark:hover:bg-yellow-700 dark:focus:ring-red-800" onClick={() => editPost(item?.id)}>Edit</button>
    )
}
export default EditBtn