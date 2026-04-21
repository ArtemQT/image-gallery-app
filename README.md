<div align="center">

# 🖼️ Modsen Gallery

### _Элегантная галерея изображений, работающая на Unsplash API_

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Query](https://img.shields.io/badge/React_Query-5-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)
[![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

[**🚀 Live Demo**](https://artemqt.github.io/modsen-gallery/) • [**🐛 Сообщить о баге**](https://github.com/ArtemQT/modsen-gallery/issues) • [**✨ Предложить фичу**](https://github.com/ArtemQT/modsen-gallery/issues)

---

</div>

## 📖 О проекте

**Modsen Gallery** — это современное SPA-приложение для поиска и просмотра высококачественных изображений через **Unsplash API**. Проект сочетает в себе чистую архитектуру, быструю сборку через **Vite** и умное кэширование запросов с помощью **React Query**.

> 💡 Создано с акцентом на производительность, адаптивность и приятный пользовательский опыт.

---

## ✨ Ключевые возможности

- 🔍 **Мгновенный поиск** — поиск изображений по ключевым словам через Unsplash API
- 📄 **Пагинация** — удобная навигация по большому количеству результатов
- 🗂 **Категории** — исследование коллекций по категориям
- ❤️ **Избранное** — сохранение понравившихся изображений
- 🔀 **Сортировка** — гибкая настройка отображения результатов
- 📱 **Адаптивный дизайн** — безупречный вид на любом устройстве
- ⚡ **Умное кэширование** — минимум сетевых запросов благодаря React Query
- 🛡️ **Error Boundary** — устойчивость к ошибкам и fallback-состояния
- 🎨 **Skeleton-загрузчики** — плавный UX во время загрузки

---

## 🛠 Технологический стек

| Категория         | Технологии                                                                   |
| ----------------- | ---------------------------------------------------------------------------- |
| **Frontend**      | React 19, TypeScript 5.9                                                     |
| **Сборщик**       | Vite 8                                                                       |
| **Маршрутизация** | React Router 7                                                               |
| **Стейт / API**   | TanStack Query (React Query), Axios                                          |
| **Стили**         | SCSS Modules                                                                 |
| **UX**            | react-hot-toast, react-svg                                                   |
| **Качество кода** | ESLint, Prettier, Husky, lint-staged, commitlint                             |
| **Git workflow**  | Git Flow (feature / develop / main)                                          |
| **Деплой**        | GitHub Pages                                                                 |

---

## 🌐 Демо

🔗 **Live:** [artemqt.github.io/modsen-gallery](https://artemqt.github.io/modsen-gallery/)

---

## 🚀 Быстрый старт

### 📋 Требования

- **Node.js** `18+`
- **npm** или **yarn**
- **Access Key** от [Unsplash Developers](https://unsplash.com/developers)

### 🔧 Установка

**1. Клонируйте репозиторий**

```bash
git clone https://github.com/ArtemQT/modsen-gallery.git
cd modsen-gallery
```

**2. Установите зависимости**

```bash
npm install
```

**3. Настройте переменные окружения**

Создайте файл `.env` в корне проекта и добавьте ваш Unsplash Access Key:

```env
VITE_UNSPLASH_ACCESS_KEY=ваш_access_key_здесь
```

**4. Запустите в режиме разработки**

```bash
npm run dev
```

🎉 Приложение доступно по адресу **[http://localhost:5173](http://localhost:5173)**

---

## 🔑 Получение Unsplash API-ключа

1. Зарегистрируйтесь на [Unsplash Developers](https://unsplash.com/developers)
2. Нажмите **"Create an application"** и примите условия
3. Заполните название и описание приложения
4. Скопируйте **Access Key** из карточки созданного приложения
5. Вставьте ключ в `.env` (см. шаг 3 выше)

---

## 📜 Доступные скрипты

| Команда             | Описание                                               |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | 🔥 Запуск dev-сервера с HMR                            |
| `npm run build`     | 📦 Продакшн-сборка (TypeScript + Vite)                 |
| `npm run preview`   | 👀 Локальный предпросмотр production-сборки            |
| `npm run lint`      | ✅ Проверка кода линтером                              |
| `npm run deploy`    | 🚀 Деплой на GitHub Pages                              |

---

## 🗂 Структура проекта

```
modsen-gallery/
├── src/
│   ├── app/              # Точка входа, роутер, провайдеры
│   ├── layouts/          # Layout-компоненты (header, footer)
│   ├── pages/            # Страницы приложения
│   ├── modules/          # Функциональные модули (images, favourites, category)
│   ├── shared/           # Переиспользуемые компоненты и утилиты
│   └── styles/           # Глобальные стили и переменные
├── public/               # Статические ресурсы
└── vite.config.ts        # Конфигурация Vite
```

---

## 👤 Автор

**Artem**

- GitHub: [@ArtemQT](https://github.com/ArtemQT)

---
