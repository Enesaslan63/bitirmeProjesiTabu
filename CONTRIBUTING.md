# Katkıda Bulunma Rehberi

Tabu Oyunu projesine katkıda bulunmak istediğiniz için teşekkürler! 🎉

## Nasıl Katkıda Bulunabilirsiniz?

### 🐛 Hata Bildirimi

Bir hata bulduysanız:

1. Önce [Issues](https://github.com/Enesaslan63/bitirmeProjesiTabu/issues) bölümünde aynı hatanın bildirilip bildirilmediğini kontrol edin
2. Eğer bulamazsanız, yeni bir issue açın ve şunları ekleyin:
   - Hatanın açık bir açıklaması
   - Hatayı yeniden oluşturma adımları
   - Beklenen davranış
   - Ekran görüntüleri (varsa)
   - Cihaz ve işletim sistemi bilgisi

### 💡 Özellik Önerisi

Yeni bir özellik önerisi sunmak için:

1. [Issues](https://github.com/Enesaslan63/bitirmeProjesiTabu/issues) bölümünden yeni bir issue açın
2. Özelliği detaylı açıklayın
3. Neden gerekli olduğunu ve nasıl kullanılacağını belirtin
4. Mümkünse mockup veya örnek görseller ekleyin

### 🔧 Kod Katkısı

1. **Fork Edin**
   ```bash
   # Projeyi fork edin (GitHub'da Fork butonuna tıklayın)
   ```

2. **Klonlayın**
   ```bash
   git clone https://github.com/KULLANICI_ADINIZ/bitirmeProjesiTabu.git
   cd bitirmeProjesiTabu
   ```

3. **Branch Oluşturun**
   ```bash
   git checkout -b feature/yeni-ozellik
   # veya
   git checkout -b fix/hata-duzeltmesi
   ```

4. **Değişiklikleri Yapın**
   - Kod standartlarına uyun
   - Anlaşılır commit mesajları yazın
   - Küçük, odaklanmış değişiklikler yapın

5. **Test Edin**
   - Değişikliklerinizi test edin
   - iOS ve Android'de çalıştığından emin olun
   - Mevcut özellikleri bozmadığınızdan emin olun

6. **Commit Edin**
   ```bash
   git add .
   git commit -m "feat: Yeni özellik eklendi"
   # veya
   git commit -m "fix: Hata düzeltildi"
   ```

7. **Push Edin**
   ```bash
   git push origin feature/yeni-ozellik
   ```

8. **Pull Request Oluşturun**
   - GitHub'da Pull Request açın
   - Değişikliklerinizi açıklayın
   - İlgili issue'ya referans verin

## 📝 Commit Mesajı Kuralları

Commit mesajlarınızı anlaşılır ve tutarlı tutun:

- `feat:` - Yeni özellik
- `fix:` - Hata düzeltmesi
- `docs:` - Dokümantasyon değişikliği
- `style:` - Kod formatı, boşluk vs. (mantıksal değişiklik yok)
- `refactor:` - Kod düzenlemesi (bug fix veya özellik ekleme değil)
- `test:` - Test ekleme veya düzeltme
- `chore:` - Build, kütüphane güncellemeleri vs.

**Örnekler:**
```
feat: Sessiz sinema moduna zamanlayıcı eklendi
fix: Skor hesaplama hatasını düzelttim
docs: README.md dosyasına kurulum adımları eklendi
style: Kod formatı düzenlendi
```

## 🎨 Kod Stili

- JavaScript/React Native standartlarına uyun
- Anlamlı değişken ve fonksiyon isimleri kullanın
- Kod içi yorumlar ekleyin (özellikle karmaşık kısımlar için)
- Türkçe ve İngilizce dil desteğini koruyun
- Responsive tasarıma uygun kod yazın

## 🧪 Test

- Yaptığınız değişiklikleri hem iOS hem Android'de test edin
- Farklı ekran boyutlarında test edin
- Hem Türkçe hem İngilizce dil seçeneklerinde test edin

## 📚 Yeni Kelime Paketi Ekleme

Yeni kelime paketi eklemek için:

1. `data/` klasörüne JSON dosyası oluşturun
2. Format:
   ```json
   [
     {
       "word": "Kelime",
       "taboos": ["tabu1", "tabu2", "tabu3"]
     }
   ]
   ```
3. İlgili ekranlarda yeni paketi kullanıma açın

## 🌍 Yeni Dil Ekleme

Yeni dil desteği eklemek için:

1. Her ekrandaki `translations` objesine yeni dil ekleyin
2. Tüm string'leri çevirin
3. README.md'de desteklenen diller listesini güncelleyin

## ❓ Sorularınız mı Var?

- Issue açarak sorabilirsiniz
- Mevcut issue'lara yorum yapabilirsiniz

## 📜 Davranış Kuralları

- Saygılı ve yapıcı olun
- Diğer katkıda bulunanlara yardımcı olun
- Farklı görüşlere açık olun
- Olumlu bir topluluk ortamı yaratmaya yardımcı olun

## 🙏 Teşekkürler!

Her türlü katkınız için teşekkür ederiz! Birlikte daha iyi bir oyun oluşturalım! 🎮
