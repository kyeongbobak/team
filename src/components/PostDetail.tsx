"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

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
          <div className="container">
            <ul>
              <li>
                <h1>10 Secret tips for managing a remote team</h1>
                <div>
                  <Image src={postListItem.thumnail} width={40} height={40} alt="profileImage" />
                  <p>{}</p>
                  <div>{postListItem.contents}</div>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
