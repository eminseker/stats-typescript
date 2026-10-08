/**
 * İstatistik hesaplamalarının fırlattığı özel hata sınıfları.
 *
 * Tüm hatalar `StatsError` tabanından türetildiği için çağrı yeri,
 * kaynak hatayı `instanceof StatsError` ile ayırt edebilir.
 */

/** İstatistik kütüphanesine özgü tüm hataların taban sınıfı. */
export class StatsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
  }
}

/** Boş bir dizi üzerinde tanımsız bir hesaplama yapılmaya çalışıldığında fırlatılır. */
export class EmptyInputError extends StatsError {
  /** @param operation Hesaplama adı, örn. "ortalama". */
  constructor(operation: string) {
    super(`Boş dizi üzerinde ${operation} hesaplanamaz`);
  }
}

/** Hesaplama için gereken minimum örneklem boyutu sağlanmadığında fırlatılır. */
export class InsufficientDataError extends StatsError {
  /**
   * @param minimum Gerekli en az değer sayısı.
   * @param metric  Hesaplanmak istenen istatistik adı.
   */
  constructor(minimum: number, metric: string) {
    super(`${metric} için en az ${minimum} değer gerekir`);
  }
}

/** Yakalanan herhangi bir hatayı kullanıcıya gösterilebilir metne çevirir. */
export function errorMessage(hata: unknown): string {
  return hata instanceof Error ? hata.message : String(hata);
}
