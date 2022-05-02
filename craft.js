const canvas = document.querySelector('.canvas');
const canvas2 = document.querySelector('.canvas2');
const canvas3 = document.querySelector('.canvas3');
const canvas4 = document.querySelector('.canvas4');

const frontPage = document.querySelector('.front-page-container');
const frontOverlay = document.querySelector('.front-overlay');

const overLay = document.querySelector('.overlay');
const textures = document.querySelector('.texture-cont');
const items = document.querySelector('.item-cont');

const texture1 = document.querySelector('.text1');
const texture2 = document.querySelector('.text2');
const texture3 = document.querySelector('.text3');
const texture4 = document.querySelector('.text4');
const texture5 = document.querySelector('.text5');
const texture6 = document.querySelector('.text6');
const texture7 = document.querySelector('.text7');
const texture8 = document.querySelector('.text8');
const texture9 = document.querySelector('.text9');

const color1 = getComputedStyle(texture1).getPropertyValue('background-image');
	const color1Front = "url('sprites/land/land-front.png')";
	const color1Back = "url('sprites/land/land-back.png')";
	const color1Left = "url('sprites/land/land-left.png')";
	const color1Right = "url('sprites/land/land-right.png')";
	const color1Top = "url('sprites/land/land-top.png')";
	const color1Bottom = "url('sprites/land/land-bottom.png')";

const color2 = getComputedStyle(texture2).getPropertyValue('background-image');
	const color2Front = "url('sprites/brick/brick-front.png')";
	const color2Back = "url('sprites/brick/brick-front.png')";
	const color2Left = "url('sprites/brick/brick-left.png')";
	const color2Right = "url('sprites/brick/brick-right.png')";
	const color2Top = "url('sprites/brick/brick-top.png')";
	const color2Bottom = "url('sprites/brick/brick-bottom.png')";

const color3 = getComputedStyle(texture3).getPropertyValue('background-image');
	const color3Front = "url('sprites/wood/wood-top.png')";
	const color3Back = "url('sprites/wood/wood-top.png')";
	const color3Left = "url('sprites/wood/wood-left.png')";
	const color3Right = "url('sprites/wood/wood-right.png')";
	const color3Top = "url('sprites/wood/wood-top.png')";
	const color3Bottom = "url('sprites/wood/wood-bottom.png')";
const color4 = getComputedStyle(texture4).getPropertyValue('background-image');

const color5 = getComputedStyle(texture5).getPropertyValue('background-image');

const color6 = getComputedStyle(texture6).getPropertyValue('background-image');

const color7 = getComputedStyle(texture7).getPropertyValue('background-image');

const color8 = getComputedStyle(texture8).getPropertyValue('background-image');
	const color8Front = "url('sprites/brick/red-brick.png')";
	const color8Back = "url('sprites/brick/red-brick.png')";
	const color8Left = "url('sprites/brick/red-brick-left.png')";
	const color8Right = "url('sprites/brick/red-brick-right.png')";
	const color8Top = "url('sprites/brick/red-brick.png')";
	const color8Bottom = "url('sprites/brick/red-brick-back.png')";

const color9 = getComputedStyle(texture9).getPropertyValue('background-image');
	const color9Front = "url('sprites/bomb/bomb-front.jpg')";
	const color9Back = "url('sprites/bomb/bomb-front.jpg')";
	const color9Left = "url('sprites/bomb/bomb-left.png')";
	const color9Right = "url('sprites/bomb/bomb-right.png')";
	const color9Top = "url('sprites/bomb/bomb-back.png')";
	const color9Bottom = "url('sprites/bomb/bomb.png')";
// const color6 = getComputedStyle(texture1).getPropertyValue('background-color');

// const cube = document.querySelector('.container');
const ground = document.querySelector('.ground');

