import {ConnectKitButton} from "connectkit"
import {getContract} from "wagmi"
import { useAccount } from "wagmi"
import { readContract } from "wagmi"
import contractabi from "../public/abi.json"

const contract = getContract({
    address: "0xb56E74fBa19e8d2Ae51fA1436ac9E0f6A83eC7b7",
    abi: contractabi
})

const data = await readContract({
    address: "0xb56E74fBa19e8d2Ae51fA1436ac9E0f6A83eC7b7",
    abi: contractabi,
    functionName: 'getMinter'
})

function Buttons(){
    const {isConnected} = useAccount();
    return(
        <div className="flex justify-center my-24 items-center flex-col">
         <ConnectKitButton/>
         { isConnected && (
             <button className="rounded-full border-double ring-2 my-24 ring-cyan-300 bg-cyan-700  bg-opacity-40 lg:text-2l xl:text-4xl p-3 hover:scale-110 border-2 text-white">Mint Token</button>
             )
         }
             
    </div>
        )
}

export default Buttons;