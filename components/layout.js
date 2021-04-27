import PropTypes from 'prop-types'
import NextHead from 'next/head'
import Footer from "./footer";

// Your app's theme color
const THEME_COLOR = '#005af0'

const Layout = (props) => (
    <>
        <NextHead>
            <title>{props.title || ''}</title>
            <meta name="description" content={props.description || ''} />
            <meta name="theme-color" content={THEME_COLOR} />
            <link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />
            <link rel="apple-touch-icon" href="/static/images/icons-192.png" />
            <link rel="icon" href="/static/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
        </NextHead>

        {props.children}

        <Footer/>

        <style jsx global>{`
    h1, h2, h3, h4, h5 {
        font-family: 'Rubik', sans-serif;
    }
    .jumbotron{
      background: none;
      border-bottom: 3px solid #fecd2e;
    }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
      }
    `}</style>
    </>
)

Layout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Layout