// const text = "BLOOM ME MY LOVE LANGUAGE"
// const text = "BLESS ME WITH CURIOSITY"
const text = "I ADMIT I HAVE NO CLUE ON HOW THIS WORKS"
const pixel_scale = 16

const canvas = document.createElement("canvas")!
canvas.width = text.length * pixel_scale
canvas.height = 3 * pixel_scale

const ctx = canvas.getContext("2d")!


ctx.clearRect(0, 0, canvas.width, canvas.height)

function char_to_bytes(x: string): [number, number, number] {
  const char = x[0].toUpperCase();
  const value = char != ' ' ? char.charCodeAt(0) - 'A'.charCodeAt(0) + 1 : 0;
  if (value < 0 || value > 26) return [0, 0, 0];
  return [Math.floor(value / 9) % 3, Math.floor(value / 3) % 3, Math.floor(value / 1) % 3]
}

for (let text_index = 0; text_index < text.length; text_index++) {
  const bytes = char_to_bytes(text[text_index]);
  for (let bit_index = 2; bit_index >= 0; bit_index--) {
    let color_string = ""
    switch (bytes[bit_index]) {
      case 0:
        color_string = "#000000"
        break;
      case 1:
        color_string = "#fafafa"
        break;
      case 2:
        color_string = "#d320d2"
        break;
      default:
        throw Error("unreachable");
    }
    ctx.fillStyle = color_string;
    ctx.fillRect(text_index * pixel_scale, bit_index * pixel_scale, pixel_scale, pixel_scale)
  }
}


const export_button = document.createElement("button")!;
export_button.innerHTML = "export"
export_button.onclick = () => {
  const dataURL = canvas.toDataURL("image/png", 2);
  const link = document.createElement('a');
  link.download = "pap_text.png";
  link.href = dataURL;
  link.click();
}

const wrapper_div = document.createElement("div");
wrapper_div.style = "padding: 20px; background-color: red;"
wrapper_div.appendChild(canvas);
wrapper_div.appendChild(export_button);
export default wrapper_div
