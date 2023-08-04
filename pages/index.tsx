import Countdown from "@/components/countdown";
import Head from "next/head"
import Image from "next/image"
import { MouseEventHandler, useState } from "react"

const calculateProfitability = (setter: any) => {
    try {
        const profitability = document.getElementById("profitability");
        const labels = profitability?.getElementsByTagName("label") ?? [];
        const priceInput = labels[0]?.getElementsByTagName("input")[0];
        // const noOfMinersInput = labels[1]?.getElementsByTagName("input")[0];
        const noOfShiftsInput = labels[1]?.getElementsByTagName("input")[0];
        const price = parseFloat(priceInput.value);
        // const miners = parseInt(noOfMinersInput.value);
        const shifts = parseInt(noOfShiftsInput.value);
        if (!isNaN(price)) {
            // const m =  isNaN(miners) ? 1 : miners;
            const s =  isNaN(shifts) ? 1 : shifts;
            const rate = 250;
            const bonus = 0.25 * (Math.ceil(Math.max(1, s)) - 1);
            const payout = (price * rate) + (price * bonus);
            setter(Math.round((payout + Number.EPSILON) * 100) / 100);
        }
    } catch (_) {

    }
}

const calculateRewards = (setter: any) => {
    try {
        const profitability = document.getElementById("rewards");
        const labels = profitability?.getElementsByTagName("label") ?? [];
        const priceInput = labels[0]?.getElementsByTagName("input")[0];
        const minersIdsInput = labels[1]?.getElementsByTagName("input")[0];
        const price = parseFloat(priceInput.value);
        const minerID = parseInt(minersIdsInput.value);
    } catch (_) {

    }
}

