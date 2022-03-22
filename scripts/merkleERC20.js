const main = async () => {
  const MerkleToken = await hre.ethers.getContractFactory("MerkleToken");
  const token = await MerkleToken.deploy();

  await token.deployed();

  console.log("MerkleToken deployed to:", token.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
