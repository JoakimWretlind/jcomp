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

### Datafetching

I went with an async/fetch function, and used useContext to store the data.</br>
The reason for useContext was to have all data easily accessible when moving between the products.

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

## Run

yarn dev
