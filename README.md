Video Bağlantısı: [https://youtu.be/0LZKcCXk2jo](https://youtu.be/0LZKcCXk2jo)

(Youtube videoyu otomatik olarak düşük çözünürlükte açabilir, video ayarlarından video çözünürlüğü yükseltildiğinde bir sorun kalmayacaktır.)

# Masal Atlası&#x20;

**Geleneksel Türk Masallarını Keşfetmeye Yönelik Etkileşimli Web Sitesi**

## Proje Hakkında

Masal Atlası, Anadolu'nun geleneksel masallarını dijital ortamda bir araya getiren etkileşimli bir web sitesi projesidir.

Proje, kullanıcıların masalları keşfetmesini, okumasını ve masallar arasında kolayca gezinmesini amaçlamaktadır.

Görsel tasarımında geleneksel Türk minyatür sanatı, tezhip motifleri ve eski masal kitaplarının estetiğinden ilham alınmıştır.

## Projenin Özellikleri

- 12 geleneksel Türk masalından oluşan içerik koleksiyonu
- Masal kartları aracılığıyla içerik keşfi
- Masal isimlerine göre arama ve filtreleme
- Masallara özel okuma ekranı
- Önceki ve sonraki masala geçiş
- Yazı boyutunu büyütme ve küçültme
- Masallara eşlik eden illüstrasyonlar
- Mobil ve tablet ekranlarına uyumlu tasarım
- Tezhip motifleriyle oluşturulmuş dekoratif arayüz

## Kullanılan Teknolojiler

**HTML5:** Web sitesinin yapısal içeriği, masal kartları ve okuma ekranları.

**CSS3:** Renk paleti, tipografi, kart tasarımları, tezhip süslemeleri ve responsive düzen.

**JavaScript:** Masal seçimi, arama, sayfa içi gezinme ve yazı boyutu kontrolleri.

## Dosya Yapısı

```text
Masal-Atlas-
├── index.html
├── style.css
├── script.js
├── README.md
├── 86230016_LatifeBeyzaYılmaz_vize.pdf
└── latex-kaynak/
```

- `index.html`: Web sitesinin HTML yapısını içerir.
- `style.css`: Harici CSS dosyasıdır. Tüm görsel tasarım ve responsive kurallar burada yer alır.
- `script.js`: Harici JavaScript dosyasıdır. Etkileşimli özellikleri yönetir.
- `README.md`: Projenin açıklamasını ve kullanım bilgilerini içerir.
- `86230016_LatifeBeyzaYılmaz_vize.pdf`: Vize proje raporudur.
- `latex-kaynak/`: Vize raporunun LaTeX kaynak dosyalarını ve görsellerini içerir.

## External CSS ve JavaScript Yapılandırması

Projenin ilk sürümünde HTML, CSS ve JavaScript kodları tek bir `index.html` dosyasında bulunmaktaydı.

Yeni düzenlemede kodlar üç ayrı dosyaya ayrılmıştır:

1. HTML içindeki `<style>` bölümünde bulunan CSS kuralları `style.css` dosyasına taşınmıştır.
2. HTML içindeki `<script>` bölümünde bulunan JavaScript kodları `script.js` dosyasına taşınmıştır.
3. Harici dosyalar HTML belgesine aşağıdaki bağlantılarla dahil edilmiştir.

**CSS bağlantısı:**

```html
<link rel="stylesheet" href="style.css">
```

**JavaScript bağlantısı:**

```html
<script src="script.js"></script>
```

Bu yapılandırmayla HTML, CSS ve JavaScript kodlarının birbirinden bağımsız şekilde düzenlenebilmesi ve bakımının kolaylaştırılması amaçlanmıştır.

## Testler

Harici CSS ve JavaScript dosyalarına geçişin ardından aşağıdaki özellikler yerel ortamda kontrol edilmiştir:

- Masalları Keşfet butonu
- Masal kartlarından okuma ekranına geçiş
- Masal arama ve filtreleme
- Önceki ve sonraki masal kontrolleri
- Yazı boyutu ayarları
- Masal illüstrasyonlarının görüntülenmesi

Testlerde herhangi bir sorunla karşılaşılmamıştır.

## Web Sitesi

[Masal Atlası'nı ziyaret et](https://latifebeyzayilmaz9.github.io/Masal-Atlas-/)

(Web sitesini kullanmak için yukarıdaki bağlantıya tıklayabilirsiniz.)

## Proje Sunum Videosu

[Masal Atlası – YouTube Sunum Videosu](https://youtu.be/0LZKcCXk2jo)

## Proje Bilgileri

**Hazırlayan:** Latife Beyza Yılmaz

**Ders:** Programlamaya Giriş

**Bölüm:** Görsel İletişim Tasarımı

**Akademik Yıl:** 2026–2027 Güz 

