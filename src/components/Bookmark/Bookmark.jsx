import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {

    const {title} = bookmark;

    return (
        <div className='bg-gray-100 mt-4 rounded-lg'>
            <p className='font-bold p-5'>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;