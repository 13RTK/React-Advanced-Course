# Find all the node modules paths and delete all
find ./ -name "node_modules" -type d -exec rm -rf {} +

# Find all pnpm-lock.yaml files and delete them
find ./ -name "pnpm-lock.yaml" -type f -exec rm -rf {} +