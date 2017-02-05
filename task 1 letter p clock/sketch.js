var r = 0;
var b = 255;


function setup(){
	createCanvas(1000, 1000);
}

// function draw(){
// 	background(240);

// 	// move the origin to the pivot point
// 	translate(150, 150); 

// 	// then rotate the grid around the pivot point by a
// 	// number of degrees equal to the frame count of the sketch
// 	rotate(radians(frameCount));

// 	// and draw the square at the origin
// 	fill(0);
// 	rect(0, 0, 100, 100);
// }

function draw(){
// 	background(0);
r = map(mouseX, 0, 600, 0, 255);
b = map(mouseX,0,600,255,0);
background (r, 0, b);
// ellipse
fill (250,118,222);
ellipse (mouseX, 200,64,64); 

	// move the origin to the pivot point
	translate(500, 500); 

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	rotate(radians(frameCount));

	// and draw the square at the origin
	

  noStroke ();
fill (255,220, 50);
  rect (30,20,65,55);
  

  
  noStroke ();

  fill (75,85,20);
  rect (75,75,20,20);
 
  
  noStroke ();
  fill (25,25,50);
  rect (85,85,150,35);
  
  noStroke ();
  fill (200,250,56);
  rect (90,90,155,37);
  
  noStroke ();
  fill (87,90.35);
  rect (100,100, 150, 50);
  
 
  noStroke ();
  fill (120,250, 10);
  rect (30,20,55,55);
  
  noStroke ();
  fill (30,76,57);
  rect (100,110, 5, 55);
  
  // noStroke ();
  // fill (240,240,60);
  // rect (120,120,5,55);
  
  noStroke ();
  fill (" #fae");
  rect (30,30,65,55);
  
  noStroke ();
  fill (" #fae");
  rect (220,20,80,90);
  
  noStroke ();
  fill (20,145,32);
  rect (80,12, 145,5);
  
  noStroke ();
  fill (65,10,80);
  rect (85, 15, 150, 5);
  
  noStroke ();
  fill (30, 45, 2);
  rect (90, 10, 150, 2);
  
  noStroke ();
  fill (50,20,56);
  rect (15, 80, 65, 75);
   
  noStroke ();
  fill (152,15,56);
  rect (14,80,65,70);
   
  noStroke ();
  fill ("red");
  rect (12,80, 60, 20);
   
  noStroke ();
  fill (74,195,255);
  rect (10,80,50,20);
   
  noStroke ();
  fill (85,252,196);
  rect (9,80,40,20);
   
   
  noStroke ();
  fill (255,222,1);
rect (90, 10, 150, 2);
 
 
  noStroke ();
  fill (51,234,255);
rect (90, 10, 150, 2);
 
noStroke ();
  fill (255,222,1);
rect (40,30, 55, 55);
 
noStroke ();
  fill (3,255,1);
rect (20, 190, 65, 55);
 
noStroke ();
fill (0,137,255);
rect (30,180, 60,50);
 
noStroke ();
fill (0,50,186);
rect (35,180,50,20);
 
noStroke ();
fill (236,21,5);
rect (40,200,60,20);
 
noStroke ();
  fill (44,207,255);
rect (30, 150, 70, 55);
 
noStroke ();
fill (183,11,255);
rect (2,2,5,250)
 
noStroke ();
  fill (237,72,243);
  rect (4,4,6,255);
  
  noStroke ();
  fill (31,250,243);
rect (100, 25, 5, 250);
 
noStroke ();
fill (255,225,12);
rect (100,20,3,250);
 
 
noStroke ();
fill (255,225,12);
rect (4,4,2,250);
 
noStroke ();
fill (222,255,3);
rect (110,30,2,270);
 
 
noStroke ();
fill (51,234,255);
rect (220,20,3,125);
 
noStroke ();
fill (255,160,51);
rect (225,20,2,125);
 
  noStroke ();
fill (255,245,66);
rect (220,20,3,128);
 
  noStroke ();
fill (24,241,255);
rect (300,12,2,145);
 
  noStroke ();
fill (78,2,154);
rect (300,12,1,145);
 
  noStroke ();
fill (3,232,117);
rect (170, 9, 120, 7);
 
  noStroke ();
fill (255,130,3);
rect (10, 9, 120, 7);

noStroke ();
fill (255,25,9);
rect (10, 9, 120, 5);
 
noStroke ();
fill (255,240,9);
rect (3, 8, 100, 15);
 
noStroke ();
fill (4,255,65);
rect (150,150,160,10);
 
noStroke ();
fill (255,4,114);
rect (100,140,200,15);
 
  noStroke ();
fill (213,5,288);
rect (125,145,185,6);
 
noStroke ();
fill (11,255,159);
rect (65,150,85,16);
 
  noStroke ();
fill (255,238,3);
rect (1,290,120,120);
 
  noStroke ();
fill (57,236,21);
rect (1,30,5,250);
  
  
  
 
}

