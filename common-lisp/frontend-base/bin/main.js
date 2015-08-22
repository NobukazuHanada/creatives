function text(text) {
    return document.createTextNode(text);
};
function element(tagName, attributes, children) {
    var dom = document.createElement(tagName);
    for (var child = null, _js_idx1 = 0; _js_idx1 < children.length; _js_idx1 += 1) {
        child = children[_js_idx1];
        if (child) {
            dom.appendChild(child);
        };
    };
    if (attributes) {
        for (var attribute = null, _js_idx2 = 0; _js_idx2 < attributes.length; _js_idx2 += 1) {
            attribute = attributes[_js_idx2];
            if (attribute) {
                var attributeName = car(attribute);
                var attributeValue = cdr(attribute);
                dom.setattribute(attributeName, attributeValue);
            };
        };
    };
    return dom;
};
function div(attributes) {
    var children = [];
    for (var i3 = 0; i3 < arguments.length - 1; i3 += 1) {
        children[i3] = arguments[i3 + 1];
    };
    return element('div', attributes, children);
};
function p(attributes) {
    var children = [];
    for (var i4 = 0; i4 < arguments.length - 1; i4 += 1) {
        children[i4] = arguments[i4 + 1];
    };
    return element('p', attributes, children);
};
function load(event) {
    var dom = div(null, p(null, text('yes!'), d, text('Hello World')));
    return document.body.appendChild(dom);
};
window.onload = load;
