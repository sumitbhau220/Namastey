const shareBtn = document.getElementById("shareBtn");
const yourName = document.getElementById("yourName");
const yourImage = document.getElementById("yourImage");
const preview = document.getElementById("imagePreview");
const previewImg = document.getElementById("previewImg");

// Image preview
yourImage.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.display = "none";
  }
});

// WhatsApp share
shareBtn.addEventListener("click", function () {
  const name = encodeURIComponent(yourName.value.trim());
  const message = `🎆 Happy Diwali! 🎇\nDekhiye ek khaas message 👇\nhttps://example.com\nFrom: ${name || "Anonymous"}`;
  const whatsappURL = `https://wa.me/?text=${message}`;
  shareBtn.href = whatsappURL;
});
const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", () => {
  const senderName = document.getElementById("receiverName").value || "Aapka dost";
  const message = `🎉 ${senderName} ki aur se aapke liye ek Diwali wish!\n\n🪔 Happy Diwali! 🎆🎇\nDekhne ke liye click karein:\n` + window.location.href;
  const url = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});
￼Enter
