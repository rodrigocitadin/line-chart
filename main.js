const canvas = document.getElementById("line-chart");
const colors = ['red', 'blue', 'green', 'purple'];

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  let arrayMonths = [];

  for (let color of colors) {
    for (let i = 0; i < 12; i++) {
      arrayMonths.push(Math.floor(Math.random() * 295));
    }

    drawLine(ctx, arrayMonths, color);
    arrayMonths = [];
  }
}

function drawLine(ctx, arrayMonths, color) {
  // array months example: [20, 40, 100, 20, 30, 40, 10, 80, 29, 15, 23, 45]
  // 12 elements with a value
  //
  // color example:
  // 'red', 'blue', 'green'...
  let x = 0;

  ctx.strokeStyle = color
  ctx.beginPath();
  ctx.moveTo(0, 300 - arrayMonths[0]);

  for (let month of arrayMonths) {

    ctx.lineTo(x, 300 - month)
    x += 60;
  }

  ctx.stroke()
}
