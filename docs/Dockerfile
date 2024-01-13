FROM node:lts-alpine

# Context needs to be set to parent folder!
# Done in ../compose.yaml

# Copy over and setup the docs app.
WORKDIR /docs
COPY ./docs/package*.json /docs/
RUN npm remove @bagawork/editor

# Copy over local packages into their own workspaces.
RUN npm init --yes -w /docs/packages/framework
COPY ./framework/package*.json /docs/packages/framework/

RUN npm init --yes -w /docs/packages/editor
COPY ./editor/package*.json /docs/packages/editor/

# Copy over code files.
COPY ./docs/code-files/ /docs/code-files/
COPY ./framework/src/ /docs/packages/framework/src/
COPY ./editor/src/ /docs/packages/editor/src/

# Install npm packages when the container starts, so node_modules folder
# on host can be mounted, so editors on host can use intellisense, etc.:
# https://stackoverflow.com/a/61137716/2104665
CMD [ -d "node_modules" ] && npm run dev || npm install --workspaces && npm install && npm run dev