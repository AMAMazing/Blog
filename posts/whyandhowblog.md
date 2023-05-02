---
title: 'Why & how to code a blog'
date: 'Mar 22, 2023'
description: 'An overview of why blogs are still relevant in 2023 and how I coded a blog using NextJS.'
coverimage: '/Images/blog/thumbnail.png'
---

# Why you should make a blog
With the rise of social media networks it is easy to dismiss blogs as a dying industry.

<img src="\Images\blog\trends.png" alt="trends" style="width: 100%;">

Especially when you have social media networks easily allowing people to post their opinions and spread their posts through complex algorithms.

<img src="\Images\blog\threads.png" alt="trends" style="width: 100%;">

The problem with social media networks is that they place ads throughout their feed to make money and sharing none of that money to the users that create the content for their networks. Instead coding your own blog allows you to have more control of things like ads and revenue.

<img src="\Images\blog\ads.png" alt="trends" style="width: 100%;">

There are countless popular blogs today some which make hundreds of thousands to milllions a month such as billboard, techcrunch and wired just to name a few. These blogs run ads on their site and share the link to new articles on social media networks in order for people to discover it.

<img src="\Images\blog\billboard.png" alt="trends" style="width: 33.33333%;"><img src="\Images\blog\techcrunch.png" alt="trends" style="width: 33.33333%;"><img src="\Images\blog\wired.png" alt="trends" style="width: 33.33333%;">

In this tutorial I'll show you how to make a blog that looks like this

<img src="\Images\blog\Screenshots\demoblog.png" alt="trends" style="width: 100%;">

# How to make a blog
## Header
This code will be made using typescript NextJS so start by initalising the project in the terminal. 

``` plaintext
npx create-next-app --ts {project-name}
cd {project-name}
npm run dev
```

<img src="\Images\blog\Screenshots\localhost_3000_.png" alt="" style="width: 100%;">

Add whatever styling you like, the styling I used can be found in the github source.

<img src="\Images\blog\css.png" alt="" style="width: 100%;">

Then create a folder called components and create a file called Header.js

<img src="\Images\blog\Screenshots\headerjs.png" alt="" style="width: 100%;">

Then go to _app.tsx where you should see this

``` tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

Add the header component to the file by copying the following into *_app.tsx*

``` tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
      <Component {...pageProps} />
    </>
  )
}

``` 

Then in the header file, add these imports

``` tsx
import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
```

Under that create the header function

``` tsx
function Header(){    
    return(    
        <div className={styles.container}>    
  
        </div>
    ) 
}

export default Header
```

Now add the blog's logo inside the div which goes to the blogs home page when clicked

``` tsx
function Header(){    
    return(    
        <div className={styles.container}>    
        <Link href="/"> {/* Goes back go home page */}
            <Image // Logo on left
            src="/favicon.ico"
            alt="logo"
            width={50}
            height={50}
            />
            </Link>
        </div>
    ) 
}
```

When you go back to localhost you will see more room at the top of page with a logo on the left

<img src="\Images\blog\Screenshots\localhost_3001_ (1).png" alt="" style="width: 100%;">

You can change the style of the header to make it easier to see
``` tsx
<div className={styles.container} style={{ background: "grey" }} >
```

<img src="\Images\blog\Screenshots\localhost_3001_ (2).png" alt="" style="width: 100%;">

To add social media links go to [icons8 social media options](https://icons8.com/icons/set/social-media) pick a theme, I chose material outlined

<img src="\Images\blog\Screenshots\2.png" alt="" style="width: 100%;">

then click on the social media you like and click download

<img src="\Images\blog\Screenshots\download.png" alt="" style="width: 100%;">

Go to svg embed

<img src="\Images\blog\Screenshots\embed.png" alt="" style="width: 100%;">

Pick a size of about 48x48 then copy the inline html

<img src="\Images\blog\Screenshots\inline.png" alt="" style="width: 100%;">

Underneath the sites logo, paste the svg inside a link tag to that social media

``` tsx
function Header(){    
    return(    
        <div className={styles.container}>    
        <Link href="/"> {/* Goes back go home page */}
            <Image // Logo on left
            src="/favicon.ico"
            alt="AMA Mazing logo"
            width={50}
            height={50}
            />
        </Link>

        <Link href="https://www.youtube.com/channel/UCJJkhR0Rvnhq9MdHPn_5OBQ">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" // Youtube logo 
                width="45" height="45"
                viewBox="0 0 24 24">
                <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"></path>
            </svg>
        </Link>

        </div>
    ) 
}
```

Then move the svg to the right with float right

``` css
svg {
  float: right;
  fill: #cccccc;
  cursor: hover;
}

