// Booklist.js
import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'
import styled from 'styled-components'

const BookListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Booklist = props => {
  const [bookData, setBookData ] = useState(null)
  useEffect(() => {
    const results = props.getData?.(props.language).then(response => {setBookData(response)
    });
  }, [props])  
  return (
    <div style={ { pading: 'auto' } }>
      <BookListCard>
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
      </BookListCard>
    </div>

  )
}
export default Booklist