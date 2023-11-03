import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { connectDB } from './config/connectDB';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
import serviceRoutes from './routes/service.routes';
import servicefeeRoutes from './routes/servicefee.routes';
import userRoutes from './routes/user.routes';

app.use('/api/services', serviceRoutes);
app.use('/api/servicefees', servicefeeRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
