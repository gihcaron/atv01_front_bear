import '../styles/globals.css';

export default function MyApp({ component, pageProps}) {
    return <component{...pageProps}/>;
}