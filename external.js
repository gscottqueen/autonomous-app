$(document).ready(function () {
	// $("#report-incident").submit(function(e){
	//   e.preventDefault()
	//   var month = $("#month_id").val()
	//   var day = $("#day").val()
	//   console.log(day);
	//   writeData(incident_id, month, day, description)

	//create svg
	var dataSection = d3.select("#dataSection")

	// Create the SVG Viewport selection
	var svgContainer = dataSection.append("svg")
		.attr("width", 950)
		.attr("height", 600)

	//  Create the Scale we will use for the Axis
	var xAxisScale = d3.scale.linear()
		.domain([0, 12])
		.range([0, 800]);
	var yAxisScale = d3.scale.linear()
		.domain([0, 31])
		.range([500, 0]);

	// Create the Axis
	var xAxis = d3.svg.axis()
		.scale(xAxisScale)
		.orient("bottom")
		.ticks(12)
	typeof (xAxis)
	var yAxis = d3.svg.axis()
		.scale(yAxisScale)
		.orient("left")
		.ticks(10);
	typeof (yAxis)

	//Create a group Element for the Axis elements and call the xAxis styles and functions
	xAxisGroup = svgContainer.append("g")
		.attr("class", "xaxis")
		.attr("transform", "translate(100,540)")
		.call(xAxis);
	yAxisGroup = svgContainer.append("g")
		.attr("class", "yaxis")
		.attr("transform", "translate(100,40)")
		.call(yAxis);

	//set the global variable

	var dataset = [];

	// call to the database

	var dataset = firebase.database().ref('/incidents').once('value', function (snapshot) {
		dataset = snapshot.val();
		renderChart(dataset);
	});

	// Define the div for the tooltip
	var div = d3.select("#dataSection").append("div")

	//  Plot the data and draw the Cirlces
	var renderChart = function (dataset) {
		svgContainer.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("cx", function (d) {
				return xAxisScale(d.monthId);
			})
			.attr("cy", function (d) {
				return yAxisScale(d.day);
			})
			.attr("r", 10)
			.attr("class", "points")
			.attr("transform", "translate(100,40)")
			.on("mouseover", function (d) {
				$("#reporter").hide().html(d.reporter).fadeIn(200);
				$(".year").hide().html(d.year).fadeIn(200);
				$(".month").hide().html(d.monthId).fadeIn(200);
				$(".day").hide().html(d.day).fadeIn(200);
				$(".miles").hide().html(d.milesDriven).fadeIn(200);
				$(".description").hide().html(d.description).fadeIn(200);
				// $(".car").a(d.type)
				// }
			})
	}
});

// saved script
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
// $(document).ready(function () {
// $("#report-incident").submit(function(e){
//   e.preventDefault()
//   var month = $("#month_id").val()
//   var day = $("#day").val()
//   console.log(day);
//   writeData(incident_id, month, day, description)
// })

// setting up the form
  $(document).ready(function(){
        var date_input=$('input[name="date"]'); //our date input has the name "date"
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'mm/dd/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
    })
