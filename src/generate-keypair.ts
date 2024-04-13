import {config} from 'dotenv';
import { addKeypairToEnvFile, getKeypairFromEnvironment, getKeypairFromFile, initializeKeypair } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";
import base58 from "bs58";
import { configDotenv } from "dotenv";

config();

//const keypair = Keypair.generate();
//console.log(`✅ Generated keypair!`)

// const keypair = Keypair.generate();
//  console.log(`The public key is: `, keypair.publicKey.toBase58());
//  console.log(`The secret key is: `, keypair.secretKey

console.log(getKeypairFromEnvironment("SECRET_KEY"))
