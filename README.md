# Stats (TypeScript)

Ortalama, medyan ve standart sapma hesaplayan küçük istatistik aracı.

## Gereksinim

Node.js 18+ ve TypeScript (proje içine `npm install` ile kurulur)

## Derleme ve Çalıştırma

```bash
npm install
npx tsc
node dist/stats.js 1 2 3 4 5
```

Çıktı örneği:

```
Adet     : 5
Ortalama : 3.00
Medyan   : 3.00
Std. Sap.: 1.41
```

## Kapsam

- `export` ile modül yapısı
- Fonksiyon imzaları ve dönüş tipleri
- `strict` mod ile tip güvenliği
- Hata yönetimi (`throw`, `try/catch`)
- Sıralama, `map`/`reduce` gibi dizsel işlemler
