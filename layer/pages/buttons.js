import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
const alchemyId = process.env.ALCHEMY_ID;
const client = createClient(
    getDefaultClient({
        appName: "Layer"
        alchemyId,
    });
)

function Buttons(){
    return(
        <div className="flex justify-center my-24 items-center flex-col">
        <button className="rounded-full border-double ring-2 my-10 ring-cyan-300  bg-cyan-700  bg-opacity-40 lg:text-2l xl:text-4xl p-3 hover:scale-110 border-2 text-white">Connect MetaMask Wallet</button>
        <button className="rounded-full border-double ring-2 my-24 ring-cyan-300 bg-cyan-700  bg-opacity-40 lg:text-2l xl:text-4xl p-3 hover:scale-110 border-2 text-white">Mint Token</button>
    </div>
        )
}

export default Buttons;