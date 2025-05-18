const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
const btn = document.getElementById('btn');
const op = document.getElementById('output');

async function fetchData(url1){
	try {
		const response = await fetch(url1);
		let data = await response.json();
		// console.log(data);
		return data;
		
	} catch (error) {
		return {error:'failed to fetch data'}
	}
}

btn.addEventListener('click',async ()=>{
	const result = await fetchData(url);
	op.textContent = JSON.stringify(result.title);
})
