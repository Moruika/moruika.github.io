# README — MORUIKA.GITHUB.IO

Инструкция по редактированию сайта **Morui / Moruika**.

Сайт собран на **Jekyll** и размещается через **GitHub Pages**. Большинство изменений делается обычным редактированием `.md`, `.yml`, `.html`, `.css` и изображений внутри репозитория.

---

## 1. Самое главное: где что менять

| Что нужно изменить | Файл |
|---|---|
| Имя, описание сайта, внешние профили, статус | `_config.yml` |
| Главная страница EN | `index.md` |
| Главная страница RU | `ru/index.md` |
| Страница Projects EN | `projects.md` |
| Страница Projects RU | `ru/projects.md` |
| Страница Team EN | `team.md` |
| Страница Team RU | `ru/team.md` |
| Ссылки EN | `links.md` |
| Ссылки RU | `ru/links.md` |
| Followers / Cult EN | `cult.md` |
| Followers / Cult RU | `ru/cult.md` |
| Тексты кнопок, меню и интерфейса EN/RU | `_data/ui.yml` |
| Состав команды | `_data/roster.yml` |
| Достижения команды и призовые | `_data/achievements.yml` |
| Подписчики / supporters | `_data/supporters.yml` |
| Клипы | `_data/clips.yml` |
| Галерея | `_data/gallery.yml` |
| Верхняя часть сайта, меню, аватар, баннер | `_includes/nav.html` |
| Общий SEO, `<title>`, description, canonical, hreflang, JSON-LD | `_layouts/default.html` |
| Разметка отдельных записей блога | `_layouts/post.html` |
| Цвета, размеры, расположение, адаптивность | `assets/css/style.css` |
| JavaScript и интерактив | `assets/js/site.js` |
| Основные изображения | `assets/img/` |
| Аватары состава | `assets/img/roster/` |
| Иконки позиций Dota | `assets/img/positions/` |
| RSS | `_config.yml` + `jekyll-feed` |
| Sitemap | генерируется Jekyll-плагином `jekyll-sitemap` |
| Image Sitemap | `image-sitemap.xml` |
| robots.txt | `robots.txt` |
| IndexNow | `scripts/indexnow.py` |

---

# 2. Если нужно просто обновить содержимое

## Главная EN

Файл:

```text
index.md
```

Здесь находится основной английский текст главной страницы.

## Главная RU

Файл:

```text
ru/index.md
```

Это отдельная русская версия. Она не переводится автоматически из `index.md`, поэтому при изменении смысловой информации желательно обновлять обе страницы.

---

# 3. Как менять название и описание сайта

Главные настройки находятся в:

```text
_config.yml
```

В начале файла:

```yaml
title: "Morui / Moruika — Gaming, Development & Creative Projects"
description: "Official Morui / Moruika website — artist, developer, musician, and Dota 2 captain."
```

### `title`

Это основное название сайта, используемое Jekyll и частично SEO-разметкой.

### `description`

Общее описание сайта. Оно используется как запасное SEO-описание, если конкретная страница не указала своё.

---

# 4. Как менять имя, ссылки и связанные профили

В `_config.yml` есть блок:

```yaml
author:
  name: "Kirill Vinogradov"
  alternate_name: ["Morui", "Moruika"]
  url: "https://moruika.github.io/"
  sameAs:
    - "https://github.com/Moruika"
    - "https://www.youtube.com/@fuckedmorui"
    ...
```

## `author.name`

Полное имя, которое используется в SEO и структурированных данных.

## `alternate_name`

Альтернативные имена:

```yaml
alternate_name: ["Morui", "Moruika"]
```

Сюда можно добавлять варианты имени, под которыми сайт может встречаться в интернете.

## `sameAs`

Это **очень важный блок для связи сайта с внешними профилями**.

Каждая строка должна содержать полный URL профиля, который действительно относится к тому же человеку/проекту.

Пример:

```yaml
sameAs:
  - "https://github.com/Moruika"
  - "https://www.youtube.com/@fuckedmorui"
  - "https://www.tiktok.com/@maidmorui"
```

При добавлении нового официального профиля его желательно добавлять одновременно:

1. в `_config.yml` → `author.sameAs`;
2. в `links.md`;
3. в `ru/links.md`.

---

