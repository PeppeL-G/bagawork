FROM node:lts-alpine

WORKDIR /bagawork/
COPY ./docs/ ./docs/
COPY ./editor/ ./editor/
COPY ./framework/ ./framework/
COPY ./package*.json .

RUN npm install

# node_modules is not available on the host, so no intellisense in editors.
# If needed, consider this workaround:
# https://stackoverflow.com/a/61137716/2104665
CMD npm run dev