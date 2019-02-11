# michaelclaus.github.io

Michael Claus Portfolio
This project was built using Bootstrap, jQuery and fancybox.

One challenging aspect of the project was getting the nav links to reflect the browsers position. I decided to write my own jQuery for this as opposed to using bootstraps built in scrollspy. While writing the $, I tried my best to create a new function to execute any code that I had to copy and paste once. So as a result, theres quite a bit going on in the scroll.js file. It probably took me longer to 'modularize' everything than it would have I just copy and pasted code over and over again, but this way it'll be simple if I ever need to add to the site or need to change a single variable. The code interacts with itself in a more dynamic way.

Another challenge was writing the jQuery for the testimonial timer. The JS logic itself is pretty straight forward, but the disappearing and reappearing html elements were messing around with each others spacing as they are block elements. I wanted each element to smoothly fade out and in into each other, but when attempting to do this the upcoming html element would start loading underneath the current one and it would look really bad and awkward. So to fix this, I had to immediately remove the current element with display none before fading in the new element.

Also, bootstrap was a bit of a challenge as I am not very familiar with it. The documentation does a great job of providing examples, however the explaniations don't break down each and every different class and what they are doing. So I would have to sort of reverse engineer stuff to figure out what exactly was going on and use lots of trial and error, trying different classes on different elements to fully understand what was going on.

I wanted to build my own lightbox instead but was having trouble understanding how they work so I ended up using a package called fancybox. it's extremely clean and easy.
