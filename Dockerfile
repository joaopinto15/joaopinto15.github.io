FROM node:20-alpine

WORKDIR /app

# Install dependencies separately to leverage Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy project files
COPY . .

EXPOSE 5173

# Enable polling so file changes from bind mounts trigger reloads
ENV CHOKIDAR_USEPOLLING=true

# Run Vite dev server bound to all interfaces so the host can reach it
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173", "--strictPort"]
