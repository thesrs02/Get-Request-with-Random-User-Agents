// Modules
const {Headers} = require("node-fetch");
const fetch = require("node-fetch");
 
//User agents container / list
const userAgents = [];

userAgents.push("Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.3) Gecko/20090913 Firefox/3.5.3");
userAgents.push("Mozilla/5.0 (Windows; U; Windows NT 6.1; en; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)");
userAgents.push("Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)");
userAgents.push("Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.1) Gecko/20090718 Firefox/3.5.1");
userAgents.push("Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/532.1 (KHTML, like Gecko) Chrome/4.0.219.6 Safari/532.1");


// Function to get a random number b/w two digits
const getRandomNumber = (m, M) => {
	// Min value
	let min = Math.ceil(m);
	// Max value / index of the array and in this case its the length of the user agents array
	let max = Math.floor(M);
	// Generate a random number and make it an Int from float
	return Math.floor(Math.random() * (max - min)) + min;
}

// Function to return a random userAgent by searching throught the random index. Random numher is generated from the function above
const getRandomUserAgents = userAgentsList => {
	return userAgentsList[getRandomNumber(0, userAgentsList.length)];
}

const httpCall = async () => {
	try {
		 const URL = "https://www.google.com/"; // replace it with your own
		 const headers = new Headers({
			  'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
			  'Cache-Control': 'no-cache',
			  'Keep-Alive': getRandomNumber(110, 120),
			  'User-Agent': getRandomUserAgents(userAgents)
		 });

		 const response = await fetch(URL, {
			  method: "GET",
			  headers
		 });
		 const body = await response.text();

		console.log(headers); // headers you're sending
		console.log(response); // response object literal; object doesn't mean anything from OOP (Its similar to Dictionary in Python)
		console.log(body); // text body from the response

	} catch (exeption) {
		 console.error(exeption);
	}
}


// Everytime to call this function below, a new request to the given url will be sent along with random User Agent headers appended to the UserAgents list / array 
httpCall();
