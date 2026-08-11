import { describe, expect, test } from "vitest";
import { MODULES } from "../src/index";
import { FoodChain } from "../src/index";

describe("EcologyEngine", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(3);
  });
  test("core behavior is deterministic", () => {
    const f = new FoodChain(7);
const history = f.simulate(50);
expect(history.length).toBe(50);
for (const pop of history) {
  expect(pop.producers).toBeGreaterThanOrEqual(5);
  expect(pop.producers).toBeLessThanOrEqual(120);
  expect(pop.prey).toBeGreaterThanOrEqual(3);
  expect(pop.predators).toBeGreaterThanOrEqual(1);
}
const score = f.healthScore();
expect(score).toBeGreaterThanOrEqual(0);
expect(score).toBeLessThanOrEqual(100);
const f2 = new FoodChain(7);
const f3 = new FoodChain(7);
expect(f2.simulate(50)).toEqual(f3.simulate(50));
  });
});