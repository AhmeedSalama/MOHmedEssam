
// تكليف 71 ل 78 بيرجع الحروف ويزودها علي بعض عشان الاسم يبقي مظبوط ويستثني الحروف 

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let names = mix.map(function(ele){
// return parseInt(ele) ? "" : ele;

// }).reduce(function(acc ,current){
//   return acc +current
// })
// console.log(names)

// -----------------------------------------------------------------
// حل تكليف التاني من 71 ل 78 بتعمل  بتحول المتغير الي اراي  وبتستخدم الفتر وبترجع بالانكدس اوف العنصر اللي بيساوي الاندكس وبتجمعهم بالرديوس
// let myString = "EElllzzzzzzzeroo";

// let newString = myString.split("").filter(function(ele, index){
//     return  myString.indexOf(ele) === index;
// }).reduce(function(acc, current){
//     return acc + current;
// });

// console.log(newString);

// -----------------------------------------------------------------

// تكليف 71 ل78 بيعمل اراي جديدة باستخدام الريديوس وبترجع كل العناصر جمب بعض وبتحولها لاراي تاني عشان تفلترهم وبتستخدم الفلتر وبترجع العنصر اللي مبيساويش الكوما وبتدمجهم بالجوين

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newarray = myArray.reduce(function(acc , current){
//   return acc + current
// }).split("").filter(function(ele){
//   return ele !== ","
// }).join("");

// console.log(newarray);


// -----------------------------------------------------------------

// تكليف بتشيل السترينج وبتخلي الارقام وبتغير من موجب وسالب للاعكس 
// بتعمل اراي جديد بالفلتر وبترجع العنصر بالبارس انت اللي بتحلل الارقام بس وبتعمل ماب وبترجع الماب وبتحط ماينس عشان سالب ف سالب بموجب وممكن تستخدم

// منغير الماب ترجع بالبارس انت وتحط سالب  فا هي هي بس دي فكرة التكليف تستخدم الاتنين
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let change = numsAndStrings.filter(function(ele){
//   return parseInt(ele)
// }).map(function(ele){
//   return -ele
// })
// console.log(change);
// [-1, -10, 10, 20, -5, -3]

// -----------------------------------------------------------------
// التكليف ده بتستخدم الريديوس عشان تجمع وتضرب العناصر وبتحط الشرط ان لو الكارنت رقم زوجي يعني بيقبل القسمة علي اتنين وبيرجع زيو ف حالة الترو اضربو فالاكمليتور
// ف حالة الفولس اجمع الكارنت علي الاكمليوتر
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let newnums = nums.reduce(function(acc , current){
//   return current % 2 === 0 ? current*acc : current+acc
// },1)
// console.log(newnums);
// 500




// -----------------------------------------------------------------




//////////////////////////////تكليفات JavaScript Bootcamp من الدرس 079 إلى 085 //////////////////////////////


// التكليف ده بتعمل اوبجيكت وجواه فانكشن ركز ع طريقة كتابة الفانكشن جوا الابوجيكت لو من برا هيجيبلك انها مش فانكشن عشان اللوكال 
// let member ={
// name:"Elzero",
// age:38,
// country:"Egypt",
//  fullDetails: function(){
//   return `My Name Is ${member.name} My Age Is ${member.age}  Live in ${member.country}`
// }};

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// -----------------------------------------------------------------

//تكليف  تعمل اوبجيسكت ب 4 طرق مختلفة

// Method One
// let objMethodOne= {
//   property: "Method One"
// };

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// let objMethodTwo = new Object({
//   property: "Method Two"
// });

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// let objMethodThree = Object.create({});

// objMethodThree.property = "Method Three";

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// let objMethodFour = Object.assign({}, {property: "Method Four"});

// console.log(objMethodFour.property); // "Method Four"

// -----------------------------------------------------------------

// تكليف بيخليك تستخدم الاساين اوبجيكت بتسيب التارجيت اللي ياخد منو نسخة فاضي وبعدين بتحط المتغير ف قوةسين عشان هو متغير وبعدين بتحط الاتنين
//اوبجيكت الباقيين عشان هما ابوجيكت فا عادي يتحطو منغير قوسين

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

//  let finalObject = Object.assign({}, {a}, threeNums , twoNums )

// console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// -----------------------------------------------------------------

// التكليف ده بيظهرلك معلومات الابوجيكت عن طريق اللوب والايف كونديشن

// The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };
  
// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;
// let game = Object.keys(myFavGames);

// for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${game[i]}`);
//     console.log(`The Publisher Is ${myFavGames[game[i]]["publisher"]}`);
//     console.log(`The Price Is ${myFavGames[game[i]]["price"]}`)};

//     if (Object.hasOwn(myFavGames[game[i]], "bestThree")) {
//         console.log("- Game Has Releases");
//         console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
//         console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
//         console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
//     }
  
  // Ouput
  
//   "The Game Name Is Trinity Universe"
//   "The Publisher Is NIS America"
//   "The Price Is 40"
//   "####################"
//   "The Game Name Is Titan Quest"
//   "The Publisher Is THQ"
//   "The Price Is 50"
//   "- Game Has Releases"
//   "First => Immortal Throne"
//   "Second => Ragnarök"
//   "Third => Atlantis"
//   "####################"
//   "The Game Name Is YS"
//   "The Publisher Is Falcom"
//   "The Price Is 40"
//   "- Game Has Releases"
//   "First => Oath in Felghana"
//   "Second => Ark Of Napishtim"
//   "Third => origin"
//   "####################"


// -----------------------------------------------------------------

//////////////////////////////تكليفات JavaScript Bootcamp من الدرس 086 إلى 093//////////////////////////////
// تحديد عنصر ب 15 طريقة مختلفة 

// let one = document.querySelector("#elzero");
// console.log("one:", one);
// let two = document.querySelector('.element');
// console.log("two:", two);
// let three = document.querySelector(`[name="js"]`);
// console.log("three:", three);
// let four = document.querySelector('div');
// console.log("four:", four);
// let five = document.querySelectorAll("#elzero")[0];
// console.log("five:", five);
// let six = document.querySelectorAll('.element')[0];
// console.log("six:", six);
// let seven = document.querySelectorAll(`[name="js"]`)[0];
// console.log("seven:", seven);
// let eight = document.querySelectorAll('div')[0];
// console.log("eight:", eight);
// let nine = document.getElementById("elzero");
// console.log("nine:", nine);
// let ten = document.getElementsByName('js')[0];
// console.log("ten:", ten);
// let eleven = document.getElementsByClassName('element')[0];
// console.log("eleven:", eleven);
// let twelve = document.getElementsByTagName('div')[0]; 
// console.log("twelve:", twelve);
// let thirteen = document.body.firstElementChild
// console.log("thirteen:", thirteen);
// let fourteen = document.body.children[0];
// console.log("fourteen:", fourteen);
// -----------------------------------------------------------------

//تكليف بيخليك تعمل لوب علي جميع الصور اللي فالدوكمينت وتحطلها سورس والت
// let imgs = document.images;
// for(let i =0; i <=imgs.length;i++){
//     imgs[i].src= "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     imgs[i].alt= "Elzero Logo"
// };

// -----------------------------------------------------------------
// تكليف صنع انبوت بتحط فيه قيمة وبيحسبهالك بالدولار
// let input = document.querySelector("input");
// let result =  document.querySelector(".result");

// input.oninput= function(){
//     result.innerHTML =`{${input.value}} USD Dollar = {${(input.value*15.6).toFixed(2)}} Egyptian Pound`
// }

// -----------------------------------------------------------------
//تكليف تخلي التايتل بيساوي الكلاس والمحتوي

// let one = document.querySelector(".one");
// let Two = document.querySelector(".two");
// one.title = one.className;
// Two.title = Two.className;
// one.textContent = one.className;
// Two.textContent = `${Two.className}2`

// -----------------------------------------------------------------
//تكليف بتغير الالت لاولد لو موجود ولو مش موجود بتححط الزيرو نيو

// let imgs = document.images;
// for(let i =0 ; i<= imgs.length;i++){
//   if(imgs[i].hasAttribute('alt')){
//     imgs[i].alt=`Old`
//   }else{
//     imgs[i].alt=`Elzero New`
//   }
// }

// -----------------------------------------------------------------

// تكليف بيخليك تمل عناصر وعددهم اللي بتحددهم وتحطهم فالريزلت متنساش انكم بتعمل فور ايتش عليه عشان يتحذف القديم وميتضافش ع الجديد

// let elNum = document.getElementsByName("elements")[0];
// let form = document.forms;
// let type = document.querySelector("select");
// let text = document.getElementsByName("texts")[0];
// let results = document.querySelector(".results");
// let button = document.querySelector("button");


// form[0].onsubmit = function(el){
//     el.preventDefault();
//     document.querySelectorAll(".box").forEach((el) => el.remove());

//     for(let i = 1; i <= elNum.value; i++){
//         let myEl = document.createElement(type.value);
//         let myText = document.createTextNode(text.value);
//         myEl.className = "box";
//         myEl.title = "Element";
//         myEl.id = `id-${i}`;
//         myEl.style.display = "inline-block";
//         myEl.style.width = "200px";
//         myEl.style.margin = "20px";
//         myEl.style.padding = "10px";
//         myEl.style.color = "white";
//         myEl.style.backgroundColor = "blue";
//         myEl.style.textAlign = "center";
//         myEl.style.borderRadius = ".5rem";
//         myEl.appendChild(myText);
//         results.appendChild(myEl);
//     }
// };
// نفس التكليف بس بتستخدم زرار بدل انبوت

// form[0].onsubmit = function(el){
//   el.preventDefault();}

//   button.onclick= function(){
//   document.querySelectorAll(".box").forEach((el) => el.remove());
//     for(let i = 1; i <= elNum.value; i++){
//         let myEl = document.createElement(type.value);
//         let myText = document.createTextNode(text.value);
//         myEl.className = "box";
//         myEl.title = "Element";
//         myEl.id = `id-${i}`;
//         myEl.style.display = "inline-block";
//         myEl.style.width = "200px";
//         myEl.style.margin = "20px";
//         myEl.style.padding = "10px";
//         myEl.style.color = "white";
//         myEl.style.backgroundColor = "blue";
//         myEl.style.textAlign = "center";
//         myEl.style.borderRadius = ".5rem";
//         myEl.appendChild(myText);
//         results.appendChild(myEl);
//     }
//   }
// -----------------------------------------------------------------
///////////////////////////////تكليفات JavaScript Bootcamp من الدرس 094 إلى 101 /////////////////////////////

//تكليف  بتعمل فانكشك اول ما الويندو بتحمل بيفتحلك لينك فيه حاجات معينة بشروط معينة

// let links = document.links;
// console.log(links)
// window.onload = function(){
// for(let i = 0 ; i < links.length; i++){
// if(links[i].classList.contains("open") && links[i].textContent === "Elzero"){
//     links[i].click()
// }
// }
// }
// -----------------------------------------------------------------

// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let current = document.querySelector("[title = 'Current']");
// let cls = document.querySelector(".classes-list div");

// function addOrRemove(){
//     // remove all elements at the start
//     document.querySelectorAll("span").forEach(el => el.remove());
    
//     // add and remove classes
//     for (let i = 0; i < this.value.trim().split(" ").length; i++){
//         if (add.value)
//             current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
        
//         if (remove.value)
        
//             current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
//     }
//     this.value = "";

//     // add and remove spans
//     if(current.classList.length){
//         [...current.classList].sort().forEach(el => {
//             let clSpan = document.createElement("span");
//             clSpan.textContent = el;
//             cls.append(clSpan);
//         });
//     }else cls.textContent = "No Classes To Show";
// }

// add.onblur = addOrRemove;
// remove.onblur = addOrRemove;
// تكليف بتحط عنصر قبل وبعد الديف وبتحطلهم كلاس واتربيوت وتايتل

// let div = document.querySelector(".our-element");
// console.log(div)

// let p = document.querySelector("p");
// p.remove()

// let start = document.createElement("div");
// start.textContent='start';
// start.className="start";
// start.title="Start Element";
// start.setAttribute("data-value","Start");

// let end = document.createElement("div");
// end.textContent='end';
// end.className="end";
// end.title="end Element";
// end.setAttribute("data-value","end");

// div.before(start);
// div.after(end);

///////////////////////////////////////////////////////////////////////
// تكليف بتوصل لاخر ابن في الديف

// let div = document.getElementsByTagName("div")[0];

// console.log(div.lastChild);
///////////////////////////////////////////////////////////////////////


// تكليف بيخليك تعمل فانكشن لما تدوس علي العنصر يطبع اللوكال نيم يعني نوعو متنساش تحط التارجيت منغيرها مش هيتطبع ومتنساش 
// القوسين و3 نقط عشان دول بيحولو الحاجة لاراي والفور ايتش مش بتشتغل غير مع الاراي

// [...document.body.children].forEach(ele => {
//     ele.addEventListener("click", function(ele){
//         console.log(`this is a ${ele.target.localName}`)
//     })
    
// });

///////////////////////////////////////////////////////////////////////

//////////////////////////////////// تكليفات JavaScript Bootcamp من الدرس 102 إلى 110 //////////////////////////////////////////////////

///  تكليف بيخليك تطلع البرومبت بتعمل متغيرين وبتحط البرومبت ف واحد والتاني بتخلي البروميت اراي وبتعمل لوب عليهم
// متنساش تحط بلص عشان يحولو لرقم مش سترينج وبتفصل بينهم  بالسبليت وبتحدد هيبا ب انهي وينتهي ف انهي
// وبتعمل لوب انو يطبع وممكن تخليه ك ديف فالصفحة  وممكن تعمل كل ده منغير السورت

// let prommsg = prompt("Print Number From – To", "Example: 5-20");

// let promnum = prommsg.split("-").sort((a,b) => a - b);

// for(let  i = +promnum[0]; i <= promnum[1];i++){
//     console.log(i)
// }



// let From = document.querySelector("form");
// console.log(From);

// let text = document.querySelector("[type=text]");
// console.log(text);

// let number = document.querySelector("[type=number]");
// console.log(number);

// let btn = document.querySelector("button");
// console.log(btn);

// let ruslt = document.querySelector("div");
// console.log(ruslt);



// From.onsubmit = function(ele){
//   ele.preventDefault();
// if (text.value === "") {
//     alert("ياعم بطل تخلف واملي البتاع");
//     return false; 
//   }
//   for(let i = 0; i <= number.value; i++){
//    let texts = document.createElement("span");
//    texts.textContent = `${text.value}`;
//    ruslt.appendChild(texts)
//   }


// }


// let menu = document.querySelector("nav i");
// let sidebar = document.querySelector(".sidbar");

// let x = document.querySelector(".sidbar li i");

// console.log(x)

// menu.onclick = function(){
//   sidebar.style.display = 'flex';
// };


// x.onclick = function(){
//   sidebar.style.display = 'none';
// };


// let menu = document.querySelector(".menu i");
// let closemenu = document.querySelector(".sidbar i");
// let sidbar = document.querySelector(".sidbar");


// menu.onclick= function(){
//   sidbar.style.display='flex'
  

// };

// closemenu.onclick= function(){

//   sidbar.style.display='none'
// };




// let btnminus = document.querySelector(".btnminus");
// console.log(btnminus);

// let btnplus = document.querySelector(".btnplus");
// console.log(btnplus);

// let span = document.querySelector("span");
// console.log(span);

// let total =0;

// btnplus.addEventListener("click", function(){
//   span.textContent= total += 1
//   window.localStorage.setItem("total", total);
// });

// btnminus.addEventListener("click", function(){
//   span.textContent= total -= 1
//   window.localStorage.setItem("total", total);
// });

// window.onload = function() {
//   let totalstorage = window.localStorage.getItem("total");
//   if (totalstorage !== null) {
//     total = parseInt(totalstorage);
//     span.textContent = total;
//   }
// }



let closemune = document.querySelector('.slid i');

let mune = document.querySelector('.fa-bars');

let slid = document.querySelector(".slid");

mune.onclick = function() {
  slid.style.display = 'flex';
  mune.style.display = "none"
};

closemune.onclick = function() {
  slid.style.display = 'none';
  mune.style.display = "block"

 
};

let header = document.querySelector("header");
console.log(header)
window.onresize = function() {
  if (window.innerWidth >= 660) {
    slid.style.display = 'none';
    mune.style.display = 'none';
  } else {
    mune.style.display = 'block';
  }

};


window.onscroll = function(){
  if (window.scrollY > 70) {
    header.style.background = "#0c0c0c";
  } else {
    header.style.background = "";
  }
}





