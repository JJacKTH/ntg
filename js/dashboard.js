const params = new URLSearchParams(location.search);
const id = params.get("id");

if (!id) {
  location.href = "index.html";
}

fetch(API_URL + "?action=me&id=" + id)
  .then(r => r.json())
  .then(user => {
    if (user.error) throw "not login";

    document.getElementById("welcome").innerText =
      "ยินดีต้อนรับ " + user.name;

    if (user.role === "admin") {
      document.getElementById("adminPanel").classList.remove("hidden");
      loadMembers();
    }
  })
  .catch(() => {
    location.href = "index.html";
  });

