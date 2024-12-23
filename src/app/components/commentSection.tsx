'use client';
import { useState } from "react";

export default function CommentSection(){
  const [name,setName] = useState<string>('');
  const [comment,setComment] = useState<string>('');
  const [comments,setComments] = useState<{name:string,comment:string}[]>([]);

  const handleAddComment = ()=>{
    if(name.trim() !== '' && comment.trim() !== ''){
      setComments([{name, comment},...comments]);
      setName('');
      setComment('');
    }
  }
  
  return(
    <div>
    <div className="mt-[2%] lg:ml-[3%] ml-[1%] lg:mr-[3%] mr-[1%] pb-[2%] bg-white flex items-right flex-col pt-[2%] gap-[10px] opacity-[0.9] rounded-xl
    ">
    <div className="w-[100%] rounded-sm h-auto bg-[#E4599C] lg:pl-[5%] lg:pr-[5%]  pl-[2%] pr-[2%] pt-[2%] pb-[2%] flex flex-col lg:gap-[20px] gap-[10px]">
      <input type="text" placeholder="Enter your Name" value={name} 
      onChange={(e)=>setName(e.target.value)} className="block w-[100%] lg:h-[60px] h-[40px] rounded-sm pl-[10px] outline-none"/>
      <input type="text" placeholder="Write your Comment..." value={comment}
      onChange={(e)=>setComment(e.target.value)} className="block w-[100%] lg:h-[60px] h-[40px] rounded-sm pl-[10px] outline-none"/>
      </div>
      <button onClick={handleAddComment} className="lg:w-[200px] bg-[#E4599C] w-[150px] hover:bg-pink-600 text-white lg:text-[20px] h-[50px] rounded-sm border-none outline-none">Add Comment</button>
      {comments.map((e)=>(
        <div className="bg-yellow-100 rounded-sm p-[2%] mt-[2%]">
          <p className="font-bold my-[8px] text-[18px]">{e.name}</p>
          <p>{e.comment}</p>
        </div>
      ))}
    </div>
    </div>
  )
}
