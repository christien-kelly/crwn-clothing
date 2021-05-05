fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch(
            'https://jsonplaceholder.typicode.com/posts?userId='+firstUser.id
        );
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error  => {
        console.log("there was an error.");
        console.log(error)}
        );


// the code is waiting for the asynchronous code to read.

const myAsyncFunction = async () => {
    // await pauses the  functions excecution until one function has finished. wait for this to finish
    // before continuing.

    // await until this API has returned a list of vals.
    try {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await userResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
    const postResponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts?userId=1'
    );
    const posts = await postResponse.json();
    console.log(posts);
    } catch(err) {
        console.log(err);
        console.log("there was an error.")
    }
    
}