const clouds = (x,z) => {

	const cloud = document.createElement('div');
	const frontCloud = document.createElement('div');
	const backCloud = document.createElement('div');
	const leftCloud = document.createElement('div');
	const rightCloud = document.createElement('div');
	const topCloud = document.createElement('div');
	const bottomCloud = document.createElement('div');

	cloud.classList.add('cloud');
	frontCloud.classList.add('front-cloud');
	backCloud.classList.add('back-cloud');
	leftCloud.classList.add('left-cloud');
	rightCloud.classList.add('right-cloud');
	topCloud.classList.add('top-cloud');
	bottomCloud.classList.add('bottom-cloud');

	cloud.style.left = x + 'px';
	cloud.style.transform = 'translateZ(' + z + 'px)';

	cloud.appendChild(frontCloud);
	cloud.appendChild(backCloud);
	cloud.appendChild(leftCloud);
	cloud.appendChild(rightCloud);
	cloud.appendChild(topCloud);
	cloud.appendChild(bottomCloud);

	


}

for(let i = 0; i <= 100; i++){
	let a = Math.floor(Math.random() * 100);
	let b = Math.floor(Math.random() * 100);

	clouds(a,b);
	// console.log(a,b);
}


let changeColor1 = false;
let changeColor2 = false;
let changeColor3 = false;
let changeColor4 = false;
let changeColor5 = false;
let changeColor6 = false;
let changeColor7 = false;
let changeColor8 = false;
let changeColor9 = false;

// console.log(cubeTexture.color1);

class Scale{
	constructor(){
		this.scale = 50;
	}
}

let scale = new Scale();


// console.log(canvas.style.transform);

let cameraX = -7;
let cameraY = 0;
let x = 0;
let y = 0;
let sensitivity = 4;

//-------------------- controls... -----------------------------

window.addEventListener('keydown', (e) => {
	// camera controls
		if(e.key === 's'){
			cameraX++;
			canvas.style.transform = 'rotateX(' + cameraX*sensitivity + 'deg)';
			// console.log(cameraX*sensitivity)
		}
		else if(e.key === 'w'){
			canvas.style.transform = 'rotateX(' + cameraX*sensitivity + 'deg)';
			cameraX--;
			// console.log(cameraX*sensitivity);
		}
		if(e.key === 'a'){
			cameraY++;
			canvas2.style.transform = 'rotateY(' + cameraY*sensitivity + 'deg)';
		}
		else if(e.key === 'd'){
			cameraY--;
			canvas2.style.transform = 'rotateY(' + cameraY*sensitivity + 'deg)';
		}

	// movement controls
		if(e.key == 'ArrowDown'){
			y--;
			canvas3.style.transform = 'translateZ(' + y*sensitivity + 'px)';
			// console.log(e.key);
		}
		if(e.key == 'ArrowUp'){
			y++;
			canvas3.style.transform = 'translateZ(' + y*sensitivity + 'px)';
			// console.log(e.key);
		}
		if(e.key == 'ArrowLeft'){
			x--;
			canvas4.style.left = x*sensitivity + 'px';
			// console.log(e.key);
		}
		if(e.key === 'ArrowRight'){
			x++;
			canvas4.style.left = x*sensitivity + 'px';
			// console.log(e.key);
		}
});


ground.style.top = 0 + 'px';
// cube.style.top = (parseInt(ground.style.top) + 100) + 'px';

// console.log(cube.style.top);


//----------------------- grid system ----------------------------
let groundWidth = parseInt(getComputedStyle(ground).getPropertyValue('width'));
let groundHeight = parseInt(getComputedStyle(ground).getPropertyValue('height'));

let cells = [];
let cubeCells = [];
let cubes = [];

for(let b = 0; b < groundHeight; b += scale.scale){
	for(let a = 0; a < groundWidth; a += scale.scale){
		const cell = document.createElement('div');

		cell.classList.add('cell');
		cell.style.width = scale.scale + 'px';
		cell.style.height = scale.scale + 'px';

		cell.style.left = a + 'px';
		cell.style.top = b + 'px';
		ground.appendChild(cell);	
		cells.push(cell)

		// if(cell.parentNode.className == 'ground'){
		// 	cell.style.background = "rgb(14, 49, 5)";
		// }

	}
}


// for(i of cells){
// 	// console.log(i);

// }

function start(){
	frontPage.style.display = 'none';
	frontOverlay.style.display = 'none';
}

let build = true;
let destroy = false;
let cut = false;

const cursor = document.querySelector('.cursor');


