import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import {config} from 'dotenv';


(async function() {
    config();

    const myPublicKey = "GMf7Tew6JXGPZjUtV9FS4a9u6pptHpSTL8jEKpgrrKRD";
    const mySecretKey = getKeypairFromEnvironment("SECRET_KEY");

    

    const url = clusterApiUrl("devnet");
    const connection = new Connection(url, "confirmed");
    const address = new PublicKey(myPublicKey);
    const balance = await connection.getBalance(address);
    
    console.log(url);
    console.log(`The balance of the account at ${address} is ${balance} lamports = ${balance / LAMPORTS_PER_SOL} SOL`); 
    console.log(`✅ Finished!`)
}());
