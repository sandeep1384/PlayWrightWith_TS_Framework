# Use the official Playwright base image with all dependencies
FROM mcr.microsoft.com/playwright:v1.54.0-noble

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies (Playwright is pre-installed in the base image)
RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    npm install

# Now copy the rest of the project files
COPY . .

# Set environment variable for Java
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

# Force headless mode just in case
ENV PW_HEADLESS=true

# Default command to run your Playwright tests
CMD ["npx", "playwright", "test"]
