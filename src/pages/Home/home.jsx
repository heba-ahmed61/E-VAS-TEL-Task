import React from "react";
import Posts from "../../components/Posts/Posts";
import PostForm from "../../components/PostForm/PostForm";
const Home = () => {
    return (
        <div className='grid lg:grid-cols-12 posts_forms_wrapper '>
            <div className='posts lg:col-span-9'>
                {/*Get Posts Component Starts*/}
                <Posts />
                {/*Get Posts Component Ends*/}
            </div>

            <div className='posts_form lg:col-span-3'>
                {/* Posts Form Component Starts*/}
                <div><PostForm /></div>
                {/*Posts Form Component Ends*/}
            </div>
        </div>
    )
}
export default Home