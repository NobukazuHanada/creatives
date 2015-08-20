function load(event) {
    var dom = document.createElement('div');
    var text = document.createTextNode('Hello World!');
    document.body.appendChild(dom);
    return dom.appendChild(text);
};
window.onload = load;
