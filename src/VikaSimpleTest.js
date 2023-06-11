
//this works if in spring todo controller has @CrossOrigin(origins = "null")
async function fetchTasksJSON() {

    let username = 'user';
    let password = 'password';
    let headers = {
        'Accept':       'application/json',
        'Content-Type': 'application/json',

        'Authorization':'Basic dXNlcjpwYXNzd29yZA=='
    };

// headers.append('Content-Type', 'text/json');
//     headers.append('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');

    const response = await fetch('http://laptop-mm38guqj:8080/api/todo', {
       // mode: 'no-cors',//needs for crossdaomain
        mode:        'cors',
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization':'Basic dXNlcjpwYXNzd29yZA=='
        },
    });
console.log(response);
    console.log("response");

     const tasks = await response.json();
    console.log('tasks');
    console.log(tasks);
     return tasks;

}
console.log("Start");
let res;
res =fetchTasksJSON().then(tasks => {
    tasks;

}).catch(error => {
    console.log("Error");
    console.log(error);
});
console.log('res');
console.log(res);