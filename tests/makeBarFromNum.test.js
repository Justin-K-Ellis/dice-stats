import { expect, test } from "vitest";
import makeBarFromNum from "../modules/makeBarFromNum.js";

test("make bar from round number", () => {
  expect(makeBarFromNum(30)).toBe("###");
});

test("make bar from not-round number", () => {
  expect(makeBarFromNum(32)).toBe("####");
});

test("zero returns an empty string", () => {
  expect(makeBarFromNum(0)).toBe("");
});

test("numbers less than zero return an empty string", () => {
  expect(makeBarFromNum(-10)).toBe("");
});
