---
title: 'HighlightJS with markdown'
date: 'Mar 1, 2023'
description: 'A guide on how to use Highlight JS and markdown.'
coverimage: '/Images/highlightjs/thumbnail.png'
---

Source code: https://github.com/AMAMazing/Single-page-markdown

Website: 

# The problem

This is a website that I made to display a markdown file which contains codeblocks. 

<img src="\Images\highlightjs\Screenshots\localhost_3000_ (2).png" alt="" style="width: 100%; border: 5px solid #000000; ">

Though the codeblocks look alright because of the css styling, it's still missing code syntaxing which is vital for making code look good and readable.

<img src="\Images\highlightjs\Screenshots\syntax.png" alt="" style="width: 100%; ">

This is where highlight js comes in. 

Highlight JS is a library that allows you to add code syntaxing with high customisability and alot of different ways to add it to your project. For this project we'll be using it with markdown by displaying a seperate markdown file to the home page of the website.

<img src="\Images\highlightjs\Screenshots\files.png" alt="" style="width: 100%; ">

# Creating website

Firstly we need to make the website in order to understand how to add highlight js to it. 

I'm using NextJS for this so you want to start with

``` txt
npx create-next-app --typescript {project-name}

cd {project-name}

npm run dev
```
and you should see this when going to localhost

<img src="\Images\highlightjs\Screenshots\localhost_3002_.png" alt="" style="width: 100%; ">

Next go to *pages/index.tsx* below the imports already their, add these imports
``` tsx
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import hl from 'highlight.js'
```

Fs is for the file system which you will need later for reading the markdown file.

Matter will need to be installed through the terminal by entering `npm install gray-matter`
Matter separates the markdown file into it's metadata and the actual content and then puts the two in seperate variables.

Marked will need to be installed through the terminal by entering 
```txt
npm install marked

npm i --save-dev @types/marked
```
Marked is the library that compiles markdown to html.

Lastly highlight.js is also installked through the terminal by entering `npm install highlight.js`

Then add your markdown file to the pages folder and I'm going to be calling it *page.md*. Make sure the file has metadata at the top of the page such as title and description like this

``` txt
---
title: 'Hello World'
description: 'Hello world in 10 different programming languages.'
---
```

Next, go back your index.tsx file and code the getstaticprops as shown below. 

This is the part where we will be adding highlight js into later.

``` tsx
// Getstaticprops runs on the server making the website faster
export async function getStaticProps() {
  // Sets markdownwithmeta to path to post file
  const markdownWithMeta = fs.readFileSync(
    "pages/page.md",
    'utf-8'
  )
    // Gets frontmatter and content of post
  const { data: frontmatter, content } = matter(markdownWithMeta)

  // Returns everything to PostPage 
  return {
    props: {
      frontmatter,
      html: marked(content),
  }
}}
```

Then add the next part of code which will get the getstaticprops properties and display it.

``` tsx
export default function Home({
  // Gets the variables from staticprops
  frontmatter: { title, description},
  html, 
}: any) {
  return (
    <div className={styles.container}>
      {/* Sets the metadata and title of page to post details */}
      <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="\favicon.ico" />
      </Head>
      
      {/* Displays the content of post*/}
      <div className="htmltext" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}
```

Now in localhost you should see the markdown file without code syntaxing:

<img src="\Images\highlightjs\Screenshots\localhost_3000_ (2).png" alt="" style="width: 100%; border: 5px solid #000000; ">

# Adding highlight js
To add highlight js to this site you go back to the getstaticprops part of the code and go to 
``` tsx
html: marked(content),
```

With marked you can add another parameter for options so we'll add the highlight as the 2nd parameter using this code:

```tsx
html: marked(content, {
        highlight: function(code, lang) {
          
        },
    }),
```

Highlight has 3 parameters in the function which is code, lang, and callback. For this example we will only be using code and lang.

Next add the line below into the highlight function.

```tsx
return hl.highlight(lang, code).value;
```

Now your getstaticprops return should look like this;

```tsx
return {
    props: {
      frontmatter,
      html: marked(content, {
        highlight: function(code, lang) {
          return hl.highlight(lang, code).value;
        },
    }),
  }
}
```

If you look at the localhost now it will still look the same as before but if we inspect the page, the code is now in groups

<img src="\Images\highlightjs\Screenshots\inspect.png" alt="" style="width: 100%; border: 5px solid #000000; ">

This is because we need to import a style.

You can find all the styles on their website: https://highlightjs.org/static/demo/

<img src="\Images\highlightjs\Screenshots\themes.png" alt="" style="width: 100%; border: 5px solid #000000; ">

Once you picked a theme you like you can add the theme by adding an import to the top of your index.tsx page. In this example I will be using vs2015.

``` tsx
import 'highlight.js/styles/vs2015.css'
```

And now your codeblocks should have code syntaxing

<img src="\Images\highlightjs\Screenshots\localhost_3001_.png" alt="" style="width: 100%; border: 5px solid #000000; ">

