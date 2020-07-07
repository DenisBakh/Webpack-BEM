<div align="center">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Webpack Template</h1>
  <p>
    Hotel-Toxin - сайт, написанный по методологии БЭМ с компонентной архитектурой исходных файлов. Сборщиком проекта выступает Webpack, который отлично подходит под модульную верстку и разработку приложений.
  </p>
  <p>Автор разработки приложения: Бахматов Денис</p>
</div>


## Установка проекта:

``` bash
# Download repository:
git clone https://github.com/DenisBakh/Hotel-Toxin Hotel-Toxin

# Go to the app:
cd Hotel-Toxin

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

* `src/main` - главный entry - файл для основных стилей и require
* `src/pages` - страницы сайта
* `src/project` - блоки, переменные, миксины, для дальнейших импортов на страницы
* `src/project/static` - дополнительные статичные файлы для сайта, такие как favicon
* `src/project/common.blocks` - общие блоки, переменные, миксины
* `src/project/common.blocks/_common` - обнулятор CSS, переменные, общие миксины, иконки соц сетей
* `src/project/common.blocks/ui_kit` - элементы проекта, разбитые на блоки в соответствии с методологией БЭМ
* `webpack.base.conf.js` - базовые настройки `Webpack`
* `webpack.build.conf.js` - настройки `Webpack` для `build` или `релиза проекта`
* `webpack.dev.conf.js` - настройки `Webpack` для `dev` или `разработки проекта`
