
// GLOBAL VARIABLES
const lockedKeys = ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]

// EVENT LISTENERS
const keys = document.querySelectorAll('.key')
document.addEventListener('keyup', e => {
    preventDefaults(e)
    highlightKey(e)
})



// KEY-RELATED FUNCTIONS 
function highlightKey(e) {
    let key = document.querySelector(`.${e.code}`)
    key.classList.add('keyUp')
    console.log(key)
}


function preventDefaults(e) {
    window.addEventListener("keydown",function (e) {
        if (lockedKeys.includes(e.code)) { 
            e.preventDefault();
        }
    })
}

