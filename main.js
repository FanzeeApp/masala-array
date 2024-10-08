// // arr 1

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.reverse();
// console.log(arr);

// // arr 2

// let harf = "salom";
// console.log(harf.toLocaleUpperCase());

// // arr 3

// let kir = [1, 3, 5, 7];
// kir.push("salom");
// console.log(kir);

// // arr 4

// let kirit = [1, 4, 8, 8, "salom", "Fanzee", 7];
// console.log(kirit.length);

// // arr 5

// let text = "Salom Dunyo";
// let ozgar = text.replace("Dunyo", "JavaScript");

// console.log(text);
// console.log(ozgar);

// // arr 6

// let kirit = [4, 6, 8];
// console.log(kirit[0]);

// // arr 7

// let kirit = [2, 3, 4, 6, 8, 76, 45, 6];
// console.log(kirit.indexOf(76));

// // arr 8

// let kirit = [1, 2, 3, 4, 5];

// let javob = kirit.slice(1, 3);
// console.log(javob);

// // arr 9

// let yigndi = [5, 10, 14, 56];
// let javob = 0;
// for (let i = 0; i < yigndi.length; i++) {
//   javob += yigndi[i];
// }
// console.log(javob);

// // arr 10

// let str = "123-456-789";
// let javob = str.split("-");
// let matn = javob.join(" ");
// console.log(matn);

// // arr 11

// let arr = [1, 5, 3, 9, 2, 14, 6, 12];
// let hisob = Math.max(...arr);
// console.log(hisob);

// // arr 12

// let arr = ["Banana", "Apple", "orange", "Limon"];
// let nev = arr.sort();
// console.log(nev);

// // arr 13

// arr = [2, 4, 6, 8];
// javob = true;
// let nev = arr.forEach((num) => {
//   if (num % 2 === 1) {
//     javob = false;
//   }
// });

// console.log(javob);

// // arr 14

// let str = "javascript";
// let teskari = str.split("").reverse().join("");
// console.log(teskari);

// // arr 15

// let arr = [1, 2, 3, 4, 5];
// let sup = arr.map((n) => {
//   return n + 2;
// });
// console.log(sup);

//////////////////////////////////////////////////

// // hard 1

// let str = "madam";
// let lower = str.toLocaleLowerCase();
// let javob = str.toLocaleLowerCase().split("").reverse().join("");
// if (lower === javob) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // hard 2

// let n = 3;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let mix = arr.sort(() => 0.5 - Math.random());
// let cl = mix.slice(0, n);

// console.log(cl);

// // hard 3

// let str = "apple banana apple orange banana";
// let javob = str.split(" ");

// let tenglash = javob.filter((meva, index) => javob.indexOf(meva) === index);
// console.log(tenglash);

// hard 4

let arr = [1, [2, 3], [4, [5, 6]]];
let list = [];
let javob = arr.forEach((num) => {
  list.push(num);
  console.log(list);
});
