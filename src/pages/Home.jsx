import React from "react"
import { Link } from "react-router-dom"

const Home = () =>{

  // Added fake data posts for testing
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/20537220/pexels-photo-20537220/free-photo-of-mar-puesta-de-sol-playa-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/5221265/pexels-photo-5221265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/15996499/pexels-photo-15996499/free-photo-of-puente-acera-canal-rio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/14566416/pexels-photo-14566416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];


    
      return(
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="post image" />
                        </div>
                        <div className="content">
                            <Link className="link" to={"/post/${post.id}"}>
                            <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
              </div>
            </div>
      );
    }

      
        


export default Home;