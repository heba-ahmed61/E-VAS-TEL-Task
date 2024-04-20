import React, { useState } from "react";
import DeleteBtn from "../DeleteBtn/Delete";
import EditBtn from "../EditBtn/EditBtn";
const PostCard = ({ item, index }) => {
  // show more card content
  const [showMore, setShowMore] = useState({ id: null, show: false })
  return (
    <>
      {/* Post Card Starts*/}
      <div className="post_card h-full">
        <div className="h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <div className="mb-5 text-2xl  tracking-tight text-gray-900 dark:text-white title_btns_ctr">{item?.title}
              <div className="items_btns">
                {/*Edit Btn Starts*/}
                <EditBtn item={item} />
                {/*Edit Btn Starts*/}
                {/*Delate Btn Starts*/}
                <DeleteBtn item={item} />
                {/*Delate Btn Ends*/}
              </div>
            </div>
            <p className={
              showMore?.show && showMore?.id == +index
                ? 'readmore my-3'
                : 'my-3'
            }>{item?.body}</p>
            <button id={+index} onClick={(e) => {
              const id = e.currentTarget.id
              id == null
                ? setShowMore({
                  id: +id,
                  show: true,
                })
                : id == showMore.id
                  ? setShowMore({
                    id: null,
                    show: false,
                  })
                  : setShowMore({
                    id: +id,
                    show: true,
                  })

            }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              {
                showMore?.show && showMore?.id == +index
                  ? 'Read Less'
                  : 'Read More'
              }
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>

      </div>
      {/* Post Card Ends*/}
    </>
  )
}
export default PostCard