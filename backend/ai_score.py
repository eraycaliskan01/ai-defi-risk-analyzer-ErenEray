import numpy as np
import os

def risk_level(score):
    if score < 34:
        return 0
    if score < 67:
        return 1
    return 2

np.random.seed(42)
volatility = float(os.getenv("VOLATILITY", "0.65"))
liquidity_ratio = float(os.getenv("LIQUIDITY_RATIO", "0.40"))

score = int(np.clip((volatility * 60 + (1 - liquidity_ratio) * 40), 0, 100))
level = risk_level(score)

print(score)
print(level)
