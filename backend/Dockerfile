# Use a lightweight Python image
FROM python:3.12-slim

# Prevent .pyc files and show logs instantly
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Copy dependency list first (so Docker caches installs)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your backend code
COPY . .

# Default command when container starts
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