# 5. Как менять текущий статус в шапке

В `_config.yml`:

```yaml
current_status_en: "Creating a game."
current_status_ru: "Делаю игру."
```

Пример:

```yaml
current_status_en: "Working on Zombex:RE."
current_status_ru: "Работаю над Zombex:RE."
```

Эта информация автоматически появляется в верхней части сайта.

---

# 6. Как менять текст интерфейса и меню

Файл:

```text
_data/ui.yml
```

В нём две секции:

```yaml
en:
  ...

ru:
  ...
```

Это словарь интерфейса. Здесь находятся:

- названия пунктов меню;
- подписи шапки;
- статус;
- названия блоков Team/Cult/Archive;
- подписи кнопок;
- системные надписи;
- часть SEO-текстов по умолчанию.

Например:

```yaml
nav_projects: Projects
nav_team: Team
nav_blog: Blog
nav_cult: Cult
nav_links: Links
```

Русская версия редактируется отдельно:

```yaml
nav_projects: Проекты
nav_team: Команда
nav_blog: Блог
nav_cult: Культ
nav_links: Ссылки
```

**Важно:** не заменяй ключи слева. Меняется только значение справа.

Правильно:

```yaml
nav_team: Состав
```

Неправильно:

```yaml
nav_roster: Состав
```

если код сайта не использует новый ключ.

---

# 7. Projects — где редактировать проекты

Файлы:

```text
projects.md
ru/projects.md
```

Карточки проектов сейчас находятся непосредственно в этих файлах.

Обычно у карточки есть:

```html
<div class="project" data-status="current" data-tags="current,creative">
```

и далее:

```html
<h3>YouTube</h3>
<p>Описание...</p>
<a href="https://...">...</a>
```

## Статусы

Поддерживаются фильтры:

```text
current
creative
completed
paused
```

Пример:

```html
<div class="project" data-status="paused" data-tags="paused,creative">
```

Тогда карточка будет попадать в фильтр `Paused`.

### Добавить новый проект

Скопируй существующий блок:

```html
<div class="project"> ... </div>
```

и измени:

- `data-status`;
- `data-tags`;
- иконку;
- название `<h3>`;
- описание;
- внешний URL.

Не забудь аналогично обновить `ru/projects.md`.

---

# 8. Links — где менять все внешние ссылки

Файлы:

```text
links.md
ru/links.md
```

Здесь ссылки прописаны непосредственно в HTML.

Основной вид строки:

```html
<a class="platform-link" href="https://example.com" target="_blank" rel="me noopener noreferrer">
```

При замене профиля меняй **только URL**, если остальное оформление подходит.

## Важно для Twitch

Текущую Twitch-ссылку на сайте не менять без необходимости. При замене проверяй одновременно `_config.yml`, `projects.md`, `ru/projects.md`, `links.md` и `ru/links.md`, чтобы старый и новый адрес не смешались.

---

# 9. Team — как менять состав

Самый удобный файл:

```text
_data/roster.yml
```

**Не нужно вручную переписывать карточки игроков в `team.md`.**

Пример записи:

```yaml
- name: Morui
  avatar: morui
  role_en: Captain
  role_ru: Капитан
  positions: ["3", "4"]
  featured: true
  links:
    steam: ""
    stratz: ""
```

## Что означает каждое поле

### `name`

Имя игрока на карточке.

### `avatar`

Имя файла аватара **без расширения**.

Например:

```yaml
avatar: heryn
```

будет искать:

```text
assets/img/roster/heryn.webp
```

### `role_en` / `role_ru`

Роль игрока:

```yaml
role_en: Coach
role_ru: Коуч
```

Можно оставить пустыми:

```yaml
role_en: ""
role_ru: ""
```

### `positions`

Позиции Dota:

```yaml
positions: ["1"]
```

или:

```yaml
positions: ["3", "4"]
```

Используются номера 1–6.

### `featured`

Если поставить:

```yaml
featured: true
```

карточка получает специальный класс оформления.

### `staff`

Если поставить:

```yaml
staff: true
```

игрок отображается как staff/штаб.

### `links`

Ссылки на профили.

Например:

```yaml
links:
  steam: "https://steamcommunity.com/id/example"
  stratz: "https://stratz.com/players/123456"
```

