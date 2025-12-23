require("dotenv").config();

async function main() {
  const RiskRegistry = await ethers.getContractAt("RiskRegistry", process.env.CONTRACT_ADDRESS);
  const protocolId = ethers.keccak256(ethers.toUtf8Bytes(process.env.PROTOCOL_NAME));
  const tx = await RiskRegistry.updateRiskScore(
    Number(process.env.RISK_SCORE),
    Number(process.env.RISK_LEVEL)
  );
  console.log(tx.hash);
  await tx.wait();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
