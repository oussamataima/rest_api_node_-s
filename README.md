# API pour la gestion des produits

Ce projet Node.js propose une API RESTful pour gérer des produits dans une base de données MongoDB.

## Fonctionnalités

L'API permet les opérations CRUD (Create, Read, Update, Delete) sur les produits.

* **Créer un produit** (méthode POST /api/products) : Envoie les données du produit dans le corps de la requête pour créer un nouveau produit.
* **Récupérer tous les produits** (méthode GET /api/products) : Renvoie la liste de tous les produits stockés dans la base de données.
* **Récupérer un produit par son ID** (méthode GET /api/products/:id) : Recherche et renvoie le produit avec l'ID spécifié.
* **Mettre à jour un produit** (méthode PUT /api/products/:id) : Envoie les données mises à jour du produit dans le corps de la requête pour modifier le produit existant avec l'ID spécifié.
* **Supprimer un produit** (méthode DELETE /api/products/:id) : Supprime le produit de la base de données en fonction de l'ID fourni.

## Installation

1. Cloner le dépôt : `git clone https://github.com/oussamataima/rest_api_node_-s.git`
2. Installer les dépendances : `npm install`

## Démarrage du serveur
`npm run dev`

Une fois le serveur en marche, vous pouvez utiliser un outil de test d'API (comme Postman ou Insomnia) pour envoyer des requêtes HTTP aux points de terminaison de l'API.
