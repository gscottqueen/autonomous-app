$(document).ready(function(){
  // $("#report-incident").submit(function(e){
  //   e.preventDefault()
  //   var month = $("#month_id").val()
  //   var day = $("#day").val()
  //   console.log(day);
  //   writeData(incident_id, month, day, description)
  })

  //random shit foundin codepen


// call to the database

var dataset = [];

// d3.json('/incidents', function(error, json) {
//   if (error) return console.warn(error);
//   data = json;
//   visualizeit();
// });


 var dataset = firebase.database().ref('/incidents').once('value', function(snapshot) {
    dataset = snapshot.val();
    console.log(dataset);
    renderChart(dataset);
  });

//
//   var data; // a global
//
// d3.json("path/to/file.json", function(error, json) {
//   if (error) return console.warn(error);
//   data = json;
//   visualizeit();
// });

// on click of submit call the writeData function
// get the variables from the form
// pass the variables into the set object for the firebase.database

//   function writeData(incident_id, month, day, description) {
//     firebase.database().ref('incidents/' + incident_id).set({
//       username: email,
//       month_id: month,
//       day: day,
//       description: description
//     });
//   }
// })
