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
})
console.log("Hello, world!");

menuLinks.forEach((link) => {
  let a = document.createElement('a')
  a.href = link.href
  a.textContent = link.text
  topMenuEl.appendChild(a)
  
  let topMenulinks = a.href
  
  function stopClick(){
    stopClick.preventDefault;
    if(this.click !== topMenulinks){
      return;
    }
    console.log('clicking')
  }
  topMenuEl.addEventListener('click', stopClick)
})