// // function setup(){
// // resizeCanvas (350,350);
// // background (250,100,54);


// }

// function draw(){
//   noStroke ();
// fill (255,220, 50);
//   rect (30,20,65,55);
  

  
//   noStroke ();

//   fill (75,85,20);
//   rect (75,75,20,20);
 
  
//   noStroke ();
//   fill (25,25,50);
//   rect (85,85,150,35);
  
//   noStroke ();
//   fill (200,250,56);
//   rect (90,90,155,37);
  
//   noStroke ();
//   fill (87,90.35);
//   rect (100,100, 150, 50);
  
 
//   noStroke ();
//   fill (120,250, 10);
//   rect (30,20,55,55);
  
//   noStroke ();
//   fill (30,76,57);
//   rect (100,110, 5, 55);
  
//   // noStroke ();
//   // fill (240,240,60);
//   // rect (120,120,5,55);
  
//   noStroke ();
//   fill (" #fae");
//   rect (30,30,65,55);
  
//   noStroke ();
//   fill (" #fae");
//   rect (220,20,80,90);
  
//   noStroke ();
//   fill (20,145,32);
//   rect (80,12, 145,5);
  
//   noStroke ();
//   fill (65,10,80);
//   rect (85, 15, 150, 5);
  
//   noStroke ();
//   fill (30, 45, 2);
//   rect (90, 10, 150, 2);
  
//   noStroke ();
//   fill (50,20,56);
//   rect (15, 80, 65, 75);
   
//   noStroke ();
//   fill (152,15,56);
//   rect (14,80,65,70);
   
//   noStroke ();
//   fill ("red");
//   rect (12,80, 60, 20);
   
//   noStroke ();
//   fill (74,195,255);
//   rect (10,80,50,20);
   
//   noStroke ();
//   fill (85,252,196);
//   rect (9,80,40,20);
   
   
//   noStroke ();
//   fill (255,222,1);
// rect (90, 10, 150, 2);
 
 
//   noStroke ();
//   fill (51,234,255);
// rect (90, 10, 150, 2);
 
// noStroke ();
//   fill (255,222,1);
// rect (40,30, 55, 55);
 
// noStroke ();
//   fill (3,255,1);
// rect (20, 190, 65, 55);
 
// noStroke ();
// fill (0,137,255);
// rect (30,180, 60,50);
 
// noStroke ();
// fill (0,50,186);
// rect (35,180,50,20);
 
// noStroke ();
// fill (236,21,5);
// rect (40,200,60,20);
 
// noStroke ();
//   fill (44,207,255);
// rect (30, 150, 70, 55);
 
// noStroke ();
// fill (183,11,255);
// rect (2,2,5,250)
 
// noStroke ();
//   fill (237,72,243);
//   rect (4,4,6,255);
  
//   noStroke ();
//   fill (31,250,243);
// rect (100, 25, 5, 250);
 
// noStroke ();
// fill (255,225,12);
// rect (100,20,3,250);
 
 
// noStroke ();
// fill (255,225,12);
// rect (4,4,2,250);
 
// noStroke ();
// fill (222,255,3);
// rect (110,30,2,270);
 
 
// noStroke ();
// fill (51,234,255);
// rect (220,20,3,125);
 
// noStroke ();
// fill (255,160,51);
// rect (225,20,2,125);
 
//   noStroke ();
// fill (255,245,66);
// rect (220,20,3,128);
 
//   noStroke ();
// fill (24,241,255);
// rect (300,12,2,145);
 
//   noStroke ();
// fill (78,2,154);
// rect (300,12,1,145);
 
//   noStroke ();
// fill (3,232,117);
// rect (170, 9, 120, 7);
 
//   noStroke ();
// fill (255,130,3);
// rect (10, 9, 120, 7);

// noStroke ();
// fill (255,25,9);
// rect (10, 9, 120, 5);
 
// noStroke ();
// fill (255,240,9);
// rect (3, 8, 100, 15);
 
// noStroke ();
// fill (4,255,65);
// rect (150,150,160,10);
 
// noStroke ();
// fill (255,4,114);
// rect (100,140,200,15);
 
//   noStroke ();
// fill (213,5,288);
// rect (125,145,185,6);
 
// noStroke ();
// fill (11,255,159);
// rect (65,150,85,16);
 
//   noStroke ();
// fill (255,238,3);
// rect (1,290,120,120);
 
//   noStroke ();
// fill (57,236,21);
// rect (1,30,5,250);
  
  
  
 
// }