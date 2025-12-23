async function main() {
  const RiskRegistry = await ethers.getContractFactory("RiskRegistry");
  const contract = await RiskRegistry.deploy();
  await contract.waitForDeployment();
  console.log(await contract.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
