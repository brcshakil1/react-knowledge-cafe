import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {title, hashtags, cover, readingTime, author, authorImg, postedDate} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-[50%]' src={authorImg} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{readingTime} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{hashtags.map((hash, idx) => <span key={idx}><a href="">{hash} </a></span>)}</p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;