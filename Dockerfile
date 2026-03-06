FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install system dependencies needed by some Python packages
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install CPU-only PyTorch FIRST to prevent pip from pulling the CUDA version (~3.5GB)
# CPU-only torch is ~500MB vs ~3.5GB for CUDA
RUN pip install --no-cache-dir \
    torch==2.5.1+cpu \
    --index-url https://download.pytorch.org/whl/cpu

# Copy and install remaining Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY app/ ./app/

# PORT env var (Railway and Azure both set this automatically)
ENV PORT=8000

# Expose port
EXPOSE 8000

# Start the app
CMD uvicorn app.main:app --host 0.0.0.0 --port ${PORT}
