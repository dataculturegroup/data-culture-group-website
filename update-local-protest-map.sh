#!/bin/bash

# Create a temporary directory
TMP_DIR=$(mktemp -d)

# Clone the repository into the temporary directory
git clone https://github.com/dataculturegroup/local-protest-map.git "$TMP_DIR"

# Check if the clone was successful
if [ $? -ne 0 ]; then
    echo "Failed to clone the repository."
    exit 1
fi

# Copy all the contents inside the docs folder to the local-protest-map directory
cp -r "$TMP_DIR/docs/" ./local-protest-map/

# Clean up the temporary directory
rm -rf "$TMP_DIR"

echo "Updated local-protest-map to latest on main"