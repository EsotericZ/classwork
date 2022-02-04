$(document).ready(function() {
	const emailField = $('#emailField');
	const passwordField = $('#passwordField');
	const signupBtn = $('#signupBtn');
	const logoutBtn = $('#logout');

	signupBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/login', {
			email: emailField.val().trim(),
			password: passwordField.val().trim(),
		});
		window.location.href ='/todos';
	});

	logoutBtn.on('click', async function() {
		await $.post('/api/users/logout');
		window.location.href ='/';
	});
});