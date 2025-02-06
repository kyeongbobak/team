"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import Image from "next/image";
import StyledLink from "next/link";

interface blogListItem {
  post_id: number;
  thumnail: string;
  writer: string;
  created_at: string;
  title: string;
  contents: string;
  contents_detail: string;
  profile_image: string;
  writer_info: string;
}

export default function BlogFeed() {
  const [blogList, setBlogList] = useState<blogListItem[]>([]);

  useEffect(() => {
    const getBlogList = async () => {
      try {
        const { data } = await axios.get(`/api/post`);
        setBlogList(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      }
    };

    getBlogList();
  }, []);

  return (
    <>
      <ul className="flex flex-wrap justify-between gap-y-[60px]">
        {blogList.map((item) => (
          <li key={item.post_id} className="w-[367px] h-[452px] bg-[#ffffff] rounded-[8px]">
            <div>
              <Image className="rounded-t-[8px]" src={item.thumnail} width={367} height={192} alt="thumnail" priority />
              <div className="p-[20px]">
                <div className="mb-[55px]">
                  <StyledLink className="font-semibold text-blue text-xl" href={`/post/${item.post_id}`}>
                    {item.title}
                  </StyledLink>
                  <p className="pt-[12px] text-base text-gray">{item.contents}</p>
                </div>
                <div className="flex items-center text-[12px] text-gray gap-[10px]">
                  <Image src={item.profile_image} width={30} height={30} alt="post_profile" priority />
                  <p>{item.writer}</p>
                  <p>{format(new Date(item.created_at), "d MMMM yyyy")}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
