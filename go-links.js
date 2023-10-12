const goLinks = {
	'meetingdoc': 'https://docs.google.com/hfjehdfsj',
	'anothershortcut': 'https://anotherwebsite.com',
	// add more shortcuts as needed
  };
  
  function redirect() {
	const path = window.location.hash.substr(1); // get the part after #
	const redirectURL = goLinks[path];
	if (redirectURL) {
	  window.location.href = redirectURL;
	} else {
	  document.body.innerHTML = 'Go link not found.';
	}
  }
  