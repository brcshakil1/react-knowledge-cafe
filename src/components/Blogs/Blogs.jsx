import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from 'prop-types';


const Blogs = ({handleAddBookmarks, handleReading}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map((blog, idx) => <Blog 
                key={idx} blog={blog} 
                handleAddBookmarks={()=> handleAddBookmarks(blog)}
                handleReading={handleReading}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func,
    handleReading: PropTypes.func
}

export default Blogs;