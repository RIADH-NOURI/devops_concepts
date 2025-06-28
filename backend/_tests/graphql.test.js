import request from 'supertest';
import { createApp } from '../server.js';

let app;

beforeAll(async () => {
  app = await createApp();
});

describe('GraphQL API Tests (setup and fetch)', () => {
  

  // 1. Create Category
  it('should create a category', async () => {
    const mutation = `
      mutation {
        createCategory(name: "Test Category") {
          id
          name
        }
      }
    `;

    const res = await request(app)
      .post('/graphql')
      .send({ query: mutation });

    expect(res.status).toBe(200);
    expect(res.body.data.createCategory).toBeDefined();
  });

  // 2. Create Author
  it('should create an author', async () => {
    const mutation = `
      mutation {
        createAuthor(name: "Test Author") {
          id
          name
        }
      }
    `;

    const res = await request(app)
      .post('/graphql')
      .send({ query: mutation });

    expect(res.status).toBe(200);
    expect(res.body.data.createAuthor).toBeDefined();
  });

  // 3. Create Book
  it('should create a book', async () => {
    const mutation = `
      mutation {
        createBook(title: "Test Book", categoryId: 1, authorId: 1) {
          id
          title
        }
      }
    `;

    const res = await request(app)
      .post('/graphql')
      .send({ query: mutation });

    expect(res.status).toBe(200);
    expect(res.body.data.createBook.title).toBe("Test Book");
    bookId = res.body.data.createBook.id;
  });

  // 4. Fetch Books
  it('should return all books', async () => {
    const query = `
      query {
        Books(cursor: 0, limit: 10) {
          results {
            id
            title
          }
        }
      }
    `;

    const res = await request(app)
      .post('/graphql')
      .send({ query });

    expect(res.status).toBe(200);
    expect(res.body.data.Books.results).toBeDefined();
    expect(res.body.data.Books.results.length).toBeGreaterThan(0);
  });

  // 5. Fetch Authors
  it('should return all authors', async () => {
    const query = `
      query {
        Authors(authorCursor: 0, limit: 10) {
          results {
            id
            name
          }
        }
      }
    `;

    const res = await request(app)
      .post('/graphql')
      .send({ query });

    expect(res.status).toBe(200);
    expect(res.body.data.Authors.results).toBeDefined();
    expect(res.body.data.Authors.results.length).toBeGreaterThan(0);
  });
});
