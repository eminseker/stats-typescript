import { strict as assert } from "node:assert";
import { test } from "node:test";

import { EmptyInputError } from "../src/errors";
import { mean } from "../src/mean";

test("tekil sayıların ortalaması", () => {
  assert.equal(mean([1, 2, 3, 4, 5]), 3);
});

test("çift sayıda değerinin ortalaması ondalık döner", () => {
  assert.equal(mean([1, 2]), 1.5);
});

test("tek değerli dizi ortalamayı döndürür", () => {
  assert.equal(mean([7]), 7);
});

test("negatif ve sıfır değerleri destekler", () => {
  assert.equal(mean([-4, 0, 4]), 0);
});

test("girdi dizisi değiştirilmez", () => {
  const girdi = [1, 2, 3];
  mean(girdi);
  assert.deepEqual(girdi, [1, 2, 3]);
});

test("boş dizi EmptyInputError fırlatır", () => {
  assert.throws(() => mean([]), EmptyInputError);
  assert.throws(() => mean([]), /Boş dizi üzerinde ortalama hesaplanamaz/);
});