```

If you do this with multiple social medias it will look something like this

<img src="\Images\blog\Screenshots\localhost_3001_ (4).png" alt="" style="width: 100%;">

## Displaying each post 
Add all your markdown files into a posts folder

<img src="\Images\blog\Screenshots\posts.png" alt="" style="width: 100%;">

Make sure they have metadata at the top of page as followed

``` txt
---
title: 'Data Validation'
date: 'Jan 28, 2022'
description: 'Php data validation, sanitisation, verification and checking'
coverimage: '/Images/Rectangle5.png'
---
```

If you have cover images then add it to an images folder in public

<img src="\Images\blog\Screenshots\publicimages.png" alt="" style="width: 100%;">

In terminal run

``` txt
npm install gray-matter
```

Then in *index.tsx* add these imports

``` tsx
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Key } from 'react';
```

Next create a getStaticProps, this is a server side function that runs during build time saving time loading for the user

```tsx
export async function getStaticProps() {
  
}
```

Inside that we add this code which gets each post, sets the slug variable to the filename, frontmatter variable to the posts metadata such as title and description, then posts variable which holds the array of the slug and frontmatter for each post.

``` tsx
export async function getStaticProps() {
  // Set the path to posts
  const files = fs.readdirSync(path.join('posts'))

  // Puts the the list of files in the posts variable
  const posts = files.map((filename) => { 
    // Create slug which is the name of the file without the markdown extension
    const slug = filename.replace('.md', '')

    // Sets markdownwithmeta to path to post file
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    // Gets frontmatter of post
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug, // Returns the slug so it can be passed through when clicked in post component
      frontmatter, // Returns frontmatter to be displayed via the post component
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}
```

Next in home you get the posts variable created from the getstaticprops, then it displays the title of each post.

``` tsx
export default function Home({ posts }: any) {
  return (
    <div className={styles.container}>
        {posts.map((post: any, index: Key | null | undefined) => ( // key iterator is required but can be set to null
          <div key={index}>{post.frontmatter.title}</div>
        ))}
    </div>
  )
}
```

The result of this should look something like this

<img src="\Images\blog\Screenshots\localhost_3000_ (5).png" alt="" style="width: 100%;">

Above the posts map you should add a Head

```tsx
export default function Home({ posts }: any) {
  return (
    <div className={styles.container}>
      <Head> 
          <title>Blog</title>
          <meta name="description" content="Example blog made by AMA Mazing" />
          <link rel="icon" href="\favicon.ico" />
      </Head>

          {posts.map((post: any, index: Key | null | undefined) => ( // key iterator is required but can be set to null
          <div key={index}>{post.frontmatter.title}</div>
        ))}
    </div>
  )
}
```

The head displays the title of the page aswell as the icon on the tab

<img src="\Images\blog\Screenshots\head.png" alt="" style="width: 100%;">

## Display each post nicely
In the components folder, create a new file called Post.js

<img src="\Images\blog\Screenshots\postjs.png" alt="" style="width: 100%;">

Add the Link and Image imports as we will be using them later

```tsx 
import Link from 'next/link'
import Image from 'next/image'
```

In *Index.tsx* add the import 

``` tsx
import Post from '../components/Post.js'
```

Then in the Home function replace the div

``` tsx
<div key={index}>{post.frontmatter.title}</div>
```

with the Post component

``` tsx
<Post key={index} post={post} />
```

In *Post.js* recieve the post in the Post function, then in a div display the post title, date and description.

``` tsx
// Creates the post card 
export default function Post({ post }) {
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>

            <h3>{post.frontmatter.date}</h3>

            <p>{post.frontmatter.description}</p>
        </div>
    )
}
```

The result should look like this

<img src="\Images\blog\Screenshots\localhost_3000_ (8).png" alt="" style="width: 100%;">

Wrapping it around a card and cardtext class will make the card look better and more organised

```tsx
export default function Post({ post }) { 
    return (
      <div className='card'>
          {/* Displays the post text */}
          <div className="cardtext">
            <div className='postdate'>{post.frontmatter.date}</div>
          
  
            <h3 className='posttitle'>{post.frontmatter.title}</h3>
  
            <div className='postdesc'>{post.frontmatter.description}</div>
          </div>
        </div>
    )
}
```

This is done by adding a box shadow and border radius

``` css
.card {
  box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}

.cardtext {
  padding: 20px;
}
```

The result should look like this

<img src="\Images\blog\Screenshots\localhost_3001_ (5).png" alt="" style="width: 100%;">

Next we'll add the thumbnail to the post by adding this into the card class

```tsx
<div className='card'>
        {/* Displays the post image */}
        <div className='postimg'>
          <Image
          src={post.frontmatter.coverimage} 
          alt="image"
          fill
          />
        </div>
```

Which will add a border radius to the image and set the aspect ratio to 16:9

``` css
.postimg {
  position: relative;
  border-radius: 30%;
  aspect-ratio: 16 / 9;
  clear: both;
}
```

Now the articles should have thumbnails

<img src="\Images\blog\Screenshots\localhost_3001_ (6).png" alt="" style="width: 100%;">

Though this isn't a great use of space. To fix this, wrap the posts map from *index.tsx* into posts class

```tsx
<div className='posts'>
        {posts.map((post: any, index: Key | null | undefined) => ( // key iterator is required but can be set to null
          <Post key ={index} post={post} /> // Uses the post component to display post, key still required
        ))}
      </div>
```

Which will display the posts into a grid

```css
.posts {
  display: grid;
  grid-column-start: 1;
  grid-gap: 3em;
  grid-template-columns: repeat(auto-fit, minmax(22vw, 1fr));
}
```

The result should look like this.

<img src="\Images\blog\Screenshots\localhost_3001_ (8).png" alt="" style="width: 100%;">

## Making newest post bigger
Create a new folder called *utils*, and in that folder create a file called *index.js* 

<img src="\Images\blog\Screenshots\utils.png" alt="" style="width: 100%;">

in that file enter this code which will create an importable module called sortByDate which will sort posts by newest to oldest

```js
export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  }
```

This will be imported in *index.tsx*

``` tsx
import { sortByDate } from '../utils'
```

and used by going to these lines in the getStaticProps

```tsx
return {
    props: {
      posts: posts, 
    },
  }
