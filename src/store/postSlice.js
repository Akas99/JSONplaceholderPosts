import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPostAPI=createAsyncThunk(
    'post/getPost',
    async(_,{rejectWithValue,dispatch})=>{
        try{
            const res=await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            dispatch(getNewPosts(res.data))
        }catch(e){
            dispatch(isError(e.message))
            return rejectWithValue(e.message)
        }
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts:[],
        error:'',
        currentPage: 1,
        itemsPerPage: 10,
    },
    reducers: {
        getNewPosts(state,action){
            state.posts=action.payload
        },
        isError(state,action){
            state.error=action.payload
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setPrevPage: (state, action) => {
            state.currentPage = state.currentPage-1;
        },
        setNextPage: (state, action) => {
            state.currentPage = state.currentPage+1;
        },
    },
})

export const { isError, setPage, setPrevPage, setNextPage, getNewPosts} = postSlice.actions
export default postSlice.reducer