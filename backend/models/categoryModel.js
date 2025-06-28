import prisma from "../config/db.js";




export const getCategories = async ({cursor,limit})=>{
    const categories = await prisma.category.findMany({
       take: limit+1,
       skip: cursor?1:0,
       cursor:cursor?{id:cursor}:undefined, 
       orderBy:{
        id:'asc'
       },
       include:{
        books:true
       }
    });
    const hasNextPage = categories.length > limit;
    const results = hasNextPage ? categories.slice(0, -1) : categories;
    const nextCursor = hasNextPage ? results[results.length - 1].id : null;
  
    return {
      results,
      nextCursor,
      hasNextPage,
    };
}
export const getCategoryById = (id)=>{
   return prisma.category.findUnique({
        where:{
             id:parseInt(id)
        },
        include:{
            books:true
        }
   })       
}
export const getCategoryByName = (name)=>{
   return prisma.category.findUnique({
        where:{
             name
        },
        include:{
            books:true
        }
   })       
}   

export const createCategory = async(data)=>{
     const category =await prisma.category.create({
        data:data
    })
    return category
   
}
export const deleteCategory = async(id)=>{
    return await prisma.category.delete({
        where:{
            id:id
        }
    })
}