import React, {useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Menu = ({cat}) =>{
  const [posts, setPosts] = useState([]);
   


  useEffect(() => {
    console.log(cat); // Verificar el valor de 'cat'
    const fetchData = async () => {
      try {
        const category = cat || 'city'; // Added default value
        const res = await axios.get(`https://filmlocationsapi.onrender.com/api/blogs/?cat=${category}`);
        
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
                  <img src={`https://filmlocationsapi.onrender.com/${post?.image}`} alt="blog sample" />
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