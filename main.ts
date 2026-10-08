/**
 * Uygulama girişi (entry point).
 *
 * `node dist/main.js 1 2 3 4 5` komutu bu dosyayı çalıştırır.
 * Modül olarak içe aktarıldığında hiçbir yan etkisi yoktur
 * (`require.main === module` kontrolü sayesinde).
 */
import { run } from "./src/cli";

if (require.main === module) {
  process.exitCode = run(process.argv.slice(2));
}
