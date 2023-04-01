const ipTxt = document.getElementById("ip-txt");

async function fetchData() {
  const response = await fetch("https://api.ipify.org?format=json")
    .then((response) => {
      if (response.ok) {
        return response;
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return await response.json();
}

window.onload = async () => {
  try {
    const data = await fetchData();
    ipTxt.innerText = data.ip;
  } catch {
    ipTxt.innerText = "Error.";
  }
};
