const container=  document.getElementById('container');

const div = document.createElement('div');
div.textContent = 'Drag me!';
div.setAttribute('draggable', 'true');
div.style.border = '1px solid black';
div.style.padding = '10px';
div.style.width = '100px';
const div1 = document.createElement('div');
div1.textContent = 'Drop here!';
div1.style.width = '200px';
div1.style.height = '200px';
div1.className = 'dropzone';
div1.style.border = '2px dashed #ccc';
div1.style.textAlign = 'center';
container.appendChild(div);
container.appendChild(div1);