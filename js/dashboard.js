const params = new URLSearchParams(location.search);
const id = params.get("id");

if (!id) {
  location.href = "index.html";
}

// ใช้ตัวแปรนี้จาก config.js
fetch(APP_SCRIPT_URL + "?action=me&id=" + id)
  .then(res => {
    if (!res.ok) throw new Error("API error");
    return res.json();
  })
  .then(user => {
    if (!user || user.error) {
      throw new Error("not login");
    }

    document.getElementById("welcome").innerText =
      "ยินดีต้อนรับ " + user.name;

    if (user.role === "admin") {
      const adminPanel = document.getElementById("adminPanel");
      if (adminPanel) {
        adminPanel.classList.remove("hidden");
      }
    }
  })
  .catch(err => {
    console.error(err);
    location.href = "index.html";
  });
