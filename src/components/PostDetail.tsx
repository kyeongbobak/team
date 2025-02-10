"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import axios from "axios";
import Image from "next/image";
import profile_blank from "../assets/img/profile_blank.png";
import "../assets/styles/postdetail.css";
import { RootState } from "../redux/store";

interface postItem {
  post_id: number;
  thumnail: string;
  created_at: string;
  writer: string;
  title: string;
  contents: string;
  contents_detail: string;
  profile_image: string;
  writer_info: string;
}

interface Comment {
  id: string;
  email: string;
  created_at: string;
  contents: string;
  postId: number;
}

export default function PostDetail() {
  const [postListItem, setPostListItem] = useState<postItem | null>(null);
  const [comment, setComment] = useState<string>();
  const pathname = usePathname();
  const [commentList, setCommentList] = useState<Comment[]>();

  const postId = Number(pathname.replace(/\D/g, ""));

  const { email } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const { data } = await axios.get(`/api/postdetail/${postId}`);
        setPostListItem(data);
      } catch (error) {
        console.error(" Error fetching data :", error);
      }
    };

    getPostList();
  }, [postId]);

  useEffect(() => {
    const getCommentList = async () => {
      try {
        const { data } = await axios.get(`/api/post/comments/${postId}`);
        console.log(data);
        setCommentList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCommentList();
  }, [postId]);

  const handleSubmitComment = async () => {
    try {
      const res = await axios.post(`/api/post/comments`, {
        postId,
        email,
        contents: comment,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {postListItem && (
        <>
          <div className="w-[900px] mx-auto mt-[190px]">
            <div className="post_container">
              <div className="text-blue text-3xl">10 Secret tips for managing a remote team</div>
              <div className="flex items-center gap-0 mt-[16px] text-base text-gray">
                <Image className="mr-[15px]" width={40} height={40} src={postListItem.profile_image} alt="profile_image" priority />
                <p>{postListItem.writer}</p>
                <p className="relative before:content-['|'] before:mx-[30px]">{format(new Date(postListItem.created_at), "d MMMM yyyy")}</p>
              </div>
            </div>
            <Image className="my-[60px]" src={postListItem.thumnail} width={900} height={450} style={{ height: "auto" }} alt="profileImage" priority />
            <div className="post_container w-[700px] text-blue text-[18px] mb-[88px]">{postListItem.contents_detail}</div>
            <div className="post_container">
              <div className="flex">
                <div>
                  <Image className="mr-[15px]" width={56} height={56} src={postListItem.profile_image} alt="profile_image" priority />
                </div>
                <div className="ml-[30px]">
                  <p className="text-md text-[#d2d6dc] ">WRITTEN BY</p>
                  <p className="mt-[7px] text-2xl text-[#283a5a]">{postListItem.writer}</p>
                  <p className="mt-[11px] w-[400px] text-[#67758c] text-md">{postListItem.writer_info}</p>
                </div>
              </div>
              <p className="text-2xl text-[#67758c] relative before:content-[''] before:block before:w-[700px] before:h-[1px] before:bg-[#bdc8d3] before:my-[60px]">Join the conversation</p>

              {commentList?.map((list) => (
                <div key={list.id} className="flex items-center gap-[15px] mt-[31px] border-b border-[#c4c4c4] pb-[30px] ">
                  <div>
                    <Image src={profile_blank} alt="profile_blank" priority />
                  </div>
                  <div className="text-[12px]">
                    <div className="flex items-center gap-[10px] mb-[5px]">
                      <p className="text-bold pb-[5px]">{list.email.split("@")[0]}</p>
                      <p>{list.created_at.split("T")[0]}</p>
                    </div>
                    <div>{list.contents}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-[15px] mt-[60px]">
                <div>
                  <Image src={profile_blank} alt="profile_blank" priority />
                </div>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-[629px] h-[139px] border border-[#bdc8d3] p-[16px] rounded-md placeholder:text-md" name="" id="" placeholder="Comments" />
              </div>
              <div className="flex justify-end text-[#67758c] text-sm mt-[30px] mb-[120px]">
                <button onClick={() => handleSubmitComment()}>Submit a comment</button>
                {/* <button className="relative before:content-['|'] before:mx-[15px]">delete</button> */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
