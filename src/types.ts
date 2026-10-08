/**
 * Proje genelinde kullanılan arayüz ve tip tanımları.
 *
 * Hiçbir çalışma zamanı kodu içermez; yalnızca tip katmanıdır.
 */

/** Hesaplama fonksiyonlarına verilen salt-okunur sayı dizisi. */
export type NumericInput = readonly number[];

/** Bir sayı kümesinin özet istatistik sonuçları. */
export interface Summary {
  /** Örneklem büyüklüğü. */
  count: number;
  /** Aritmetik ortalama. */
  mean: number;
  /** Sıralandıktan sonraki ortanca değer. */
  median: number;
  /** Popülasyon standart sapması. */
  standardDeviation: number;
}

/** Rapor üretimi için biçimlendirme seçenekleri. */
export interface SummaryOptions {
  /** Ondalık basamak sayısı (varsayılan: 2). */
  decimals?: number;
}

/** Argümanların başarıyla ayrıştırıldığı durum. */
export interface ParseSuccess {
  ok: true;
  numbers: number[];
}

/** Ayrıştırmanın başarısız olduğu durum; kullanıcıya gösterilecek mesaj taşır. */
export interface ParseFailure {
  ok: false;
  message: string;
}

/** `parseArgs` dönüş tipi: başarılı sayı listesi ya da hata mesajı. */
export type ParseResult = ParseSuccess | ParseFailure;

/** CLI'ın çıktıyı yazdığı ortam; testlerde sahte çıktı toplayıcı olarak kullanılır. */
export interface CliIO {
  out(text: string): void;
  error(text: string): void;
}
