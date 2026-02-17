import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Contact form endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  try {
    const { name, email, industry, message } = req.body;

    // Validación básica
    if (!name || !email || !industry || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // TODO: Guardar en base de datos o enviar email
    console.log('New contact:', { name, email, industry, message });

    res.json({
      success: true,
      message: 'Mensaje recibido. Nos contactaremos pronto.',
    });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Quoter endpoint (para después)
app.post('/api/quoter', (req: Request, res: Response) => {
  try {
    const { projectDetails } = req.body;

    // TODO: Implementar lógica de cotización
    res.json({
      success: true,
      message: 'Quotation received. We will process it shortly.',
    });
  } catch (error) {
    console.error('Error in quoter endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
