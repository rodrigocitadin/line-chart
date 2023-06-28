const lineChart = document.getElementById("line-chart");
const barChart = document.getElementById("bar-chart");
const colors = ['red', 'blue', 'green', 'purple'];

if (lineChart.getContext) {
  const ctx = lineChart.getContext("2d");

  for (let color of colors) {
    drawLine(ctx, populateArray(), color);
  }
}

if (barChart.getContext) {
  const ctx = barChart.getContext("2d");

  for (let [index, color] of colors.entries()) {
    drawBars(ctx, populateArray(), color, index);
  }
}

function populateArray(n = 12) {
  let arrayMonths = [];

  for (let i = 0; i < n; i++) {
    arrayMonths.push(Math.floor(Math.random() * 595));
  }

  return arrayMonths;
}

function drawBars(ctx, arrayMonths, color, index) {
  index *= 10
  let x = 20 + index;
  ctx.fillStyle = color;

  for (let month of arrayMonths) {
    ctx.fillRect(x, 600 - month, 30, month)
    x += 100;
  }
}

function drawLine(ctx, arrayMonths, color) {
  let x = 0;

  ctx.strokeStyle = color
  ctx.beginPath();
  ctx.moveTo(0, 600 - arrayMonths[0]);

  for (let month of arrayMonths) {

    ctx.lineTo(x, 600 - month)
    x += 100;
  }

  ctx.stroke()
}
