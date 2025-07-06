import dataBaseService from "../../appwrite/config.js";
import {Link} from "react-router-dom";

const Post = ({$id, title, featureImage}) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 '>
                <div className="w-full justify-center mb-4 ">
                    <img alt={title} src={dataBaseService.getFilePreview(featureImage)} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold '>{title}</h2>
            </div>
        </Link>
    )
}

export default Post
