# 🖼️ Modsen Gallery

Приложение для поиска и просмотра изображений с использованием API Unsplash. Реализована пагинация, адаптивный дизайн и кэширование запросов.

## 🛠 Технологии

- **React** — библиотека для построения интерфейсов
- **TypeScript** — типизация кода
- **Vite** — сборка проекта
- **React Router** — маршрутизация
- **TanStack Query (React Query)** — управление серверным состоянием и кэширование
- **SCSS Modules** — стилизация компонентов
- **Axios** — HTTP-запросы
- **Unsplash API** — источник изображений

## 🌟 Деплой

GitHub Pages: [https://artemqt.github.io/modsen-gallery/](https://artemqt.github.io/modsen-gallery/)

## 🚀 Установка и запуск

### 📋 Требования
- Node.js
- npm или yarn

### 🔧 Установка

- **git clone https://github.com/ArtemQT/modsen-gallery.git** — Клонировать репозиторий
- **cd modsen-gallery** — Перейти в папку проекта
- **npm install** - Установить зависимости
- **npm run dev** Запуск в режиме разработки

## Настройка API ключа Unsplash

Для работы приложения необходим API ключ Unsplash.

### Получение ключа

1. Перейдите на [Unsplash Developers](https://unsplash.com/developers)
2. Нажмите **"Create an application"**
3. После создания скопируйте **Access Key**

### Настройка `.env`

Создайте файл `.env` в корне проекта:

Добавьте в него ваш ключ:
VITE_UNSPLASH_ACCESS_KEY=ваш_access_key_здесь