export default function PostCard({ post }) {
  return (
    <li
      className='post-card'
      style={{ "--animation-order": post.animationOrder }}
    >
      <a href={post.href} className='post-card__link'>
        <div
          className='post-card__media'
          style={{
            backgroundImage: `url(${post.thumbnail})`,
            backgroundSize: post.thumbnailSize ?? "contain",
          }}
        >
          <div className='post-card__overlay'>
            <h2 className='post-card__title'>{post.title}</h2>
            <p className='post-card__subtitle'>{post.subtitle}</p>
          </div>
        </div>
      </a>
    </li>
  );
}
