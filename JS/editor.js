// Defining all the variables of the buttons type individually
let bold_btn = document.getElementById('boldBtn');
let underline_btn =document.getElementById("underlineBtn");
let italic_btn =document.getElementById("ItalicBtn");
let justify_btn = document.getElementById("justify_Align");
let leftAlign_btn = document.getElementById("left_Align");
let rightAlign_btn = document.getElementById("right_Align");
let centerAlign_btn = document.getElementById("center_Align");

// Function to perform Styling Operation - Bold
var makeBold =() =>{
    var range = window.getSelection().getRangeAt(0);
    if(window.getSelection().anchorNode.parentElement.classList.contains("make_bold")){
        //if selected element range belongs to /is inside the node of particular span class then remove that class of that node.
        window.getSelection().anchorNode.parentElement.classList.remove("make_bold");
        window.getSelection().anchorNode.parentElement.querySelectorAll('.make_bold').forEach(e => e.classList.remove("make_bold"));
    }
    else
        {
        var selectionContents = range.extractContents();
        //extract the contents from the selection range
        var span = document.createElement("span");
        span.className = "make_bold";
        span.appendChild(selectionContents);
        //insert the span created into the range from windows selection
        range.insertNode(span);
    }
}
bold_btn.addEventListener("click",makeBold);
// Function to perform Styling Operation - underline
var makeUnderline = ()=> {

    var range = window.getSelection().getRangeAt(0);
    if(window.getSelection().anchorNode.parentElement.classList.contains("make_underline")){
        //if selected element range belongs to /is inside the node of particular span class then remove that class of that node.
        window.getSelection().anchorNode.parentElement.classList.remove("make_underline");
        //Parse through the enter Child nodes to check if any Node has Selected Style , and remove it
        window.getSelection().anchorNode.parentElement.querySelectorAll('.make_underline').forEach(e => e.classList.remove("make_underline"));
    }
        else{
        //extract the contents from the selection range
        var selectionContents = range.extractContents();
        var span = document.createElement("span");
        span.className = "make_underline";
        span.appendChild(selectionContents);
        //insert the span created into the range from windows selection
        range.insertNode(span);
    }
}
underline_btn.addEventListener("click",makeUnderline);
// Function to perform Styling Operation - Italic
var makeItalic = ()=> {
    var range = window.getSelection().getRangeAt(0);
    if(window.getSelection().anchorNode.parentElement.classList.contains("make_italic")){
        //if selected element range belongs to /is inside the node of particular span class then remove that class of that node.
        window.getSelection().anchorNode.parentElement.classList.remove("make_italic");
        //Parse through the enter Child nodes to check if any Node has Selected Style , and remove it
        window.getSelection().anchorNode.parentElement.querySelectorAll('.make_italic').forEach(e => e.classList.remove("make_italic"));
    }
    else{
        //extract the contents from the selection range
        var selectionContents = range.extractContents();
        var span = document.createElement("span");
        span.className = "make_italic";
        span.appendChild(selectionContents);
        //insert the span created into the range from windows selection
        range.insertNode(span);
    }
}
italic_btn.addEventListener("click",makeItalic);
// Function to perform Styling Operation - Justify align
var  makeJustify = () => {
    document.getElementById("textAreaContainer_ID").style.textAlign = "justify";
}
justify_btn.addEventListener("click",makeJustify);
// Function to perform Styling Operation - Right align
var align_right = () =>{
    document.getElementById("textAreaContainer_ID").style.textAlign = "right";
}
rightAlign_btn.addEventListener("click",align_right);
// Function to perform Styling Operation - left align
var align_left =() =>{
    document.getElementById("textAreaContainer_ID").style.textAlign = "left";
}
leftAlign_btn.addEventListener("click",align_left);
// Function to perform Styling Operation - center align
var align_center=() =>{
    document.getElementById("textAreaContainer_ID").style.textAlign = "center";
}
centerAlign_btn.addEventListener("click",align_center);

window.onbeforeunload = function (e) {
    bold_btn.removeEventListener(window.close(),makeBold);
    underline_btn.addEventListener(window.close(),makeUnderline);
    italic_btn.addEventListener(window.close(),makeItalic);
    justify_btn.addEventListener(window.close(),makeJustify);
    rightAlign_btn.addEventListener(window.close(),align_right);
    leftAlign_btn.addEventListener(window.close(),align_left);
    centerAlign_btn.addEventListener(window.close(),align_center);
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Close Page';
    }

    // For Safari
    return 'Close Page';
};