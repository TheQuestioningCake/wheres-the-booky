import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}
`

export const SAVE_BOOK = gql`
    mutation SaveBook($newBook: BookInput!) {
  saveBook(newBook: $newBook) {
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`

export const REMOVE_BOOK = gql`
    mutation RemoveBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`