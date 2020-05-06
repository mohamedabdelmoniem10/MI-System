// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

import { BrowserWindow } from '@electron';
// const {na} = require('electron').browserw;
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