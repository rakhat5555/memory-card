// var random = [];
// var litID = [];
// var lit;
// var j=0;
// var count = 1;
// var on;
// var off;
// var strict;
// var x;
//
// var clicked = [];
//
// export function change1() {
//   //set interval length
//   if (count <=10) {
//     off = 400;
//     on = 800;
//   }else {
//     off = 250;
//     on = 500;
//   }
//   x = setInterval(function() {
//     if (random[j] ==1) {
//       // lit = 'light1';
//       $("#one").addClass('light1');
//       $("#audio1")[0].play();
//       litID.push(1);
//       setTimeout(function () {
//         $("#one").removeClass('light1');
//       }, off );
//     } else if (random[j] == 2) {
//       lit = 'light2';
//       $("#two").addClass(lit);
//       $("#audio2")[0].play();
//       litID.push(2);
//       setTimeout(function () {
//         $("#two").removeClass(lit);
//       },off);
//     }else if (random[j] == 3) {
//       lit = 'light3';
//       $("#three").addClass(lit);
//       $("#audio3")[0].play();
//       litID.push(3);
//       setTimeout(function () {
//         $("#three").removeClass(lit);
//       }, off );
//     } else {
//       lit = 'light4';
//       $("#four").addClass(lit);
//       $("#audio")[0].play();
//       litID.push(4);
//       setTimeout(function () {
//         $("#four").removeClass(lit);
//       }, off);
//     }
//     j++;
//     if(j>=count) {
//       clearInterval(x);
//     }
//   },on);
// }
//
// export function checking() {
//   if (litID.length == clicked.length) {
//     if(litID.join() == clicked.join()) {
//       if (count == 20) {
//         setTimeout(function () {
//           alert("You Win!");
//           location.reload();
//         }, 1000);
//       }
//     } else {
//       setTimeout(function() {
//         $("#count").text(count + 1);
//         count++;
//         litID = [];
//         clicked = [];
//         j = 0;
//         change1();
//       },1000);
//     }
//   } else {
//     if (strict == 1) {
//       location.reload();
//     } else {
//       setTimeout(function () {
//         $("#count").text("!!");
//         litID = [];
//         clicked = [];
//         j = 0;
//         change1();
//       }, 1000);
//     }
//   }
// }
