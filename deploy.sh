#!/usr/bin/env bash

# --- CONFIGURE THESE ---
RESOURCE_GROUP="PrankCauseRG"
LOCATION="eastus"
SWA_NAME="prank-cause-landing-swa"
GITHUB_REPO="https://github.com/pri-23-03/Prank-for-a-Cause.git"
BRANCH="main"

echo "Logging in to Azure..."
az login

echo "Creating resource group: $RESOURCE_GROUP"
az group create --name $RESOURCE_GROUP --location $LOCATION

echo "Creating Azure Static Web App: $SWA_NAME"
az staticwebapp create \
  --resource-group $RESOURCE_GROUP \
  --name $SWA_NAME \
  --location $LOCATION \
  --source $GITHUB_REPO \
  --branch $BRANCH \
  --app-location "/" \
  --output-location "/"

echo "Deployment script complete. Check Azure Portal for details."
