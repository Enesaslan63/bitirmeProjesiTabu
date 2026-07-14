# 🎮 Tabu Oyunu - React Native Uygulaması

[![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54.0.0-000020.svg?logo=expo)](https://expo.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-2.89.0-3ECF8E.svg?logo=supabase)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-Educational-green.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Enesaslan63/bitirmeProjesiTabu.svg)](https://github.com/Enesaslan63/bitirmeProjesiTabu/stargazers)

Bitirme Projesi - Mobil Tabu Oyun Uygulaması

## 📱 Proje Hakkında

Bu proje, React Native ve Expo kullanılarak geliştirilmiş, modern ve kullanıcı dostu bir Tabu oyun uygulamasıdır. Uygulama, takım bazlı kelime tahmin oyununu mobil platformlara taşıyarak arkadaşlarınızla eğlenceli vakit geçirmenizi sağlar.

### ✨ Özellikler

- 🎯 **Çoklu Zorluk Seviyeleri**
  - Kolay (Easy)
  - Orta (Medium)
  - Zor (Hard)
  - Özel Kartlar (Kullanıcının kendi oluşturduğu)

- 🎭 **Sessiz Sinema Modu** - Sözlü anlatım yerine mimiklerle kelime anlat!

- 👥 **Takım Bazlı Oyun**
  - İki takım arasında rekabetçi oynanış
  - Takım isimleri özelleştirme
  - Detaylı skor takibi

- ⚙️ **Özelleştirilebilir Ayarlar**
  - Süre limiti ayarlama
  - Pas hakkı sayısı belirleme
  - Tabu kelime sayısı kontrolü
  - Set sayısı belirleme

- 🌍 **Çoklu Dil Desteği**
  - Türkçe
  - İngilizce

- 🎨 **Kullanıcı Dostu Arayüz**
  - Modern ve renkli tasarım
  - Animasyonlu geçişler
  - Responsive düzen

- 📝 **Özel Kelime Oluşturma**
  - Kendi kelime kartlarınızı oluşturun
  - AI destekli tabu kelime önerisi (Google Gemini entegrasyonu)
  - Kelime kartlarınızı kaydedin ve yönetin

- 🔐 **Kullanıcı Kimlik Doğrulama**
  - Supabase ile güvenli giriş/kayıt sistemi
  - Oturum yönetimi
  - Kullanıcı verilerini güvenli saklama

- 📊 **Skor Takibi**
  - Oyun sonuçlarını kaydetme
  - Geçmiş skorları görüntüleme
  - İstatistik takibi

## 🛠️ Teknolojiler

### Frontend
- **React Native** (v0.79.5) - Mobil uygulama geliştirme
- **Expo** (v54.0.0) - React Native geliştirme platformu
- **React Navigation** (v7.x) - Sayfa yönlendirme
- **Expo Linear Gradient** - Gradient arkaplanlar
- **Expo Blur** - Bulanıklaştırma efektleri
- **Expo AV** - Ses ve video yönetimi

### Backend & Servisler
- **Supabase** (v2.89.0) - Backend servisi ve veritabanı
- **Google Generative AI** (v0.24.1) - AI destekli tabu kelime önerileri
- **AsyncStorage** - Yerel veri depolama

### Diğer Kütüphaneler
- **@react-native-community/netinfo** - İnternet bağlantısı kontrolü
- **Expo Status Bar** - Durum çubuğu yönetimi
- **Expo Splash Screen** - Açılış ekranı yönetimi

## 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- Expo CLI
- iOS Simulator veya Android Emulator (veya fiziksel cihaz)

## 🚀 Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/Enesaslan63/bitirmeProjesiTabu.git
cd bitirmeProjesiTabu
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Supabase yapılandırması için `utils/supabase.js` dosyasını düzenleyin:
```javascript
// Kendi Supabase bilgilerinizi ekleyin
const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'
```

4. Google Gemini API anahtarınızı ekleyin (opsiyonel, özel kelime önerileri için):
```javascript
// utils/geminiApi.js dosyasına API anahtarınızı ekleyin
```

5. Uygulamayı başlatın:
```bash
npm start
```

## 📱 Çalıştırma

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Web
```bash
npm run web
```

## 🎮 Nasıl Oynanır?

1. **Giriş Yapın** - Uygulamaya giriş yapın veya yeni hesap oluşturun
2. **Yeni Oyun Başlatın** - Ana menüden "Oyuna Başla" seçeneğini tıklayın
3. **Takımları Belirleyin** - İki takım için isimler girin
4. **Zorluk Seviyesi Seçin** - Kolay, Orta, Zor veya Kendi Kartlarınız
5. **Ayarları Yapılandırın** - Süre limiti, pas hakkı gibi ayarları düzenleyin
6. **Oyunu Başlatın** - Kelime kartları gösterilecek, tabu kelimeleri kullanmadan kelimeyi anlatın!
7. **Skor Takibi** - Oyun sonunda detaylı sonuçları görün

### Oyun Kuralları

- Her takım sırayla oynar
- Ekranda gösterilen kelimeyi tabu kelimelerini kullanmadan anlatın
- Doğru tahmin edilen her kelime için puan kazanın
- Pas hakkınızı kullanarak zor kelimeleri atlayabilirsiniz
- Süre dolmadan maksimum puanı toplamaya çalışın!

## 📂 Proje Yapısı

```
Tabuyapay/
├── screens/              # Ekran bileşenleri
│   ├── LoginScreen.js    # Giriş ekranı
│   ├── RegisterScreen.js # Kayıt ekranı
│   ├── tabuuMenu.js      # Ana menü
│   ├── NewGame.js        # Yeni oyun ayarları
│   ├── Game.js           # Oyun ekranı
│   ├── FinalResults.js   # Sonuç ekranı
│   ├── Scores.js         # Skor geçmişi
│   ├── MyWords.js        # Özel kelime yönetimi
│   ├── Settings.js       # Ayarlar
│   └── help.js           # Yardım/Kılavuz
├── data/                 # Kelime veri dosyaları
│   ├── words_easy.json
│   ├── words_medium.json
│   ├── words_hard.json
│   ├── words_ultra.json
│   └── words_charades_*.json
├── utils/                # Yardımcı fonksiyonlar
│   ├── supabase.js       # Supabase konfigürasyonu
│   └── geminiApi.js      # Google Gemini AI entegrasyonu
├── assets/               # Görseller ve medya dosyaları
├── App.js                # Ana uygulama bileşeni
├── index.js              # Uygulama giriş noktası
└── package.json          # Proje bağımlılıkları
```

## 🎨 Ekran Görüntüleri

> *Not: Ekran görüntüleri eklenecek*

## 🚀 Demo

Bu uygulama Expo Go ile test edilebilir:

1. Mobil cihazınıza [Expo Go](https://expo.dev/client) uygulamasını indirin
2. Projeyi çalıştırın: `npm start`
3. QR kodu Expo Go ile tarayın

## 🔧 Geliştirme

### Yeni Kelime Paketi Ekleme

1. `data/` klasörüne yeni JSON dosyası ekleyin
2. Format:
```json
[
  {
    "word": "Kelime",
    "taboos": ["tabu1", "tabu2", "tabu3"]
  }
]
```

### Yeni Dil Ekleme

1. İlgili ekran dosyalarındaki `translations` objesine yeni dil ekleyin:
```javascript
const translations = {
  tr: { /* Türkçe */ },
  en: { /* İngilizce */ },
  newLang: { /* Yeni Dil */ }
};
```

## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje bitirme projesi kapsamında geliştirilmiştir.

## 👨‍💻 Geliştirici

**Enes Aslan**
- GitHub: [@Enesaslan63](https://github.com/Enesaslan63)

## 📞 İletişim

Sorularınız veya önerileriniz için issue açabilirsiniz.

## 🙏 Teşekkürler

- React Native ve Expo ekiplerine harika araçlar için
- Supabase ekibine backend servisleri için
- Google Gemini AI ekibine AI desteği için

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
