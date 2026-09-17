import './style.css'
import OptionsGuySVG from "./options.svg"

import pap_bg from "./pap_bg"
import pap_encoder from "./pap_encoder"
import pap_bg2 from "./pap_bg2"

const app_wrapper = document.querySelector<HTMLDivElement>("#app")!

const options = document.createElement("img")
options.width = 640
options.height = 640
options.src = OptionsGuySVG

app_wrapper.appendChild(options)
app_wrapper.appendChild(pap_bg)
app_wrapper.appendChild(pap_bg2)
app_wrapper.appendChild(pap_encoder)
