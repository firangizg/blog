import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'
 
export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Blog by Firangiz</title>
      </Head>
      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // get the files from posts dir
  const files = fs.readdirSync(path.join('posts'))

  // get slug and frontmatter from posts
  const posts = files.map(filename => {
    // create the slug
    const slug = filename.replace('.md', '')

    // get frontmatter
    const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    // extract the data, and change the name to frontmatter
    const {data:frontmatter} = matter(mdWithMeta)
  
    // return object w all the slugs
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}