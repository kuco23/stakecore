export function changeOpacity(add: boolean) {
    document.getElementById('root').style.opacity = add ? '0.5' : '1'
    document.getElementById('root').style.filter = add ? 'blur(1px)' : 'blur(0)'
}