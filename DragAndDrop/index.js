const container=  document.getElementById('container');

const div = document.createElement('div');
div.textContent = 'Drag me!';
div.setAttribute('draggable', 'true');
div.style.border = '1px solid black';
div.style.padding = '10px';
div.style.width = '100px';
div.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.3)';
const div1 = document.createElement('div');
div1.textContent = 'Drop here!';
div1.style.width = '200px';
div1.style.height = '200px';
div1.className = 'dropzone';
div1.style.border = '2px dashed #ccc';
div1.style.textAlign = 'center';
container.appendChild(div);
container.appendChild(div1);

// It lets you set custom data with e.dataTransfer.setData() (useful for dragging multiple items, or passing info).
// You can style the element or show a custom drag image.
// You can control what is being dragged.
div.addEventListener('dragstart', function(e) {
    console.log('Drag started', e);
})

// to prevent default behaviour of browser which does not allow to drag
div1.addEventListener('dragover', function(e){
    e.preventDefault();
})

div1.addEventListener('drop', function(e){
    div1.prepend(div);
})