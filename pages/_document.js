import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&family=Open+Sans:wght@600&family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap" rel="stylesheet"/>
        </Head >
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  
}