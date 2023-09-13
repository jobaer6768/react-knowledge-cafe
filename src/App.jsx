import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove read items
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='flex justify-between gap-10 mt-14'>
          <Blogs
            handleBookmarks={handleBookmarks}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks
            readingTime={readingTime}
            bookmarks={bookmarks}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
