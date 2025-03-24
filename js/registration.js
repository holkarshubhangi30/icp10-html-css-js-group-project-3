const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;
	const phone = document.getElementById('phone').value;

	if (password !== confirmPassword) {
		alert('Passwords do not match');
		return;
	}

	// Send data to server using AJAX or fetch API
	fetch('/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name,
			email,
			password,
			phone
		})
	})
	.then((response) => response.json())
	.then((data) => {
		if (data.success) {
			alert('Registration successful');
		} else {
			alert('Registration failed');
		}
	})
	.catch((error) => {
		alert('Error occurred');
	});
});
