//Data for age-based death rate//
const data = [{ "age_group_low": 0, "age_group_high": 17, "COVID_CASE_RATE": 47.25, "HOSPITALIZED_CASE_RATE": 4.81, "DEATH_RATE": 0.06 },
	{ "age_group_low": 18, "age_group_high": 44, "COVID_CASE_RATE": 556.94, "HOSPITALIZED_CASE_RATE": 50.78, "DEATH_RATE": 2.31 },
	{ "age_group_low": 45, "age_group_high": 64, "COVID_CASE_RATE": 783.25, "HOSPITALIZED_CASE_RATE": 177.91, "DEATH_RATE": 16.2 },
	{ "age_group_low": 65, "age_group_high": 75, "COVID_CASE_RATE": 798.72, "HOSPITALIZED_CASE_RATE": 302.38, "DEATH_RATE": 47.77 },
	{ "age_group_low": 75, "age_group_high": 1000, "COVID_CASE_RATE": 791.26, "HOSPITALIZED_CASE_RATE": 403.86, "DEATH_RATE": 114.81 }];

$("body").on("keyup keydown keypress change", ".calculator input", function (e) {
	let user_input = $(this).val() //Stores input
	let age = parseInt(user_input);

	//Finds the row that corresponds to the age range
	let group = data.find(function (row) {
		if (row.age_group_low <= age && row.age_group_high >= age) {
			return true;
		}
	});

	const case_rate = group.DEATH_RATE;
	document.querySelector("#caserate").innerHTML = case_rate
	//need to add class active to the output text that accompanies this//
});

//Make the sex tile active//
$("body").on("click", ".beginbutton", function (e) {
	e.preventDefault();
	console.log("clicking works")
	$(".sex").removeClass('inactive')
});

//Make the location tile active//
$("body").on("click", ".sex .tiles", function (e) {
	e.preventDefault();
	console.log("clicking works")
	$(".location").removeClass('inactive')
});

//Make the age tile active//
$("body").on("click", ".location", function (e) {
	e.preventDefault();
	console.log("clicking works")
	$(".age").removeClass('inactive')
});

//Make the ethnicity tile active//
$("body").on("click", ".age", function (e) {
	e.preventDefault();
	console.log("clicking works")
	$(".ethnicity").removeClass('inactive')
});

//Make the conditions tile active//
$("body").on("click", ".ethnicity", function (e) {
	e.preventDefault();
	console.log("clicking works")
	$(".conditions").removeClass('inactive')
});

//Make the bloodtype tile active//
$("body").on("click", ".conditions", function (e) {
	e.preventDefault();
	console.log("clicking works")
	$(".bloodtype").removeClass('inactive')
});

//Make the location tile active//
$("body").on("click", ".bloodtype", function (e) {
	e.preventDefault();
	console.log("clicking works")
	$(".diseases").removeClass('inactive')
});