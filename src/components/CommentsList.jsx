import React from 'react'
import { FaUser } from 'react-icons/fa';

const Comment = ({data}) => {
    const {name,text,replies}=data;
  return (
    <div>
        <FaUser/>
        <div>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

const CommentsList=({comments})=>{
  // console.log("thsi is",comments);
  // disclaimer:⚡ dont use indexes as key
  return comments.map((comment,index)=>(
    <div key={index}>

      <Comment data={comment}/>
      <div className='pl-5 border-l-2'>
        <CommentsList comments={comment.replies}/>

      </div>
    </div>
  ))

}
export default CommentsList;