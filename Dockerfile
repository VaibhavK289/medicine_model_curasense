FROM python:3.12-slim

# Create non-root user required by Hugging Face Spaces
RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

# Set working directory
WORKDIR /home/user/app

# Install CPU-only PyTorch FIRST to prevent pip from pulling the CUDA version (~3.5GB)
# CPU-only torch is ~500MB vs ~3.5GB for CUDA
RUN pip install --no-cache-dir --user \
    torch==2.5.1+cpu \
    --index-url https://download.pytorch.org/whl/cpu

# Copy and install remaining Python dependencies
COPY --chown=user requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# Copy application code
COPY --chown=user app/ ./app/

# Hugging Face Spaces requires port 7860
ENV PORT=7860
EXPOSE 7860

# Start the app
CMD uvicorn app.main:app --host 0.0.0.0 --port ${PORT}
