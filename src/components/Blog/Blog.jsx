import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog, handleAddBookmarks, handleMakeAsRead}) => {
    const {title, hashtags, cover, readingTime, author, authorImg, postedDate} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-[50%]' src={authorImg} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{readingTime} min read</span>
                    <button className='ml-2 text-red-600 text-2xl' onClick={handleAddBookmarks}> <BsBookmarks /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{hashtags.map((hash, idx) => <span key={idx}><a href="">{hash} </a></span>)}</p>
            <button className='text-purple-600 text-xl mt-2.5 underline' onClick={handleMakeAsRead}>Make as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleMakeAsRead: PropTypes.func.isRequired,

}

export default Blog;