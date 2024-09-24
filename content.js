// <title> etiketini izlemek için MutationObserver kullan
const target = document.querySelector('title'); // <title> etiketini seç

// Başlık değiştiğinde çalışacak gözlemci tanımla
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      console.log('Başlık değişti: ', document.title); // Konsola yeni başlığı yazdır

      // Tarayıcıda basit bir ses çalmak için bir Audio nesnesi oluştur
      const beepSound = new AudioContext();
      const oscillator = beepSound.createOscillator();
      oscillator.connect(beepSound.destination);
      oscillator.type = 'square'; // Ses türünü seç (beep benzeri bir ses)
      oscillator.frequency.setValueAtTime(440, beepSound.currentTime); // Frekansını ayarla (440 Hz = "A" notası)
      oscillator.start();
      oscillator.stop(beepSound.currentTime + 0.2); // 0.2 saniye boyunca ses çal
    }
  });
});

// <title> elementini gözlemle
observer.observe(target, { childList: true });

// Başlangıç mesajı
console.log('Başlık gözlemlemesi başlatıldı.');