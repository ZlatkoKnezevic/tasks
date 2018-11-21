// get queues from mapping.json

// global variable for later use in submit_form.js
var mappingJSON;

// function called to fill queues when body is loaded
function loadQueues() {
	loginToActiveDirectory()
		.then(function (result) {
			if(result) {
				fetchUserQueues()
					.then(function(result) {
						if(result !== false) {
							/*
							 * This means success and result has some
							 * interesting data for us.
							 */
							loadJSON("./scripts/mapping.json", function (data) {
								var dropdown = document.getElementById("queue");

								// add the default option as disabled (cannot be selected by the user)
								var start = document.createElement('option');
								start.text = "Mandat wählen...";
								start.value = "";
								start.disabled = true;
								start.selected = true;
								dropdown.appendChild(start);
								// dropdown.prop('selectedIndex', 0);

								mappingJSON = data;
								// because of IE for-in has to be used instead of for-of
								for(var i in data) {
									var userQueues = result.filter(function(el) {
										return el.QueueID === data[i].id;
									});
									if(userQueues.length > 0) {
										var option = document.createElement('option');
										option.text = data[i].name;
										// dropdown.add(option);
										dropdown.appendChild(option);
									}
								}
							});
						}
					});
			}
	});
}

    