# meu-portfolio

## Rodar local (dev)

1. `npm install`
2. `npm run dev`

Abra a URL que o Vite mostrar (normalmente `http://localhost:5173`).

## Build / Preview (produção local)

1. `npm run build`
2. `npm run preview`

## Importante (erro de MIME com JSX)

Não abra o `index.html` diretamente (nem via Live Server) porque ele referencia `/src/main.jsx` e um servidor estático não transpila JSX, o que pode causar erro no browser como:

`Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/jsx"`.

Use sempre `npm run dev` (desenvolvimento) ou publique o conteúdo da pasta `dist/` (produção).
