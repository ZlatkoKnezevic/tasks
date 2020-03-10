function loginToActiveDirectory() {
	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: window.location.protocol + "//" +
				window.COREGlobalSettings.host + "/api/v1/auth/ad",
			crossDomain: true
		})
			.done(function(response) {
				window.agentId = JSON.parse(response).agentid;
				$.ajax({
					method: "GET",
					url: window.location.protocol + "//" +
						window.COREGlobalSettings.host +
						"/api/v1/agent?user_id=" + window.agentId
				})
					.done(function(response) {
						var form = document.getElementById("taskForm");
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						input.setAttribute("name", "username");
						input.setAttribute("value", response.FirstName + "." + response.LastName);
						form.appendChild(input);
						resolve(true);
					});
			})
			.fail(function (error) {
				debugger;
				resolve(false);
			});
	});
}

function fetchUserQueues() {
	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "POST",
			url: window.location.protocol + "//" +
				window.COREGlobalSettings.host + "/api/v1/auth/userQueues",
			crossDomain: true,
			data: {
				user_id: window.agentId,
				check_templates: true
			}
		})
			.done(function(response) {
				resolve(response.userqueues.data);
			})
			.fail(function(error) {
				debugger;
				resolve(false);
			})
	});
}