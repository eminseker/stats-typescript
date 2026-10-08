/**
 * İstatistik aracı — TypeScript örneği.
 *
 * Derleme:  npx tsc
 * Çalıştırma: node dist/stats.js 1 2 3 4 5
 */

export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Boş dizi üzerinde ortalama hesaplanamaz");
  }
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Boş dizi üzerinde medyan hesaplanamaz");
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

export function standardDeviation(numbers: number[]): number {
  if (numbers.length < 2) {
    throw new Error("Standart sapma için en az 2 değer gerekir");
  }
  const avg = mean(numbers);
  const squareDiffs = numbers.map((n) => Math.pow(n - avg, 2));
  return Math.sqrt(mean(squareDiffs));
}

export function summarize(numbers: number[]): string {
  const lines = [
    `Adet     : ${numbers.length}`,
    `Ortalama : ${mean(numbers).toFixed(2)}`,
    `Medyan   : ${median(numbers).toFixed(2)}`,
    `Std. Sap.: ${standardDeviation(numbers).toFixed(2)}`,
  ];
  return lines.join("\n");
}

function main(argv: string[]): number {
  if (argv.length === 0) {
    console.error("Kullanım: node dist/stats.js <sayı...>");
    return 1;
  }

  const numbers = argv.map((arg) => Number(arg));
  if (numbers.some((n) => Number.isNaN(n))) {
    console.error("Hata: Tüm argümanlar sayı olmalıdır");
    return 1;
  }

  try {
    console.log(summarize(numbers));
  } catch (hata) {
    console.error(`Hata: ${(hata as Error).message}`);
    return 1;
  }
  return 0;
}

if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}
