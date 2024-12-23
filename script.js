//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let list = document.getElementById('bands');

bands.sort((a,b)=>{
	let a1 = a.toLowerCase();
	let b1 = b.toLowerCase();
	
	let aAr = a1.split(" ");
	let bAr = b1.split(" ");
	
	if(aAr[0]==='a' || aAr[0]==='an' || aAr[0]==='the'){
		aAr.shift();
		a1 = aAr.join(' ');
		console.log(aAr,a1);
	}
	if(bAr[0]==='a' || bAr[0]==='an' || bAr[0]==='the'){
		bAr.shift();
		b1 = bAr.join(' ');
		console.log(bAr,b1);
	}
	return a1>b1 ? 1 : -1;
})

bands.map((band)=>{
	let li = document.createElement('li');
	li.innerHTML = band;
	list.appendChild(li);
})
