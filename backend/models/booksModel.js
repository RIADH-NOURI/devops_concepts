import prisma from "../config/db.js";



export const getBooks = async ({ cursor, limit, search }) => {
    const books = await prisma.book.findMany({
      take: limit +1, 
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
        id: 'asc',
      },
      where: {
        title: {
          contains: search,
        },
      },
      include: {
        category: true,
        author: true,
      },
    });
  
    const hasNextPage = books.length > limit;
    const results = hasNextPage ? books.slice(0, -1) : books;
    const nextCursor = hasNextPage ? results[results.length - 1].id : null;
  
    return {
      results,
      nextCursor,
      hasNextPage,
    };
  };
  

export const getBookById = (id)=>{
    return prisma.book.findUnique({
        where:{
            id:id
        },
        include:{
            category:true,
            author:true
        }
    })
}
export const getBookByTitle = (title)=>{
    return prisma.book.findUnique({
        where:{
            title:title
        },
        include:{
            category:true,
            author:true
        }
    })
}

export const createBook = ({ title,img,price, categoryId, authorId }) => {
    const book = prisma.book.create({
      data: {
        title,
        categoryId: Number(categoryId),
        authorId: Number(authorId),
        img,
        price
      },

        include: {
          category: true,
          author: true,
        },
    });
    return book;
  };
export const deleteBook = (id)=>{
    return prisma.book.delete({
        where:{
            id:id
        }
    })
}
export const updateBook = (id,data)=>{
    return prisma.book.update({
        where:{
            id:id
        },
        data:data
    })
}