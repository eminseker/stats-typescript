/**
 * Dizilerin toplamını hesaplayan temel yardımcı.
 *
 * Boş dizi toplamı matematikte nötr eleman olan 0'dır; bu nedenle
 * hata fırlatmaz (ortalama/medyan gibi oransal işlemler fırlatır).
 */
import type { NumericInput } from "./types";

/** `numbers` içindeki tüm değerlerin toplamını döndürür. */
export function sum(numbers: NumericInput): number {
  return numbers.reduce((toplam, n) => toplam + n, 0);
}
