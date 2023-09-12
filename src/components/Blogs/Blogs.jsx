import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <header className="md:w-2/3">
            <h1>Blogs</h1>
        </header>
    );
};


export default Blogs;