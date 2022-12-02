import Link from 'next/link'

export default function Post({post}) {
  return (
    <div class='card'>
        <img className='cover' src={post.frontmatter.cover_image} alt=''/>
        <div className="post-date">Posted on {post.frontmatter.date}</div>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="btn">Read More</Link>
    </div>
  )
}
