// mint NFT
const constract = require('./constract.js');

async function main() {
    const nftAddress = constract.nft;
  
    const BytedanceNFT = await ethers.getContractFactory("BytedanceNFT");
    const bytedanceNFT = BytedanceNFT.attach(nftAddress);
  
    const playerAddress = "0xe0BB1F930E9eaf7e3b0A9afC18A36C707feBaE34";
  
    const tx = await bytedanceNFT.mintNFT(playerAddress);
    await tx.wait();
  
    console.log(`NFT minted to ${playerAddress}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });