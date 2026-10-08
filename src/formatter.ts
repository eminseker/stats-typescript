/**
 * Rapor satırlarının biçimlendirilmesi.
 *
 * Çıktı biçimi sabittir: etiket 9 karaktere hizalanır, ardından
 * `: ` ayracı ve değer gelir. Örn. `Ortalama : 3.00`
 */

/** Varsayılan ondalık basamak sayısı. */
export const DEFAULT_DECIMALS = 2;

/** Etiketlerin hizalanacağı sütun genişliği. */
export const LABEL_WIDTH = 9;

/** Bir sayıyı verilen ondalık basamak sayısına yuvarlar. */
export function formatNumber(value: number, decimals: number = DEFAULT_DECIMALS): string {
  return value.toFixed(decimals);
}

/** Değeri etiket genişliğine hizalayarak `etiket: değer` satırı üretir. */
export function formatLine(label: string, value: string): string {
  return `${label.padEnd(LABEL_WIDTH)}: ${value}`;
}

/**
 * Bir metriği rapor satırına dönüştürür.
 *
 * @param decimals Verilirse sayı ondalık basamakla biçimlenir;
 *                 verilmezse (örn. adet) sayı olduğu gibi yazılır.
 */
export function formatMetric(label: string, value: number, decimals?: number): string {
  const rendered = decimals === undefined ? String(value) : formatNumber(value, decimals);
  return formatLine(label, rendered);
}
