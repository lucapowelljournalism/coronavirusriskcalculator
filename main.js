//----------------------------CSS Functions -----------------------------//

//Make the 'sex' tile active//
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

//Make the prexistingconditions tile active//
$("body").on("click", ".ethnicity", function (e) {
	e.preventDefault();
	console.log("clicking works")
	$(".prexistingconditions").removeClass('inactive')
});

//Make the bloodtype tile active//
$("body").on("click", ".prexistingconditions", function (e) {
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

//--------------------------------------------------Beginning of Calculator Functions --------------------------------------

//Data for sex-based fatality rate NOT WORKING YET//
const sexdata = [{ "sexgroup": 'Female', "COVID_CASE_RATE": 913.66, "HOSPITALIZED_CASE_RATE": 196.19, "DEATH_RATE": 39.25 },
	{ "sexgroup": 'Male', "COVID_CASE_RATE": 1178.07, "HOSPITALIZED_CASE_RATE": 318.75, "DEATH_RATE": 71.09 }];

$("body").on("click", ".sex .tiles", function (e) { //Need to fix click function running to the left/right of tiles.
	e.preventDefault();

	let click_sex = e.target; //
	let user_sex = $(click_sex).data("target"); // "gets data attribute #(variablename) from click face."
	document.querySelector("#usersex").innerHTML = user_sex //Writes the choice the user input back to the website.
	$(".sex_content").removeClass('inactive') //Makes the output appear.
	let group = sexdata.find(function (row) { //Finds the death rate based on the data.
		if (row.sexgroup === user_sex) {
			return true;
		}
	});
	const sex_death_rate = group.DEATH_RATE;
	document.querySelector("#sex_death_rate").innerHTML = sex_death_rate;
});


//Location data // Country --> State --> Borough
const locationdata = [{ "Country": "Brazil", "FatalityRate": 6.6, "RecoveredCases": 26573, "Active": 20132 },
		{ "Country": "Thailand", "FatalityRate": 1.8, "RecoveredCases": 2430, "Active": 359 },
		{ "Country": "USA", "FatalityRate": 5.7, "RecoveredCases": 96677, "Active": 742830 }


	//Add 10 more countries//

$("body").on("change", ".calculator.location select#country", function (e) {
			let user_country = $(this).val() //Stores input
			document.querySelector("#countrychoice").innerHTML = user_country //Writes the choice the user input back to the website.
			$(".country_content").removeClass('inactive') //Makes the output appear.

			let group = locationdata.find(function (row) { //Finds the row that corresponds to the blood type
				if (row.Country === user_country) {
					return true;
				}
			});
			const fatality_rate = group.FatalityRate; //saves all those data
			const recovered_cases = group.RecoveredCases;
			const active_cases = group.Active;
			document.querySelector("#fatalityrate").innerHTML = fatality_rate; //writes those data to the HTMl
			document.querySelector("#recoveredcases").innerHTML = recovered_cases;
			document.querySelector("#activecases").innerHTML = active_cases;

			if (user_country === "USA") {
				$(".statequestion").removeClass('inactive');
			} else if (user_country !== "USA") {
				$(".statequestion").addClass('inactive');
			}

			$("body").on("change", ".calculator.location select#state", function (e) {
				let user_state = $(this).val(); //stores state Input
				document.querySelector("#statechoice").innerHTML = user_state;
				$(".state_content").removeClass('inactive');
			});

			if (user_state === "New York") {}
		});


//Data for age-based death rate//
const agedata = [
			{ "age_group_low": 0, "age_group_high": 17, "COVID_CASE_RATE": 47.25, "HOSPITALIZED_CASE_RATE": 4.81, "DEATH_RATE": 0.06 },
			{ "age_group_low": 18, "age_group_high": 44, "COVID_CASE_RATE": 556.94, "HOSPITALIZED_CASE_RATE": 50.78, "DEATH_RATE": 2.31 },
			{ "age_group_low": 45, "age_group_high": 64, "COVID_CASE_RATE": 783.25, "HOSPITALIZED_CASE_RATE": 177.91, "DEATH_RATE": 16.2 },
			{ "age_group_low": 65, "age_group_high": 75, "COVID_CASE_RATE": 798.72, "HOSPITALIZED_CASE_RATE": 302.38, "DEATH_RATE": 47.77 },
			{ "age_group_low": 75, "age_group_high": 1000, "COVID_CASE_RATE": 791.26, "HOSPITALIZED_CASE_RATE": 403.86, "DEATH_RATE": 114.81 }];

$("body").on("keyup keydown keypress change", ".calculator.age input", function (e) {
			let user_input = $(this).val(); //Stores input
			let age = parseInt(user_input);
			$(".age_content").removeClass('inactive') //Makes the output appear.

			let group = agedata.find(function (row) {
				if (row.age_group_low <= age && row.age_group_high >= age) {
					return true;
				};
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
			$(".ethnicity_content").removeClass('inactive') //Makes the output appear.

			//Finds the row that corresponds to the ethnicity selected
			let group = ethnicity_data.find(function (row) {
				if (row.Ethnicity === ethnicity) {
					return true;
				}
			});
			const ethnicity_death_rate = group.KnownToHaveDied;
			document.querySelector("#ethnicity_death_rate").innerHTML = ethnicity_death_rate;
			document.querySelector("#ethnicity_choice").innerHTML = ethnicity

		});


//Data for prexisting conditions//
const prexistingdata = [{ "prexistingconditions_group": 'Cardiovascular_disease', "prexisting_conditions_rate": 10.5 },
			{ "prexistingconditions_group": 'Diabetes', "prexisting_conditions_rate": 7.3 },
			{ "prexistingconditions_group": 'Chronic Respirator', "prexisting_conditions_rate": 6.3 },
			{ "prexistingconditions_group": 'Hypertension', "prexisting_conditions_rate": 6 },
			{ "prexistingconditions_group": 'Cancer', "prexisting_conditions_rate": 5.6 },
			{ "prexistingconditions_group": 'No condition', "prexisting_conditions_rate": 0.9 }];

$("body").on("change", ".calculator.prexistingconditions select", function (e) {
			let user_condition = $(this).val()
			$(".conditions_content").removeClass('inactive'); //Makes the output appear.

			let group = prexistingdata.find(function (row) {
				if (row.prexistingconditions_group === user_condition) {
					return true;
				}
			});
			const prexisting_conditions_rate = group.prexisting_conditions_rate;
			document.querySelector("#prexistingconditions").innerHTML = prexisting_conditions_rate;
		});


//Data for bloodtype rate//
const bloodtypedata = [{ "bloodtype_group": 'A', "COVID_CASE_RATE": 10.03 },
			{ "bloodtype_group": 'B', "COVID_CASE_RATE": 26.42 },
			{ "bloodtype_group": 'O', "COVID_CASE_RATE": 25.80 },
			{ "bloodtype_group": 'AB', "COVID_CASE_RATE": 10.03 }];

$("body").on("change", ".calculator.bloodtype select", function (e) {
			let type = $(this).val() //Stores input
			$(".bloodtype_content").removeClass('inactive');
			//Finds the row that corresponds to the blood type
			let group = bloodtypedata.find(function (row) {
				if (row.bloodtype_group === type) {
					return true;
				}
			});
			const bloodtype_case_rate = group.COVID_CASE_RATE;
			document.querySelector("#susceptibility").innerHTML = bloodtype_case_rate;
		});