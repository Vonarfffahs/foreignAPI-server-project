# University Information Fetcher
Це проект, що використовує [University Domains and Names Data List API](https://github.com/Hipo/university-domains-list-api) для отримання інформації про університети з усього світу.
## Встановлення та запуск
1. Клонуйте репозиторій:
```
git clone git@github.com:Vonarfffahs/foreignAPI-server-project.git
```
або
```
git clone https://github.com/Vonarfffahs/foreignAPI-server-project.git
```
2. Завантажте усі залежності проекту:
```
npm i
```
3. Запустіть проект:
```
nodemon app.js
```
# Пошук за допомогою API
```
http://universities.hipolabs.com

http://universities.hipolabs.com/search?name=middle

http://universities.hipolabs.com/search?name=middle&country=turkey
```
# API Search Endpoint
### Request
```
/search?name=Middle
```
### Response
```
[
{
web_page: "http://www.meu.edu.jo/",
country: "Jordan",
domain: "meu.edu.jo",
name: "Middle East University"
},
{
web_page: "http://www.odtu.edu.tr/",
country: "Turkey",
domain: "odtu.edu.tr",
name: "Middle East Technical University"
},
{
web_page: "http://www.mtsu.edu/",
country: "USA",
domain: "mtsu.edu",
name: "Middle Tennessee State University"
},
{
web_page: "http://www.mga.edu/",
country: "USA",
domain: "mga.edu",
name: "Middle Georgia State College"
},
{
web_page: "http://www.mdx.ac.uk/",
country: "United Kingdom",
domain: "mdx.ac.uk",
name: "Middlesex University"
},
{
web_page: "http://www.middlebury.edu/",
country: "USA",
domain: "middlebury.edu",
name: "Middlebury College"
}
]
```
### Request
```
/search?name=Middle&country=Turkey
```
### Response
```
[
{
web_page: "http://www.odtu.edu.tr/",
country: "Turkey",
domain: "odtu.edu.tr",
name: "Middle East Technical University"
}
]
```
## Created and maintained by [Hipo](http://www.hipolabs.com/)
