import PropTypes from 'prop-types'

function Bookmark({bookmark}) {
    const {title} = bookmark;
  return (
    <div className=''>
        <h3 className='text-xl bg-gray-400 rounded-lg p-4 m-2.5'>{title}</h3>
    </div>

  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark
