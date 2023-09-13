import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog => {
    const {title} = blog;

    const newBookmarks = [...bookmarks, title]
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='flex justify-between gap-10 mt-14'>
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
