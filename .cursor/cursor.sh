#!/bin/bash

# --- Core Environment Setup ---

# 1. Use Node.js Version (From README)
nvm use 20.18.2 || {
  echo "Error: NVM is not properly configured or Node.js version 20.18.2 is not installed."
  echo "Please install NVM (https://github.com/nvm-sh/nvm) and Node.js 20.18.2."
  exit 1  # Exit script if NVM or Node.js is missing
}

# Verify Node.js version
echo "Using Node.js version: $(node -v)"

# 2. Install Project Dependencies (Redundant Check - Ensures Consistency)
echo "Installing project dependencies..."
npm install --legacy-peer-deps || { # Try legacy peer deps
    echo "NPM Install Failed.  Check for package compatibility issues"
    exit 1
}

# 3. Set Environment Variables (Example - adjust these AS NEEDED!)
# Export MongoDB URI (Replace with your ACTUAL URI - VERY IMPORTANT!)
# Export keys in the ENV variables here
#Example:
#export MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority"

# --- Testing Environment ---
echo "Setting up test environment..."
#Ensure Jest and related libraries are available in the path
export PATH="$PATH:./node_modules/.bin"

# --- Project-Specific Configuration (If Needed) ---
# Example: If you have a config file that needs to be generated, you can do it here.

# --- Diagnostics and Verification ---
echo "--- Cursor Environment Verification ---"
echo "Node.js Version: $(node -v)"
echo "NPM Version: $(npm -v)"
echo "Environment Variables (Sensitive values masked):"
env | sed 's/=.*//' | grep -v "SECRET"
echo "Files in the project root:"
ls -la
echo "Installed dependencies:"
npm list --depth=0

echo "Cursor Environment Setup Complete."

# Optional: Start the Development Server (Uncomment only if Cursor needs the server running)
# npm run dev