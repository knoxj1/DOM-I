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
logo.setAttribute('src', siteContent["nav"]["img-src"]
)

let headerImg = document.getElementById("cta-img")
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

//setting the nav bar items

let nav = document.querySelectorAll('a');
nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";

//setting up cta header
let ctaHead = document.querySelector('.cta-text h1');
ctaHead.innerHTML = `DOM <br> is <br> Awesome`;

//cta button

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started';

//features text

let topContent = document.querySelectorAll('.text-content');



topContent[0].getElementsByTagName('h4')[0].innerHTML = 'Features';


topContent[0].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["features-content"];



//about text



topContent[1].getElementsByTagName('h4')[0].innerHTML = 'About';

topContent[1].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["about-content"];

//middle image

let middleImg = document.querySelector(".middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//services
let botContent = document.querySelectorAll('.bottom-content .text-content');



botContent[0].getElementsByTagName('h4')[0].innerHTML = 'Services';


botContent[0].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["services-content"];

//products

botContent[1].getElementsByTagName('h4')[0].innerHTML = 'Products';


botContent[1].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["product-content"];

//vision

botContent[2].getElementsByTagName('h4')[0].innerHTML = 'Vision';


botContent[2].getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["vision-content"];

//contact

let contact = document.querySelector('.contact');

contact.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4'];
 



contact.getElementsByTagName('p')[0].innerHTML = `123 Way 456 Street<br> Somewhere, USA`;

contact.getElementsByTagName('p')[1].innerHTML = `1 (888) 888-8888`;

contact.getElementsByTagName('p')[2].innerHTML = `sales@greatidea.io`;

//footer

let footer = document.querySelector('footer');
footer.getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright'];


//end

