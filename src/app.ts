import express from 'express';


const app = express();

app.use(express.json());

// Middleware pour l'authentification si nécessaire
// app.use(authMiddleware);

// app.use('/api', MessageRoutes);

// Vous pouvez ajouter d'autres routes ici

export default app;
