import { strict as assert } from "node:assert";
import { test } from "node:test";

import { EmptyInputError } from "../src/errors";
import { median } from "../src/median";

test("tek sayıda değerde ortanca eleman döner", () => {
  assert.equal(median([5, 1, 3]), 3);
});

test("çift sayıda değerde ortadaki ikisinin ortalaması alınır", () => {
  assert.equal(median([1, 2, 3, 4]), 2.5);
});

test("sıralı olmayan girdi önce sıralanır", () => {
  assert.equal(median([9, 1, 5, 3, 7]), 5);
});

test("tekrar eden değerler doğru işlenir", () => {
  assert.equal(median([2, 2, 100]), 2);
});

test("girdi dizisi sıralanarak değiştirilmez", () => {
  const girdi = [3, 1, 2];
  median(girdi);
  assert.deepEqual(girdi, [3, 1, 2]);
});

test("boş dizi EmptyInputError fırlatır", () => {
  assert.throws(() => median([]), EmptyInputError);
  assert.throws(() => median([]), /Boş dizi üzerinde medyan hesaplanamaz/);
});
