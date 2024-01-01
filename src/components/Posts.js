import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, deletePosts } from "../redux/postsSlice";
export default function Posts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={title}
          placeholder="enter Post Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="enter Post Desc"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addPosts({ id: posts.length + 1, title, description }));
            setTitle("");
            setDescription("");
          }}
        >
          Add Post
        </button>
      </div>

      <div className="posts">
        {posts.length > 0
          ? posts.map((post) => (
              <div key={post.id} className="post">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button onClick={() => dispatch(deletePosts(post.id))}>
                  Delete
                </button>
                <br/>
                {isEdit && 
                <>
                <input type="text" placeholder="updated title"/>
                <input type="text" placeholder="updated description"/>
                <button>Update</button>
                </>
                }
              </div>
            ))
          : "there is no post"}
      </div>
    </div>
  );
}
