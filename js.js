/*
--CLIENT -SIDE STORAGE--
1.creati un array cu cel putin 3 obiecte
2.salvati arrayul in local storage la cheia products
3.afisati in consola continutul din storage pentru cheia products
4.preluati arrayul din local storage si adaugati un nou obiect in acest array
5.suprascrieti cheia products cu noua valoare a arrayului 
6.aifsati in consola noul continut din storage pentru cheia products
 */
let objects = {
  caine: "max",
  pisica: "oscar",
  capybara: "ron",
};
let x = JSON.stringify(objects); //imi transforma un obiect intr un string
let y = localStorage.setItem("products", x);
console.log(y);
let z = JSON.parse(y);
console.log(z);
