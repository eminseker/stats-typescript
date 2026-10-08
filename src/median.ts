/**
 * Medyan (ortanca) hesabı.
 *
 * Dizi sıralanmadan önce kopyalanır; böylece çağırıcının dizisi
 * değiştirilmez (yan etkisiz).
 */
import { EmptyInputError } from "./errors";
import type { NumericInput } from "./types";

/**
 * `numbers` değerlerinin medyanını döndürür.
 * Terdisi çift olan dizilerde ortadaki iki değerin ortalaması alınır.
 *
 * @throws {EmptyInputError} Dizi boşsa.
 */
export function median(numbers: NumericInput): number {
  if (numbers.length === 0) {
    throw new EmptyInputError("medyan");
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}
