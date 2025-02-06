"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { format } from "date-fns";
import axios from "axios";
import Image from "next/image";
import profile_blank from "../assets/img/profile_blank.png";
import "../assets/styles/postdetail.css";

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

export default function PostDetail() {
  const [postListItem, setPostListItem] = useState<postItem | null>(null);
  const pathname = usePathname();

  const postId = pathname.replace(/\D/g, "");

  useEffect(() => {
    const getPostList = async () => {
      try {
        const { data } = await axios.get(`/api/postdetail/${postId}`);

        setPostListItem(data);
      } catch (error) {
        console.error("Error fetching data :", error);
      }
    };

    getPostList();
  }, [postId]);

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
            <Image className="my-[60px]" src={postListItem.thumnail} width={900} height={450} alt="profileImage" priority />
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
              <div className="flex gap-[15px] mt-[31px]">
                <div>
                  <Image src={profile_blank} alt="profile_blank" priority />
                </div>
                <textarea className="w-[629px] h-[139px] border border-[#bdc8d3] p-[16px] rounded-md placeholder:text-md" name="" id="" placeholder="Comments"></textarea>
              </div>
              <div className="flex justify-end text-[#67758c] text-sm mt-[30px] mb-[120px]">
                <button>Submit a comment</button>
                <button className="relative before:content-['|'] before:mx-[15px]">delete</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
