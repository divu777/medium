import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface AuthorInfo {
  name: string;
}

export interface BlogInfo {
  content: string;
  title: string;
  id: number;
  author: AuthorInfo;
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogInfo[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      })
      .catch(() => {
        alert("error in fetching data");
        setLoading(false); // Ensure loading state is updated even if there is an error
      });
  }, []);

  return { blogs, loading };
};

export const useBlog = ({ id }: { id: string }) => {
  console.log(id);
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogInfo>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      })
      .catch(() => {
        alert("error in fetching data");
        setLoading(false); // Ensure loading state is updated even if there is an error
      });
  }, [id]);

  return { blog, loading };
};
