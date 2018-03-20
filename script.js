//Constructor Function that returns object
function Airplane(model, seatingcapacity,maximumspeed) {
	var o = {
		model: model,
		seatingcapacity:seatingcapacity,
		maximumspeed: maximumspeed,
		print: function(){
			console.log("Model " + this.model + " seating " + this.seatingcapacity + " max speed " + this.maximumspeed);
		}
	}
	return o;
}

//objects of Airplane function
var airplane1 = new Airplane("1faer",200,"100km/h");
var airplane2 = new Airplane("AERR1",400,"110km/h");
var airplane3 = new Airplane("FSSS1",500,"120km/h");

function callPrint(){
	airplane1.print();
	airplane2.print();
	airplane3.print();
}


//Increase seating capacity by 10
function increaseSeating(){
	airplane1.seatingcapacity+=10;
	airplane2.seatingcapacity+=10;
	airplane3.seatingcapacity+=10;
}


//Delete maximum speed for all object
function deleteMaxSpeed(){
	delete airplane1.maximumspeed;
	delete airplane2.maximumspeed;
	delete airplane3.maximumspeed;
}


//Add new property average speed for all objects
function addAverageSpeed(){
	airplane1.averageSpeed= 600;
	airplane2.averageSpeed= 600;
	airplane3.averageSpeed= 600;
	console.log("Airlplane 1  average speed " + airplane1.averageSpeed);
	console.log("Airlplane 2  average speed " + airplane2.averageSpeed);
	console.log("Airlplane 3  average speed " + airplane3.averageSpeed);
}  	