function changeClolor1(){
	cursor.style.background = color1;
	build = true;
	changeColor1 = true;
	changeColor2 = false;
	changeColor3 = false;
	changeColor4 = false;
	changeColor5 = false;
	changeColor6 = false;
	changeColor7 = false;
	changeColor8 = false;
	changeColor9 = false;

	overLay.style.display = 'none';
	textures.style.display = 'none';


}
function changeClolor2(){
	cursor.style.background = color2 + 'no-repeat center center/cover';
	build = true;
	changeColor1 = false;
	changeColor2 = true;
	changeColor3 = false;
	changeColor4 = false;
	changeColor5 = false;
	changeColor6 = false;
	changeColor7 = false;
	changeColor8 = false;
	changeColor9 = false;
	overLay.style.display = 'none';
	textures.style.display = 'none';
}
function changeClolor3(){
	cursor.style.background = color3 + 'no-repeat center center/cover';
	build = true;
	changeColor1 = false;
	changeColor2 = false;
	changeColor3 = true;
	changeColor4 = false;
	changeColor5 = false;
	changeColor6 = false;
	changeColor7 = false;
	changeColor8 = false;
	changeColor9 = false;
	overLay.style.display = 'none';
	textures.style.display = 'none';
}
function changeClolor4(){
	cursor.style.background = color4 + 'no-repeat center center/cover';
	build = true;
	changeColor1 = false;
	changeColor2 = false;
	changeColor3 = false;
	changeColor4 = true;
	changeColor5 = false;
	changeColor6 = false;
	changeColor7 = false;
	changeColor8 = false;
	changeColor9 = false;
	overLay.style.display = 'none';
	textures.style.display = 'none';
}
function changeClolor5(){
	cursor.style.background = color5;
	build = true;
	changeColor1 = false
	changeColor2 = false;
	changeColor3 = false;
	changeColor4 = false;
	changeColor5 = true;
	changeColor6 = false;
	changeColor7 = false;
	changeColor8 = false;
	changeColor9 = false;
	overLay.style.display = 'none';
	textures.style.display = 'none';
}
function changeClolor6(){
	cursor.style.background = color6 + 'no-repeat center center/cover';
	build = true;
	changeColor1 = false
	changeColor2 = false;
	changeColor3 = false;
	changeColor4 = false;
	changeColor5 = false;
	changeColor6 = true;
	changeColor7 = false;
	changeColor8 = false;
	changeColor9 = false;
	overLay.style.display = 'none';
	textures.style.display = 'none';
}
function changeClolor7(){
	cursor.style.background = color7 + 'no-repeat center center/cover';
	build = true;
	changeColor1 = false
	changeColor2 = false;
	changeColor3 = false;
	changeColor4 = false;
	changeColor5 = false;
	changeColor6 = false;
	changeColor7 = true;
	changeColor8 = false;
	changeColor9 = false;
	overLay.style.display = 'none';
	textures.style.display = 'none';
}
function changeClolor8(){
	cursor.style.background = color8 + 'no-repeat center center/cover';
	build = true;
	changeColor1 = false
	changeColor2 = false;
	changeColor3 = false;
	changeColor4 = false;
	changeColor5 = false;
	changeColor6 = false;
	changeColor7 = false;
	changeColor8 = true;
	changeColor9 = false;
	overLay.style.display = 'none';
	textures.style.display = 'none';
}
function changeClolor9(){
	cursor.style.background = color9 + 'no-repeat center center/cover';
	build = true;
	changeColor1 = false
	changeColor2 = false;
	changeColor3 = false;
	changeColor4 = false;
	changeColor5 = false;
	changeColor6 = false;
	changeColor7 = false;
	changeColor8 = false;
	changeColor9 = true;
	overLay.style.display = 'none';
	textures.style.display = 'none';
}
// ----------------------------------------  BLOCK CONSTRUCTOR ----------------------------------------


class CubeStructure{

