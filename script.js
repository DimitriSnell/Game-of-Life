initGrid(16);
var id;
let count =0;
document.getElementById("start").onclick = () => {
	id = setInterval(frame, 100);
}
document.getElementById("stop").onclick = () => {
	 clearInterval(id);
}
document.getElementById("clear").onclick = () => {
	count = 0;
	 let grid = document.getElementsByClassName("cell");
	 for(let i = 0; i<grid.length; i++){
	 	grid[i].classList.add('dead');
	 	grid[i].classList.remove('alive');
	 }
	let turns = document.getElementById('turns');
	turns.innerHTML = count;
}
function initGrid(gridSize){
	let cellSize = 800/gridSize;
	let gridContain = document.getElementById("grid-container");
	for(let i = 0; i<gridSize; i++){
		for(let c = 0; c<gridSize; c++){
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.classList.add('dead');
			cell.style.height = cellSize + 'px';
			cell.style.width = cellSize + 'px';
			gridContain.appendChild(cell);
			cell.addEventListener("click", () => {
				cell.classList.remove('dead');
				cell.classList.add('alive');
		});
		}
	}
}

function frame(){
	count++;
	let turns = document.getElementById('turns');
	turns.innerHTML = count;
	let grid = document.getElementsByClassName("cell");
	let temp = new Array(grid.length);
	temp.fill(false);
	for(let i = 0; i<temp.length; i++){
		if(grid[i].classList.contains('alive')){
			temp[i] =true;
		}
	}
	for(let i = 0; i<grid.length; i++){
		let count = 0;
		if(i == 0){
			if(grid[i+1].classList.contains('alive')){
				count++;
			}
			if(grid[i+16].classList.contains('alive')){
				count++;
			}
			if(grid[i+17].classList.contains('alive')){
				count++;
			}
		}
		else if(i == 15){
			if(grid[i-1].classList.contains('alive')){
				count++;
			}
			if(grid[i+16].classList.contains('alive')){
				count++;
			}
			if(grid[i+15].classList.contains('alive')){
				count++;
			}
		}
		else if(i == 255){
			if(grid[i-1].classList.contains('alive')){
				count++;
			}
			if(grid[i-16].classList.contains('alive')){
				count++;
			}
			if(grid[i-17].classList.contains('alive')){
				count++;
			}
		}
		else if(i == 240){
			if(grid[i+1].classList.contains('alive')){
				count++;
			}
			if(grid[i-16].classList.contains('alive')){
				count++;
			}
			if(grid[i-15].classList.contains('alive')){
				count++;
			}
		}
		else if(i%16 == 0){
			if(grid[i+1].classList.contains('alive')){
				count++;
			}
			if(grid[i+17].classList.contains('alive')){
				count++;
			}
			if(grid[i-15].classList.contains('alive')){
				count++;
			}
			if(grid[i+16].classList.contains('alive')){
				count++;
			}
			if(grid[i-16].classList.contains('alive')){
				count++;
			}
		}
		else if((i+1)%16 == 0){
			if(grid[i-1].classList.contains('alive')){
				count++;
			}
			if(grid[i+15].classList.contains('alive')){
				count++;
			}
			if(grid[i-17].classList.contains('alive')){
				count++;
			}
			if(grid[i+16].classList.contains('alive')){
				count++;
			}
			if(grid[i-16].classList.contains('alive')){
				count++;
			}
		}
		else if(i<16){
			if(grid[i-1].classList.contains('alive')){
				count++;
			}
			if(grid[i+1].classList.contains('alive')){
				count++;
			}
			if(grid[i+16].classList.contains('alive')){
				count++;
			}
			if(grid[i+17].classList.contains('alive')){
				count++;
			}
			if(grid[i+15].classList.contains('alive')){
				count++;
			}
		}
		else if(i > 240){
			if(grid[i-1].classList.contains('alive')){
				count++;
			}
			if(grid[i-1].classList.contains('alive')){
				count++;
			}
			if(grid[i-16].classList.contains('alive')){
				count++;
			}
			if(grid[i-17].classList.contains('alive')){
				count++;
			}
			if(grid[i-15].classList.contains('alive')){
				count++;
			}
		}
		else{
			if(grid[i+1].classList.contains('alive')){
				count++;
			}
			if(grid[i-1].classList.contains('alive')){
				count++;
			}
			if(grid[i+16].classList.contains('alive')){
				count++;
			}
			if(grid[i-16].classList.contains('alive')){
				count++;
			}
			if(grid[i+15].classList.contains('alive')){
				count++;
			}
			if(grid[i-15].classList.contains('alive')){
				count++;
			}
			if(grid[i+17].classList.contains('alive')){
				count++;
			}
			if(grid[i-17].classList.contains('alive')){
				count++;
			}
		}
		if(count < 2 && grid[i].classList.contains('alive')){
			temp[i] = false;
		}
		if(count > 3 && grid[i].classList.contains('alive')){
			temp[i] = false;
		}
		if(count == 3 && grid[i].classList.contains('dead')){
			temp[i] = true;
		}
	}
	for(let i = 0; i<temp.length; i++){
		if(temp[i] === true){
			grid[i].classList.add('alive');
			grid[i].classList.remove('dead');
		}
		else{
			grid[i].classList.remove('alive');
			grid[i].classList.add('dead');
		}
	}
}
