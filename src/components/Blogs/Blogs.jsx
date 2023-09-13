import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
         .then(res => res.json())
         .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h5>Blogs: {blogs.length}</h5>
        </div>
    );
};

export default Blogs;