import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link} from "react-router-dom";
import DOMPurify from "dompurify";



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

  // Sanitize and remove <p> tags from the description 
  const removePTags = (htmlString) => {
    return htmlString.replace(/<\/?p>/g, '');
}



  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => {
          const sanitizedDesc = DOMPurify.sanitize(post.desc);
          const cleanedDesc = removePTags(sanitizedDesc);

          return (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`http://127.0.0.1:8000/${post.image}`} alt="blog" />
              </div>
              <div className="content">
                <Link className="link" to={`/blog/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: cleanedDesc }}></p>
                <Link className="link" to={`/blog/${post.id}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default Home;

