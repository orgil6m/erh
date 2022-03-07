import Document, {Html,Head,Main, NextScript} from 'next/document'

class MyDocument extends Document
{
    render(){
        return (
            <Html lang="en" className='dark'>
                <Head>
                    <meta name="OZZO LLC" content="ozzo" />
                    <link rel="shortcut icon" href="/ozzo.ico" />
                </Head>
                <body className='bg-white text-black'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;