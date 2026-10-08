import { strict as assert } from "node:assert";
import { test } from "node:test";

import { InsufficientDataError } from "../src/errors";
import { standardDeviation, variance } from "../src/standardDeviation";

test("bilinen örnek için standart sapma", () => {
  // [1,2,3,4,5] -> ortalama 3, varyans (4+1+0+1+4)/5 = 2
  assert.equal(standardDeviation([1, 2, 3, 4, 5]), Math.SQRT2);
});

test("tümü aynı değerli dizi sıfır sapma verir", () => {
  assert.equal(standardDeviation([4, 4, 4, 4]), 0);
});

test("varyans karekök alınarak standart sapmaya eşittir", () => {
  const veri = [2, 4, 4, 4, 5, 5, 7, 9];
  assert.equal(standardDeviation(veri), Math.sqrt(variance(veri)));
});

test("tek değerli dizi InsufficientDataError fırlatır", () => {
  assert.throws(() => standardDeviation([5]), InsufficientDataError);
  assert.throws(
    () => standardDeviation([5]),
    /Standart sapma için en az 2 değer gerekir/,
  );
});

test("boş dizi InsufficientDataError fırlatır", () => {
  assert.throws(() => standardDeviation([]), InsufficientDataError);
});

test("varyans da en az 2 değer ister", () => {
  assert.throws(() => variance([1]), /Varyans için en az 2 değer gerekir/);
});
