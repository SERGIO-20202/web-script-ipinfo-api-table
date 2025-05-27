async function getIPInfo() {
  try {
    const response = await fetch("https://ipinfo.io/json?token=46ec0b33569398");
    const data = await response.json();

    const tableBody = document.querySelector("#ipTable tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${data.ip}</td>
      <td>${data.org}</td>
      <td>${data.loc}</td>
      <td>${data.region}</td>
      <td>${data.city}</td>
      <td>${data.country}</td>
    `;

    tableBody.appendChild(row);
  } catch (error) {
    console.error("Erro ao obter dados da API:", error);
  }
}

getIPInfo();
