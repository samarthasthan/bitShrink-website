import "@/styles/globals.css";
import Providers from "../store/Provider";
export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
