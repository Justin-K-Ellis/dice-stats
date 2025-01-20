import { expect, test } from "vitest";
import throwDie from "../modules/throwDice";

test("thrown die is greater than or equal to 1", () => {
  expect(throwDie()).toBeGreaterThanOrEqual(1);
});

test("thrown die is less than or equal to 6", () => {
  expect(throwDie()).toBeLessThanOrEqual(6);
});
