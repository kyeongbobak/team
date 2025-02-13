import { useState, useEffect, useCallback } from "react";
import axios from "axios";

interface Comment {
  id: string;
  email: string;
  created_at: string;
  contents: string;
  postId: number;
}

function useCommentsList(postId: number) {
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const getCommentList = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios.get(`/api/post/comments?postId=${postId}`);
      setCommentList(data);
    } catch (error) {
      console.error(" Error fetching data :", error);
    }
  }, [postId]);

  useEffect(() => {
    getCommentList();
  }, [getCommentList]);

  return { commentList, getCommentList };
}

export default useCommentsList;
