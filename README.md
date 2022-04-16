<p align="center">
    <a href='https://github.com/byteofmonkey/TestReadme/blob/master/LICENSE'>
      <img src='https://img.shields.io/github/license/byteofmonkey/TestReadme?color=ffcc66&style=for-the-badge' alt='bage'/>
     </a>
    <a href='https://nodejs.org'>
      <img src='https://img.shields.io/static/v1?label=Node&message=14.17.3&color=97ca00&style=for-the-badge' alt='bage'/>
     </a>
    <a href='https://nodejs.org'>
      <img src='https://img.shields.io/static/v1?label=npm&message=7.19.1&color=97ca00&style=for-the-badge' alt='bage'/>
     </a>
    <a href='https://prettier.io/'>
      <img src="https://img.shields.io/static/v1?label=code style&message=prettier&color=97ca00&style=for-the-badge" alt='bage'/>
     </a>
</p>

<p align="center">
      <img src="https://img.shields.io/github/languages/code-size/byteofmonkey/REGINOX" alt='bage'/>
</p>

<p align='center'>
        <img height='300' src='https://github.com/byteofmonkey/TestReadme/blob/master/readme/desktop.gif' alt='preview'/>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#project-structure">Project structure</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

<p align='center'>**Project dependencies:**</p>

<p align='center'>
   <a href='https://www.npmjs.com/package/classnames' target='_blanck'>rc-collapse</a> |
   <a href='https://www.npmjs.com/package/classnames' target='_blanck'>classnames</a> |
   <a href='https://www.npmjs.com/package/sass' target='_blanck'>sass</a> |
   <a href='https://www.npmjs.com/package/normalize-scss' target='_blanck'>normalize-scss</a> |
   <a href='https://www.npmjs.com/package/react-burger-menu' target='_blanck'>react-burger-menu</a> |
   <a href='https://www.npmjs.com/package/react-collapsible' target='_blanck'>react-collapsible</a> |
   <a href='https://www.npmjs.com/package/react-responsive' target='_blanck'>react-responsive</a> |
   <a href='https://www.npmjs.com/package/react-select' target='_blanck'>react-select</a> |
   <a href='https://www.npmjs.com/package/react-tabs' target='_blanck'>react-tabs</a> |
   <a href='https://www.npmjs.com/package/redux-persist' target='_blanck'>redux-persist</a> |
   <a href='https://www.npmjs.com/package/redux-thunk' target='_blanck'>redux-thunk</a> |
   <a href='https://www.npmjs.com/package/reselect' target='_blanck'>reselect</a> |
   <a href='https://www.npmjs.com/package/swiper' target='_blanck'>swiper</a> |
   <a href='https://www.npmjs.com/package/use-onclickoutside' target='_blanck'>use-onclickoutside</a> |
</p>

**Features :**

- [x] Responsive design
- [x] Advanced page navigation
- [x] Compare products
- [x] State retention
- [x] Information pages
- [x] Loading on demand
- [x] Advanced filters by categories and keywords (cheap/expensive/popular/plastic/glass/manufacturer etc)
- [x] Extendable filters(simple as adding filter definition, backend)
- [x] Takable link with selected search queries
- [x] Reset filters button
- [x] Retain selected search when navigating
- [x] Advanced product cards(price / promo / discount / rating)
- [x] Advanced navigation through product image everywhere
- [x] Additional product blocks(recomended/popular)
- [x] Responsive filters bar(tablet/phone)
- [x] Fourteen unique pages

**Built with** [React](https://nextjs.org/) & [Redux](https://redux.js.org/).

<!-- GETTING STARTED -->

# Getting Started

## Prerequisites

You should have [Nodejs](https://reactjs.org/) and [Git](https://git-scm.com/downloads) installed on your PC.

## Setup

1. Install all dependencies(attn: project have two package.json files):

   ```sh
     npm i
     cd client
     npm i
     cd ..
   ```

2. run project
   ```sh
     npm run dev
   ```

# Project structure

Server:

- entry point /server.js
- api /api
- database /api/db

Client:

- /client/components - repeating components
- /client/pages - page component & page related components

**server end-points :**

| address:                  | method: |                 query string :                 | response : |
| :------------------------ | :-----: | :--------------------------------------------: | :--------- |
| /menu                     |   get   |                       -                        | object     |
| /sertificates             |   get   |                       -                        | array      |
| /brands                   |   get   |                       -                        | array      |
| /promo                    |   get   |                       -                        | array      |
| /new                      |   get   |                       -                        | array      |
| /home                     |   get   |                       -                        | object     |
| /catalogs                 |   get   | ?size=pageSize[number]&current=current[number] | object     |
| /articles                 |   get   |               ?page=page[number]               | object     |
| /articles/:article        |   get   |                       -                        | object     |
| /products/:url            |   get   |                       -                        | object     |
| /product/:url/:productUrl |   get   |                       -                        | object     |
| /reviews/:url/:productUrl |   get   |           ?size=currentSize[number]            | array      |
| /cart                     |   get   |                       -                        | object     |
| /similar-products         |   get   |                       -                        | array      |
| /compare                  |   get   |                       -                        | object     |

<!-- CONTRIBUTING -->

# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contribution you make would be **appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

# License

Distributed under the `MIT` License. See [LICENSE](https://github.com/byteofmonkey/REGINOX/blob/main/LICENSE) for more information.
