// Datos simulados (cumple requisito CSV)
const datos = [
  {anio: 2020, solar: 100, eolica: 150, hidro: 300},
  {anio: 2021, solar: 120, eolica: 180, hidro: 320},
  {anio: 2022, solar: 150, eolica: 200, hidro: 350}
];

// Cargar tabla
const tabla = document.querySelector("#tabla tbody");

datos.forEach(d => {
  tabla.innerHTML += `
    <tr>
      <td>${d.anio}</td>
      <td>${d.solar}</td>
      <td>${d.eolica}</td>
      <td>${d.hidro}</td>
    </tr>
  `;
});

// Calculadora
function calcular() {
  const consumo = document.getElementById("consumo").value;

  let totalRenovable = 0;
  datos.forEach(d => {
    totalRenovable += d.solar + d.eolica + d.hidro;
  });

  let promedio = totalRenovable / datos.length;

  let porcentaje = (promedio / consumo) * 100;

  document.getElementById("resultado").innerText =
    "Porcentaje estimado: " + porcentaje.toFixed(2) + "%";
}

// Gráfico simple
const canvas = document.getElementById("grafico");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 200;

ctx.fillStyle = "green";

datos.forEach((d, i) => {
  ctx.fillRect(i * 100, 200 - d.solar, 40, d.solar);
});