async function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  await fetch("https://portfolio-project-nj1q.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, message }),
  });

  alert("Message sent!");
}