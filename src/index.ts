import {config} from 'dotenv';

import { Keypair } from "@solana/web3.js";
import { getBalance, transfer } from "./util";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

(async function() {
    config();

    const myPublicKey = "GMf7Tew6JXGPZjUtV9FS4a9u6pptHpSTL8jEKpgrrKRD";
    const myOtherPublicKey = 'GjLnYvqEA9LnP3DHZZbGbpcwgui6LpS3uFYbyWU6gc4Z';
    const secret = getKeypairFromEnvironment("SECRET_KEY");

    console.log(await getBalance(myPublicKey))
    console.log(await getBalance(myOtherPublicKey))

    /* transfer(0.01, myPublicKey, myOtherPublicKey, secret);

    console.log(await getBalance(myPublicKey))
    console.log(await getBalance(myOtherPublicKey)) */

}());