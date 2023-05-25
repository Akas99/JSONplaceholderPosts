import {configureStore} from "@reduxjs/toolkit"
import postSlice from "./postSlice"
import searchSlice from "./searchSlice"

export default configureStore({
    reducer:{
        post: postSlice,
        search: searchSlice
    }
})