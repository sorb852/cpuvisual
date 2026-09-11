const canvas = document.createElement("canvas")!
canvas.width = 1920
canvas.height = 1080

const ctx = canvas.getContext("2d")!

function draw_cross(x: number, y: number, width: number, height: number, color: string) {
  ctx.fillStyle = color
  ctx.fillRect(x - width / 2, y - height / 2, width, height);
  ctx.fillRect(x - height / 2, y - width / 2, height, width);
}

ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height)

const padding = 60;

const x_count = 16;
const y_count = Math.floor(x_count * (canvas.height / canvas.width));

for (let y = 0; y < y_count; y++) {
  const normal_y = y / (y_count - 1);
  for (let x = 0; x < x_count; x++) {
    const normal_x = x / (x_count - 1);

    const pos_y = padding + normal_y * (canvas.height - padding * 2)
    const pos_x = padding + normal_x * (canvas.width - padding * 2)

    draw_cross(pos_x, pos_y, 20, 5, (y + x) % 2 == 0 ? "#d320d2" : "#fafafa")
  }
}

// for (let y = padding; y <= canvas.height - 2 * padding; y += (canvas.height - 2 * padding) / y_count) {
//   draw_cross(30, y, 20, 5, "#d320d2")
// }

// draw_cross(30, 30, 20, 5, "#d320d2")
// draw_cross(60, 30, 20, 5, "#faf1fa")

export default canvas