	constructor(transform, x, y){

		
		// console.log(selectedCellX, selectedCellY)
		this.container = document.createElement('div');
		this.front = document.createElement('div');
		this.back = document.createElement('div');
		this.left = document.createElement('div');
		this.right = document.createElement('div');
		this.top = document.createElement('div');
		this.bottom = document.createElement('div');


		ground.appendChild(this.container);

		this.container.appendChild(this.front)
		this.container.appendChild(this.back);
		this.container.appendChild(this.left);
		this.container.appendChild(this.right);
		this.container.appendChild(this.top);
		this.container.appendChild(this.bottom);
			

		this.container.classList.add('container');
		this.front.classList.add('front');
			this.front.style.width = scale.scale + 'px';
			this.front.style.height = scale.scale + 'px';
			this.front.style.background = color1Front + ' no-repeat center center/cover';
		
		this.back.classList.add('back');
			this.back.style.width = scale.scale + 'px';
			this.back.style.height = scale.scale + 'px';
			this.back.style.transform = 'translateZ(' + -scale.scale + 'px)';
			this.back.style.background = color1Front + ' no-repeat center center/cover'; 
			
			

		this.left.classList.add('left');
			this.left.style.width = scale.scale + 'px';
			this.left.style.height = scale.scale + 'px';
			this.left.style.left = -scale.scale + 'px';
			this.left.style.background = color1Left + ' no-repeat center center/cover';
			

		this.right.classList.add('right');
			this.right.style.width = scale.scale + 'px';
			this.right.style.height = scale.scale + 'px';
			this.right.style.left = scale.scale + 'px';
			this.right.style.background = color1Right + ' no-repeat center center/cover';
			

		this.top.classList.add('top');
			this.top.style.width = scale.scale + 'px';
			this.top.style.height = scale.scale + 'px';
			this.top.style.top = -scale.scale + 'px';
			this.top.style.background = color1Bottom + ' no-repeat center center/cover';
			

		this.bottom.classList.add('bottom');
			this.bottom.style.width = scale.scale + 'px';
			this.bottom.style.height = scale.scale + 'px';
			this.bottom.style.top = scale.scale + 'px';
			this.bottom.style.background = color1Top + ' no-repeat center center/cover';
			

		this.container.style.left = x + 'px';
		this.container.style.top = y + 'px';
		this.container.style.transform = transform;


		if(changeColor1){
			this.front.style.background = color1Front + ' no-repeat center center/cover';
			this.back.style.background = color1Front + ' no-repeat center center/cover'; 
			this.left.style.background = color1Left + ' no-repeat center center/cover';
			this.right.style.background = color1Right + ' no-repeat center center/cover';
			this.top.style.background = color1Bottom + ' no-repeat center center/cover';
			this.bottom.style.background = color1Top + ' no-repeat center center/cover';
		}
		if(changeColor2){
			this.front.style.background = color2Front + ' no-repeat center center/cover';
			this.back.style.background = color2Front + ' no-repeat center center/cover';
			this.left.style.background = color2Left + ' no-repeat center center/cover';
			this.right.style.background = color2Right + ' no-repeat center center/cover';
			this.top.style.background = color2Top + ' no-repeat center center/cover';
			this.bottom.style.background = color2Bottom + ' no-repeat center center/cover';
		}
		if(changeColor3){
			this.front.style.background = color3Front + ' no-repeat center center/cover';
			this.back.style.background = color3Front + ' no-repeat center center/cover';
			this.left.style.background = color3Left + ' no-repeat center center/cover';
			this.right.style.background = color3Right + ' no-repeat center center/cover';
			this.top.style.background = color3Top + ' no-repeat center center/cover';
			this.bottom.style.background = color3Bottom + ' no-repeat center center/cover';
		}
		if(changeColor4){
			this.front.style.background = color4 + ' no-repeat center center/cover';
			this.back.style.background = color4 + ' no-repeat center center/cover';
			this.left.style.background = color4 + ' no-repeat center center/cover';
			this.right.style.background = color4 + ' no-repeat center center/cover';
			this.top.style.background = color4 + ' no-repeat center center/cover';
			this.bottom.style.background = color4 + ' no-repeat center center/cover';
		}
		if(changeColor5){
			this.front.style.background = color5 + ' no-repeat center center/cover';
			this.back.style.background = color5 + ' no-repeat center center/cover';
			this.left.style.background = color5 + ' no-repeat center center/cover';
			this.right.style.background = color5 + ' no-repeat center center/cover';
			this.top.style.background = color5 + ' no-repeat center center/cover';
			this.bottom.style.background = color5 + ' no-repeat center center/cover';
		}
		if(changeColor6){
			this.front.style.background = color6 + ' no-repeat center center/cover';
			this.back.style.background = color6 + ' no-repeat center center/cover';
			this.left.style.background = color6 + ' no-repeat center center/cover';
			this.right.style.background = color6 + ' no-repeat center center/cover';
			this.top.style.background = color6 + ' no-repeat center center/cover';
			this.bottom.style.background = color6 + ' no-repeat center center/cover';
		}
		if(changeColor7){
			this.front.style.background = color7 + ' no-repeat center center/cover';
			this.back.style.background = color7 + ' no-repeat center center/cover';
			this.left.style.background = color7 + ' no-repeat center center/cover';
			this.right.style.background = color7 + ' no-repeat center center/cover';
			this.top.style.background = color7 + ' no-repeat center center/cover';
			this.bottom.style.background = color7 + ' no-repeat center center/cover';
		}
		if(changeColor8){
			this.front.style.background = color8Front + ' no-repeat center center/cover';
			this.back.style.background = color8Back + ' no-repeat center center/cover';
			this.left.style.background = color8Left + ' no-repeat center center/cover';
			this.right.style.background = color8Right + ' no-repeat center center/cover';
			this.top.style.background = color8Top + ' no-repeat center center/cover';
			this.bottom.style.background = color8Bottom + ' no-repeat center center/cover';
		}
		if(changeColor9){
			this.front.style.background = color9Front + ' no-repeat center center/cover';
			this.back.style.background = color9Back + ' no-repeat center center/cover';
			this.left.style.background = color9Left + ' no-repeat center center/cover';
			this.right.style.background = color9Right + ' no-repeat center center/cover';
			this.top.style.background = color9Top + ' no-repeat center center/cover';
			this.bottom.style.background = color9Bottom + ' no-repeat center center/cover';
		}

		// cubeCells.push([front, back, left, right, top, bottom]);
		this.container.childNodes.forEach((e) => {
			e.style.transformStyle = 'preserve-3d';
		});
		cubes.push(this.container);

		}

}
// ------------ textures change ---------------------
window.addEventListener('keydown', (e) => {
	if(e.key == 'q'){
		overLay.style.display = 'block';
		textures.style.display = 'flex';
		items.style.display = 'none';

		// console.log(overlay.style.display);
	}
	else if(e.key == 'x'){
		overLay.style.display = 'none';
		textures.style.display = 'none';
		items.style.display = 'none';
	}

	else if(e.key == 'i'){
		overLay.style.display = 'block';
		items.style.display = 'flex';
		textures.style.display = 'none';
	}
});

