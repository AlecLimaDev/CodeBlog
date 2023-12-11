import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";

export const useHome = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const { documents: posts }: any = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return {
    handleSubmit,
    loading,
    setQuery,
    posts,
  };
};
