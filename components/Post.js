import Link from 'next/link'
import Image from 'next/image'

// Prints the card
export default function Post({ post, pos }) {
  return (
    <div className='card'>
      <div>
        <div className='postimg'>
          <Image
          src="/Images/Rectangle4.png"
          alt="AMA"
          fill
          
          />
        </div>

        <div className="cardtext">
          <div className='postdate'>{post.frontmatter.date}</div>
        

          <h3 className='posttitle'>{post.frontmatter.title}</h3>

          <div className='postdesc'>{post.frontmatter.description}</div>
        </div>
      </div>
    </div>
  )
}