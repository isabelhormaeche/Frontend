import { useState, useEffect } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import DOMPurify from "dompurify";

import Menu from "../components/menu";
import userImage from "../assests/pexels-freestockpro-1172253.jpg";

const Post = () => {
    const [post, setPost] = useState({});

    const navigate = useNavigate();

     const { id } = useParams(); // get the postId from Params of  URL
     console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}`);
                // const res = await axios.get(`http://127.0.0.1:8000/api/blog/6`);
               
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    const handleDelete = async ()=>{
        try {
          await axios.delete(`http://127.0.0.1:8000/api/blogs/${id}`);
          
          navigate("/")
        } catch (err) {
          console.log(err);
        }
      }

    // Sanitize and remove <p> tags from the description 
    const removePTags = (htmlString) => {
        return htmlString.replace(/<\/?p>/g, '');
    }

    const sanitizedDesc = DOMPurify.sanitize(post.desc);
    const cleanedDesc = removePTags(sanitizedDesc);







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
                       
                        <AiOutlineDelete className="icon trash" onClick={handleDelete}/>
                    </div>
                </div>
                <h1>{post.title}</h1>
                {/* <p>{post.desc}</p> */}
                <p dangerouslySetInnerHTML={{ __html: cleanedDesc }}></p>
            </div>
            {/* pass props "cat" to Menu */}
            <Menu cat={post.cat}/>  
        </div>
    );
};

export default Post;

