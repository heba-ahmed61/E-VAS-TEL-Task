import React, { useEffect, useState } from "react";
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { setEditedPost, storePosts } from "../../store/postsSlice";
const PostForm = () => {
    const dispatch = useDispatch();
    const { postsData: storedPosts, editedPost } = useSelector((state) => state.posts);
    const [formData, setFormData] = useState({
        title: '',
        desc: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault()

        if (editedPost) {
            const neweditedPost = { ...editedPost, title: formData.title, body: formData.desc }
            const newStoredPosts = storedPosts.filter(el => el.id != editedPost.id);
            const newPosts = [neweditedPost, ...newStoredPosts];
            dispatch(storePosts(newPosts));
            dispatch(setEditedPost(null));
        } else {

            const newPost = {
                userId: 1,
                id: storedPosts?.length + 1,
                title: formData?.title,
                body: formData?.desc
            }
            const newPosts = [newPost, ...storedPosts];
            dispatch(storePosts(newPosts));

        }
        clearInputs();
    }
    const clearInputs = () => {
        setFormData({
            title: '',
            desc: ''

        })
    }
    useEffect(() => {
        if (editedPost) {
            setFormData({
                title: editedPost.title,
                desc: editedPost.body,
            })
        }
    }, [editedPost])
    return (
        <div className="post_form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1 className="bold mb-3">{editedPost ? "Edit Post" : "Add Post"}</h1>
                <input type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} />
                <textarea onChange={(e) => setFormData({ ...formData, desc: e.target.value })} value={formData.desc} />
                <button type="submit" disabled={!(formData.title && formData.desc) && !editedPost} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  dark:focus:ring-blue-800">
                    {editedPost ? "Edit" : "Add"}
                </button>
            </form>
        </div>
    )
}
export default PostForm