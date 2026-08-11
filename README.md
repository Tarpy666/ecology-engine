# EcologyEngine

Food chain sim: producers, prey, predators, decomposers; energy transfer; health score.

Part of the Counted fleet (ecology-engine), generated from `seeds/seeds.yaml`.

## Architecture

- `src/modules.ts` — FoodChain, EnergyTransfer, HealthScore
- `src/index.ts` — public API (`SPEC`, `MODULES`, FoodChain)
- `src/rng.ts` — deterministic seeded PRNG (mulberry32)
- `tests/index.test.ts` — deterministic behavior suite

## Usage

```bash
npm install
npm run typecheck   # strict TS, zero errors
npm test            # deterministic, seeded
npm run build
```

## Determinism

All outputs are seeded; identical inputs produce identical results on any runtime.
