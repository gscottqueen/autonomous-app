// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://developers.zomato.com/api/v2.1/categories",
//     "method": "GET",
//     "headers": {
//         "user-key": "1eefba1deacee2eb43b584eaa985cd23",
//         "content-type": "application/json"
//             // These are lines the browser does not expect and throws errors
//             // "cache-control": "no-cache",
//             // "postman-token": "3863e301-6a77-bb52-4e0b-0f4dd33a9d60"
//     }
// }
//
// $.ajax(settings).done(function(response) {
//     console.log(response);
//
//     // Iterate through response
//     var li_elements;
//     _.forEach(response.categories, function(value) {
//         console.log(value.categories.name);
//         li_elements += '<li>' + value.categories.name + '</li>';
//     });
//
//     // Append to something in html
//     $("#categories").append(li_elements);
// });


// Get a reference to the database service
// $(document).ready(function() {
//     var database = firebase.database();
//
//     function writeCatData() {
//         firebase.database().ref('incidents/').once('value').then(function(snapshot) {
//             console.log(snapshot.val(incidents.months));
//         });
//     }
//     writeCatData();
//
//     // submit form
//
//     $("form").on('submit', function() {
//         var email = $("#email").val;
//         var password = $("#password").val;
//         firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             alert(user, cred)
//                 // ...
//         });
//     })
// })
