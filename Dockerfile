FROM ___NODE___
ARG port

WORKDIR /app
COPY . .
EXPOSE $port
CMD [ "yarn", "run", "start" ]
