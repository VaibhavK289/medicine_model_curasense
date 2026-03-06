FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install system dependencies needed by some Python packages
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copy and install Python dependencies first (layer cache)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY app/ ./app/

# Azure App Service sets the PORT env var; default to 8000
ENV PORT=8000

# Expose port
EXPOSE 8000

# Start the app
CMD uvicorn app.main:app --host 0.0.0.0 --port ${PORT}
