import React from "react"
import {Link} from "react-router-dom"
import { AiOutlineDelete } from "react-icons/ai";
import {BsPencilSquare} from "react-icons/bs";

import Menu from "../components/menu";



const Post = () =>{
    return(
        // two elements:. content [img + user(img+name+date)] + menu (right side bar)
        <div className="post">
            <div className="content">content
                <img src="https://images.pexels.com/photos/20537220/pexels-photo-20537220/free-photo-of-mar-puesta-de-sol-playa-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/6272161/pexels-photo-6272161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                    <div className="info">
                        <span>Isa</span>
                        <p>Posted 3 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={"/create?edit=2"}>
                            <BsPencilSquare className="icon pencil" />
                        </Link>
                        <AiOutlineDelete className="icon trash" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non nostrum asperiores distinctio quas consequuntur magni facilis, id ad voluptates odit molestiae numquam, accusantium doloribus veniam delectus veritatis! Earum, voluptatibus?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consequuntur eligendi in! Saepe ipsam, quo facere necessitatibus quidem dolores omnis? Pariatur omnis cupiditate numquam? Quibusdam laudantium possimus velit mollitia, accusantium, ut cum explicabo ab, reiciendis dolor neque similique cupiditate in?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, laudantium. Nam molestias minima corrupti aliquid obcaecati, cupiditate distinctio saepe consequatur ipsam sit ratione earum odio, autem ex magni dolore, possimus dolor quidem! Ipsum placeat, eum officiis at expedita sapiente maxime corrupti accusantium in fuga eius repellendus, veniam voluptas aut? Accusamus consequatur excepturi perferendis facilis sit assumenda harum necessitatibus vero vitae!</p>
                <p>Recusandae, nulla. Quo dolorem, officiis dolore harum neque at tempore tenetur quod fugit sapiente, quasi aspernatur earum cum ratione voluptatem similique eligendi inventore ipsam ea nemo vitae enim recusandae. Aut ratione eum blanditiis sed sint iure magni laudantium facere corporis odio! Explicabo asperiores neque incidunt rem? Maxime, eum quam pariatur voluptas impedit facilis incidunt, in illo nihil, quasi nisi saepe.</p>
            </div>   

            <Menu />
       
        </div>
    )
}

export default Post