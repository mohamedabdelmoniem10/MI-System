// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

// const {BrowserWindow} = require('electron');
// const path = require('path');

function createWindow (htmlFile) {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  console.log('this is the name of the html file', htmlFile)
  win.loadFile(htmlFile + '.html')
}


let btn = document.getElementsByClassName("btn");
console.log(btn)
for(i=0; i< btn.length; i++){
    btn[i].addEventListener('click', function(event) {
        event.preventDefault()
        btnI = event.srcElement.children
        console.log(event)
        if(event.target.offsetParent.className == 'btn') {
            btnI = event.target.offsetParent.children;
            htmlFile = btnI[0].children[0].classList[0];

        }else{
            htmlFile = btnI[0].children[0].classList[0];
        }
        console.log('this is the html file from loop', htmlFile)
        createWindow(htmlFile)
    })

}








// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, process.versions[type])
//   }
// })
