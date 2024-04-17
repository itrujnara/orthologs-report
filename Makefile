# Define variables
IMAGE_NAME := itrujnara/orthologs-report
TAG := 1.0.0
QUAY_USERNAME := itrujnara
QUAY_REPOSITORY := orthologs-report

# Default target
all: build tag push

# Build the Docker container
build:
    docker build -t $(IMAGE_NAME)\:$(TAG) .

# Tag the Docker container with Quay tag
tag:
    docker tag $(IMAGE_NAME)\:$(TAG) quay.io/$(QUAY_USERNAME)/$(QUAY_REPOSITORY)\:$(TAG)

# Push the Docker container to Quay
push:
    docker push quay.io/$(QUAY_USERNAME)/$(QUAY_REPOSITORY)\:$(TAG)

# Remove the Docker container locally
clean:
    docker rmi $(IMAGE_NAME)\:$(TAG)
    docker rmi quay.io/$(QUAY_USERNAME)/$(QUAY_REPOSITORY)\:$(TAG)

# Help target
help:
    @echo "Available targets:"
    @echo "  build          - Build the Docker container"
    @echo "  tag            - Tag the Docker container with Quay tag"
    @echo "  push           - Push the Docker container to Quay"
    @echo "  clean          - Remove the Docker container locally"
    @echo "  help           - Display this help message"

# Ensure that 'build' is the default target
.PHONY: all build tag push clean help
