# Laravel + Inertia.js + React CRUD Project

## Description
Ce projet est une application CRUD développée avec Laravel, Inertia.js et React. Il utilise Ziggy pour la gestion des routes côté frontend.

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- PHP >= 8.0
- Composer
- Node.js & npm
- MySQL ou SQLite

## Installation

### 1. Cloner le dépôt
```sh
git clone https://github.com/godsky17/laravel_inertia_react.git
```

### 2. Installer les dépendances backend
```sh
composer install
```

### 3. Copier le fichier d'environnement et configurer la base de données
```sh
cp .env.example .env
```
Modifiez ensuite le fichier `.env` pour configurer votre connexion à la base de données.

### 4. Générer la clé de l'application
```sh
php artisan key:generate
```

### 5. Exécuter les migrations et les seeders
```sh
php artisan migrate --seed
```

### 6. Installer les dépendances frontend
```sh
npm install
```

### 7. Compiler les assets
```sh
npm run dev
```

### 8. Lancer le serveur de développement
```sh
php artisan serve
```

L'application sera accessible à l'adresse : [http://127.0.0.1:8000](http://127.0.0.1:8000)

## Utilisation de Ziggy
Ziggy est utilisé pour gérer les routes Laravel côté frontend. Pour générer les routes dans JavaScript, utilisez la commande :
```sh
php artisan ziggy:generate resources/js/ziggy.js
```
Dans React, vous pouvez utiliser les routes comme ceci :
```jsx
import route from 'ziggy-js';

const myRoute = route('nom_de_la_route');
```

## Tests
Pour exécuter les tests unitaires et fonctionnels :
```sh
php artisan test
```

## Contribuer
Les contributions sont les bienvenues ! Merci de créer une issue ou une pull request sur le dépôt GitHub.

