import { list } from "@vercel/blob";
import styles from "./gallery.module.css";


export default async function GalleryPage() {
  const { blobs } = await list();

  return (
    <div className={styles.grid}>
    <div>
      {blobs.map((blob) => (
        <img key={blob.url} src={blob.url} style={{ width: "100%", height: "auto"}}/>
      ))}
    </div>
    </div>
  );
}