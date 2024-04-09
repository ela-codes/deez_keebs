// GLOBAL VARIABLES
const lockedKeys = [
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
];

// EVENT LISTENERS
const keys = document.querySelectorAll(".key");
document.addEventListener("keydown", (e) => {
  preventDefaults(e)
  highlightKey(e)
  completeKeyDown(e)
});

document.addEventListener("keyup", (e) => {
  completeKeyUp(e)
});


// KEY-RELATED FUNCTIONS

function highlightKey(e) {
  let key = document.querySelector(`.${e.code}`)
  key.classList.add("highlightKey")
}

function completeKeyDown(e) {
  let key = document.querySelector(`.${e.code}`)
  key.classList.add("keyDownStyle")
}


function completeKeyUp(e) {
  let key = document.querySelector(`.${e.code}`)
  key.classList.remove("keyDownStyle")
  key.classList.add("keyUpStyle")
}

// stops function keys from being activated
function preventDefaults(e) {
  window.addEventListener("keydown", function(e) {
    if (lockedKeys.includes(e.code)) {
      e.preventDefault();
    }
  });
}



document.getElementById('requestButton').addEventListener('click', function() {
  // Request access to a USB device
  navigator.usb.requestDevice({ filters: [{ 
    classCode: 3, 
    subclassCode: 1, 
    protocolCode: 1 
    }] 
  }).then(device => {
      console.log('Device:', device);
      // Access device descriptors, configurations, etc.
      console.log('Manufacturer:', device.manufacturerName);
      let keyboardName = document.querySelector(".keyboardName")
      keyboardName.innerHTML = `Current Keyboard: ${device.productName}`
      console.log('Product:', device.productName);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


