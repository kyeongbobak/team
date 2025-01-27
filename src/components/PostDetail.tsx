"use client";

import { useEffect, useState } from "react";

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
  const [postList, setPostList] = useState<postItem[]>([]);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const res = await fetch("/api/post");
        const result = await res.json();
        setPostList(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data :", error);
      }
    };

    getPostList();
  }, []);

  return (
    <>
      <div className="container">
        <ul>
          {postList.map((item) => (
            <li key={item.post_id}>{item.writer}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
