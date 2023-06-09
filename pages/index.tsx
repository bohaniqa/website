import Head from "next/head"
import Image from "next/image"
// import logoImage from "../public/logo-white.png";
// import nft0 from "../public/0.png";
// import nft9999 from "../public/9999.png";
// import twitterImage from "../public/twitter-white.png";
// import discordImage from "../public/discord-white.png";

export default function Home() {

    return (
    <>
        <Head>
        <title>BOHANIQA</title>
        <meta name="description" content="10K digital mining machines." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <nav id="nav">
                <a className="logo">
                    <Image alt="Logo" src="/logo-white.png"/>
                </a>
                <ul className="menu">
                    <li>
                        <a className="button disabled" href="https://mint.bohaniqa.com">Mint</a>
                    </li>
                    <li>
                        <a className="button disabled" href="https://app.bohaniqa.com">Launch App</a>
                    </li>
                </ul>
            </nav>

            <div id="splash">
                <div className="container">
                    <div className="row">
                        <Image alt="NFT Miner #1" src="/0.png"/>
                        <Image alt="NFT Miner #10000" src="/9999.png"/>
                    </div>
                    <div className="row">
                        <h1>10K Digital Mining Machines.</h1>
                    </div>
                    <div className="row">
                        <a target="_blank" href="https://twitter.com/bohaniqa">
                            <Image alt="Twitter" src="/twitter-white.png"/>
                        </a>
                        <a target="_blank" href="https://discord.gg/Ht2g2fRQbs">
                            <Image alt="Discord" src="/discord-white.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}