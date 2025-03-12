# Start from the official Manim image
FROM manimcommunity/manim:latest

# Switch to root user for all operations
USER root

# Set up application directory
WORKDIR /app

# Install uvicorn explicitly along with other dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt uvicorn

# Copy your application code
COPY . .

# Create logs directory
RUN mkdir -p /app/logs && chmod 777 /app/logs

# Run the application as root
CMD ["python", "-m", "uvicorn", "server.server:app", "--host", "0.0.0.0", "--port", "8000"]
