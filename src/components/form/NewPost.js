import styles from "./NewPost.module.css";

function NewPost() {
  function Input(type, placeholder) {
    <input type={type} placeholder={placeholder} />;
  }

  function submit() {}

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input type="text" placeholder="Digite seu nome" />
      <Input type="text" placeholder="Mensagem" />
    </form>
  );
}

export default NewPost;