Пустая строка означает, что значок ссылки не показывается.

---

# 10. Как добавить нового игрока

1. Добавить фотографию в:

```text
assets/img/roster/
```

2. Лучше иметь WebP-файл:

```text
assets/img/roster/new-player.webp
```

3. Добавить запись в `_data/roster.yml`:

```yaml
- name: New Player
  avatar: new-player
  role_en: ""
  role_ru: ""
  positions: ["4"]
  links:
    steam: ""
    stratz: ""
```

После этого игрок автоматически появится в обеих языковых версиях Team.

---

# 11. Позиции Dota — иконки

Файлы:

```text
assets/img/positions/position-1.svg
assets/img/positions/position-2.svg
assets/img/positions/position-3.svg
assets/img/positions/position-4.svg
assets/img/positions/position-5.svg
assets/img/positions/position-6.svg
```

Обычно их не нужно редактировать.

Если нужно заменить конкретную иконку позиции — замени соответствующий SVG с тем же именем.

---

# 12. Team — достижения и призовые

Файл:

```text
_data/achievements.yml
```

Сумма призовых:

```yaml
prize_amount: "$250"
```

Чтобы изменить:

```yaml
prize_amount: "$500"
```

Достижение выглядит так:

```yaml
- title_en: "Turbo Tournament Winner"
  title_ru: "Победитель турбо-турнира"
  desc_en: "English description."
  desc_ru: "Русское описание."
```

Изменение этого файла автоматически отражается на обеих страницах Team.

---

# 13. Cult / Followers — как добавлять подписчиков

Файл:

```text
_data/supporters.yml
```

Пример:

```yaml
- name: ExampleName
  kind: SUB
  url: "https://example.com/profile"
```

## Значения `kind`

Используемая схема:

```text
SUB = Twitch subscriber
SUP = supporter / donor
PAT = long-term patron
```

Ссылка необязательна.

Можно оставить:

```yaml
url: ""
```

Тогда имя покажется без внешней ссылки.

Список автоматически выводится и на:

```text
/cult/
/ru/cult/
```

---

# 14. Блог — как добавить запись

Новые записи находятся в:

```text
_posts/
```

Каждая запись — отдельный Markdown-файл.

Пример имени:

```text
2026-09-16-zapusk-saita.md
```

Дата в начале файла участвует в формировании URL.

## Шаблон записи

```yaml
---
title: "Название"
description: "Краткое описание записи."
lang: ru
lang_alt_url: /blog/2026/09/25/example/
category: "Сайт"
last_modified_at: 2026-09-25
section_label: "BLOG / POST"
permalink: /ru/blog/2026/09/25/example/
---

Основной текст записи.
```

Для английской версии:

```yaml
lang: en
```

и `permalink` должен начинаться с:

```text
/blog/
```

Для русской:

```text
/ru/blog/
```

## Связь EN ↔ RU

`lang_alt_url` должен указывать на перевод той же записи.

Например:

```yaml
lang_alt_url: /ru/blog/2026/09/25/example/
```

---

# 15. Очень важный момент про блог

Файлы в `_posts/` имеют префикс даты и специальный формат Jekyll.

Не переименовывай их произвольно без изменения `permalink`, если запись уже опубликована: это может изменить URL и привести к потере старой индексированной страницы.

Если URL нужно сохранить — лучше оставить существующий `permalink`.

---

# 16. Archive / Gallery / Clips

Сейчас архивные данные заготовлены в:

```text
_data/gallery.yml
_data/clips.yml
```

Оба файла пока пустые или содержат только пример/пустой массив.

### Clips

Формат предполагается такой:

```yaml
- title: "Funny draft"
  platform: Twitch
  url: "https://www.twitch.tv/..."
  note_en: "Description"
  note_ru: "Описание"
```

### Gallery

Пока массив пустой:

```yaml
[]
```

Эти файлы можно заполнять при дальнейшей реализации галереи и клипов.

---

# 17. Почему Archive сейчас не индексируется

Файлы:

```text
archive.md
ru/archive.md
```

содержат:

```yaml
robots: "noindex, follow"
sitemap: false
```

Это означает, что архив намеренно исключён из индексации.

Пока раздел пустой, **не нужно снимать `noindex` просто ради количества страниц**.

