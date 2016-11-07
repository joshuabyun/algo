//
// window.onload
// By default, it is fired when the entire page loads, including its content (images, css, scripts, etc.)
// In some browsers it now takes over the role of document.onload and fires when the DOM is ready as well.

//document.onload
// It is called when the DOM is ready which can be prior to images and other external content is loaded.
window.onload = function(){
    //document.body.insertBefore(selectId('two'),selectId('one'));
    document.body.replaceChild(document.createTextNode('hello'),selectId("one"));

};
function selectTag(tag){
    return document.getElementsByTagName(tag);
}
function selectId(idName){
    return document.getElementById(idName);
}
function selectClass(className){
    return document.body.getElementsByClassName(className);
}
function createTag(element){
    return document.createElement(element);
}
function createInnerHTML(element,content,attr,attrVal){
    element.innerHTML = content;
    element.setAttribute(attr,attrVal);
    return element;
}
function querySelect(selector){
    return document.querySelectorAll(selector);
}
function querySelectOne(selector){
    return document.querySelector(selector);
}