import prisma from "../config/db.js";

export const getAuthors = async ({ cursor, limit }) => {
    const authors = await prisma.author.findMany({
      take: limit + 1, // +1 to check if there's a next page
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
        id: 'asc',
      },
      include: {
        books: true,
      },
    });
  
    const hasNextPage = authors.length > limit;
    const results = hasNextPage ? authors.slice(0, -1) : authors;
    const nextCursor = hasNextPage ? results[results.length - 1].id : null;
  
    return {
      results,
      nextCursor,
      hasNextPage,
    };
  };
  
export const getAuthorById = (id)=>{
    return prisma.author.findUnique({
        where:{
            id
        },
        include:{
            books:true
        }
    });
}

export const getAuthorByName = (name)=>{
    return prisma.author.findUnique({
        where:{
            name
        },
        include:{
            books:true
        }
    });
}

export const createAuthor = (data)=>{
    return prisma.author.create({
        data:data
    });
}


export const deleteAuthor = (id)=>{
    return prisma.author.delete({
        where:{
            id
        }
    });
}

export const updateAuthor = (id,data)=>{
    return prisma.author.update({
        where:{
            id
        },
        data:data
    });
}