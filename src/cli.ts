/**
 * CLI akışı: argüman ayrıştırma, rapor üretimi ve çıkış kodu.
 *
 * Ekrana doğrudan yazmak yerine `CliIO` üzerinden çıktılama yaptığı için
 * testlerde sahte bir yazıcı ile kolayca doğrulanabilir.
 */
import { errorMessage } from "./errors";
import { parseArgs } from "./parseArgs";
import { summarize } from "./summarize";
import type { CliIO } from "./types";

/** Varsayılan çıktı kanalları: stdout ve stderr. */
export const consoleIO: CliIO = {
  out: (text) => console.log(text),
  error: (text) => console.error(text),
};

/**
 * CLI'ın ana akışı.
 *
 * @param argv `process.argv.slice(2)` biçiminde argüman listesi.
 * @param io   Çıktı kanalları (varsayılan: konsol).
 * @returns İşlem sonucu: 0 başarı, 1 hata.
 */
export function run(argv: readonly string[], io: CliIO = consoleIO): number {
  const parsed = parseArgs(argv);
  if (!parsed.ok) {
    io.error(parsed.message);
    return 1;
  }

  try {
    io.out(summarize(parsed.numbers));
  } catch (hata) {
    io.error(`Hata: ${errorMessage(hata)}`);
    return 1;
  }
  return 0;
}
