import { useCreatePost } from "./hooks/useCreatePost.ts";
import * as Styles from "./style.ts";
import { Formik, Field, Form, ErrorMessage } from "formik";


const CreatePost = () => {
  const { handleSubmit, response, validationSchema } = useCreatePost();
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