```

add sort by date to posts

``` tsx
posts: posts.sort(sortByDate), // Sorts posts by date in a variable called posts
```

Now all the posts are sorted by newest to oldest

<img src="\Images\blog\Screenshots\localhost_3001_ (9).png" alt="" style="width: 100%;">

Now the next goal is making the newest post stand out by being ontop of the rest and being bigger then the rest.

<img src="\Images\blog\Screenshots\amamazing-demo-blog.vercel.app_ (2).png" alt="" style="width: 100%;">

Then add all this css which will make the first post bigger

```css
.card:nth-of-type(1) .postimg {
  display: block;
  width: 50%;
  float: left;
  margin-right: 2rem;
  padding-bottom: 0px;
}

.card:first-of-type .postdate{
  font-size: 1.4vw;
  padding-top: 20px;
  color: #C5C5C5;
}

.card:nth-of-type(1) .posttitle {
  font-size: 5vw;
  font-weight: 100;
  color: #FFFFFF;
}

.card:nth-of-type(1) .postdesc {
  font-size: 1.7vw;
  margin-top: -50px;
}

.card:nth-of-type(2) {
  clear: both;
}

.card:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: -1;
}

.card:not(:first-of-type) {
  padding-bottom: 10px;
}
```

And now the homepage is complete

<img src="\Images\blog\Screenshots\localhost_3001_ (10).png" alt="" style="width: 100%;">

## Go to post when clicked
In the pages folder, create a folder called *post*. In that folder create a file called *[slug].tsx*

<img src="\Images\blog\Screenshots\slug.png" alt="" style="width: 100%;">

Because slug is in square brackets, it's a dynamic route. Dynamic routing allows for autonatic generation of pages based on dynamic parameters in the URL.

<img src="\Images\blog\Screenshots\dynamicroute.png" alt="" style="width: 100%;">

We can use this by wrapping the post card in *Post.js* with a link going to *post/post.slug*

``` tsx
<div className='card'>
    <Link href={`/post/${post.slug}`}> {/* Redicts the user to the post page (slug) when clicked */}
        {/* Displays the post image */}
        <div className='postimg'>
          <Image
          src={post.frontmatter.coverimage} 
          alt="image"
          fill
          />
        </div>

          {/* Displays the post text */}
          <div className="cardtext">
            <div className='postdate'>{post.frontmatter.date}</div>
          
  
            <h3 className='posttitle'>{post.frontmatter.title}</h3>
  
            <div className='postdesc'>{post.frontmatter.description}</div>
          </div>
      </Link>
  </div>
```

By going back to *index.tsx* we can remember that slug is set to the name of the file

```tsx
// Create slug which is the name of the file without the markdown extension
const slug = filename.replace('.md', '')
```

First we need to install the marked library in terminal which will be used later.

``` txt
npm i marked
```

Then in the *[slug].tsx* we need to add imports and get static paths. This generates list of possible paths for the dynamic route using the posts folder, it then pre renders all this in the build stage.

```tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { marked } from 'marked'
import Head from 'next/head';


