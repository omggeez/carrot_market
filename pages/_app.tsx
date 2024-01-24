import "../styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
