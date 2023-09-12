import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <header className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>

            {blogs.map(blog => <Blog key={blog.iD} blog={blog}></Blog>)}
        </header>
    );
};


export default Blogs;