# https://www.gitpod.io/docs/config-docker/
FROM gitpod/workspace-node-lts

# Install Cypress dependencies. Reference: https://docs.cypress.io/guides/references/migration-guide#Linux-dependencies
RUN sudo install-packages libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
