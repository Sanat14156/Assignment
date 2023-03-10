import React, { useEffect, useState } from 'react'

const App = () => {
  let [post,setPost]=useState([]);

  useEffect(()=>{
    let fetchPosts=async()=>{
      let res= await fetch(`https://dummyjson.com/posts`);
      let data=await res.json();
      console.log(data);
      let {posts}=data;
      setPost(posts);
    }
    fetchPosts();
  },[])
  return (
    <>{post.map(value=>{
      return(
        <h2 key={value.id}>{value.id}. {value.title}</h2>
      )
    })}</>
  )
    
}

export default App
