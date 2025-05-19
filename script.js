const button = document.getElementById('toggleBtn');
if (localStorage.getItem('darkMode') === 'true') {
	document.body.classList.add('dark-mode');
}
button.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	if (document.body.classList.contains('dark-mode')) {
		localStorage.setItem('darkMode', 'true');
	} else {
		localStorage.setItem('darkMode', 'false');
	}
});