export default function Home() {
    const [tab, setTab] = useState(true);
    const [profitability, setProfitability] = useState(0.0);
    const [rewards, setRewards] = useState(0.0);
    const date = new Date(Date.UTC(2023, 5, 22, 18, 0, 0));
    const hours = date.getHours();
    const time = hours > 12 ? `${hours-12}PM` : `${hours}AM`;
    return (
    <>
        <Head>
        <title>Bohaniqa - NFT-Powered Cryptocurrency Mining</title>
        <meta name="description" content="Bohaniqa offers innovative cryptocurrency mining through NFTs. Join our sustainable and secure network to mine and collect unique NFTs while shaping the future of blockchain technology on Solana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div id="splash" className="container">
                <nav id="nav">
                    <a className="logo">
                        <Image alt="Logo" src="/icon-web.svg" width={48} height={48}/>
                    </a>
                    <ul className="menu">
                        <li>
                            <a target="_blank" className="button" href="https://mint.bohaniqa.com">Mint</a>
                        </li>
                        <li>
                            <a target="_blank" className="button" href="https://app.bohaniqa.com">Open App</a>
                        </li>
                    </ul>
                </nav>

                <div className="view reverse">
                    <div className="content">
                        <h1 className="title">
                            Welcome to Bohaniqa - Redefining Cryptocurrency Mining with NFTs
                        </h1>
                        <p className="subtext">
                            Are you ready to step into the future of cryptocurrency mining? 
                        </p>
                        <p className="subtext">
                            Our NFT-powered mining network allows you to mine, 
                            collect, and trade unique digital assets while contributing to a more 
                            sustainable and secure blockchain ecosystem.
                        </p>
                    </div>
                    <div className="image">
                        <Image alt="NFT Miner #1" src="/0-web.png" width={540} height={540}/>
                    </div>
                </div>
            </div>

            <div id="why" className="page container">
                <div className="view">
                    <div className="content">
                        <h2 className="title">
                            Why Choose Bohaniqa?
                        </h2>
                        <ul className="number-list">
                            <li>
                                <b>1. NFT-Powered Mining: </b>
                                Our unique approach allows you to mine Bohaniqa through a 
                                decentralized network of Non-Fungible Tokens, enabling an 
                                exclusive and dynamic mining ecosystem.
                            </li>
                            <li>
                                <b>2. Deflationary Maximum Supply: </b>
                                With a deflationary maximum supply, Bohaniqa becomes 
                                a rare and valuable asset, protecting your investments from 
                                excessive inflation.
                            </li>
                            <li>
                                <b>3. Fair Launch: </b>
                                The network has been launched with no pre-mine and 
                                free NFT mints.
                            </li>
                            <li>
                                <b>4. Ownership Empowerment: </b>
                                Embrace true ownership of your assets with Bohaniqa. Each NFT 
                                represents a distinctive piece of the cryptocurrency, connect 
                                with fellow collectors that shape the future of Bohaniqa.
                            </li>
                        </ul>
                    </div>
                    <div className="image">
                        <Image alt="Network" src="/1-web.png" width={540} height={540}/>
                    </div>
                </div>
            </div>

            <div id="how" className="page container">
                <div className="view">
                    <div className="content">
                        <h2 className="title">
                            How Does Bohaniqa Work?
                        </h2>
                        <p className="subtext">
                            The network runs in shifts of ~24 hour intervals and releases BOQ tokens 
                            to active miners. 
                            <br/>
                            <br/>
                            A miner can clock-in at any time during a shift to 
                            claim their mining rewards. The rewards for a 
                            given miner can be calculated as follows:
                            <br/>
                            <br/>
                            <span className="math indent">
                                <span className="label"><em>f</em>(<em>S</em><sub><em>c</em></sub>)</span>
                                = <em>R</em><sub><em>b</em></sub> + <em>R</em><sub><em>i</em></sub>(⌈<em>S</em><sub><em>c</em></sub>⌉−1), <em>S</em><sub><em>c</em></sub> ∈ [1, <em>S</em><sub><em>m</em></sub>]
                                <br/>
                                <span className="label"> </span>
                                = <em>250</em> + <em>0.25</em>(⌈<em>S</em><sub><em>c</em></sub>⌉−1), <em>S</em><sub><em>c</em></sub> ∈ [1, <em>10K</em>]
                            </span>
                            <span className="math where">
                            where:
                            </span>
                            <span className="indent">
                                <span className="math">
                                    <span className="label"><em>S</em><sub><em>c</em></sub></span>
                                    = Number of completed shifts.
                                </span>
                                <span className="math desc">
                                <span className="label"><em>R</em><sub><em>b</em></sub></span>
                                    = Base rate mining rewards.
                                </span>
                                <span className="math desc">
                                <span className="label"><em>R</em><sub><em>i</em></sub></span>
                                    = Inflation rate mining rewards.
                                </span>
                                <span className="math desc">
                                    <span className="label"><em>S</em><sub><em>m</em></sub></span>
                                    = Maximum number of shifts.
                                </span>
                            </span>
                            {/* <br/>
                            <span className="note">
                                Rewards start at <span className="medium">250 BOQ</span>/shift and 
                                increase by <span className="medium">0.25 BOQ</span> with every 
                                completed shift. <a href="#calculator">Profitability Calculator</a>
                            </span> */}
                            <br/>
                            <br/>
                            Giving a max supply of 149.9B (14.9M/miner)
                            over ~30 years. <span className="medium">Unclaimed 
                            tokens reduce the max supply in real-time, creating a deflationary currency.
                            </span>
                        </p>
                    </div>
                    <div className="image">
                        <Image alt="Shift Diagram" src="/shift-web.png" width={540} height={540}/>
                    </div>
                </div>
            </div>        

            <div id="collection" className="page container">
                <div className="view reverse">
                    <div className="content">
                        <h2 className="title">
                            The Bohaniqa Collection
                        </h2>
                        <p className="subtext">
                        A collection of 10K NFT mining machines with the authority to mine Bohaniqa.
                        <br/>
                        <br/>
                            Mining rewards start at <span className="medium">250</span> and 
                            increase by <span className="medium">0.25</span> with every completed 
                            shift to reward frequent miners and raise the inherent value of their NFT.
                        <br/>
                        <br/>
                        Each NFT has a unique design pattern and can be traded like any other digital collectable.
                        <br/>
                        <br/>
                        <span className="note">
                            The <a 
                                target="_blank"
                                title="Foundation Address"
                                href="https://solscan.io/address/H3GhSvLTJCdxAjSdZrmq359ApGe61qQcikwSgJfjgHmF"
                                >Bohaniqa Foundation</a> receives 0.5% of the 2.5% NFT royalty.
                        </span>
                        </p>
                    </div>
                    <div className="image">
                        <Image alt="NFT Collection" src="/collection-web.png" width={540} height={540}/>
                    </div>
                </div>
            </div>

            <div id="calculator" className="page container">
                <div className="view">
                    <div className="content">
                        <h2 className="title">
                            Mining Profitability Calculator
                        </h2>
                        <p className="subtext">
                            {tab 
                                ? "Calculate the earning potential of your NFT miner."
                                : "Check the mining rewards paid out by your miner."}
                            <span className="placeholder"> The rate increases with every completed shift.</span>
                        </p>
                    </div>
                    <div className="image">
                        {/* <div className="tabs">
                            <button className={tab ? 'tab active' : 'tab'} onClick={() => {setTab(true)}}>Profitability</button>
                            <button className={tab ? 'tab' : 'tab active'} onClick={() => {setTab(false)}}>Rewards</button>
                        </div> */}
                        {tab
                         ? (<form id="profitability">
                            <h2 className="rate">
                                ${profitability}
                                <span className="rate-label subtext"> / day</span>
                            </h2>
                            <label>
                                Token Price
                                <input className="dollar" onChange={() => calculateProfitability(setProfitability)} type="number" placeholder="$0.0" min="0.00" step={0.1}></input>
                            </label>
                            {/* <label>
                                Number of Miners
                                <input onChange={() => calculateProfitability(setProfitability)} type="number" placeholder="1" min="1" max="10000"></input>
                            </label> */}
                            <label>
                                Number of Shifts
                                <input onChange={() => calculateProfitability(setProfitability)} type="number" placeholder="1" min="1" max="10000"></input>
                            </label>
                        </form>)
                        : (<form id="rewards">
                            <h2 className="rate">
                                {rewards}
                                <span className="rate-label subtext"> / day</span>
                            </h2>
                            <label>
                                BOQ Price ($)
                                <input className="dollar" onChange={() => calculateRewards(setRewards)} type="number" placeholder="$1.0" min="0.00" step={0.1}></input>
                            </label>
                            <label>
                                Miner ID
                                <input onChange={() => calculateRewards(setRewards)} type="number" placeholder="1" min="1" max="10000"></input>
                            </label>
                        </form>)}
                    </div>
                </div>
            </div>

            <div id="get-started" className="page container">
                <div className="view reverse">
                    <div className="content">
                        <h2 className="title">
                            Secure Your Future with Bohaniqa - Get Started
                        </h2>
                        <p>
                            Start your journey into the future of cryptocurrency mining by embracing 
                            the power of NFTs and the deflationary model with Bohaniqa. 
                        </p>
                        <div className="step">
                            <p className="subtext">
                                1. Mint an NFT miner.
                            </p>
                            <div className="action">
                                <a className="button" href="https://mint.bohaniqa.com" target="_blank">Mint</a>
                            </div>
                        </div>
                        <div className="step">
                            <p className="subtext">
                                2. Connect the application.
                            </p>
                            <div className="action">
                                <a className="button" href="https://app.bohaniqa.com" target="_blank">Open App</a>
                            </div>
                        </div>
                        <div className="step">
                            <p className="subtext">
                                3. Clock-in to earn mining rewards.
                            </p>
                            <div className="action clock-in">
                                <Image alt="Clock-in" src="/clock-web.svg" width={48} height={48}/>
                                <i className="placeholder">In-App Functionality</i>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <Image alt="Logo" src="/logo-web.png" width={540} height={540}/>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div className="container">
                    <h2 className="title">
                        Join the Bohaniqa Community Today.
                    </h2>
                    <div className="account">
                        <p className="title">Smart Contract</p>
                        <a target="_blank" title="Smart Contract" className="address" href="https://explorer.solana.com/address/J1FMqW26pFkvgqezcS58DEuKgVPsMcPr7P2SugrBBbqa">
                           J1FMqW26pFkvgqezcS58DEuKgVPsMcPr7P2SugrBBbqa
                        </a>
                    </div>
                    <div className="account">
                        <p className="title">Foundation</p>
                        <a target="_blank" title="Foundation" className="address" href="https://explorer.solana.com/address/H3GhSvLTJCdxAjSdZrmq359ApGe61qQcikwSgJfjgHmF">
                            H3GhSvLTJCdxAjSdZrmq359ApGe61qQcikwSgJfjgHmF
                        </a>
                    </div>
                    <div className="account">
                        <p className="title">Token Mint</p>
                        <a target="_blank" title="Token Mint" className="address" href="https://explorer.solana.com/address/FWzs6NG9xaiGkSTqzU6d4n8BDd8bUpf2uHBQ9iu4HkUo">
                            FWzs6NG9xaiGkSTqzU6d4n8BDd8bUpf2uHBQ9iu4HkUo
                        </a>
                    </div>
                    <footer className="subtext">
                        <div className="copyright">
                            <Image alt="Logo" src="/icon-web.svg" width={48} height={48}/>
                            <div className="text">
                                <span className="name">Copyright © 2023 Bohaniqa</span>
                                <span className="year">All rights reserved.</span>
                            </div>
                        </div>
                        <div className="socials">
                            <a title="GitHub" href="https://github.com/bohaniqa" target="_blank">
                                <Image alt="GitHub" src="/github-web.svg" width={24} height={24}/>
                            </a>
                            <a title="Twitter" href="https://twitter.com/bohaniqa" target="_blank">
                                <Image alt="Twitter" src="/twitter-web.svg" width={24} height={24}/>
                            </a>
                            <a title="Discord" href="https://discord.gg/Ht2g2fRQbs" target="_blank">
                                <Image alt="Discord" src="/discord-web.svg" width={24} height={24}/>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    </>
    )
}