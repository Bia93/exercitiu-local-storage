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
let z = localStorage.getItem("products"); // am preluat arrayul din localstorage
let valueParse = JSON.parse(z); // am transformat arrayul in obiect
valueParse.placavideo = "rtx 4000"; // AM ADAUGAT NOUL OBIECT
let a = JSON.stringify(valueParse); //imi transf obiectul in string
let b = localStorage.setItem("products", a); // am setat ca sa apara in local storage, placa video
