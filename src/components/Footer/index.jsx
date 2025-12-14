import contents from "@/data/contents.json";
import style from "./Footer.module.css";
export default function Footer() {

    const ans = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <p>© {ans} {contents.website.title}. All rights reserved.</p>
    </footer>
  );
}