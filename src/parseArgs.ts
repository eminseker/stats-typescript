/**
 * Komut satırı argümanlarının sayı listesine dönüştürülmesi.
 */
import type { ParseResult } from "./types";

/** Argüman verilmediğinde gösterilen kullanım mesajı. */
export const USAGE_MESSAGE = "Kullanım: node dist/main.js <sayı...>";

/** Argümanlardan biri sayı olmadığında gösterilen hata mesajı. */
export const INVALID_ARGUMENT_MESSAGE = "Hata: Tüm argümanlar sayı olmalıdır";

/**
 * `argv` öğelerini sayılara çevirir; NaN içeren argüman varsa
 * ayrıştırmayı başarısız sayar.
 *
 * Dizi boşsa kullanım mesajı, geçersiz değer varsa hata mesajı döner.
 * Hiçbir durumda fırlatmaz; karar çağıranın (CLI) kontrolündedir.
 */
export function parseArgs(argv: readonly string[]): ParseResult {
  if (argv.length === 0) {
    return { ok: false, message: USAGE_MESSAGE };
  }

  const numbers: number[] = [];
  for (const arg of argv) {
    const value = Number(arg);
    if (Number.isNaN(value)) {
      return { ok: false, message: INVALID_ARGUMENT_MESSAGE };
    }
    numbers.push(value);
  }
  return { ok: true, numbers };
}
