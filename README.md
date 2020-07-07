<div align="center">
  <img width="159" height="60" src="https://github.com/DenisBakh/Hotel-Toxin/blob/master/src/project/common.blocks/ui_kit/logotype/logo_UI/Logo.png">
  <h1>Hotel-Toxin</h1>
  <p>
    Hotel-Toxin - сайт, написанный по методологии БЭМ с компонентной архитектурой исходных файлов. Сборщиком проекта выступает Webpack, который отлично подходит под модульную верстку и разработку приложений.
  </p>
  <p>Автор разработки приложения: Бахматов Денис</p>
</div>

## Project Links:

* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/index.html" target="_blank">`Главная страница`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/index.html
* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/search.html" target="_blank">`Cтраница подбора номера по параметрам`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/search.html
* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/detail.html" target="_blank">`Cтраница с описанием номера`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/detail.html
* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/registration.html" target="_blank">`Страница регистрации и входа в лк`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/registration.html

* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/ui_index.html" target="_blank">`UI-Kit Главная страница`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/ui_index.html
* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/ui_color&type.html" target="_blank">`UI-Kit главная страница`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/ui_color&type.html
* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/ui_form_elements.html" target="_blank">`UI-Kit основные компоненты`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/ui_form_elements.html
* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/ui_cards.html" target="_blank">`UI-Kit компоненты Cards`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/ui_cards.html
* <a href="https://denisbakh.github.io/Hotel-Toxin/dist/ui_headersfooters.html" target="_blank">`UI-Kit компоненты Header&Footer`</a> - https://denisbakh.github.io/Hotel-Toxin/dist/ui_headersfooters.html



## Project install:

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
