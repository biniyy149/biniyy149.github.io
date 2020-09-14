"use strict";

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    let titles = [];
    for (let book of library) {
        titles.push(book.title + "\n");
    }

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
	titles = titles.sort();
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titles;
}
function showAuthors(){
    let authors = [];
    for(let book of library){
        authors.push(book.author+"\n");
    }
    authors = authors.sort();
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authors;
} 
function showIDs(){
    let libraryID = [];
    for (let book of library) {
        libraryID.push(book.libraryID + "\n");
    }
    libraryID = libraryID.sort((ini, last) => ini-last);
 
    document.getElementById("displayArea").innerHTML = libraryID
}
function bookLibrary(){
    let title = document.getElementById("title").Value;
    let author = document.getElementById("author").Value;
    let libraryID = parseInt(document.getElementById("libraryID").value);
    library.push({title: title, author: author, libraryID: libraryID});
    let display = [];
    for(let element of library){
        display.push(element.title + " "+element.author+" "+element.libraryID+"<br>");

    }
    document.getElementById("display").innerHTML = display;
} 
function  scramble(){
    //get all the titles
    //put all of te words into an array
    //find all words of different lenghts and put each into own array->array of arrays
    //join each array back into a string ->aray of strings
    const wordStringArray =null;//array holding concatenated string of n letter words.
    // join the array of strings into a single string with \n line breaks
    const scrambleString = wordStringArray.join("\n");
    //display in the text area
    function findTitles(){
        let titles = [];
    }
    const allTitles = findTitles();



}       

