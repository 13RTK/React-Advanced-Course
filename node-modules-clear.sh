# Find all the node modules paths and delete all
find ./ -name "node_modules" -type d -exec rm -rf {} +
