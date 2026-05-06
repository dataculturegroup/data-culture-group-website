#!/bin/bash

set -e

SUBMODULE_PATH="our-own-terms"

echo "Updating git submodule: $SUBMODULE_PATH"

git submodule update --remote --merge "$SUBMODULE_PATH"

echo "Staging submodule update..."
git add "$SUBMODULE_PATH"

echo "Done. Submodule '$SUBMODULE_PATH' has been updated."

