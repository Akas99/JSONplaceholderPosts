import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostAPI } from "../store/postSlice";
import { useEffect } from "react";
import PostItem from "./PostItem";
import Loader from "./Loader"
import Pagination from "./Pagination";
import Searcher from "./Searcher";

export default function PostList() {
  const { posts, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAPI());
  }, [dispatch]);
  const item=posts && posts.map((item,index) => {
    return <PostItem 
    key={item.id}
    id={item.id}
    title={item.title}
    body={item.body}
    userId={item.userId}
    ind={index}
    />
  })
  return (
    <>
    <div className="container pt-3 flex flex-col justify-center items-center min-h-screen">
      
      {posts.length!==0 && !error?<Searcher />:null}
      {posts.length===0 && !error?<Loader/>:null}
      {error?<h1 className="text-2xl">ошибка: {error}</h1>:null}
      <ul role="list" className="w-full space-y-3">
        {item}
      </ul>
    </div>
    
    {posts.length!==0 && !error?<Pagination />:null}
    </>
  );
}
