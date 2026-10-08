# Stats (TypeScript)

Ortalama, medyan, standart sapma ve yüzdelik hesaplayan, modüler yapıda küçük istatistik aracı.

## Gereksinim

Node.js 18+ (bu depo Node.js 24 ile doğrulanmıştır) ve TypeScript (proje içine `npm install` ile kurulur).

## Dosya yapısı

```
stats-typescript/
├── src/
│   ├── types.ts             # Arayüz ve tip tanımları (Summary, ParseResult, CliIO ...)
│   ├── errors.ts            # Özel hata sınıfları (StatsError, EmptyInputError ...)
│   ├── sum.ts               # Dizgi toplamı
│   ├── mean.ts              # Aritmetik ortalama
│   ├── median.ts            # Medyan
│   ├── standardDeviation.ts # Varyans ve standart sapma
│   ├── percentile.ts        # Yüzdelik / dilim (doğrusal interpolasyon)
│   ├── parseArgs.ts         # argv -> number[] ayrıştırma, NaN denetimi
│   ├── formatter.ts         # Sayı ve satır biçimlendirme
│   ├── summarize.ts         # Rapor üretimi (stdout biçimi)
│   ├── cli.ts               # CLI akışı ve çıkış kodları
│   └── index.ts             # Modül dışa aktarımı (package.json "main")
├── tests/
│   ├── mean.test.ts               # node:test ile birim testleri
│   ├── median.test.ts
│   └── standardDeviation.test.ts
├── main.ts                  # Giriş noktası (require.main === module kontrolü)
├── package.json
├── tsconfig.json            # strict: true
└── README.md
```

Kaynak dosya sayısı: **13** (`src/` altında 12 + `main.ts`), test dosyası: **3**.

## Derleme ve Çalıştırma

```bash
npm install
npm run build
npm start -- 1 2 3 4 5
# veya doğrudan:
node dist/main.js 1 2 3 4 5
```

Çıktı örneği:

```
Adet     : 5
Ortalama : 3.00
Medyan   : 3.00
Std. Sap.: 1.41
```

Hatalı girdide çıkış kodu 1 döner ve mesaj stderr'e yazılır:

```bash
node dist/main.js a b   # Hata: Tüm argümanlar sayı olmalıdır
node dist/main.js       # Kullanım: node dist/main.js <sayı...>
```

## Test

```bash
npm test
```

Bu komut önce `tsc` ile derler, sonra `node --test dist/tests/` ile derlenmiş testleri çalıştırır.

## Kapsam

- Modüler `export` yapısı: her kavram kendi dosyasında (types, errors, hesaplar, CLI)
- Fonksiyon imzaları, arayüzler ve dönüş tipleri
- `strict` mod ile tip güvenliği
- Hata sınıfları (`throw`, `try/catch`, `instanceof`)
- Sıralama, `map`/`reduce` gibi dizisel işlemler
- Örnek odaklı birim testleri (`node:test`)
