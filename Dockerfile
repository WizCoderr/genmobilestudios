FROM oven/bun:latest
WORKDIR /app

COPY package*.json ./
RUN bun install

COPY . .
ARG VITE_WEB3FORMS_KEY
ENV VITE_WEB3FORMS_KEY=${VITE_WEB3FORMS_KEY}

RUN bun run build

EXPOSE 4173
CMD ["bun", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
