import React from "react";
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {

    return(
        <div className='single'>
            <div className="content">
                <img src="https://images.pexels.com/photos/19430803/pexels-photo-19430803/free-photo-of-a-close-up-of-a-wave-crashing-into-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load.com/photo/a-plant-in-front-of-a-green-door-18368871/" alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/17120644/pexels-photo-17120644/free-photo-of-a-black-and-white-dog-sitting-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                    <div className="info">
                        <span>Jhon</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                        <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, enim.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officia rem commodi quo nesciunt cupiditate unde id recusandae consectetur perferendis nam, dolorum enim eligendi sed debitis, ipsa molestias, nobis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo repudiandae nostrum facere. Libero, consequatur reprehenderit repudiandae molestias exercitationem veniam vero. Voluptatem exercitationem dolorum placeat autem aut minus totam expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint magnam vitae, ratione eum aperiam dolor minus, temporibus quo veniam dolorum quasi, esse fuga quis autem possimus aliquam nisi non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro minima commodi, totam deleniti deserunt enim voluptatem. Saepe velit dicta tempora ex quas, unde quidem perspiciatis facere ut odio voluptatibus.
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic eveniet non dolore excepturi nam. Consectetur nemo ea officia veritatis qui, voluptas dolores obcaecati doloremque pariatur neque quos labore deserunt?
                    </p>
                </p>
            </div>
           <Menu />
        </div>
    );
};

export default Single;
