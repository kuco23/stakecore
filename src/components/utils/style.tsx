import { sleep } from "../../utlits/misc/misc"

export function changeOpacity(add: boolean) {
    const overlay = document.getElementById("overlay")
    add ? addOverlay(overlay) : removeOverlay(overlay)
}

function addOverlay(overlay: HTMLElement) {
    overlay.style.visibility = "visible"
    overlay.style.opacity = "0.8"
}

function removeOverlay(overlay: HTMLElement) {
    overlay.style.opacity = "0"
    sleep(1000).then(() => {
        overlay.style.visibility = "hidden"
    })
}