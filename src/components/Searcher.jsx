import React from 'react'
import MyButton from '../ui/MyButton'
import { useDispatch, useSelector } from "react-redux";
import {setSearchValue} from '../store/searchSlice'
import { getNewPosts, getPostAPI, setPage } from '../store/postSlice';

export default function Searcher() {
    const { posts } = useSelector((state) => state.post);
    const { searchValue } = useSelector((state) => state.search);
    const dispatch=useDispatch()
  
    const handleSearch = () => {
      const filteredData = posts.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    dispatch(getNewPosts(filteredData))
    dispatch(setSearchValue(''))
    dispatch(setPage(1))
    };
    const clearPost=()=>{
        dispatch(getPostAPI())
        dispatch(setPage(1))
    }
  
    const handleInputChange = (e) => {
        dispatch(setSearchValue(e.target.value));
    };
  return (
    <div>
      <div className="mt-1 flex gap-x-2">
        <MyButton fn={clearPost} text="смотреть все"/>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          name="email"
          className="shadow-sm px-3 py-2 my-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Поиск"
        />
        <MyButton text="поиск" fn={handleSearch}/>
      </div>
    </div>

  )
}
