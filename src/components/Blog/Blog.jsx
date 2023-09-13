import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmarks }) => {

    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;

    return (
        <div className=''>

            <div>
                <img className='w-full' src={cover} alt="" />
            </div>

            <div className='flex justify-between items-center mt-8'>
                <div className='flex gap-6'>
                    <img className='w-11' src={author_img} alt="" />
                    <div className=''>
                        <p className='text-2xl font-bold'>{author}</p>
                        <p className='text-xs font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div className='inline-flex gap-3'>
                    <p className='font-medium text-xl'>{reading_time} min read</p>
                    <button onClick={ () => handleBookmarks(blog)} className='text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            
            <div>
                <p className='text-4xl font-bold my-4'>{title}</p>
            </div>

            <div className='mb-16'>
                {
                    hashtags.map((hash, idx) => <span key={idx}className='ml-3 font-medium text-xl'><a href=''>#{hash}</a></span>)
                }
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired
}

export default Blog;