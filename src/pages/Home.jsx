import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link} from "react-router-dom";
import DOMPurify from "dompurify";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from "../assests/pexels-freestockpro-1172253.jpg";
import image2 from "../assests/free-photo-of-mar-puesta-de-sol-playa-arena.jpeg";
import image3 from "../assests/pexels-mark-neal-201020-3830433.jpg";
import image4 from "../assests/pexelspacofdezsaura1.jpg";



const Home = () => {
  const [posts, setPosts] = useState([]);
   const location = useLocation();
   console.log(location);
   const searchParams = new URLSearchParams(location.search);
   const cat = searchParams.get('cat');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://filmlocationsapi.onrender.com/api/blogs/${cat ? `?cat=${cat}` : ''}`);
        // console.log(res.data); // show response data
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
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={image1} alt="Person with his back turned looking at the landscape" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src={image2} alt="Beach waves surfer" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src={image3} alt="Museum building" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src={image4} alt="Iron suspension bridge" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Carousel>
      <div className="posts">
        {posts.map((post) => {
          const sanitizedDesc = DOMPurify.sanitize(post.desc);
          const cleanedDesc = removePTags(sanitizedDesc);

          return (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`https://filmlocationsapi.onrender.com/${post.image}`} alt="blog" />
              </div>
              <div className="content">
                {/* <Link className="link" to={`/blog/${post.id}`}> */}
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

