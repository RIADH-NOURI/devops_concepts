// queries.js
import { gql } from '@apollo/client';



export const UPDATE_BOOK = gql`
 mutation UpdateBook($id: ID!, $title: String!, $img: String, $price:String){
    updateBook(id: $id, title: $title, img: $img, price: $price) {
      id
      title
      img
      price
    }
  
 }`

export const GET_AUTHORS = gql`
  query GetAuthors($cursor: Int, $limit: Int) {
    Authors(authorCursor: $cursor, limit: $limit) {
      results {
        id
        name
      }
      nextCursor
      hasNextPage
    }
  }
`;
export const GET_BOOK_ID = gql`
  query GetBookId($id:ID!) {
    Book(id:$id) {
     id
     title
     img
    }
  }
`;


export const GET_BOOKS = gql`
  query GetBooks($cursor: Int, $limit: Int, $search: String) {
    Books(cursor: $cursor, limit: $limit, search: $search) {
      results {
        id
        title
        img
      }
      nextCursor
      hasNextPage
    }
  }
`;