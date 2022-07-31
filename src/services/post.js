import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        // get all post end point
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),
        // get post by id end point
        getPostById: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'GET'
            })
        }),
        /// delete post endpoint
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            })
        }),

        /// create post end point
        createPost: builder.mutation({
            query: (newPost) => {
                console.log("body", newPost)
                return {
                    url: `posts`,
                    method: 'POST',
                    body: newPost,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        })
    })
})

export const { useGetAllPostQuery, useGetPostByIdQuery, useDeletePostMutation, useCreatePostMutation } = postApi