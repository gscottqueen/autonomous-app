$(document).ready(function(){
  $("#report-incident").submit(function(e){
    e.preventDefault()
    var month = $("#month_id").val()
    var day = $("#day").val()
    console.log(day);
    writeData(incident_id, month, day, description)
  })

 firebase.database().ref('/incidents').once('value').then(function(snapshot) {
    var dataset = snapshot.val();
    var dataset = [{
      x: incidents.month_id,
      y: incidents.day
    }];
    console.log(incidents);
  });

// on click of submit call the writeData function
// get the variables from the form
// pass the variables into the set object for the firebase.database

  function writeData(incident_id, month, day, description) {
    firebase.database().ref('incidents/' + incident_id).set({
      username: email,
      month_id: month,
      day: day,
      description: description
    });
  }
})