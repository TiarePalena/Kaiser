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
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Contact form endpoint
app.post('/api/contact', (req: Request, res: Response): void => {
  try {
    const { name, email, industry, message } = req.body;

    // Validación básica
    if (!name || !email || !industry || !message) {
      res.status(400).json({ error: 'All fields are required' });
      return;
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

// Quoter endpoint
app.post('/api/quoter', (req: Request, res: Response): void => {
  try {
    const { items, contact } = req.body;

    // Validación
    if (!items || !Array.isArray(items) || items.length === 0) {
      res.status(400).json({ error: 'At least one product is required' });
      return;
    }
    if (!contact || !contact.name || !contact.email || !contact.company || !contact.phone || !contact.industry) {
      res.status(400).json({ error: 'Contact information is incomplete' });
      return;
    }

    // Generate reference
    const reference = `KQ-${Date.now().toString(36).toUpperCase()}`;

    console.log('=== Nueva Cotización ===' );
    console.log('Referencia:', reference);
    console.log('Contacto:', contact);
    console.log('Productos:', items.length);
    items.forEach((item: any, i: number) => {
      console.log(`  ${i + 1}. ${item.productTitle} x${item.quantity}`, item.selectedSpecs);
    });

    // TODO: Guardar en base de datos
    // TODO: Enviar email al equipo de ventas
    // TODO: Enviar confirmación al cliente

    res.json({
      success: true,
      reference,
      message: 'Cotización recibida. Nos contactaremos pronto.',
    });
  } catch (error) {
    console.error('Error in quoter endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
