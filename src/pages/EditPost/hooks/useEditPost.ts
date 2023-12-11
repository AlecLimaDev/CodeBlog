import React, { FormEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useFetchDocument } from "../../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../../hooks/useUpateDocument";

export const useEditPost = () => {
  const { id }: any = useParams();
  const { document: post }: any = useFetchDocument("posts", id);

  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<any>([]);
  const [formError, setFormError] = useState<string>("");
  const { updateDocument, response } = useUpdateDocument("posts");
  const { user }: any = useAuthValue();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL("");
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const tagsArray: string = tags
      .split(",")
      .map((tag: any) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    navigate("/dashboard");
  };

  return {
    handleSubmit,
    setTitle,
    setImage,
    setBody,
    setTags,
    post,
    title,
    image,
    body,
    response,
    tags,
    formError,
  };
};
