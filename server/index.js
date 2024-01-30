const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const user = require("./models/User");
const bcrypt = require('bcryptjs');

app.use(cors());
app.use(express.json({limit : "10mb"}));

const PORT = process.env.PORT || 8080;
//MONGODB CONNECTION
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

//API

// Signup API
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, image } =req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedConPassword = await bcrypt.hash(confirmPassword, 10);
   
    const existingData = await user.findOne({ email });
    if (existingData) {
      return res.status(400).json({ error: "Cet e-mail est déjà utilisé" });
    }
    const newUser = new user({
      firstName,
      lastName,
      email,
      password:hashedPassword,
      confirmPassword:hashedConPassword,
      image,
    });
    await newUser.save();
    res.status(201).json({ message: "Données enregistrées avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Une erreur est survenue lors de l'enregistrement des données",
      });
  }
});
// Login Api
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await user.findOne({ email });

    if (!User) {
      return res.status(400).json({ error: 'Email incorrect , veuillez vous inscrire' });
    }

    const passwordMatch =await bcrypt.compare (password, User.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }
    const dataSend = {
      _id:User._id,
      firstName:User.firstName,
      lastName:User.lastName,
      password:User.password,
      email: User.email,
      image: User.image
    }
    console.log(dataSend)
    res.status(200).json({ message: 'Connexion réussie',User: User});
  
    
  } catch (error) {
    res.status(500).json({ error: 'Erreur de connexion, ' });
  }
});



app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
