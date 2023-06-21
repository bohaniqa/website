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
        <title>BOHANIQA</title>
        <meta name="description" content="A new kind of mining network for the digital asset age." />
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
                            BOHANIQA
                        </h1>
                        <p className="subtext">
                            A new kind of mining network for the digital asset age.
                        </p>
                        <div>
                            <p className="subtext bold date">MINTING JUNE 22, {time}</p>
                            <Countdown onTimeout={() => {}}></Countdown>
                        </div>
                        <a className="button" href="#intro">
                            Learn More
                        </a>
                    </div>
                    <div className="image">
                        <Image alt="NFT Miner #1" src="/0-web.png" width={540} height={540}/>
                    </div>
                </div>
            </div>

            <div id="intro" className="page container">
                <div className="view">
                    <div className="content">
                        <h1 className="title">
                            WHAT IS BOHANIQA?
                        </h1>
                        <p className="subtext">
                            A decentralized, digital currency run by a network of NFT mining machines on the Solana blockchain.
                            {/* A fairly distributed, limited supply currency for the Solana ecosystem. */}
                            <br/>
                            <br/>
                            <span className="medium">10K mining machines</span> operate the network and claim 
                            their share of mining rewards ($BOQ) each time they <span className="medium">clock-in</span> for 
                            a <span className="medium">shift</span> on the network.
                            {/* The network comprises <span className="medium">10K digital mining 
                            machines</span> (NFTs) that claim 
                            their share of mining rewards (BOQ) each time they <span className="medium">clock-in</span> for 
                            a <span className="medium">shift</span> on the network. */}
                        </p>
                        <a href="#shift">
                            How does it work?
                        </a>
                    </div>
                    <div className="image">
                        <Image alt="Network" src="/network-web.png" width={540} height={540}/>
                    </div>
                </div>
            </div>

            <div id="why" className="page container">
                <div className="view reverse">
                    <div className="content">
                        <h1 className="title">
                            WHY BOHANIQA?
                        </h1>
                        <p className="subtext">
                            Bohaniqa is a deflationary currency mined from <span className="medium">ZERO</span>. It has been 
                            designed as a native store of value for the Solana ecosystem (the 
                            Bitcoin of Solana).
                            <br/>
                            <br/>
                            <ul style={{
                                marginLeft: "40px"
                            }}>
                                <li>Mine to Earn</li>
                                <li>Easily tradable mining machines (NFTs)</li>
                                <li>Open-source</li>
                                <li>Transparent decentralized network</li>
                                <li>Deflationary Supply</li>
                                <li>Fair Launch (no pre-mine)</li>
                            </ul>
                            {/* The SOL token is an inflationary currency designed as a frequent medium 
                            of exchange and potential US security.
                            <br/>
                            <br/>
                            BOHANIQA is a <span className="medium">deflationary currency</span> native to the Solana blockchain that 
                            can act as a store of value and never be deemed a security. */}
                        </p>
                    </div>
                    <div className="image">
                        <Image alt="NFT Miner #5001" src="/1-web.png" width={540} height={540}/>
                    </div>
                </div>
            </div>

            <div id="shift" className="page container">
                <div className="view">
                    <div className="content">
                        <h1 className="title">
                            INFLATIONARY REWARDS, DEFLATIONARY SUPPLY.
                        </h1>
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
                            <br/>
                            <span className="note">
                                Rewards start at <span className="medium">250 BOQ</span>/shift and 
                                increase by <span className="medium">0.25 BOQ</span> with every 
                                completed shift. <a href="#calculator">Profitability Calculator</a>
                            </span>
                            <br/>
                            <br/>
                            Giving a max supply of 149.9B (14.9M/miner)
                            over ~30 years. <span className="medium">Unclaimed 
                            tokens reduce the max supply in real-time 
                            and creates a deflationary currency.
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
                        <h1 className="title">
                            COLLECTION
                        </h1>
                        <p className="subtext">
                        A collection of 10K NFT mining machines with the ability to mine $BOQ.
                        <br/>
                        <br/>
                        The mining rewards increases with every shift to reward frequent miners and raise the inherent value of their NFT.
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
                                >Bohaniqa Foundation</a> receives 0.5% of the 2.5% NFT royalty to buy and 
                            burn $BOQ tokens.
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
                        <h1 className="title">
                            MINING PROFITABILITY CALCULATOR
                        </h1>
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
                                BOQ Price ($)
                                <input className="dollar" onChange={() => calculateProfitability(setProfitability)} type="number" placeholder="$1.0" min="0.00" step={0.1}></input>
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
                        <h1 className="title">
                            GET STARTED
                        </h1>
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
                    <h1 className="title">
                        AN OPEN SOURCE DIGITAL CURRENCY RUN BY A NETWORK OF NFT MINERS.
                    </h1>
                    <p className="creator">
                        <i className="subtext">Soltoshi</i>
                    </p>
                    <footer className="subtext">
                        <div className="copyright">
                            <Image alt="Logo" src="/icon-web.svg" width={48} height={48}/>
                            <div className="text">
                                <span className="name">BOHANIQA</span>
                                <span className="year">© 2023</span>
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