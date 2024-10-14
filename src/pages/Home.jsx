import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link} from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
   const location = useLocation();
   console.log(location);
   const searchParams = new URLSearchParams(location.search);
   const cat = searchParams.get('cat');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/blog/${cat ? `?cat=${cat}` : ''}`);
        console.log(res.data); // show response data
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
                {/* <img src={post.image} alt="post image" />     */}
              <img src={`http://127.0.0.1:8000/${post.image}`} alt="blog" />
            </div>
            <div className="content">
              <Link className="link" to={`/blog/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link className="link" to={`/blog/${post.id}`}>
                  <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

