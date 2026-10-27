import React, { useState,useEffect } from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://www.bing.com/th/id/OIP.p0yE7llkTkp59R0_SFoFvAHaEo?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=ImgAns&rm=2",
            caption: "Beautiful Secnary",
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])

    return (
        <section className='feed-section' >
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h3>No posts available</h3>
                )
            }
        </section>
    )
}

export default Feed


