async function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (!name || !message) {
    status.innerText = "Please fill all fields ❗";
    return;
  }

  try {
    await fetch("https://portfolio-project-nj1q.onrender.com/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    status.innerText = "Message sent successfully ✅";

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
  } catch (error) {
    status.innerText = "Error sending message ❌";
  }
}