Когда в архиве появится полноценный полезный контент, SEO-настройку можно пересмотреть.

---

# 18. Изображения сайта

Основные изображения:

```text
assets/img/
```

Важные файлы:

```text
assets/img/profile-banner.jpg
assets/img/profile-banner.webp

assets/img/morui-avatar.jpg
assets/img/morui-avatar.webp

assets/img/cult-of-maids.jpg
assets/img/cult-of-maids.webp
assets/img/cult-of-maids.svg
```

## Аватары состава

```text
assets/img/roster/
```

Желательно сохранять формат:

```text
.webp
```

с тем же именем, которое указано в `_data/roster.yml`.

---

# 19. Как правильно заменить главное фото/аватар

Если меняется фотография Morui:

1. Замени соответствующие файлы в `assets/img/`.
2. Сохрани имена, если не требуется менять код.
3. Если меняешь имя файла — проверь `_includes/nav.html`, `_layouts/default.html` и `image-sitemap.xml`.

Текущий аватар:

```text
assets/img/morui-avatar.jpg
assets/img/morui-avatar.webp
```

Текущий баннер:

```text
assets/img/profile-banner.jpg
assets/img/profile-banner.webp
```

---

# 20. SEO — где редактировать

Основная SEO-логика находится здесь:

```text
_layouts/default.html
```

Там формируются:

- `<title>`;
- `<meta name="description">`;
- `<meta name="robots">`;
- canonical;
- `hreflang`;
- Open Graph;
- Twitter Card;
- Schema.org / JSON-LD;
- `WebSite`;
- `Person`;
- `WebPage`;
- `ProfilePage`;
- `BlogPosting`;
- `BreadcrumbList`.

### На отдельных страницах

SEO-описание задаётся во front matter:

```yaml
title: Projects & Creative Work
description: "Morui / Moruika projects..."
lang: en
lang_alt_url: /ru/projects/
```

Для каждой важной страницы желательно иметь:

```yaml
title: ...
description: ...
lang: en
lang_alt_url: ...
last_modified_at: YYYY-MM-DD
```

---

# 21. Google / Яндекс — что НЕ надо редактировать без причины

В `_layouts/default.html` есть проверочные мета-теги:

```html
<meta name="msvalidate.01" ... />
<meta name="google-site-verification" ... />
```

Если Search Console и Яндекс.Вебмастер уже подтверждены через них, **не меняй эти значения**.

---

# 22. Sitemap

В актуальной версии сайта основной sitemap генерируется Jekyll-плагином:

```yaml
plugins:
  - jekyll-feed
  - jekyll-sitemap
```

Поэтому основной:

```text
/sitemap.xml
```

не следует вручную поддерживать как обычную страницу.

Jekyll собирает его из индексируемых страниц автоматически.

---

# 23. Image Sitemap

Дополнительный файл:

```text
image-sitemap.xml
```

Он предназначен для обнаружения важных изображений сайта.

При добавлении новых важных изображений для SEO проверь, нужно ли добавить их туда.

Особенно это актуально для:

- главного фото;
- баннера;
- эмблемы Cult Of Maids;
- фотографий состава;
- будущих важных изображений проектов.

---

# 24. robots.txt

Файл:

```text
robots.txt
```

Сейчас он разрешает обход сайта и сообщает поисковикам адреса Sitemap:

```text
User-agent: *
Allow: /

Sitemap: https://moruika.github.io/sitemap.xml
Sitemap: https://moruika.github.io/image-sitemap.xml
```

Без необходимости ничего здесь менять не надо.

---

# 25. IndexNow

Скрипт:

```text
scripts/indexnow.py
```

Он собирает страницы из front matter и отправляет их через IndexNow.

Файл-ключ:

```text
12af1af38f41426ea4c30516b6b6a896.txt
```

Не удаляй этот файл, если продолжаешь использовать IndexNow.

Скрипт автоматически пропускает страницы с:

```yaml
robots: "noindex, follow"
```

и страницы с:

```yaml
sitemap: false
```

Поэтому `/archive/` и `/ru/archive/` не должны отправляться как обычные индексируемые страницы.

---

# 26. Верхняя часть сайта и меню

Файл:

```text
_includes/nav.html
```

Здесь находится:

