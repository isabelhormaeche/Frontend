import React, {useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Menu = ({cat}) =>{
  const [posts, setPosts] = useState([]);
   


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://filmlocationsapi.onrender.com/api/blogs/?cat=${cat}`);
        
        console.log(res.data); // show response data
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);


  
    return(
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) =>(
                <div className="post" key={post.id}>
                  <img src={`http://127.0.0.1:8000/${post?.image}`} alt="blog image" />
                    <h2>{post.title}</h2>
                    <Link className="link" to={`/blog/${post.id}`}>
                      <button>Read More</button>
                    </Link>
                    
                </div>
            ))}
            
            </div>
    )
}

export default Menu;