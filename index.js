const express = require("express"); // Import du framework Express
const mongoose = require("mongoose"); // Import du package Mongoose pour la base de données
const Product = require("./models/product.model"); // Import du modèle de données Produit

const app = express(); // Création de l'application Express

// Middleware
app.use(express.json()); // Parse les requêtes entrantes au format JSON
app.use(express.urlencoded({ extended: false })); // Permet la gestion des formulaires avec URL encodé

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});

// Route pour créer un produit (méthode POST)
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body); // Crée un nouveau produit avec les données du corps de la requête
    res.status(201).json(product); // Renvoie le produit créé avec le code de status 201 (Created)
  } catch (error) {
    res.status(500).json({ message: error.message }); // En cas d'erreur, renvoie un code de status 500 (Internal Server Error) avec un message d'erreur
  }
});

// Route pour récupérer tous les produits (méthode GET)
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({}); // Recherche tous les produits dans la base de données
    res.status(200).json(products); // Renvoie la liste des produits avec le code de status 200 (OK)
  } catch (error) {
    res.status(500).json({ message: error.message }); // En cas d'erreur, renvoie un code de status 500 (Internal Server Error) avec un message d'erreur
  }
});

// Route pour récupérer un produit par son ID (méthode GET)
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params; // Récupère l'ID du produit dans les paramètres de la route
    const product = await Product.findById(id); // Recherche le produit par son ID
    res.status(200).json(product); // Renvoie le produit trouvé avec le code de status 200 (OK)
  } catch (error) {
    res.status(500).json({ message: error.message }); // En cas d'erreur, renvoie un code de status 500 (Internal Server Error) avec un message d'erreur
  }
});

// Route pour mettre à jour un produit par son ID (méthode PUT)
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params; // Récupère l'ID du produit dans les paramètres de la route
    const product = await Product.findByIdAndUpdate(id, req.body); // Recherche et met à jour le produit par son ID avec les données du corps de la requête
    if (!product) {
      return res.status(404).json({ message: "Produit introuvable" }); // Si le produit n'est pas trouvé, renvoie un code de status 404 (Not Found)
    }

    const updatedProduct = await Product.findById(id); // Recherche le produit mis à jour
    res.status(200).json(updatedProduct); // Renvoie le produit mis à jour avec le code de status 200 (OK)
  } catch (error) {
    res.status(500).json({ message: error.message }); // En cas d'erreur, renvoie un code de status 500 (Internal Server Error) avec un message d'erreur
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params; // Récupère l'ID du produit dans les paramètres de la route
    const product = await Product.findByIdAndDelete(id); // Recherche et supprime le produit par son ID
    if (!product) {
      return res.status(404).json({ message: "Produit introuvable" }); // Si le produit n'est pas trouvé, renvoie un code de status 404 (Not Found)
    }
    res.status(200).json({ message: "Produit supprimé avec succès" }); // Renvoie un code de status 200 (OK) avec un message de confirmation
  } catch (error) {
    res.status(500).json({ message: error.message }); // En cas d'erreur, renvoie un code de status 500 (Internal Server Error) avec un message d'erreur
  }
});

// Connexion à la base de données MongoDB
mongoose
  .connect(
    "mongodb+srv://oussama:oussama@cluster0.xklzsai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connexion à la base de données établie");
  })
  .catch((err) => {
    console.log("Échec de connexion à la base de données", err.message);
  });