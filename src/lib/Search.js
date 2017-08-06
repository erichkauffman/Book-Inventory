import React from 'react';
import BookMenuItem from '../components/BookMenuItem';


export function allBooks(bookData, searchType, search, getID){
  let bookItems = [];
  switch(searchType){
    case 'A':
      bookData.map( (i) => {
        if(i.authors.toLowerCase().includes(search.toLowerCase())){
          bookItems.push(<BookMenuItem title={i.title} author={i.authors} id={i.rowid} onClick={getID}/>);
        }
      });
      break;
    case 'T':
      bookData.map( (i) => {
        if(i.title.toLowerCase().includes(search.toLowerCase())){
          bookItems.push(<BookMenuItem title={i.title} author={i.authors} id={i.rowid} onClick={getID}/>);
        }
      });
      break;
    case 'I':
      bookData.map( (i) => {
        if(i.isbn.includes(search)){
          bookItems.push(<BookMenuItem title={i.title} author={i.authors} id={i.rowid} onClick={getID}/>);
        }
      });
      break;
  }
  return bookItems;
}
