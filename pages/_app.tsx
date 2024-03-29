import useUser from "@libs/client/use-user";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

function App({ Component, pageProps }: AppProps) {
  const {} = useUser();

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default App;
