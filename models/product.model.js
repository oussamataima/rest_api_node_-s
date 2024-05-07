const mongoose = require("mongoose"); // Import de Mongoose pour interagir avec la base de données MongoDB

// Définition du schéma de données Produit
const ProductSchema = mongoose.Schema({
  name: {
    type: String, // Type de donnée : chaîne de caractères
    required: true, // Champ obligatoire
  },

  quantity: {
    type: Number, // Type de donnée : nombre
    required: true, // Champ obligatoire
    default: 0, // Valeur par défaut si non fournie
  },

  price: {
    type: Number, // Type de donnée : nombre
    required: true, // Champ obligatoire
    default: 0, // Valeur par défaut si non fournie
  },

  image: {
    type: String, // Type de donnée : chaîne de caractères (facultatif)
    required: false, // Champ facultatif
  },
}, {
  timestamps: true, // Activation des timestamps pour le modèle (dates de création et de mise à jour)
});

// Création du modèle Produit à partir du schéma
const Product = mongoose.model("Product", ProductSchema);

// Export du modèle Produit pour utilisation dans d'autres parties de l'application
module.exports = Product;