//--------------------------------------------USER CRAFTING-------------------------------------------



function building() {
	build = true;
	destroy = false;
	cut = false;
	// console.log(build, destroy)
}

function destroying(){
	cursor.style.background = "url('sprites/items/axe.png') no-repeat center center/cover";
	build = false;
	destroy = true;
	cut = false;
	overLay.style.display = 'none';
	textures.style.display = 'none';
	items.style.display = 'none';
	// console.log(build, destroy)
}

function cutting(){
	cursor.style.background = "url('sprites/items/sword.png') no-repeat center center/cover";
	build = false;
	destroy = false;
	cut = true;
	overLay.style.display = 'none';
	textures.style.display = 'none';
	items.style.display = 'none';
}




canvas4.addEventListener('click', (e) => {	
	
	let currentStack = e.path[2].style.transform;
	let stackValue = Number(currentStack.slice(11, currentStack.indexOf('px)')));

	let stackLeftValue = parseInt(e.path[2].style.left);
	let stackTopValue = parseInt(e.path[2].style.top);

	// console.log(stackValue);



	if(build){

		if(e.path[1].className == 'ground'){
			stackValue = scale.scale;
			let drawGroundCube = new CubeStructure('translateZ(' + stackValue + 'px)', parseInt(e.path[0].style.left), parseInt(e.path[0].style.top));
		}

		if(e.path[1].className == 'front'){
			stackValue += scale.scale;
			let drawCube = new CubeStructure('translateZ(' + stackValue + 'px)', parseInt(e.path[2].style.left), parseInt(e.path[2].style.top));
		}
		if(e.path[1].className == 'back'){
			stackValue -= scale.scale;
			let drawCube = new CubeStructure('translateZ(' + stackValue + 'px)', parseInt(e.path[2].style.left), parseInt(e.path[2].style.top));
		}
		if(e.path[1].className == 'left'){
			stackValue = Number(currentStack.slice(11, currentStack.indexOf('px)')));
			stackLeftValue -= scale.scale;
			let drawCube = new CubeStructure('translateZ(' + stackValue + 'px)', stackLeftValue , parseInt(e.path[2].style.top));
		}
		if(e.path[1].className == 'right'){
			stackValue = Number(currentStack.slice(11, currentStack.indexOf('px)')));
			stackLeftValue += scale.scale;
			let drawCube = new CubeStructure('translateZ(' + stackValue + 'px)', stackLeftValue , parseInt(e.path[2].style.top));
		}
		if(e.path[1].className == 'top'){
			stackValue = Number(currentStack.slice(11, currentStack.indexOf('px)')));
			stackTopValue -= scale.scale;
			let drawCube = new CubeStructure('translateZ(' + stackValue + 'px)', parseInt(e.path[2].style.left), stackTopValue)
		}
		if(e.path[1].className == 'bottom'){
			stackValue = Number(currentStack.slice(11, currentStack.indexOf('px)')));
			stackTopValue += scale.scale;
			let drawCube = new CubeStructure('translateZ(' + stackValue + 'px)', parseInt(e.path[2].style.left), stackTopValue)
		}
	}
	else if(destroy){
		if(e.path[2].className == 'container'){
			e.path[2].style.display = 'none';
		}
	}
	else if(cut){
		if(e.path[1].className == 'front' 
			|| e.path[1].className == 'back' 
			|| e.path[1].className == 'left'
			|| e.path[1].className == 'right'
			|| e.path[1].className == 'top'
			|| e.path[1].className == 'back'
			|| e.path[1].className == 'bottom'
			)
		{
			e.path[1].style.display = 'none';
		}
	}
	





	// let drawGroundCube = new CubeStructure('translateZ(50px)', parseInt(e.path[0].style.left), parseInt(e.path[0].style.top));
	// console.log(e.path);
	// console.log(e.path[0].style.left, e.path[0].style.top);

	// console.log(e.path[1].outerh);
	// console.log(e.path[1], drawGroundCube.front);
// let frontCube = e.path[1] == drawGroundCube.front : new CubeStructure()

	
	// drawCube();


	
	
	// console.log(cubes);
	// console.log(cubes);

	for(cube of cubes){

		const cubeCell1 = document.createElement('div');
		const cubeCell2 = document.createElement('div');
		const cubeCell3 = document.createElement('div');
		const cubeCell4 = document.createElement('div');
		const cubeCell5 = document.createElement('div');
		const cubeCell6 = document.createElement('div');

		cubeCell1.classList.add('cell');
		cubeCell1.style.width = scale.scale + 'px';
		cubeCell1.style.height = scale.scale + 'px';

		cubeCell2.classList.add('cell');
		cubeCell2.style.width = scale.scale + 'px';
		cubeCell2.style.height = scale.scale + 'px';

		cubeCell3.classList.add('cell');
		cubeCell3.style.width = scale.scale + 'px';
		cubeCell3.style.height = scale.scale + 'px';

		cubeCell4.classList.add('cell');
		cubeCell4.style.width = scale.scale + 'px';
		cubeCell4.style.height = scale.scale + 'px';

		cubeCell5.classList.add('cell');
		cubeCell5.style.width = scale.scale + 'px';
		cubeCell5.style.height = scale.scale + 'px';

		cubeCell6.classList.add('cell');
		cubeCell6.style.width = scale.scale + 'px';
		cubeCell6.style.height = scale.scale + 'px';

		cube.childNodes[0].appendChild(cubeCell1);
		cube.childNodes[1].appendChild(cubeCell2);
		cube.childNodes[2].appendChild(cubeCell3);
		cube.childNodes[3].appendChild(cubeCell4);
		cube.childNodes[4].appendChild(cubeCell5);
		cube.childNodes[5].appendChild(cubeCell6);
		// front.appendChild()

		// cells.push(cubeCell1, cubeCell2, cubeCell3, cubeCell4, cubeCell5, cubeCell6);

		// if()

	}

	




})




// ---------------------------------------------------------------------------------------------------------------------------


window.addEventListener('mousemove', (e) => {
	cursor.style.left = (e.x + 5) + 'px';
	cursor.style.top = (e.y + 5) + 'px';
})


