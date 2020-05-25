// Booklist.js
import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'

const Booklist = props => {
  const [bookData, setBookData ] = useState(null)
  useEffect(() => {
    const results = props.getData?.(props.language).then(response => {setBookData(response); console.log('response :>> ', response);});
  }, [props])  
  return (
    <div>
      {     // このあたり編集
        bookData === null
          ? <p>now loading...</p>
          : bookData.data.items.map(
            (x, index) => 
            <BookCard 
              title={x.volumeInfo.title}
              author={x.volumeInfo.authors}
              img={x.volumeInfo.imageLinks?.smallThumbnail}
              description={x.searchInfo?.textSnippet}
              key={index}
            >
            </BookCard>)
      }
    </div>
  )
}
export default Booklist