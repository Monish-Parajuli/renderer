FROM zenika/alpine-chrome:100-with-node

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD 1
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
WORKDIR /usr/src/app
COPY --chown=chrome package.json package-lock.json ./build/
RUN npm install
COPY --chown=chrome . ./
ENTRYPOINT ["tini", "--"]
CMD ["node", "/usr/src/app/build/index.js"]