- баннер;
- аватар;
- имя;
- подпись/роль;
- текущий статус;
- переключатель языка;
- главное меню.

Обычно **не нужно менять HTML этого файла**, если требуется просто изменить текст. Сначала проверь `_config.yml` и `_data/ui.yml`.

---

# 27. Общий дизайн сайта

Файл:

```text
assets/css/style.css
```

Здесь находятся практически все визуальные настройки:

- цвета;
- фон;
- шрифты;
- размеры;
- сетки;
- карточки;
- мобильная версия;
- анимации;
- кнопки;
- отступы;
- меню.

## Если нужно поменять внешний вид

Ищи в CSS нужный класс, например:

```css
.site-title
.profile-banner
.platform-link
.member-card
.project
```

Не переписывай весь CSS ради одной мелочи — лучше изменить конкретный существующий блок.

---

# 28. JavaScript

Файл:

```text
assets/js/site.js
```

Используется для интерактивности сайта.

В частности, здесь находятся клиентские функции для элементов вроде фильтра проектов и других динамических частей интерфейса.

Если меняется только текст/ссылка/изображение — JavaScript трогать не нужно.

---

# 29. Иконки соцсетей и брендов

Файл:

```text
_includes/brand-icon.html
```

Здесь находится большая коллекция SVG-иконок брендов.

Использование выглядит примерно так:

```liquid
{% include brand-icon.html icon='youtube' %}
```

или:

```liquid
{% include brand-icon.html icon='twitch' %}
```

Если на сайте появился неизвестный/сломанный значок социальной сети — проверяй сначала этот файл.

---

# 30. Как добавлять новую иконку

Если `brand-icon.html` уже содержит нужную иконку, ничего добавлять не нужно — достаточно указать её имя:

```liquid
{% include brand-icon.html icon='youtube' %}
```

Если иконки нет, потребуется добавить соответствующий SVG/ветку в `_includes/brand-icon.html`.

---

# 31. Как работает перевод

Каждая важная страница существует в двух вариантах:

```text
/...
/ru/...
```

Примеры:

```text
/projects/
/ru/projects/
```

```text
/team/
/ru/team/
```

```text
/links/
/ru/links/
```

Для связи версий используется:

```yaml
lang_alt_url: /ru/...
```

или обратный URL для русской страницы.

Если добавляешь новую страницу — желательно сразу создавать обе языковые версии.

---

# 32. Как создать новую обычную страницу

Например, нужна страница `/about/`.

Создай:

```text
about.md
```

с front matter:

```yaml
---
layout: default
title: About
permalink: /about/
lang: en
description: "About Morui / Moruika."
lang_alt_url: /ru/about/
last_modified_at: 2026-09-25
---

Текст страницы.
```

Русскую версию:

```text
ru/about.md
```

с:

```yaml
permalink: /ru/about/
lang: ru
lang_alt_url: /about/
```

---

# 33. Что желательно делать при изменении страницы

Для существующей страницы после существенных изменений обновляй:

```yaml
last_modified_at: YYYY-MM-DD
```

Например:

```yaml
last_modified_at: 2026-09-25
```

Это используется в SEO-разметке страницы.

---

# 34. Что НЕ стоит делать

### Не редактировать сгенерированные файлы без необходимости

Не создавай второй ручной `sitemap.xml`, если используется `jekyll-sitemap`.

### Не удалять `.yml`-структуру

Файлы в `_data/` специально отделяют данные от шаблонов. Это упрощает дальнейшее редактирование.

### Не менять URL без причины

Особенно для страниц блога, которые уже могли попасть в Google/Яндекс.

### Не добавлять случайные URL в `sameAs`

Туда должны попадать только профили, которые действительно относятся к тому же человеку/проекту.

### Не прописывать HTML вместо YAML-значений

Например, в `_data/roster.yml` должно быть:

```yaml
name: Morui
```

а не HTML-разметка.

---

# 35. Если нужно поменять только человека в составе

Менять:

```text
_data/roster.yml
```

Не менять:

```text
team.md
ru/team.md
```

если не требуется менять сам текст страницы.

---

# 36. Если нужно поменять только ссылку

Для основных публичных профилей:

```text
links.md
ru/links.md
_config.yml
```

Для ссылки отдельного игрока:

