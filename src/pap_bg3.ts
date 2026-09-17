const canvas = document.createElement("canvas")!
canvas.width = 1920
canvas.height = 1080

const ctx = canvas.getContext("2d")!

function draw_glider(x: number, y: number, cell_size: number, color: string) {
  ctx.fillStyle = color

  ctx.fillRect(x - cell_size / 2, y - cell_size / 2 - cell_size, cell_size, cell_size);

  ctx.fillRect(x - cell_size / 2 + cell_size, y - cell_size / 2, cell_size, cell_size);

  ctx.fillRect(x - cell_size / 2 - cell_size, y - cell_size / 2 + cell_size, cell_size, cell_size);
  ctx.fillRect(x - cell_size / 2, y - cell_size / 2 + cell_size, cell_size, cell_size);
  ctx.fillRect(x - cell_size / 2 + cell_size, y - cell_size / 2 + cell_size, cell_size, cell_size);
}

ctx.clearRect(0, 0, canvas.width, canvas.height)
// ctx.fillStyle = "#fafafa"
// ctx.fillRect(0, 0, canvas.width, canvas.height)

const colors = ["#d320d2", "#000000"]

const padding = 60;

const x_count = 18;
const y_count = Math.floor(x_count * (canvas.height / canvas.width));

for (let y = 0; y < y_count; y++) {
  const normal_y = y / (y_count - 1);
  for (let x = 0; x < x_count; x++) {
    const normal_x = x / (x_count - 1);

    const pos_y = padding + normal_y * (canvas.height - padding * 2)
    const pos_x = padding + normal_x * (canvas.width - padding * 2)

    draw_glider(pos_x, pos_y, 10, colors[(y + x) % 2])
  }
}



const export_button = document.createElement("button")!;
export_button.innerHTML = "export"
export_button.onclick = () => {
  const dataURL = canvas.toDataURL("image/png", 2);
  const link = document.createElement('a');
  link.download = "pap_bg2.png";
  link.href = dataURL;
  link.click();
}

const wrapper_div = document.createElement("div");
wrapper_div.style = "padding: 20px; background-color: red;"
wrapper_div.appendChild(canvas);
wrapper_div.appendChild(export_button);
export default wrapper_div
