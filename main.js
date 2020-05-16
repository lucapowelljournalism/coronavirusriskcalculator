//--------------------------------------------------Beginning of Calculator Functions --------------------------------------
function round(value, decimals) {
	return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
//Data for sex-based fatality rate NOT WORKING YET//
const sexdata = [{ "sex_group": "Female", "Cases": 2082.6, "Hospitalizations": 488.3, "Deaths": 140.44 },
	{ "sex_group": "Male", "Cases": 2431.52, "Hospitalizations": 710.74, "Deaths": 238.32 }];

$("body").on("click", ".sex button", function (e) { //Need to fix click function running to the left/right of tiles.
	e.preventDefault();

	let click_sex = e.target; //
	let user_sex = $(click_sex).data("target"); // "gets data attribute #(variablename) from click face."
	document.querySelector("#usersex").innerHTML = user_sex //Writes the choice the user input back to the website.

	$(".sex_content").removeClass('inactive') //Makes the output appear.

	let group = sexdata.find(function (row) { //Finds the death rate based on the data.
		if (row.sex_group === user_sex) {
			return true;
		}
	});
	const sex_death_rate = round(group.Deaths / 100, 2);
	document.querySelector("#sex_death_rate").innerHTML = sex_death_rate;

	$(".location").removeClass('inactive')

});


//Location data// As of May 16th.

// Country // Fatality rate = number of deaths divided by number of confirmed cases (deaths/cases)
const countrydata = [{ "country": "Argentina", "confirmed": 7479, "deaths": 356, "fatality_rate": "4.76" },
	{ "country": "Brazil", "confirmed": 220291, "deaths": 14962, "fatality_rate": "6.79" },
	{ "country": "France", "confirmed": 177319, "deaths": 27485, "fatality_rate": "15.50" },
	{ "country": "Germany", "confirmed": 175.715, "deaths": 7938, "fatality_rate": "4.52" },
	{ "country": "India", "confirmed": 85784, "deaths": 2753, "fatality_rate": "3.21" },
	{ "country": "Iran", "confirmed": 116635, "deaths": 6902, "fatality_rate": "5.92" },
	{ "country": "Japan", "confirmed": 16203, "deaths": 713, "fatality_rate": "4.40" },
	{ "country": "Kenya", "confirmed": 781, "deaths": 45, "fatality_rate": "5.76" },
	{ "country": "New Zealand", "confirmed": 1498, "deaths": 21, "fatality_rate": "1.40" },
	{ "country": "Pakistan", "confirmed": 38799, "deaths": 834, "fatality_rate": "2.15" },
	{ "country": "Russia", "confirmed": 262843, "deaths": 2418, "fatality_rate": "0.92" },
	{ "country": "Singapore", "confirmed": 26891, "deaths": 21, "fatality_rate": "0.08" },
	{ "country": "South Africa", "confirmed": 13524, "deaths": 247, "fatality_rate": "1.83" },
	{ "country": "Thailand", "confirmed": 3025, "deaths": 56, "fatality_rate": "1.85" },
	{ "country": "Vietnam", "confirmed": 314, "deaths": 0, "fatality_rate": "0.00" },
	{ "country": "South Korea", "confirmed": 11037, "deaths": 262, "fatality_rate": "2.37" },
	{ "country": "UK", "confirmed": 236711, "deaths": 33998, "fatality_rate": "14.36" },
	{ "country": "USA", "confirmed": 1456029, "deaths": 88211, "fatality_rate": "4.76" }]

$("body").on("change", ".calculator.location select#country", function (e) {
	let user_country = $(this).val(); //Stores input
	if (user_country !== "--Choose a country--") {

		document.querySelector("#countrychoice").innerHTML = user_country //Writes the choice the user input back to the website.
		$(".country_content").removeClass('inactive') //Makes the output appear.

		let group = countrydata.find(function (row) { //Finds the row that corresponds to the country
			if (row.country === user_country) {
				return true;
			}
		});

		const confirmed_cases = group.confirmed;
		const deaths = group.deaths;
		const fatality_rate = group.fatality_rate;
		document.querySelector("#fatalityrate").innerHTML = fatality_rate; //writes those data to the HTMl
		document.querySelector("#deaths").innerHTML = deaths;
		document.querySelector("#confirmed_cases").innerHTML = confirmed_cases;

		//quick fix to change what gets printed out//
		if (user_country === "USA") {
			user_country = "the United States";
		}

		//check to see if a user chose USA, if they do then activates the state dropdowns//
		if (user_country === "the United States") {
			$(".statequestion").removeClass('inactive');
		} else if (user_country !== "the United States") {
			$(".statequestion").addClass('inactive');
		}

		//loads in state data//
		const statedata = [{ "state": "Alabama", "confirmed": 11373, "deaths": 483, "recovered": null, "active": 10890, "fatality_rate": 4.246900554, "testing_rate": 2978.941239 },
			{ "state": "Alaska", "confirmed": 388, "deaths": 10, "recovered": 343, "active": 35, "fatality_rate": 2.577319588, "testing_rate": 4431.443042 },
			{ "state": "American Samoa", "confirmed": 0, "deaths": 0, "recovered": null, "active": 0, "fatality_rate": null, "testing_rate": 188.7097644 },
			{ "state": "Arizona", "confirmed": 13169, "deaths": 651, "recovered": 3145, "active": 9373, "fatality_rate": 4.943427747, "testing_rate": 1950.907007 },
			{ "state": "Arkansas", "confirmed": 4463, "deaths": 98, "recovered": 3390, "active": 975, "fatality_rate": 2.1958324, "testing_rate": 2701.600236 },
			{ "state": "California", "confirmed": 76693, "deaths": 3136, "recovered": null, "active": 73557, "fatality_rate": 4.08903029, "testing_rate": 2869.760074 },
			{ "state": "Colorado", "confirmed": 21232, "deaths": 1150, "recovered": 3217, "active": 16865, "fatality_rate": 5.416352675, "testing_rate": 2049.581714 },
			{ "state": "Connecticut", "confirmed": 36085, "deaths": 3285, "recovered": 6264, "active": 26536, "fatality_rate": 9.103505612, "testing_rate": 4372.943889 },
			{ "state": "Delaware", "confirmed": 7373, "deaths": 271, "recovered": 3210, "active": 3892, "fatality_rate": 3.675573037, "testing_rate": 3930.93193 },
			{ "state": "Diamond Princess", "confirmed": 49, "deaths": 0, "recovered": null, "active": 49, "fatality_rate": 0, "testing_rate": null },
			{ "state": "District of Columbia", "confirmed": 6871, "deaths": 368, "recovered": 975, "active": 5528, "fatality_rate": 5.3558434, "testing_rate": 4865.610862 },
			{ "state": "Florida", "confirmed": 44138, "deaths": 1917, "recovered": null, "active": 42221, "fatality_rate": 4.343196339, "testing_rate": 2834.735335 },
			{ "state": "Georgia", "confirmed": 36772, "deaths": 1588, "recovered": null, "active": 35184, "fatality_rate": 4.318503209, "testing_rate": 2843.194625 },
			{ "state": "Grand Princess", "confirmed": 103, "deaths": 3, "recovered": null, "active": 100, "fatality_rate": 2.912621359, "testing_rate": null },
			{ "state": "Guam", "confirmed": 154, "deaths": 5, "recovered": 124, "active": 25, "fatality_rate": 3.246753247, "testing_rate": 2749.209945 },
			{ "state": "Hawaii", "confirmed": 638, "deaths": 17, "recovered": 564, "active": 57, "fatality_rate": 2.664576803, "testing_rate": 2738.665642 },
			{ "state": "Idaho", "confirmed": 2351, "deaths": 72, "recovered": 1573, "active": 706, "fatality_rate": 3.062526584, "testing_rate": 1944.24937 },
			{ "state": "Illinois", "confirmed": 90369, "deaths": 4059, "recovered": null, "active": 86310, "fatality_rate": 4.491584504, "testing_rate": 4250.391479 },
			{ "state": "Indiana", "confirmed": 26656, "deaths": 1691, "recovered": null, "active": 24965, "fatality_rate": 6.343787515, "testing_rate": 2457.555228 },
			{ "state": "Iowa", "confirmed": 14049, "deaths": 336, "recovered": 6561, "active": 7152, "fatality_rate": 2.391629297, "testing_rate": 2965.576041 },
			{ "state": "Kansas", "confirmed": 7886, "deaths": 193, "recovered": 443, "active": 7250, "fatality_rate": 2.447375095, "testing_rate": 2114.155906 },
			{ "state": "Kentucky", "confirmed": 7444, "deaths": 332, "recovered": 2712, "active": 4400, "fatality_rate": 4.459967759, "testing_rate": 2714.567516 },
			{ "state": "Louisiana", "confirmed": 33837, "deaths": 2448, "recovered": 22608, "active": 8781, "fatality_rate": 7.234683926, "testing_rate": 5446.337265 },
			{ "state": "Maine", "confirmed": 1603, "deaths": 69, "recovered": 993, "active": 541, "fatality_rate": 4.304429195, "testing_rate": 1762.742782 },
			{ "state": "Maryland", "confirmed": 36986, "deaths": 1911, "recovered": 2685, "active": 32390, "fatality_rate": 5.166819878, "testing_rate": 3024.076696 },
			{ "state": "Massachusetts", "confirmed": 83421, "deaths": 5592, "recovered": null, "active": 77829, "fatality_rate": 6.703348078, "testing_rate": 6321.056371 },
			{ "state": "Michigan", "confirmed": 50079, "deaths": 4825, "recovered": 22686, "active": 22568, "fatality_rate": 9.634777052, "testing_rate": 3579.664753 },
			{ "state": "Minnesota", "confirmed": 14240, "deaths": 692, "recovered": 8820, "active": 4728, "fatality_rate": 4.859550562, "testing_rate": 2387.904033 },
			{ "state": "Mississippi", "confirmed": 10801, "deaths": 493, "recovered": 6268, "active": 4040, "fatality_rate": 4.564392186, "testing_rate": 3589.302821 },
			{ "state": "Missouri", "confirmed": 10766, "deaths": 581, "recovered": null, "active": 10185, "fatality_rate": 5.396618986, "testing_rate": 2190.787411 },
			{ "state": "Montana", "confirmed": 466, "deaths": 16, "recovered": 431, "active": 19, "fatality_rate": 3.433476395, "testing_rate": 2378.230091 },
			{ "state": "Nebraska", "confirmed": 9610, "deaths": 113, "recovered": null, "active": 9497, "fatality_rate": 1.175858481, "testing_rate": 2957.752449 },
			{ "state": "Nevada", "confirmed": 6733, "deaths": 343, "recovered": 272, "active": 6118, "fatality_rate": 5.0943116, "testing_rate": 2342.283962 },
			{ "state": "New Hampshire", "confirmed": 3453, "deaths": 151, "recovered": 1247, "active": 2055, "fatality_rate": 4.373008978, "testing_rate": 3133.901248 },
			{ "state": "New Jersey", "confirmed": 143984, "deaths": 10148, "recovered": 15642, "active": 118194, "fatality_rate": 7.048005334, "testing_rate": 5212.363167 },
			{ "state": "New Mexico", "confirmed": 5662, "deaths": 253, "recovered": 1576, "active": 3833, "fatality_rate": 4.468385729, "testing_rate": 5703.898601 },
			{ "state": "New York", "confirmed": 345813, "deaths": 27878, "recovered": 60302, "active": 257633, "fatality_rate": 8.061582416, "testing_rate": 6878.164877 },
			{ "state": "North Carolina", "confirmed": 17494, "deaths": 667, "recovered": 9115, "active": 7712, "fatality_rate": 3.812735795, "testing_rate": 2207.714965 },
			{ "state": "North Dakota", "confirmed": 1761, "deaths": 42, "recovered": 1071, "active": 648, "fatality_rate": 2.385008518, "testing_rate": 6786.193249 },
			{ "state": "Northern Mariana Islands", "confirmed": 19, "deaths": 2, "recovered": 12, "active": 5, "fatality_rate": 10.52631579, "testing_rate": 6029.667779 },
			{ "state": "Ohio", "confirmed": 26954, "deaths": 1581, "recovered": null, "active": 25373, "fatality_rate": 5.865548713, "testing_rate": 2106.081734 },
			{ "state": "Oklahoma", "confirmed": 5087, "deaths": 285, "recovered": 3801, "active": 1001, "fatality_rate": 5.602516218, "testing_rate": 2986.931165 },
			{ "state": "Oregon", "confirmed": 3541, "deaths": 137, "recovered": 1406, "active": 1998, "fatality_rate": 3.86896357, "testing_rate": 2122.133267 },
			{ "state": "Pennsylvania", "confirmed": 64136, "deaths": 4422, "recovered": null, "active": 59714, "fatality_rate": 6.894723712, "testing_rate": 2498.299288 },
			{ "state": "Puerto Rico", "confirmed": 2542, "deaths": 122, "recovered": null, "active": 2420, "fatality_rate": 4.799370574, "testing_rate": 86.6568851 },
			{ "state": "Rhode Island", "confirmed": 12219, "deaths": 479, "recovered": 919, "active": 10821, "fatality_rate": 3.920124396, "testing_rate": 9909.558687 },
			{ "state": "South Carolina", "confirmed": 8407, "deaths": 380, "recovered": 5076, "active": 2951, "fatality_rate": 4.520042821, "testing_rate": 2128.997649 },
			{ "state": "South Dakota", "confirmed": 3887, "deaths": 44, "recovered": 2574, "active": 1269, "fatality_rate": 1.13197839, "testing_rate": 3098.821128 },
			{ "state": "Tennessee", "confirmed": 16960, "deaths": 290, "recovered": 9280, "active": 7390, "fatality_rate": 1.70990566, "testing_rate": 4535.775483 },
			{ "state": "Texas", "confirmed": 45721, "deaths": 1280, "recovered": 25454, "active": 18987, "fatality_rate": 2.79958881, "testing_rate": 2227.875056 },
			{ "state": "Utah", "confirmed": 6913, "deaths": 77, "recovered": 3719, "active": 3117, "fatality_rate": 1.113843483, "testing_rate": 5091.083539 },
			{ "state": "Vermont", "confirmed": 933, "deaths": 53, "recovered": 796, "active": 84, "fatality_rate": 5.680600214, "testing_rate": 3718.815556 },
			{ "state": "Virgin Islands", "confirmed": 69, "deaths": 6, "recovered": 61, "active": 2, "fatality_rate": 8.695652174, "testing_rate": 1177.424768 },
			{ "state": "Virginia", "confirmed": 28672, "deaths": 978, "recovered": 3805, "active": 23889, "fatality_rate": 3.410993304, "testing_rate": 2085.56738 },
			{ "state": "Washington", "confirmed": 17951, "deaths": 991, "recovered": null, "active": 16960, "fatality_rate": 5.520583811, "testing_rate": 3518.512998 },
			{ "state": "West Virginia", "confirmed": 1447, "deaths": 64, "recovered": 870, "active": 513, "fatality_rate": 4.422944022, "testing_rate": 3958.15745 },
			{ "state": "Wisconsin", "confirmed": 11685, "deaths": 445, "recovered": 6250, "active": 4990, "fatality_rate": 3.808301241, "testing_rate": 2410.366524 },
			{ "state": "Wyoming", "confirmed": 716, "deaths": 7, "recovered": 487, "active": 222, "fatality_rate": 0.9776536313, "testing_rate": 2768.33708 }];
		//checks to see what state the user selected //
		$("body").on("change", ".statequestion select#state", function (e) {
			user_state = $(this).val();
			if (user_state !== "--Choose a State--") {
				//writes the state back to the HTML so the user remembers which state's info is being displayed.//
				document.querySelector("#statechoice").innerHTML = user_state;
				//generic text for state-by-state differences//
				$(".state_content").removeClass("inactive");

				let group = statedata.find(function (row) { //Finds the row that corresponds to the country
					if (row.state === user_state) {
						return true;
					}
				});

				const confirmed_cases = group.confirmed;
				const deaths = group.deaths;
				const fatality_rate = group.fatality_rate;
				document.querySelector("#state_fatality_rate").innerHTML = fatality_rate; //writes those data to the HTMl
				document.querySelector("#state_deaths").innerHTML = deaths;
				document.querySelector("#state_confirmed").innerHTML = confirmed_cases;
			}

		});


		///Don't touch these parens below this///
		$(".age").removeClass('inactive');
	}
});

//Data for age-based death rate// LINK: https://github.com/nychealth/coronavirus-data/blob/master/by-age.csv   MAY 16th
const agedata = [
	{ "age_group_low": 0, "age_group_high": 17, "COVID_CASE_RATE": 282.82, "HOSPITALIZED_CASE_RATE": 23.86, "DEATH_RATE": 0.46 },
	{ "age_group_low": 18, "age_group_high": 44, "COVID_CASE_RATE": 2051.44, "HOSPITALIZED_CASE_RATE": 223.49, "DEATH_RATE": 18.4 },
	{ "age_group_low": 45, "age_group_high": 64, "COVID_CASE_RATE": 3351.62, "HOSPITALIZED_CASE_RATE": 826.54, "DEATH_RATE": 171.49 },
	{ "age_group_low": 65, "age_group_high": 75, "COVID_CASE_RATE": 3367.39, "HOSPITALIZED_CASE_RATE": 1599.59, "DEATH_RATE": 560.85 },
	{ "age_group_low": 75, "age_group_high": 1000, "COVID_CASE_RATE": 4049.73, "HOSPITALIZED_CASE_RATE": 2530.83, "DEATH_RATE": 1403.72 }];

$("body").on("keyup keydown keypress change", ".calculator.age input", function (e) {
	let user_input = $(this).val(); //Stores input
	let age = parseInt(user_input);
	$(".age_content").removeClass('inactive') //Makes the output appear.

	let group = agedata.find(function (row) {
		if (row.age_group_low <= age && row.age_group_high >= age) {
			return true;
		};
	});

	const age_case_rate = group.COVID_CASE_RATE;
	const age_hosp_rate = group.HOSPITALIZED_CASE_RATE;
	const age_death_rate = round((group.DEATH_RATE) / 100, 2);

	document.querySelector("#age_death_rate").innerHTML = age_death_rate
	//need to add class Confirmed to the output text that accompanies this//
	$(".ethnicity").removeClass('inactive')

});


//Data for Ethnicity death rate, as of May 13th. NYC LINK : https://www1.nyc.gov/assets/doh/downloads/pdf/imm/covid-19-deaths-race-ethnicity-05142020-1.pdf
const ethnicity_data = [
	{ "Ethnicity": "Black/African American", "hospitalized": 34.7, "confirmed_deaths": 29.4 },
	{ "Ethnicity": "Asian/Pacific Islander", "hospitalized": 7.8, "confirmed_deaths": 7.9 },
	{ "Ethnicity": "White", "hospitalized": 24.3, "confirmed_deaths": 26.9 },
	{ "Ethnicity": "Hispanic", "hospitalized": 32.3, "confirmed_deaths": 31.3 }];

$("body").on("change", ".ethnicity select", function (e) {
	let ethnicity = $(this).val() //Stores input
	document.querySelector("#ethnicity_choice").innerHTML = ethnicity
	$(".ethnicity_content").removeClass('inactive') //Makes the output appear.

	//Finds the row that corresponds to the ethnicity selected
	let group = ethnicity_data.find(function (row) {
		if (row.Ethnicity === ethnicity) {
			return true;
		}
	});
	const ethnicity_hospitalization_rate = group.hospitalized;
	const ethnicity_death_rate = group.confirmed_deaths;
	document.querySelector("#ethnicity_choice_2").innerHTML = ethnicity
	document.querySelector("#ethnicity_death_rate").innerHTML = ethnicity_death_rate;
	document.querySelector("#ethnicity_hospitalization_rate").innerHTML = ethnicity_hospitalization_rate;

	$(".prexistingconditions").removeClass('inactive')


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
	$(".bloodtype").removeClass('inactive')

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