#!/bin/bash

# Set the folder containing the HEIC files
folder="public/"

# Convert each HEIC file to JPG
for file in "$folder"/*.heic; do
  filename=$(basename "$file")
  output="${filename%.heic}.jpg"
  magick convert "$file" "$folder/$output"
  echo "Converted $file to $folder/$output"
done
