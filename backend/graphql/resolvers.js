import {
    getCategoryById,
    getCategories,
    createCategory,
    deleteCategory,
  } from "../models/categoryModel.js";
  
  import {
    getAuthorById,
    getAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
  } from "../models/authorModel.js";
  
  import {
    getBookById,
    getBooks,
    createBook,
    deleteBook,
    updateBook
  } from "../models/booksModel.js";
import { GraphQLError } from "graphql";
  
  const resolvers = {
    Query: {
      Categories: (_, { cursor, limit }) => getCategories({ cursor, limit }),
      Category: async (_, { id }) => {
        const category = await getCategoryById(id);
      
        if (!category) {
          throw new GraphQLError("Category not found", {
            extensions: {
              code: "NOT_FOUND",
              http: { status: 404 }  // Optional: for middleware logging or custom Express use
            },
          });
        }
      
        return category;
      }  ,
      Authors: (_, { authorCursor, limit }) => getAuthors({ cursor: authorCursor, limit }),
      Author: (_, { id }) => getAuthorById(id),
  
      Books: (_, { cursor, limit, search}) => getBooks({ cursor, limit, search }),
      Book: (_, { id }) => getBookById(parseInt(id)),
    },
  
    Mutation: {
      createAuthor: (_, { name }) => createAuthor({ name }),
      createCategory: (_, { name }) => createCategory({ name }),
      createBook: (_, { title, categoryId, authorId }) => createBook({ title, categoryId, authorId }),
  
      deleteAuthor: (_, { id }) => deleteAuthor(id),
      deleteCategory: (_, { id }) => deleteCategory(id),
      deleteBook: (_, { id }) => deleteBook(id),
  
      updateAuthor: (_, { id, name }) => updateAuthor(id, { name }),
      updateBook: (_, { id, title,img,price }) =>
        updateBook(parseInt(id), { title,img,price }),
    },
  };
  
  export default resolvers;
  