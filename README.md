# 📚 Bibliothèque App

Application de suivi de bibliothèque personnelle permettant de gérer ses livres : à lire, en cours de lecture, terminés, avec notes et recherche.

Projet réalisé dans un but d'apprentissage, combinant un backend **Java / Spring Boot** et un frontend **React**.

## 🛠️ Stack technique

**Backend**
- Java 21
- Spring Boot 3
- Spring Web (API REST)
- Spring Data JPA
- H2 Database (base en mémoire pour le développement)
- Maven

**Frontend**
- React 18
- Vite
- JavaScript (ES6+)

## 📁 Structure du projet

```
bibliotheque-app/
├── backend/          # API REST Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/bibliotheque/backend/
│   │   │   │   ├── model/        # Entités JPA
│   │   │   │   ├── repository/   # Accès aux données
│   │   │   │   ├── service/      # Logique métier
│   │   │   │   └── controller/   # Endpoints REST
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/         # Interface utilisateur React
│   ├── src/
│   │   ├── components/   # Composants réutilisables
│   │   ├── services/     # Appels à l'API
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

## ✨ Fonctionnalités

### MVP (en cours de développement)
- [x] Ajouter un livre (titre, auteur, statut)
- [x] Lister tous les livres
- [x] Modifier le statut d'un livre (à lire / en cours / terminé)
- [x] Noter un livre (1 à 5)
- [x] Supprimer un livre
- [x] Rechercher un livre par titre ou auteur

### Fonctionnalités futures
- [ ] Filtres par statut
- [ ] Tri (par note, date d'ajout...)
- [ ] Intégration de l'API Google Books (auto-remplissage titre/auteur/couverture)
- [ ] Authentification multi-utilisateurs
- [ ] Statistiques de lecture
- [ ] Déploiement en ligne

## 🚀 Installation et lancement

### Prérequis
- [JDK 21](https://adoptium.net/) ou supérieur
- [Node.js](https://nodejs.org/) (version LTS) et npm
- Maven (inclus via le wrapper `mvnw` du projet)

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

L'API démarre par défaut sur `http://localhost:8080`.

La console H2 (visualisation de la base de données) est accessible sur `http://localhost:8080/h2-console` (si activée dans `application.properties`).

### Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application démarre par défaut sur `http://localhost:5173`.

## 📡 Endpoints API (prévisionnel)

| Méthode | Endpoint              | Description                  |
|---------|------------------------|-------------------------------|
| GET     | `/api/livres`          | Liste tous les livres         |
| GET     | `/api/livres/{id}`     | Récupère un livre par son id  |
| POST    | `/api/livres`          | Ajoute un nouveau livre       |
| PUT     | `/api/livres/{id}`     | Modifie un livre existant     |
| DELETE  | `/api/livres/{id}`     | Supprime un livre             |

## 📝 Modèle de données

```
Livre
├── id            : Long
├── titre         : String
├── auteur        : String
├── statut        : Enum (A_LIRE, EN_COURS, TERMINE)
├── note          : Integer (1-5, optionnel)
├── dateAjout     : Date
├── dateDebut     : Date (optionnel)
└── dateFin       : Date (optionnel)
```

## 👤 Auteur

Projet personnel réalisé par [@zozo180501-alt](https://github.com/zozo180501-alt) dans le cadre de l'apprentissage de Java et React.

## 📄 Licence

Projet personnel à but éducatif, libre d'utilisation.
