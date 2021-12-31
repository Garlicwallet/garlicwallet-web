import PropTypes from 'prop-types'
import NextHead from 'next/head'
import Footer from "./footer";
import Navigation from "./navigation";

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
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                          rel="stylesheet"/>
        </NextHead>
        <Navigation/>

        {props.children}

        <Footer/>

        <style jsx global>{`
    h1, h2, h3, h4, h5 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    h1{
    vertical-align: bottom;
    display: inline;
        font-size: 28px;
        line-height: 1.212em;
        font-weight: 700;
        letter-spacing: -0.01em;
    }
    .jumbotron{
      background: none;
    }
    
    .footer{
      border-top: 1px solid #f4ce45;
      padding-top: 16px;
    }
    .screen{
    border-radius: 1rem !important;
    }
    
    .screen-left {
    margin-bottom: 40px;
      transform:
        perspective(800px)
        rotateY(25deg) scale(0.9)
        rotateX(10deg);
}
    
  
      .screen-right {
      margin-bottom: 40px;
      transform:
        perspective(800px)
        rotateY(-25deg) scale(0.9)
        rotateX(10deg);
}
  
  .disclaimer{
  color: #8a8a8a;
  }
    
      body {
background-image: linear-gradient(to right, #370f79, #131128);
        color: white;
        margin: 0;
        font-family: 'Poppins', sans-serif;
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