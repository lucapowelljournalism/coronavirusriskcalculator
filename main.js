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


//Data for sex-based fatality rate NOT WORKING YET//
const sexdata = [{ "sexgroup": 'Female', "COVID_CASE_RATE": 913.66, "HOSPITALIZED_CASE_RATE": 196.19, "DEATH_RATE": 39.25 },
	{ "sexgroup": 'Male', "COVID_CASE_RATE": 1178.07, "HOSPITALIZED_CASE_RATE": 318.75, "DEATH_RATE": 71.09 }];

$("body").on("click", ".sex .tiles", function (e) { //Need to fix click function running to the left/right of tiles.
	e.preventDefault();

	let click_sex = e.target; //
	let target = $(click_sex).data("target"); // "gets data attribute #(variablename) from click face."
	document.querySelector("#usersex").innerHTML = target //Writes the choice the user input back to the website.
	$(".sex_content").removeClass('inactive') //Makes the output appear.
	let group = sexdata.find(function (row) { //Finds the death rate based on the data.
		if (row.sexgroup === target) {
			return true;
		}
	});
	const sex_death_rate = group.DEATH_RATE;
	document.querySelector("#sex_death_rate").innerHTML = sex_death_rate;
});

//Location data // We need to decide on this.

//Data for bloodtype rate//
const bloodtypedata = [{ "bloodtype_group": 'A', "COVID_CASE_RATE": 10.03 },
	{ "bloodtype_group": 'B', "COVID_CASE_RATE": 26.42 },
	{ "bloodtype_group": 'O', "COVID_CASE_RATE": 25.80 },
	{ "bloodtype_group": 'AB', "COVID_CASE_RATE": 10.03 }];

$("body").on("change", ".calculator.bloodtype select", function (e) {
	let type = $(this).val() //Stores input
	//Finds the row that corresponds to the blood type
	let group = bloodtypedata.find(function (row) {
		if (row.bloodtype_group === type) {
			return true;
		}
	});
	const bloodtype_case_rate = group.COVID_CASE_RATE;
	document.querySelector("#susceptibility").innerHTML = bloodtype_case_rate;
});

//Data for age-based death rate//
const data = [{ "age_group_low": 0, "age_group_high": 17, "COVID_CASE_RATE": 47.25, "HOSPITALIZED_CASE_RATE": 4.81, "DEATH_RATE": 0.06 },
	{ "age_group_low": 18, "age_group_high": 44, "COVID_CASE_RATE": 556.94, "HOSPITALIZED_CASE_RATE": 50.78, "DEATH_RATE": 2.31 },
	{ "age_group_low": 45, "age_group_high": 64, "COVID_CASE_RATE": 783.25, "HOSPITALIZED_CASE_RATE": 177.91, "DEATH_RATE": 16.2 },
	{ "age_group_low": 65, "age_group_high": 75, "COVID_CASE_RATE": 798.72, "HOSPITALIZED_CASE_RATE": 302.38, "DEATH_RATE": 47.77 },
	{ "age_group_low": 75, "age_group_high": 1000, "COVID_CASE_RATE": 791.26, "HOSPITALIZED_CASE_RATE": 403.86, "DEATH_RATE": 114.81 }];

$("body").on("keyup keydown keypress change", ".calculator.age input", function (e) {
	let user_input = $(this).val(); //Stores input
	let age = parseInt(user_input);
	//Finds the row that corresponds to the age range
	let group = data.find(function (row) {
		if (row.age_group_low <= age && row.age_group_high >= age) {
			return true;
		}
	});

	const age_case_rate = group.DEATH_RATE;
	document.querySelector("#caserate").innerHTML = age_case_rate
	//need to add class active to the output text that accompanies this//
});

//Data for Ethnicity death rate, as of April 16th.
const ethnicity_data = [
	{ "Ethnicity": "Black/African American", "Non-hospitalized": 32.6, "Non-fatal hospitalized": 37, "KnownToHaveDied": 33.2 },
	{ "Ethnicity": "Asian", "Non-hospitalized": 6.3, "Non-fatal hospitalized": 7.3, "KnownToHaveDied": 7.7 },
	{ "Ethnicity": "White", "Non-hospitalized": 28.6, "Non-fatal hospitalized": 25.4, "KnownToHaveDied": 30.9 },
	{ "Ethnicity": "Hispanic", "Non-hospitalized": 32.4, "Non-fatal hospitalized": 30.4, "KnownToHaveDied": 28.2 }];

$("body").on("change", ".ethnicity select", function (e) {
	let ethnicity = $(this).val() //Stores input
	//Finds the row that corresponds to the blood type
	let group = ethnicity_data.find(function (row) {
		if (row.Ethnicity === ethnicity) {
			return true;
		}
	});
	const ethnicity_death_rate = group.KnownToHaveDied;
	document.querySelector("#ethnicity_death_rate").innerHTML = ethnicity_death_rate;
	document.querySelector("#ethnicity_choice").innerHTML = ethnicity

});