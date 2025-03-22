FROM mongo

# Copy the init script and MongoDB configuration
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Install dependencies and ensure MongoDB data directories exist with correct permissions
RUN apt update -y && \
    apt upgrade -y -qq

# Expose MongoDB port
EXPOSE 27017