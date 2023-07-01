import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript,} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
                    <link href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap' rel="stylesheet"/>
                </Head>
                <body className={'font-Oswald'}>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument