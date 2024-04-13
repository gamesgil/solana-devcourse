import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";

export function generatePulicKey() {
    const keypair = Keypair.generate();

    return keypair.publicKey;
}

export async function getBalance(key: string) {
    const url = clusterApiUrl("devnet");
    const connection = new Connection(url, "confirmed");
    const address = new PublicKey(key);
    const balance = await connection.getBalance(address);

    return balance / LAMPORTS_PER_SOL;
}

export async function transfer(amount: number, keyFrom: string, keyTo: string, senderKeypair: Keypair) {
    const transaction = new Transaction()


    const sendSolInstruction = SystemProgram.transfer({

        fromPubkey: new PublicKey(keyFrom),

        toPubkey: new PublicKey(keyTo),

        lamports: LAMPORTS_PER_SOL * amount
    });


    transaction.add(sendSolInstruction);

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    const signature = await sendAndConfirmTransaction(connection, transaction, [

        senderKeypair,

    ]);

    console.log(`💸 Finished! Sent ${LAMPORTS_PER_SOL * amount} to the address ${keyTo}. `);

    console.log(`Transaction signature is ${signature}!`);
}