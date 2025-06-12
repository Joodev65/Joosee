function closeOverlay() {
  document.getElementById("introOverlay").style.display = "none";
}

function submitID() {
  const input = document.getElementById("channelInput");
  const id = input.value.trim();

  if (!id) return alert("ID tidak boleh kosong!");

  fetch('/api/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  })
  .then(res => res.json())
  .then(() => {
    input.value = '';
    loadIDs();
  });
}

function loadIDs() {
  fetch('/api/list')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("idList");
      list.innerHTML = '';
      data.forEach(id => {
        const li = document.createElement("li");
        li.textContent = id;
        list.appendChild(li);
      });
    });
}

window.onload = loadIDs;