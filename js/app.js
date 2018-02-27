window.onload = function () {
    let section = document.querySelector('section'),
        p = document.createElement('p'),
        text = document.createTextNode('This is text in the new text node.');
    
    p.appendChild(text);
    section.appendChild(p);
};
