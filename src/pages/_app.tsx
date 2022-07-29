import type { AppProps } from "next/app"
import Head from "next/head";
import "../styles/globals.scss";
import { useEffect } from "react";

function Application ({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// TagManager.initialize({
		// 	gtmId: "GTM-PVRK77W",
		// });
	}, [])

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
				<title>I'm Clint ⚡️ I mainly build stuff on the internet.</title>
				<meta name="title" content="I'm Clint ⚡️ I mainly build stuff on the internet." />
				<meta name="description" content="I mainly build stuff on the internet, also HypeProxy.io & Parasol.Finance CEO | PGP: C91F039C | clint21.eth | clint.sol" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://clint21.eth" />
				<meta property="og:title" content="I'm Clint ⚡️ I mainly build stuff on the internet." />
				<meta property="og:description" content="I mainly build stuff on the internet, also HypeProxy.io & Parasol.Finance CEO | PGP: C91F039C | clint21.eth | clint.sol" />
				<meta property="og:image" content="/preview.jpg" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://clint21.eth" />
				<meta property="twitter:title" content="I'm Clint ⚡️ I mainly build stuff on the internet." />
				<meta property="twitter:description" content="I mainly build stuff on the internet, also HypeProxy.io & Parasol.Finance CEO | PGP: C91F039C | clint21.eth | clint.sol" />
				<meta property="twitter:image" content="/preview.jpg" />
				<link rel="shortcut icon" href="/favicon.ico"/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default Application;
