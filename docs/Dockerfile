FROM node:lts-alpine

WORKDIR /docs
COPY ./@bagawork/ ./markdown-plugins/ ./rehype-plugins/ ./src/ ./static/ ./package*.json ./svelte.config.js ./vite.config.js /docs/

RUN npm install

# node_modules is not available on the host, so no intellisense in editors.
# If needed, consider workaround:
# https://stackoverflow.com/a/61137716/2104665
CMD npm run dev