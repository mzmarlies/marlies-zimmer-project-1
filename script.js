// PSUEDO CODE:
// Listen for when the form is submitted and store it in a variable
// when the form is submitted:
    // - get the user comment from the form's text input and store it in a variable
    // - display that input as a list item on the page in the ul

// store the form element in a variable. 
const formElement = document.querySelector('.blog-form');


// add event listener to the form:
formElement.addEventListener('submit', function(event) {

    // prevent default refresh:
    event.preventDefault();
    
    // store the input elements for the comment, name, and email in variables:
    const commentInput = document.getElementById('comment');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    // make variables to store the user's name and comment:
    const usersName = nameInput.value;
    const usersComment = commentInput.value;
    
    // clear the input values after the user has submitted their response:
    commentInput.value = '';
    nameInput.value = '';
    emailInput.value = '';

    // check if there are inputs in the user's name and comment section to run the code within:
    if(usersName && usersComment) {

        // create a div to hold the new comment image:
        const listItem = document.createElement('li');
        listItem.innerHTML = (`
        <div class="comment-img">
            <img src="https://www.placecage.com/200/200">
        </div>
        `);

        // create a new div to hold the new comment:
        // add a class name to this div to match the older comments:
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-text')

        // append the list item to the new div.
        listItem.appendChild(commentDiv);

        // create a paragraph to hold the comment:
        const userInput = document.createElement('p');
        userInput.textContent = usersComment;

        // create a paragraph to hold the name:
        const nameInput = document.createElement('p');
        nameInput.textContent = `By ${usersName}`;


        // append both the name and the comment to the comment div.
        commentDiv.appendChild(nameInput);
        commentDiv.appendChild(userInput);


        // append the list item now holding the image, name, and comment to the div. 
        document.getElementById('new-comment-list').appendChild(listItem);

    
    }


});
