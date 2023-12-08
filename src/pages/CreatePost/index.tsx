import * as Styles from "./style.ts";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext.tsx";
import { useInsertDocument } from "../../hooks/useInsertDocument.tsx";
import * as yup from 'yup';

interface FormData {
  title: string;
  image: string;
  body: string;
  tags: string;
}

const CreatePost = () => {
  const { insertDocument, response } = useInsertDocument("posts");
  const { user } = useAuthValue();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    title: yup.string().required('Campo obrigatório'),
    image: yup.string().url('A imagem precisa ser uma URL.').required('Campo obrigatório'),
    body: yup.string().required('Campo obrigatório'),
    tags: yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = async (
    values: FormData,
    actions: FormikHelpers<FormData>
  ): Promise<void> => {
    try {
      new URL(values.image);
    } catch (error: unknown) {
      actions.setFieldError('image', 'A imagem precisa ser uma URL.');
      return;
    }

    const tagsArray = values.tags
      .split(",")
      .map((tag) => tag.trim().toLowerCase());

    if (!values.title || !values.image || !values.tags || !values.body) {
      actions.setFieldError('formError', 'Por favor, preencha todos os campos!');
      return;
    }

    insertDocument({
      title: values.title,
      image: values.image,
      body: values.body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/");
  };

  return (
    <Styles.CreatePost>
      <h2>Criar Post</h2>
      <img src="{src/assets/images/react.png}" alt="" />
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <Formik
        initialValues={{
          title: "",
          image: "",
          body: "",
          tags: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await handleSubmit(values, actions);
        }}
      >
        <Form>
          <Styles.Label>
            <span>Título:</span>
            <Field
              type="text"
              name="title"
              required
              placeholder="Pense em um bom título..."
            />
            <ErrorMessage name="title" component="p" className="error" />
          </Styles.Label>
          <Styles.Label>
            <span>URL da imagem:</span>
            <Field
              type="text"
              name="image"
              required
              placeholder="Insira uma imagem que representa o seu post"
            />
            <ErrorMessage name="image" component="p" className="error" />
          </Styles.Label>
          <Styles.Label>
            <span>Conteúdo:</span>
            <Field
              type="textarea"
              name="body"
              required
              placeholder="Insira o conteúdo do post"
            />
            <ErrorMessage name="body" component="p" className="error" />
          </Styles.Label>
          <Styles.Label>
            <span>Tags:</span>
            <Field
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
            />
            <ErrorMessage name="tags" component="p" className="error" />
          </Styles.Label>
          {!response.loading && (
            <button className="btn" type="submit">
              Cadastrar
            </button>
          )}
          {response.loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {response.error && <p className="error">{response.error}</p>}
          <ErrorMessage name="formError" component="p" className="error" />
        </Form>
      </Formik>
    </Styles.CreatePost>
  );
};

export default CreatePost;
