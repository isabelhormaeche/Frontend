import React, {useState} from "react"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Create = () =>{
    const [value, setValue] = useState("");

    console.log(value);
    return(
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" />
                <div className="editorContainer">
                <ReactQuill className="editor" theme="snow" />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <input style={{display:"none"}} type="file" id="file" name="" />
                    <label className="file" htmlFor="file">Upload file</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    
                    <div className="cat">
                        <input type="radio"name="cat" value="city" id="city" class="radio-input"/>
                        <label htmlFor="city" class="radio-label">City</label>
                    </div>

                    <div className="cat">
                        <input type="radio"name="cat" value="buildings" id="buildings" class="radio-input"/>
                        <label htmlFor="buildings" class="radio-label">Buildings</label>
                    </div>
                    

                    <div className="cat">
                        <input type="radio"name="cat" value="nature" id="nature"class="radio-input" />
                        <label htmlFor="nature" class="radio-label">Nature</label>
                    </div>

                    <div className="cat">
                        <input type="radio"name="cat" value="industrial" id="industrial"class="radio-input" />
                        <label htmlFor="industrial" class="radio-label">Industrial</label>
                    </div>
                    
                    <div className="cat">
                        <input type="radio"name="cat" value="culture" id="culture" class="radio-input"/>
                        <label htmlFor="culture" class="radio-label">Culture</label>
                    </div>

                    <div className="cat">
                        <input type="radio"name="cat" value="transport" id="transport" class="radio-input"/>
                        <label htmlFor="transport" class="radio-label">Transport</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create