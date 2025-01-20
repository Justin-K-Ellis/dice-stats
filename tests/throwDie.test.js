import { expect, test } from "vitest";
import { throwDie } from "../index.js";

test("thrown die is greater than 1", () => {
  expect(throwDie()).toBeGreaterThanOrEqual(1);
});
