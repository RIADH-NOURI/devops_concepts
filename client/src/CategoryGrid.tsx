import React, { useState } from "react";
import { GET_BOOKS, UPDATE_BOOK } from "./graphql/queries";
import { useMutation, useQuery } from '@apollo/client';



const CategoryGrid = ({search}:{search:string}) => {
    const limit:number = 2
   const cursor:string | null = null
   const [updateBook,{loading:updateLoading,error:updateError}]= useMutation(UPDATE_BOOK)
 const {data,loading,error,fetchMore} = useQuery(
    GET_BOOKS,{
        variables:{
            limit,
            cursor,
            search
        },
        notifyOnNetworkStatusChange: true,
    }
 )
 const handleUpdateBook =async ()=>{
  try {
    const response = await updateBook({
      variables:{
        id:1,
        title:"new title"
      }
    }
  )
  console.log(response);
  
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
 }

 const loadMoreData = ()=>{
    if(!data?.Books?.hasNextPage) return

    fetchMore({
        variables: {
          cursor: data?.Books?.nextCursor,
          limit,
          search
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return{
            Books:{
                results:[...prev.Books.results,...fetchMoreResult.Books.results],
               hasNextPage:fetchMoreResult.Books.hasNextPage,
              nextCursor:fetchMoreResult.Books.nextCursor,
              __typename:"Books"
            }
          }

        }
      })
 }
 if (loading && !data) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>;
 console.log('====================================');
 console.log(data);
 console.log('====================================');

    return(
      <div className="w-full">
  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
    {data?.Books?.results?.map((book) => (
      <div key={book.id} className="flex flex-col gap-3 pb-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
          style={{ backgroundImage: `url('${book?.img}')` }}
        ></div>
        <p className="text-[#0e141b] text-base font-medium leading-normal">{book.title}</p>
      </div>
    ))}
   
  </div>
  {data?.Books?.hasNextPage && (
        <button onClick={loadMoreData} className="p-2 bg-blue-300 text-white rounded-lg  text-center cursor-pointer hover:bg-blue-400 transition">Load More</button>
      )}
  </div>
    )
};

export default CategoryGrid; 