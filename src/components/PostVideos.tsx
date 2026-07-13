import type { PostVideo } from "../types/post";
import styles from "./PostVideos.module.scss";

type PostVideosProps = {
  videos: PostVideo[];
};

export default function PostVideos({ videos }: PostVideosProps) {
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className={styles.videos}>
      {videos.map((video) => (
        <figure key={video.src} className={styles.videoFigure}>
          <video
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            aria-label={video.title ?? "Project demo video"}
          >
            <source src={video.src} type="video/mp4" />
          </video>
          {video.title && (
            <figcaption className={styles.videoCaption}>
              {video.title}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
