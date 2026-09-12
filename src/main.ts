import './style.css'
import OptionsGuySVG from "./options.svg"

import pap_bg from "./pap_bg"

const app_wrapper = document.querySelector<HTMLDivElement>("#app")!

console.log(OptionsGuySVG)
const options = document.createElement("img")
options.width = 640
options.height = 640
options.src = OptionsGuySVG

app_wrapper.appendChild(pap_bg)
app_wrapper.appendChild(options)
