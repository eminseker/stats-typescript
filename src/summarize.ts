/**
 * Ölçüm sonuçlarından insan-okunur rapor üretimi.
 */
import { DEFAULT_DECIMALS, formatMetric } from "./formatter";
import { mean } from "./mean";
import { median } from "./median";
import { standardDeviation } from "./standardDeviation";
import type { NumericInput, Summary, SummaryOptions } from "./types";

/** Sayı kümesi için tüm özet istatistikleri tek seferde hesaplar. */
export function computeSummary(numbers: NumericInput): Summary {
  return {
    count: numbers.length,
    mean: mean(numbers),
    median: median(numbers),
    standardDeviation: standardDeviation(numbers),
  };
}

/**
 * `numbers` için çok satırlı özet raporu döndürür.
 *
 * Baskı biçimi (stdout formatı) sabittir:
 * ```
 * Adet     : 5
 * Ortalama : 3.00
 * Medyan   : 3.00
 * Std. Sap.: 1.41
 * ```
 *
 * @throws {EmptyInputError} Dizi boşsa (ortalama hesaplanamaz).
 * @throws {InsufficientDataError} Tek değer verilmişse (std. sapma gerekli).
 */
export function summarize(numbers: NumericInput, options: SummaryOptions = {}): string {
  const decimals = options.decimals ?? DEFAULT_DECIMALS;
  const ozet = computeSummary(numbers);
  return [
    formatMetric("Adet", ozet.count),
    formatMetric("Ortalama", ozet.mean, decimals),
    formatMetric("Medyan", ozet.median, decimals),
    formatMetric("Std. Sap.", ozet.standardDeviation, decimals),
  ].join("\n");
}
