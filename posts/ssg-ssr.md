---
title: "Custom _document.js File in Next.js"
date: "2020-01-01"
summary: "Why we need a custom _document file,how we can cutomize pages using this file"
---

Let's create a simple page in Next.js like shown below.
</br>

```javascript
const Home = () => {
  return <h1>Hello World!</h1>;
};

export default Home;
```


when we run this in local server we can see Hello World on screen, though we have never added any markup like `<html>` or `<body>` tags in this page but still we can see the h1 being rendererd on screen perfectly, if we check the page source we can see the markups been added by default... document.js in nextjs does this by default work for us.

Now we know \_document.js file governs the page structure in nextjs, so we can use this file to agument our applicatios `<html>` or `<body>` tags, we need a custom \_document.js file for that,lets create a \_document.js file in our pages directory.

```javascript
import Document, { Html, Head, Main, NextScript } 
from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps 
    = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

We export a react class here in order to extend our default \_document.js file, default file is needed since its implements certain functions/methods which are important for next.js to render the application.

we can remove the getInitialProps or render function from MyDocument but `<Html>`, `<Head/>`, `<Main/>` and `<NextScript/>` are required for the page to be properly rendered.

whatever the scripts we write inside the `<head> </head>`tag will be available in all the pages becase this file be used as base template.

There are few intresting things we can do using the custom \_document.js file.
- Adding custom fonts
- To ensure the styles are rendered on the server

To add the custom fonts just copy the font link from google fonts and place it between `<head> </head>` tag.

```javascript
<Head>
  <link
    href="https://fonts.googleapis.com/css2?
    family=Averia+Serif+Libre:wght@300&display=swap"
    rel="stylesheet"
  />
</Head>;

export default MyDocument;
```

refer [this document](https://egghead.io/lessons/react-extend-next-js-default-document-class-to-ensure-styles-are-rendered-on-the-server) to know how we can render styles on server 

There are few things we should not do in custom document file
- viewport meta tags should not be used in _document.js's `<Head>` can use the app.js file instead.
- aviod writing event handlers here since document file is rendered on server so event handlers like "onClick" wont work here.


summary 
- custom documentfile is used to agument our applicatios `<html>` or `<body>` tags.
- we can use this file to render custom fonts and render styles on server.
- since file is rendered on server side avoid writing any client side logic here.
- this is a root file for keep the usage minimal.
