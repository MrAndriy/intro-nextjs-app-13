import Link from "next/link";
import styles from "../styles/Home.module.css";

export default async function Home() {
  return (
    <div className={styles["home"]}>
      <div>
        <div>
          <h1>Hi my name is Andriy</h1>
        </div>
        <div>
          <Link href={"/blog"}>Check out my blog</Link>
        </div>
        <div>
          <Link href={"/contact"}>Contact me</Link>
        </div>
      </div>
    </div>
  );
}
