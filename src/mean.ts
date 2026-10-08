/**
 * Aritmetik ortalama hesabı.
 */
import { EmptyInputError } from "./errors";
import { sum } from "./sum";
import type { NumericInput } from "./types";

/**
 * `numbers` değerlerinin aritmetik ortalamasını döndürür.
 *
 * @throws {EmptyInputError} Dizi boşsa.
 */
export function mean(numbers: NumericInput): number {
  if (numbers.length === 0) {
    throw new EmptyInputError("ortalama");
  }
  return sum(numbers) / numbers.length;
}
