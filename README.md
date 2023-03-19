## MISSION

Create an application where products are displayed. The user will be able to click on a product to see details about that product. Further will the user to be able to see only a certain category and also search for a product.

## Prerequisites

### Datafetching

The data shall not be imported.
No libraries or frameworks shall be used for getting the data.
Do not use localstorage.

### Searchbar

In the application there shall be a searchbar.
The searchbar will only search when enter or a search-button is clicked.
There should be up to 5 searches saved for the user, regardless if he reloads the page or not.

### Filterbuttons

There shall be buttons so that the user easily can see only a certain category, or all products.

### Pages

Following pages shall be in the application:

- A page that displays all products
- A page that displayes details about a product
- A page for errors or 404s

### Styling

Use any stylingtool, framework or library that fits the mission.
</br></br>

## Solutions

### Datafetching

I was going for an async/fetch function, and used useContext to store the data to make it easy to access even for the details page.</br>
I noticed however that 'fetch' only works on remote api:s, while for local api:s you need to use await 'import' instead
to make it work in a live webpage. fetch will work in the dev-environment only.

### Searchbar

Although useRef is typically used to manipulate the UI, it can also store data. The benefit of useRef over useState is that useState will re-render every button pressed by the user. I also skipped useDebounce since I didn't want to care whether the user is a fast or slow typer.

### Filterbuttons

I went very simple here and used the previous searchfunction that I made for the searchbar. For each button, I just added a searchphrase that matched each category and passed that value as a searchphrase.

### Styling

The app is styled with styled-components. The animations are done with keyframes and the Famer-motion library.</br>
The advantage of using keyframes is that it is very easy on the computer.

### Extra

I added a scrollToTop hook for mobile users. Before this, if the user scrolled down and clicked a product, the detail-page would not start from the top, but a bit further down.
</br>
</br>
For the preloader I added sessionStorage. This way the preloader will only run when the session is started, and not everytime a page is refreshed.
</br>
</br>
I also decided to add a modal for the user to see a bigger picture of an item.

## Issues

### Routing

This page is deployed on Netlify, and this is why the node router that is running in production will not work on the built page (the folders used in production will not be found). This is shown when you re-fresh the page from a route (that is not the base url), you will get a 404 from Netlify (it will also be unable to route to the error page created in the application).
<br/><br/>
To get around this I went with HashRouter from react-router-dom (built from the history API). This will add a (#) in the url. The browser will interpret this hashtag as an id, from which the hisory api will serve the deisred page.
<br/><br/>
For a real life application, where you use another server to host your page, this problem will not be the same.

### Animating

There was some issues with the pagetranisions being a bit laggy on mobile devices when using Framer Motion. I tried to get around this with lazy loading and some other techniques, but I didn't get quite happy with the result. It proves that scaling and some other properties with Framer motion and mobile devices doesn't work too well. So for the animation to the modal, I wrote my own animation, by adding a delay to the routing and animate around that.

## Tools

<img align="left" src="https://img.shields.io/badge/-React-white?style=for-the-badge&logo=React&logoColor=#61DAFB"/>
</br>
</br>
<img align="left" src="https://img.shields.io/badge/-TypeScript-white?style=for-the-badge&logo=TypeScript&logoColor=#61DAFB"/>
</br>
</br>
<img align="left" src="https://img.shields.io/badge/-Styled%20Components-white?style=for-the-badge&logo=styled-components&logoColor=DB7093" />
</br>
</br>
<img align="left" src="https://img.shields.io/badge/-Framer-white?style=for-the-badge&logo=framer&logoColor=DB7093" />
</br>
</br>

## Demo

[demo](https://jcomputers.netlify.app// "Joakim Computers")

![](/public/pic_001.png "landing page")
</br>
</br>
![](/public/pic_002.png "landing page")
</br>
</br>
![modal](/public/pic_003.png "modal")

## Run

yarn dev
