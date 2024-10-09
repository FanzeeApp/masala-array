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

// let str = "Uzbekistan";
// natija = str.length;
// console.log(natija);

// // arr 8

// let kirit = [2, 3, 4, 5];

// kirit.unshift(1);
// console.log(kirit);

// // arr 9

// let java = "JAVASCRIPT";
// let javob = java.toLowerCase();
// console.log(javob);

// // arr 10

// let arr = ["cherry", "banana", "apple"];
// let rec = arr.reverse();
// console.log(rec);

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

// // medium 1

// let arr = [5, 2, 8, 9, 1, 7];
// let cher = arr.sort();
// console.log(cher);

// // medium 2

// let arr = "apple,banana,cherry";
// let sin = arr.split(",");
// console.log(sin);

// // medium 3

// let ar = [1, 2, 3, 4, 5, 6, 8];
// let sonlar = ar.includes(5);

// console.log(sonlar);

// // medium 4

// let ar = [1, 2, 3, 4, 5, 6, 7, 8];
// let qirqish = ar.slice(1, 3);

// console.log(qirqish);

// // medium 5

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let javob = [];
// let ish = arr.forEach((num) => {
//   if (num % 2 === 0) {
//     javob.push(num);
//   } else {
//   }
// });
// console.log(javob);

// // medium 6

// let strr = "hello world";
// let javob = strr.includes("world");
// console.log(javob);

// // medium 7

// let arr = [10, 20, 30, 40];
// function nom(num) {
//   let ishlash = arr.indexOf(num);
//   return ishlash;
// }
// console.log(nom(40));

// // medium 8

// let ar = [1, 2, 3, 4, 5, 6, 7, 8];
// let qirqish = ar.slice(1, 3);

// console.log(qirqish);

// medium 9

// let yigndi = [5, 10, 14, 56];
// let javob = 0;
// for (let i = 0; i < yigndi.length; i++) {
//   javob += yigndi[i];
// }
// console.log(javob);

// // medium 10

// let str = "123-456-789";
// let javob = str.split("-");
// let matn = javob.join(" ");
// console.log(matn);

// // medium 11

// let arr = [1, 5, 3, 9, 2, 14, 6, 12];
// let hisob = Math.max(...arr);
// console.log(hisob);

// // medium 12

// let arr = ["Banana", "Apple", "orange", "Limon"];
// let nev = arr.sort();
// console.log(nev);

// // medium 13

// arr = [2, 4, 6, 8];
// javob = true;
// let nev = arr.forEach((num) => {
//   if (num % 2 === 1) {
//     javob = false;
//   }
// });

// console.log(javob);

// // medium 14

// let str = "javascript";
// let teskari = str.split("").reverse().join("");
// console.log(teskari);

// // medium 15

// let arr = [1, 2, 3, 4, 5];
// let sup = arr.map((n) => {
//   return n + 2;
// });
// console.log(sup);

//////////////////////////////////////////////////////////

// // HARD++ 1

// let str = "madam";
// let lower = str.toLocaleLowerCase();
// let javob = str.toLocaleLowerCase().split("").reverse().join("");
// if (lower === javob) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // HARD++ 2

// let n = 3;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let mix = arr.sort(() => 0.5 - Math.random());
// let cl = mix.slice(0, n);

// console.log(cl);

// // HARD++ 3
// let str = "apple banana apple orange banana";
// let javob = str.split(" ");

// let tenglash = javob.filter((meva, index) => javob.indexOf(meva) === index);
// console.log(tenglash);

// // HARD++ 4

// function aylanma(arr) {
//   let natija = [];
//   arr.forEach(function (kirit) {
//     if (Array.isArray(kirit)) {
//       natija = natija.concat(aylanma(kirit));
//     } else {
//       natija.push(kirit);
//     }
//   });
//   return natija;
// }

// const kiritish = [1, [2, 3], [4, [5, 6]]];
// const chiqish = aylanma(kiritish);
// console.log(chiqish);

// // HARD 5++

// let arr = "hello world from java Script";
// let javob = arr.split(" ");
// oxirgi = [];
// let boshHarf = javob.forEach((n) => {
//   let bosh = n.charAt(0).toLocaleUpperCase();
//   let song = n.slice(1);
//   let oxiri = bosh + "" + song;
//   oxirgi.push(oxiri);
// });
// console.log(oxirgi.join(" "));
