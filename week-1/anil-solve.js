/*
*Title: Assignment 1.1
*Author: Elizabeth Dewey
*Modified By: Nicole Barleta
*Solution:
 */


function updateResults(){
    var elResults = Document.getElementById('results'); //Find the element results, and store it in elresults
    // find the element ID 'fiction' and store it as variable elFiction
    var elFiction = document.getElementById('fiction');
    //we don't have to retrieve nonFiction becaue there's only two options
    //updates the 'results' elememt based on the radio choice
    //check if fiction is marked
    if (elFiction.checked)
    {
        elResults.innerText ='Book 1, Book 2, Book 3';
    }
        else //asume "non-fiction" is marked.
        {
          elResults.innerText ='Book 4, Book 5, Book 6';
        }
