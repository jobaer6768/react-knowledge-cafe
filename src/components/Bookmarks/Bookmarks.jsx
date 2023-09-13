import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-200">
            <div className='p-8'>
                <div className='px-6 py-5 border-2 border-purple-500 rounded-lg'>
                    <p className='text-purple-500 text-2xl font-bold'>Spend Time on Read: {readingTime}</p>
                </div>
            </div>
            <div className="p-8">
                <h1 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
            </div>

            <div className='px-4'>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;