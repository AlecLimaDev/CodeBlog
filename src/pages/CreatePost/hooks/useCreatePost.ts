import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useInsertDocument } from "../../../hooks/useInsertDocument";
import * as yup from "yup";

interface FormData {
  title: string;
  image?: string;
  body: string;
  tags: string;
}

export const useCreatePost = () => {
  const { insertDocument, response } = useInsertDocument("posts");
  const { user }: any = useAuthValue();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    image: yup.string().url("A imagem precisa ser uma URL."),
    body: yup.string().required("Texto contextualizando obrigatório"),
    tags: yup.string().required("Tags obrigatória"),
  });

  const handleSubmit = async (
    values: FormData,
    actions: FormikHelpers<FormData>
  ): Promise<void> => {
    if (values.image) {
      try {
        new URL(values.image);
      } catch (error: unknown) {
        actions.setFieldError('image', 'A imagem precisa ser uma URL válida.');
        return;
      }
    }

    const tagsArray: unknown = values.tags
      .split(",")
      .map((tag) => tag.trim().toLowerCase());

    if (!values.title || !values.tags || !values.body) {
      actions.setFieldError('formError', 'Por favor, preencha todos os campos!');
      return;
    }

    insertDocument({
      title: values.title,
      image: values.image || "",
      body: values.body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/");
  };
  return {
    handleSubmit,
    validationSchema,
    response,
  };
};
