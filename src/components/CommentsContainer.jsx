import React from 'react'
import Comment from './CommentsList'
import CommentsList from './CommentsList'

const CommentsContainer = () => {
    const commentsData=[
        {
            name:"sameer khan1",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
            replies:[
                {
                    name:"sameer khan",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                    replies:[
                        {
                            name:"sameer khan",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                            replies:[
                                
                            ]
                        }   
                    ]
                },
            ]
        },
        {
            name:"sameer khan1",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
            replies:[
                {
                    name:"sameer khan",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                    replies:[
                        {
                            name:"sameer khan",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                            replies:[
                                
                            ]
                        }   
                    ]
                },
            ]
        },
        {
            name:"sameer khan1",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
            replies:[
                {
                    name:"sameer khan",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                    replies:[
                        {
                            name:"sameer khan",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                            replies:[
                                
                            ]
                        }   
                    ]
                },
            ]
        },
        {
            name:"sameer khan1",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
            replies:[
                {
                    name:"sameer khan",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                    replies:[
                        {
                            name:"sameer khan",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                            replies:[
                                
                            ]
                        }   
                    ]
                },
            ]
        },
        {
            name:"sameer khan1",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
            replies:[
                {
                    name:"sameer khan",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                    replies:[
                        {
                            name:"sameer khan",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!",
                            replies:[
                                
                            ]
                        }   
                    ]
                },
            ]
        },

    ]
  return (
    <div className='m-5  p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer