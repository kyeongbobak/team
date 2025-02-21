"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import axios from "axios";
import Image from "next/image";
import profile_blank from "../../public/assets/img/profile_blank.png";
import "../styles/postdetail.css";
import { RootState } from "../redux/store";
import useCommentsList from "../hook/useGetCommentsList";
import { apiGet, apiPost } from "../utils/commonApi";

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

type CommentInfo = {
  postId: number;
  email: string | null;
  contents: string;
};

interface CommentResponse {
  postId: number;
  email: string | null;
  contents: string;
}

export default function PostDetail() {
  const [postListItem, setPostListItem] = useState<postItem | null>(null);
  const [comment, setComment] = useState<string>("");
  const [editComment, setEditComment] = useState<boolean[]>([]);
  const [editContents, setEditContents] = useState<string>("");
  const pathname = usePathname();

  const postId = Number(pathname.replace(/\D/g, ""));

  const { commentList, getCommentList } = useCommentsList(postId);

  const { email, token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const getPost = async (): Promise<void> => {
      const data = await apiGet<postItem>(`/api/postdetail/${postId}`);
      if (data) {
        setPostListItem(data);
      }
    };

    getPost();
  }, [postId]);

  const handleSubmitComment = async (): Promise<void> => {
    const body = {
      postId,
      email,
      contents: comment,
    };

    const res = await apiPost<CommentInfo, CommentResponse>(`/api/post/comments`, body);

    if (res) {
      setComment("");
      getCommentList();
    } else {
      alert("댓글 작성에 실패했습니다. 다시 시도해주세요!");
    }
  };

  const deleteComment = async (index: number): Promise<void> => {
    if (!commentList) return;

    const commentId = commentList[index].id;

    try {
      await axios.delete(`/api/post/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      getCommentList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleModifyClick = (index: number): void => {
    const newEditComments = [...editComment];
    newEditComments[index] = !newEditComments[index];
    setEditComment(newEditComments);

    if (!editContents) {
      setEditContents(commentList[index].contents);
    }
  };

  const modifyComment = async (index: number): Promise<void> => {
    const commentId = commentList[index].id;

    try {
      await axios.put(
        `/api/post/comments/${commentId}`,
        { contents: editContents, email },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      getCommentList();

      const newEditUpdatedComments = [...editComment];
      newEditUpdatedComments[index] = false;
      setEditComment(newEditUpdatedComments);
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
              <div className="text-blue text-3xl">{postListItem.title}</div>
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
              {commentList?.map((list, index) => (
                <div key={list.id} className="flex items-center gap-[15px] mt-[31px] border-b border-[#c4c4c4] pb-[15px] pr-[5px]">
                  <div>
                    <Image src={profile_blank} alt="profile_blank" priority />
                  </div>
                  <div className="text-[12px] flex-1">
                    <div className="flex items-center gap-[10px] mb-[5px] text-sm">
                      <p className="text-bold pb-[5px]">{list.email.split("@")[0]}</p>
                      <p>{list.created_at.split("T")[0]}</p>
                    </div>
                    {editComment[index] ? (
                      <textarea value={editContents} onChange={(e) => setEditContents(e.target.value)} className="w-[629px] h-[139px] border border-[#bdc8d3] p-[16px] rounded-md text-sm placeholder:text-sm" placeholder="Comments" />
                    ) : (
                      <div className="text-sm">{list.contents}</div>
                    )}
                    {list.email === email ? (
                      <div className="flex justify-end pt-[15px] text-sm">
                        {editComment[index] ? (
                          <div>
                            <button onClick={() => modifyComment(index)}>save</button>
                            <button onClick={() => setEditComment(Array(commentList.length).fill(false))} className="relative before:content-['|'] before:mx-[15px]">
                              cancel
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button onClick={() => handleModifyClick(index)}>modify</button>
                            <button onClick={() => deleteComment(index)} className="relative before:content-['|'] before:mx-[15px]">
                              delete
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="pb-[15px]"></div>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex gap-[15px] mt-[40px]">
                <div>
                  <Image src={profile_blank} alt="profile_blank" priority />
                </div>
                {email === null ? (
                  <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-[629px] h-[139px] border border-[#bdc8d3] p-[16px] rounded-md text-sm placeholder:text-md" placeholder="Please log in to post a comment" />
                ) : (
                  <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-[629px] h-[139px] border border-[#bdc8d3] p-[16px] rounded-md text-sm placeholder:text-md" placeholder="Comments" />
                )}
              </div>
              <div className="flex justify-end text-[#67758c] text-sm mt-[30px] mb-[120px]">
                <button onClick={handleSubmitComment}>Submit a comment</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
