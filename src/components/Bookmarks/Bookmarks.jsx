
import { PropTypes } from 'prop-types';
import Bookmark from './../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 rounded-md py-4 ml-4 mt-6' >
            <h2 className='text-2xl p-2 border-2 rounded-md mx-2.5 border-purple-700'>Spend time on read: {readingTime} min</h2>
            <h2 className='text-2xl p-2'>Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} readingTime={readingTime}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.inRequired,
    readingTime: PropTypes.func.inRequired,
}

export default Bookmarks;