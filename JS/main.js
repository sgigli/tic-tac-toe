function normalPlay() {
	play = "normal";
}

function computerPlay() {
	play = "computer";

}

function youWin(row) {
	win = true;
	if (row[0].innerHTML === "X") {
		document.getElementById('winMessage').innerHTML = "X's win!";
	} else {
		document.getElementById('winMessage').innerHTML = "0's win!";
	}
}

function checkWin(three) {
	if (three.row1[0].innerHTML != "" && three.row1[0].innerHTML === three.row1[1].innerHTML && three.row1[1].innerHTML === three.row1[2].innerHTML) {
		console.log(three.row1[0] + three.row1[1] + three.row1[2]);
		youWin(three.row1);
	}
	else if (three.row2[0].innerHTML != "" && three.row2[0].innerHTML === three.row2[1].innerHTML && three.row2[1].innerHTML === three.row2[2].innerHTML) {
		youWin(three.row2);
	}
	else if (three.row3[0].innerHTML != "" && three.row3[0].innerHTML === three.row3[1].innerHTML && three.row3[1].innerHTML === three.row3[2].innerHTML) {
		youWin(three.row3);
	}
	else if (three.col1[0].innerHTML != "" && three.col1[0].innerHTML === three.col1[1].innerHTML && three.col1[1].innerHTML === three.col1[2].innerHTML) {
		youWin(three.col1);
	}
	else if (three.col2[0].innerHTML != "" && three.col2[0].innerHTML === three.col2[1].innerHTML && three.col2[1].innerHTML === three.col2[2].innerHTML) {
		youWin(three.col2);
	}
	else if (three.col3[0].innerHTML != "" && three.col3[0].innerHTML === three.col3[1].innerHTML && three.col3[1].innerHTML === three.col3[2].innerHTML) {
		youWin(three.col3);
	}
	else if (three.dia1[0].innerHTML != "" && three.dia1[0].innerHTML === three.dia1[1].innerHTML && three.dia1[1].innerHTML === three.dia1[2].innerHTML) {
		youWin(three.dia1);
	}
	else if (three.dia2[0].innerHTML != "" && three.dia2[0].innerHTML === three.dia2[1].innerHTML && three.dia2[1].innerHTML === three.dia2[2].innerHTML) {
		youWin(three.dia2);
	}
	else {}
}

function reset() {
	box0.innerHTML = "";
	box1.innerHTML = "";
	box2.innerHTML = "";
	box3.innerHTML = "";
	box4.innerHTML = "";
	box5.innerHTML = "";
	box6.innerHTML = "";
	box7.innerHTML = "";
	box8.innerHTML = "";
	win = false;
	cells = 9;
	document.getElementById('winMessage').innerHTML = "";
	next = "X";
	nextLetter();
}

