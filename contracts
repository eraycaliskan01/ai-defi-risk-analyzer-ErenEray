pragma solidity ^0.8.20;

contract RiskRegistry {
    address public owner;

    struct RiskData {
        uint256 score;
        uint8 level;
        uint256 updatedAt;
    }

    mapping(bytes32 => RiskData) private risks;

    event RiskUpdated(bytes32 indexed protocolId, uint256 score, uint8 level, uint256 updatedAt);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function updateRiskScore(bytes32 protocolId, uint256 score, uint8 level) external onlyOwner {
        require(score <= 100, "score must be 0-100");
        require(level <= 2, "level must be 0-2");

        risks[protocolId] = RiskData(score, level, block.timestamp);
        emit RiskUpdated(protocolId, score, level, block.timestamp);
    }

    function getRisk(bytes32 protocolId) external view returns (uint256, uint8, uint256) {
        RiskData memory r = risks[protocolId];
        return (r.score, r.level, r.updatedAt);
    }
}
