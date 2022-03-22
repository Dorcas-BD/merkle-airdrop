const main = async () => {
  const Merkle = await hre.ethers.getContractFactory("Merkle");
  const proof = await Merkle.deploy();

  await proof.deployed();

  console.log("Merkle deployed to:", proof.address);
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
