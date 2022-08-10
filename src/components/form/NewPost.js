import styles from "./NewPost.module.css";

function NewPost() {
  return (
    <form className={styles.form}>
      <label>
        Nome:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default NewPost;
