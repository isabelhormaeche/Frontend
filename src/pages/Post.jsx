import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import userImage from "../assests/pexels-freestockpro-1172253.jpg";
import axios from "axios";

import Menu from "../components/menu";

const Post = () => {
    const [post, setPost] = useState({});
     const { id } = useParams(); // get the postId from Params of  URL
     console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/blog/${id}`);
                // const res = await axios.get(`http://127.0.0.1:8000/api/blog/6`);
               
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="post">
            <div className="content">
                <img src={`http://127.0.0.1:8000/${post?.image}`} alt="blog" />
                <div className="user">
                    <img src={userImage} alt="user" />
                    <div className="info">
                        <span>Isa</span>
                        <p>Posted 3 days ago</p>
                    </div>
                    <div className="edit">
                        {/* Pass the state ***************************** */}
                        <Link to={`/create?edit=${id}`} state={post}>
                            <BsPencilSquare className="icon pencil" />
                        </Link>
                        <AiOutlineDelete className="icon trash" />
                    </div>
                </div>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
            </div>
            {/* pass props "cat" to Menu */}
            <Menu cat={post.cat}/>  
        </div>
    );
};

export default Post;

