import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  // const handleMakeAsRead = (id, time) => {
    // setReadingTime(readingTime + time);
    // console.log('marked', time)
    //  remove the read blog from bookmark
    // console.log('remove bookmark', id)
    // const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    // setBookmarks(remainingBookmarks)
  // }

  const handleReading = (id,time) => {
    setReadingTime(readingTime + time);
    //  remove the read blog from bookmark
    const remainingBookmarks= bookmarks.filter(bookmark => bookmark.iD === id);
    setBookmarks(remainingBookmarks)

  }

  return (
    <div>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookmarks={handleAddBookmarks} handleReading={handleReading}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
