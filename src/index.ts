import express, { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = process.env.PORT || 3000;

// Root route (optional)
app.get('/', (req: Request, res: Response) => {
  res.send('Node Proxy Server is running!');
});

// Proxy all requests starting with /api
app.use(
  '/api',
  createProxyMiddleware({
    target: process.env.API_URL,
    changeOrigin: true,
  })
);

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