export async function getStaticPaths() {
    // Set the path to posts
    const files = fs.readdirSync(path.join('posts'))
  
    // Sets the path (can be seen in url) to the name of post file 
    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }))
  
    return {
      paths,
      fallback: false,
    }
} 
```

Next we create the getStaticProps which gets the data from the post markdown file and puts parses the frontmatter and content. This is all also pre rendered during build time.

```tsx

export async function getStaticProps({ params: { slug } }: any) {
    // Sets markdownwithmeta to path to post file
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', slug + '.md'),
      'utf-8'
    )
      // Gets frontmatter and content of post
    const { data: frontmatter, content } = matter(markdownWithMeta)
  
    // Returns everything to PostPage 
    return {
      props: {
        frontmatter,
        slug,
        content,
    }
}}
```

Next we need to make the layout of the post's page. First we will test if everything works by only displaying the title and description of the post.

``` tsx
export default function PostPage({
    // Gets the variables from staticprops
    frontmatter: { title, date, description, coverimage},
    content, 
  }: any) {
    return (
      <div className={styles.container}>
        <h1>{title}</h1>
        {description}
      </div>
    )
}
```

If done correctly the result should look something like this when clicking on a post

<img src="\Images\blog\Screenshots\handling.png" alt="" style="width: 100%;">


## Creating the post page
Now I'm going to show you how to make the page look like this.

<img src="\Images\blog\Screenshots\validation.png" alt="" style="width: 100%;">

Now in the return of postpage we will create the topcard, this is split into 2 sections with image and in post text. 

```tsx
return (
      <div className={styles.container}>
        <div className="topcard">
        {/* Displays the image for topcard*/}
        <div className="coverimg">
        <Image
            src={coverimage}
            alt="image"
            fill
            
            />
        </div>

        {/* Displays the text for topcard*/}
        <div className="inposttext">
          <h1>{title}</h1>
        </div>
      </div>
      </div>
    )
```

Topcard creates a grid where 2 out of the 10 of the top has nothing and then splits the 8th into half of image and text. You can alter this to what you think looks best.

Then makes everything in topcard have a box shadow and rounded corners.
```css
.topcard {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(10,1fr);
  grid-template-areas: ". image image image image text text text text .";
}

.topcard > * {
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
```

Cover image sets the aspect ratio to 16:9 and sets grid area to image.

``` css
.coverimg {
  aspect-ratio: 16 / 9;
  position: relative;
  width: 100%;
  grid-area: image;
}
```

In post text sets grid area to text and sets the padding.

``` css
.inposttext {
  grid-area: text;
  padding: 30px;
}
```

The result of this should look like this

<img src="\Images\blog\Screenshots\file.png" alt="" style="width: 100%;">

In the in post text div you can add date, title and description with a different class name for each.

``` tsx
<div className="inposttext">
  <div className="inpostdate">{date}</div>

  <div className="inposttitle">{title}</div>

  <div className="inpostdesc">{description}</div>
</div>
```

These classes changes the font-size and other details.

``` css
.inpostdate {
  font-size: 1.2vw;
  color: #C5C5C5;
}

.inposttitle {
  font-size: 3vw;
  font-weight: 100;
}

.inpostdesc {
  font-size: 1.5vw;
  margin-top: 20px;
}
```

Which makes the finished result for the top card look like this

<img src="\Images\blog\Screenshots\oop.png" alt="" style="width: 100%;">

Then to add the rest of the post simply add this code below the topcard div

```tsx
<div className="htmltext" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
```

Now the post page is done.

<img src="\Images\blog\Screenshots\pagedone.png" alt="" style="width: 100%;">

If you want to code syntaxing like this then you can look at my highlight js tutorial.



## Metadata + Head
Now we need to make a head for each page
<img src="\Images\blog\Screenshots\head.png" alt="" style="width: 100%;">

This can be done by adding this code to *[slug].tsx* right above the topcard

``` tsx
{/* Sets the metadata and title of page to post details */}
<Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:image" content={coverimage} />
    <link rel="icon" href="\favicon.ico" />
</Head>
```

Having title, description and image all in the metadata, it makes the card when sharing the article look good.

<img src="\Images\blog\Screenshots\sharelink.png" alt="" style="width: 100%;">

You should also make an image with the the blog's logo to use for the homepage share link in *index.tsx*

``` tsx
<title>AMA Mazing Blog</title>
<meta name="description" content="Blog for projects made by AMA Mazing" />
<meta name="og:image" content="\homepage.png" />
<link rel="icon" href="\favicon.ico" />
```

And after you've done that you have fully completed your blog!  