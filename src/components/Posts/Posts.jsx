import { useEffect, useState } from "react";
import { useGetAllPostsQuery } from "../../store/service/posts";
import PostCard from "../PostCard/PostCard";
import PaginationComponent from "../Pagination/Pagination";
import SearchForm from "../SearchForm/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { storePosts } from "../../store/postsSlice";
const Posts = () => {
    // dispatch
    const dispatch = useDispatch()
    // get data from selector
    const storedPosts = useSelector((state) => state.posts.postsData)
    // current Page Number
    const [currentPage, setCurrentPage] = useState(1)
    //searchtext
    const [searchText, setSearchText] = useState('')
    // search posts 
    const [searchPosts, setSearchPosts] = useState(null);
    //update searchList at delete
    const [updateSearchList, setUpdateSearchList] = useState(false)
    // search posts fn
    function serachPosts(keyword) {
        setSearchText(keyword);
        if (keyword) {
            const searchList = storedPosts.filter((item) => item.title.includes(keyword));
            setSearchPosts(searchList);
        } else {
            setSearchPosts([]);
        }
    }
    // Get Posts Query
    const { data: posts, isLoading, error } = useGetAllPostsQuery({ currentPage });
    //handle loading and error
    useEffect(() => {
        dispatch(storePosts(posts));
    }, [posts])

    useEffect(() => {

        if (searchPosts) {
            serachPosts(searchText)
        }

    }, [storedPosts])
    if (isLoading) return <h1 className="ctr">Loading...</h1>;
    if (error) return <h1 className="ctr">Error occurred</h1>;
    return (
        <>
            {/*Search Form Starts*/}
            <div className="">
                <SearchForm serachPosts={serachPosts} />
            </div>
            {/*Search Form ends*/}
            {/*Get Posts Starts*/}
            <div className="posts_warpper  mt-5 mb-4">
                <div className="grid  gap-3">

                    {storedPosts?.length && !searchPosts?.length && !searchText ? (
                        <>
                            {storedPosts?.map((item, index) => (
                                <div key={index} className=" mb-3">
                                    <PostCard
                                        item={item} index={index} />
                                </div>
                            ))}
                        </>
                    ) : (
                        searchPosts?.length ? (
                            searchPosts?.map((item, index) => (
                                <div key={index} className=" mb-3">
                                    <PostCard
                                        item={item} index={index} />
                                </div>
                            ))
                        ) : !searchPosts?.length && searchText ? (
                            <p className="w-100">No Result Found for {searchText} </p>
                        ) : (
                            <p className="w-100">No Posts Found</p>
                        )
                    )}
                </div>
            </div>
            {/*Get Posts Ends*/}
        </>
    );
};
export default Posts