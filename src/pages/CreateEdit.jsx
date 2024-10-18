import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";


const CreateEdit = () => {
  // Reciving the state from Post.jsx:
  //<Link to={`/create?edit=${id}`} state={post}> <BsPencilSquare className="icon pencil" /> </Link>
  const location = useLocation();
  const state = location.state;

  // If state -> edit if state none -> create
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setTitle(state.title);
      setValue(state.desc);
      setCat(state.cat);
    } else {
      setTitle("");
      setValue("");
      setCat("");
    }
  }, [state]);

  const handleClick = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to be logged in to create or edit a post.");
      navigate("/login");
      return;
    }


    const formData = new FormData();
    formData.append("title", title);
    
    // Sanitize and remove <p> tags from the description before send to the server
    const sanitizedDesc = DOMPurify.sanitize(value);
    const cleanedDesc = sanitizedDesc.replace(/<\/?p>/g, '');
    
    formData.append("desc", cleanedDesc);
    formData.append("cat", cat);
    if (file) {
      formData.append("image", file); // backend name is "image"
    }

    
    // If state -> edit, "put" method and if state none -> create, "post" method
    try {
      const url = state ? `https://filmlocationsapi.onrender.com/api/blogs/update_blog/${state.id}` : "https://filmlocationsapi.onrender.com/api/blogs/";
      const method = state ? "put" : "post";

      await axios({
        method,
        url,
        data: formData,
        headers: { 
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });
      navigate("/"); // after blog updated go back home
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <input style={{ display: "none" }} type="file" id="file" name="" onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }} />
          <label className="file" htmlFor="file">Upload file</label>
          <div className="buttons">
            {/* <button>Save as a draft</button> FUTURE OPTION */}
            {/* Button changes from "PUBLIC" when creating to "UPDATE" if editing */}
            <button className="submit" onClick={handleClick}>{state ? "Update" : "Publish"}</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "city"} name="cat" value="city" id="city" className="radio-input" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="city" className="radio-label">City</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "buildings"} name="cat" value="buildings" id="buildings" className="radio-input" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="buildings" className="radio-label">Buildings</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "nature"} name="cat" value="nature" id="nature" className="radio-input" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="nature" className="radio-label">Nature</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="industrial" id="industrial" className="radio-input" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="industrial" className="radio-label">Industrial</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "culture"} name="cat" value="culture" id="culture" className="radio-input" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="culture" className="radio-label">Culture</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "transport"} name="cat" value="transport" id="transport" className="radio-input" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="transport" className="radio-label">Transport</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEdit;
