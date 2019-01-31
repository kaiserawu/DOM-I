const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector('nav');
let navItems = nav.querySelectorAll('a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

let cta = document.querySelector('.cta');
let h1 = cta.querySelector('h1');
let ctaButton = cta.querySelector('button');
let ctaImg = cta.querySelector('#cta-img');
h1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent.cta['img-src']);

let mainContent = document.querySelector('.main-content');
let topContent = mainContent.querySelector('.top-content');
let topContentSecs = topContent.querySelectorAll('.text-content');
let middleImg = mainContent.querySelector('#middle-img');
let bottomContent = mainContent.querySelector('.bottom-content');
let bottomContentSecs = bottomContent.querySelectorAll('.text-content');
let middleSections = {
  'features': topContentSecs[0],
  'about': topContentSecs[1],
  'services': bottomContentSecs[0],
  'product': bottomContentSecs[1],
  'vision': bottomContentSecs[2]
};
for (let key in middleSections) {
  middleSections[key].querySelector('h4').textContent = siteContent['main-content'][`${key}-h4`];
  middleSections[key].querySelector('p').textContent = siteContent['main-content'][`${key}-content`];
}
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contact = document.querySelector('.contact');
let contactHeader = contact.querySelector('h4');
let contactContent = contact.querySelectorAll('p');
contactHeader.textContent = siteContent.contact['contact-h4'];
let addressLines = {
  'address': contactContent[0],
  'phone': contactContent[1],
  'email': contactContent[2]
};
for (let key in addressLines) {
  addressLines[key].textContent = siteContent.contact[key];
}

let footer = document.querySelector('footer');
let copyright = footer.querySelector('p');
copyright.textContent = siteContent.footer['copyright'];