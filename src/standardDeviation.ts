/**
 * Varyans ve standart sapma hesabı (popülasyon/σ tanımı).
 */
import { InsufficientDataError } from "./errors";
import { mean } from "./mean";
import type { NumericInput } from "./types";

/**
 * `numbers` için popülasyon varyansını döndürür.
 *
 * @throws {InsufficientDataError} Dizide 2 değerden az varsa.
 */
export function variance(numbers: NumericInput): number {
  if (numbers.length < 2) {
    throw new InsufficientDataError(2, "Varyans");
  }
  const ortalama = mean(numbers);
  const kareFarklar = numbers.map((n) => (n - ortalama) ** 2);
  return mean(kareFarklar);
}

/**
 * `numbers` için popülasyon standart sapmasını (σ) döndürür.
 *
 * @throws {InsufficientDataError} Dizide 2 değerden az varsa.
 */
export function standardDeviation(numbers: NumericInput): number {
  if (numbers.length < 2) {
    throw new InsufficientDataError(2, "Standart sapma");
  }
  return Math.sqrt(variance(numbers));
}
