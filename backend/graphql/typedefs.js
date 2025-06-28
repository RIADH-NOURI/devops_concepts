import { gql } from 'apollo-server-express';

const typedefs = gql`
  type Category {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Book {
    id: ID!
    title: String!
    img: String
    price: Int
    category: Category!
    author: Author!
  }

  type CategoryPage {
    results: [Category!]!
    nextCursor: Int
    hasNextPage: Boolean!
  }

  type BookPage {
    results: [Book!]!
    nextCursor: Int
    hasNextPage: Boolean!
  }

  type AuthorPage {
    results: [Author!]!
    nextCursor: Int
    hasNextPage: Boolean!
  }

  type Query {
    Authors(authorCursor: Int, limit: Int): AuthorPage!
    Categories(cursor: Int, limit: Int): CategoryPage!
    Books(cursor: Int, limit: Int,search: String): BookPage!
    Book(id: ID!): Book
    Author(id: ID!): Author
    Category(id: ID!): Category
  }

  type Mutation {
    createAuthor(name: String!): Author
    createCategory(name: String!): Category
    createBook(title: String!,img: String,price: Int, categoryId: ID!, authorId: ID!): Book
    deleteAuthor(id: ID!): Author
    deleteCategory(id: ID!): Category
    deleteBook(id: ID!): Book
    updateAuthor(id: ID!, name: String!): Author
    updateCategory(id: ID!, name: String!): Category
    updateBook(id: ID!, title: String,img: String,price: Int): Book
  }
`;

export default typedefs;