```text
_data/roster.yml
```

---

# 37. Если нужно поменять только фотографию

### Главный аватар

```text
assets/img/morui-avatar.*
```

### Баннер

```text
assets/img/profile-banner.*
```

### Эмблема

```text
assets/img/cult-of-maids.*
```

### Игрок

```text
assets/img/roster/<avatar>.*
```

где `<avatar>` совпадает с `avatar:` в `_data/roster.yml`.

---

# 38. Если после изменения сайт сломался

Проверь по порядку:

1. YAML-синтаксис в `_data/*.yml` и `_config.yml`.
2. Закрыты ли кавычки и HTML-теги.
3. Совпадает ли имя изображения с `avatar:`.
4. Не изменился ли случайно `permalink`.
5. Не удалён ли `lang` или `lang_alt_url`.
6. Не появился ли второй `sitemap.xml`.
7. Не попала ли лишняя ссылка в `sameAs`.

Jekyll очень чувствителен к синтаксису YAML.

---

# 39. Быстрая памятка

```text
ХОЧУ ИЗМЕНИТЬ ИМЯ / ОПИСАНИЕ
→ _config.yml

ХОЧУ ИЗМЕНИТЬ ГЛАВНУЮ
→ index.md
→ ru/index.md

ХОЧУ ДОБАВИТЬ ПРОЕКТ
→ projects.md
→ ru/projects.md

ХОЧУ ПОМЕНЯТЬ ССЫЛКУ
→ links.md
→ ru/links.md
→ при необходимости _config.yml

ХОЧУ ДОБАВИТЬ ИГРОКА
→ фото в assets/img/roster/
→ запись в _data/roster.yml

ХОЧУ ПОМЕНЯТЬ ПОЗИЦИЮ ИГРОКА
→ _data/roster.yml

ХОЧУ ПОМЕНЯТЬ ДОСТИЖЕНИЯ
→ _data/achievements.yml

ХОЧУ ПОМЕНЯТЬ ПРИЗОВЫЕ
→ _data/achievements.yml

ХОЧУ ДОБАВИТЬ ПОДПИСЧИКА
→ _data/supporters.yml

ХОЧУ ДОБАВИТЬ ПОСТ
→ _posts/

ХОЧУ ПОМЕНЯТЬ ТЕКСТЫ МЕНЮ
→ _data/ui.yml

ХОЧУ ПОМЕНЯТЬ ДИЗАЙН
→ assets/css/style.css

ХОЧУ ПОМЕНЯТЬ ЛОГИКУ
→ assets/js/site.js

ХОЧУ ПОМЕНЯТЬ ШАПКУ
→ _includes/nav.html

ХОЧУ ПОМЕНЯТЬ SEO
→ _layouts/default.html
→ front matter конкретной страницы

ХОЧУ ПОМЕНЯТЬ ИЗОБРАЖЕНИЯ
→ assets/img/

ХОЧУ РАЗОБРАТЬСЯ С GOOGLE/ЯНДЕКС
→ robots.txt
→ image-sitemap.xml
→ _config.yml
→ _layouts/default.html
→ scripts/indexnow.py
```

---

# 40. Главное правило проекта

Если изменение касается **данных**, сначала ищи файл в `_data/`.

Если касается **текста конкретной страницы**, ищи соответствующий `.md` или `.html`.

Если касается **всего сайта**, смотри `_config.yml`, `_includes/` и `_layouts/`.

Если касается **внешнего вида**, смотри `assets/css/style.css`.

Если касается **интерактива**, смотри `assets/js/site.js`.

Если касается **SEO**, сначала проверяй front matter страницы и `_layouts/default.html`.

---

## Структура проекта в двух словах

```text
_config.yml              ← глобальные настройки
_data/                   ← данные сайта
_includes/               ← повторяемые HTML-компоненты
_layouts/                ← общие шаблоны страниц
_posts/                  ← записи блога
assets/css/              ← дизайн
assets/js/               ← интерактив
assets/img/              ← изображения
scripts/                 ← служебные скрипты
ru/                     ← русские страницы
*.md / *.html            ← страницы сайта
robots.txt               ← правила для поисковых роботов
image-sitemap.xml        ← карта изображений
```

---

**Последняя актуализация README:** 25 сентября 2026 года.