function checkTwo() {
	let s = section.children;
	// vertical together squares
	console.log("this is s[0].innerHTML" + s[0].innerHTML);
	for (let i = 0; i<6; i++) {
		if (s[i].children[0].innerHTML != "" && s[i].children[0].innerHTML != "O" && s[i].children[0].innerHTML === s[i+3].children[0].innerHTML) {
			console.log("Check");
			if (i > 2 && s[i-3].children[0].innerHTML != "O") {
				let num = i-3;
				console.log("checkA");
				console.log("checkA index is " + num);
				return i-3;
			} else if (i <= 2 && s[i+6].children[0].innerHTML != "O") {
				console.log("checkB");
				return i+6;
			}
		} else {}
	}
	// vertical spaced squares
	for (let i = 0; i<3; i++) {
		if (s[i].children[0].innerHTML != "" && s[i].children[0].innerHTML != "O" && s[i].children[0].innerHTML === s[i+6].children[0].innerHTML && s[i+3].children[0].innerHTML != "O") {
			console.log("Check2");
			return i+3;
		} else {}
	}
	// horizontal together squares
	for (let i = 0; i<7; i+=3) {
			for (let n = 0; n < 2; n++) {
				if (s[i+n].children[0].innerHTML != "" && s[i+n].children[0].innerHTML != "O" && s[i+n].children[0].innerHTML === s[i+n+1].children[0].innerHTML) {
					console.log("Check3");
					if (n === 0 && s[i+2].children[0].innerHTML != "O") {
						return i+2;
					} else if (s[i].children[0].innerHTML != "O" && s[i].children[0].innerHTML != "X") {
						console.log("TEST");
						return i;
					}
				} else {}
			}
	}
	// horizontal spaced squares
	for (let i = 0; i<7; i+=3) {
		if (s[i].children[0].innerHTML != "" && s[i].children[0].innerHTML != "O" && s[i].children[0].innerHTML === s[i+2].children[0].innerHTML && s[i+1].children[0].innerHTML != "O") {
			console.log("Check4");
			return i+1;
		} else {}
	}
	// left diagonal together squares
	for (let i = 0; i<5; i+=4) {
		if (s[i].children[0].innerHTML != "" && s[i].children[0].innerHTML != "O" && s[i].children[0].innerHTML === s[i+4].children[0].innerHTML) {
			console.log("Check5");
			if (i === 0 && s[8].children[0].innerHTML != "O") {
				return 8;
			} else if (s[0].children[0].innerHTML != "O" && s[0].children[0].innerHTML != "X") {
				return 0
			}
		} else {}
	}
	// right diagonal together squares
	for (let i = 2; i<5; i+=2) {
		if (s[i].children[0].innerHTML != "" && s[i].children[0].innerHTML != "O" && s[i].children[0].innerHTML === s[i+2].children[0].innerHTML) {
			console.log("Check6");
			if (i === 2 && s[6].children[0].innerHTML != "O") {
				return 6;
			} else if (s[2].children[0].innerHTML != "O" && s[2].children[0].innerHTML != "X") {
				return 2;
			} 
		} else {}
	}
	// diagonal spaced squares
	if (s[0].children[0].innerHTML != "" && s[0].children[0].innerHTML != "O" && s[0].children[0].innerHTML === s[8].children[0].innerHTML && s[4].children[0].innerHTML != "O") {
		console.log("Check7");
		return 4;
	} else if (s[2].children[0].innerHTML != "" && s[2].children[0].innerHTML != "O" && s[2].children[0].innerHTML === s[6].children[0].innerHTML && s[4].children[0].innerHTML != "O") {
		console.log("Check8");
		return 4;
	} else {
		return "clear";
	}
}

function computerTurn() {
	if (checkTwo() != "clear" && cells != 0) {
		let index = checkTwo();
		console.log("index is " + index);
		setTimeout(function() {
			section.children[index].children[0].innerHTML = "O";
			cells = cells - 1;
			nextLetter();
			checkWin(three);
		}, 500);
	} else if (cells != 0) {
		let num = Math.floor(Math.random() * 9);
		console.log(num);
		console.log(section.children[num].children[0]);
		if (section.children[num].children[0].innerHTML === "") {
			setTimeout(function() {
				section.children[num].children[0].innerHTML = "O";
				cells = cells - 1;
				nextLetter();
				checkWin(three);
			}, 500);
		} else if (cells != 0) {
			computerTurn();
		}
	}
}

function nextLetter() {
	if (next === "X") {
		for (var i=0; i<9; i++) {
			section.children[i].removeEventListener('click', addO);
			section.children[i].addEventListener('click', addX);
			next = "O";
		}
	} else {
		for (var i=0; i<9; i++) {
			section.children[i].removeEventListener('click', addX);
			section.children[i].addEventListener('click', addO);
			next = "X";
		}
	}
}

function addX() {
	if (this.children[0].innerHTML === "" && win === false) {
		this.children[0].innerHTML = "X";
		cells = cells - 1;
		checkWin(three);
		console.log(three.row1[0]);
		if (play === "computer" && win === false) {
			nextLetter();
			computerTurn();
		} else {
			nextLetter();
		}
	} else {}
}

function addO() {
	if (this.children[0].innerHTML === "" && win === false) {
		this.children[0].innerHTML = "O";
		cells = cells - 1;
		if (play === "computer") {
			nextLetter();
			computerTurn();
		} else {
			nextLetter();
		}
		checkWin(three);
	} else {}
}

var section = document.getElementById('enclose');

var box0 = section.children[0].children[0];
var box1 = section.children[1].children[0];
var box2 = section.children[2].children[0];
var box3 = section.children[3].children[0];
var box4 = section.children[4].children[0];
var box5 = section.children[5].children[0];
var box6 = section.children[6].children[0];
var box7 = section.children[7].children[0];
var box8 = section.children[8].children[0];

var three = {
	row1: [box0, box1, box2],
	row2: [box3, box4, box5],
	row3: [box6, box7, box8],
	col1: [box0, box3, box6],
	col2: [box1, box4, box7],
	col3: [box2, box5, box8],
	dia1: [box0, box4, box8],
	dia2: [box2, box4, box6]
};

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('pVsP').addEventListener('click', normalPlay);
document.getElementById('pVsC').addEventListener('click', computerPlay);
var play = "normal";
var win = false;
var next = "X";
var cells = 9;
nextLetter();





