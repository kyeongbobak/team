"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import StyledLink from "next/link";

interface blogListItem {
  post_id: number;
  thumnail: string;
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
        const { data } = await axios.get("/api/post");
        setBlogList(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      }
    };

    getBlogList();
  }, []);

  return (
    <>
      <ul>
        {blogList.map((item) => (
          <li key={item.post_id}>
            <div>
              <Image src={item.thumnail} width={367} height={192} alt="thumnail" priority />
              <StyledLink href={`/post/${item.post_id}`}>{item.title}</StyledLink>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
