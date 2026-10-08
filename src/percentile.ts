/**
 * Yüzdelik (percentile) ve dilim (quantile) hesapları.
 *
 * Doğrusal interpolasyon yöntemi kullanılır:
 * rank = (p / 100) * (n - 1) konumundaki değer, komşu iki eleman arasında
 * doğrusal olarak ölçeklenerek bulunur.
 */
import { EmptyInputError } from "./errors";
import type { NumericInput } from "./types";

/**
 * `numbers` dizisindeki p. yüzdeliği (0-100 arası) döndürür.
 *
 * @param numbers Değer kümesi (sıralanır, değiştirilmez).
 * @param p       Yüzdelik değeri; 0 ile 100 arasında ve sonlu olmalı.
 * @throws {EmptyInputError} Dizi boşsa.
 * @throws {RangeError} p 0-100 aralığında değilse.
 */
export function percentile(numbers: NumericInput, p: number): number {
  if (numbers.length === 0) {
    throw new EmptyInputError("yüzdelik");
  }
  if (!Number.isFinite(p) || p < 0 || p > 100) {
    throw new RangeError(`Yüzdelik 0-100 arasında olmalıdır, gelen: ${p}`);
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  if (sorted.length === 1) {
    return sorted[0];
  }

  const rank = (p / 100) * (sorted.length - 1);
  const alt = Math.floor(rank);
  const ust = Math.ceil(rank);
  if (alt === ust) {
    return sorted[alt];
  }
  return sorted[alt] + (rank - alt) * (sorted[ust] - sorted[alt]);
}

/**
 * `numbers` dizisindeki q. dilimini (0-1 arası) döndürür.
 * `percentile(numbers, q * 100)` ile eşdeğerdir.
 */
export function quantile(numbers: NumericInput, q: number): number {
  return percentile(numbers, q * 100);
}
