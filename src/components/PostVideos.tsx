import type { PostVideo } from "../types/post";

type PostVideosProps = {
  videos: PostVideo[];
};

export default function PostVideos({ videos }: PostVideosProps) {
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="post-detail__videos">
      {videos.map((video) => (
        <figure key={video.src} className="post-detail__video-figure">
          <video
            className="post-detail__video"
            controls
            playsInline
            preload="metadata"
            aria-label={video.title ?? "Project demo video"}
          >
            <source src={video.src} type="video/mp4" />
          </video>
          {video.title && (
            <figcaption className="post-detail__video-caption">
              {video.title}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
