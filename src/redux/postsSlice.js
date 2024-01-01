import { createSlice } from "@reduxjs/toolkit";
export const postsSlice = createSlice({
    name:'posts',
    initialState:{
        items:[]
    },
    reducers:{
       addPosts:function(state,action){
        state.items.push(action.payload)
       },
       deletePosts: function(state,action){
        state.items=state.items.filter(item => item.id != action.payload)
       }
       
    },
})
export const {addPosts,deletePosts}=postsSlice.actions
export default postsSlice.reducer