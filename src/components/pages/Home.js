import Feed from "../feed/Feed.js";
import NewPost from "../form/NewPost.js";
import styles from "./Home.module.css";

function Home() {
  <>
    <h1>home</h1>
    <NewPost className={styles.newPost} />
    <Feed />
  </>;
}

export default Home;
