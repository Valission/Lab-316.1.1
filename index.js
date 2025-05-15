/*
Group
Muna Mohamed
Shorman Fennell
Samuel Laoye
Mohamed Ait oufquir
Zavier Paulino
*/

/*
Daijha Rabalais
Ali Hussain
Fernando Hull
Segundo Guazhambo
Zaiver Paulino
*/

// Part 3: Step 0
// Menu data structure

// Part 4: Adding Menu Interaction
// Lab 5/15/25
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Part 1
// Step 1 declare variable via queryselector
const mainEl = document.querySelector('main');
// Step 2
mainEl.style.backgroundColor = 'var(--main-bg)'
// Step 3
let h1 = document.createElement('h1')
mainEl.appendChild(h1)
h1.textContent = 'DOM Manipulation'
// Step 4
mainEl.classList.add('flex-ctr')

// Part 2
// Step 1
let topMenuEl = document.getElementById('top-menu')
// Step 2
topMenuEl.style.height = '100%'
// Step 3
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
// Step 4
topMenuEl.classList.add('flex-around')

// Part 3
// Step 1
menuLinks.forEach((link) => {
    // Step 2
    let a = document.createElement('a')
    // Step 3
    a.href = link.href
    // Step 4
    a.textContent = link.text
    // Step 5
    topMenuEl.appendChild(a)
    
    a.classList.add('passive')
    // Part 4: Step 1
    let topMenuLinks = a.href
    // Par 4: Step 2
    
    function stopClick(event){
      console.log('Clicking')
      // console.log(event.target)
      
      stopClick.preventDefault;
      if (this.click !== topMenuLinks) {
        return;
      }
      event.stopPropagation();
      // Part 4: Step 3
      a.classList.add('active')
      if (a.classList.contains('active')){
        a.classList.remove
      }
    }
    
    topMenuEl.addEventListener("click", stopClick)

    
    console.log (topMenuLinks)


})

console.log("Hello, world!");

// Lab 2 5/15/2025
// Part 3: Creating the Submenu
// Step 1
let subMenuEl = document.getElementById('sub-menu')
// Step 2
subMenuEl.style.height = '100%'
// Step 3
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
// Step 4
subMenuEl.classList.add('flex-around')

// Part 4: Adding Menu Interaction
// menuLinks.forEach((subMenuLinks) => {
//   let a = document.createElement('a')
//   a.href = subMenuLinks.href
//   a.textContent = link.text
//   subMenuEl.appendChild(a)
// })