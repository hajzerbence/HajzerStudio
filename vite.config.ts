import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        barber: fileURLToPath(
          new URL("./templates/barber-shop-demo.html", import.meta.url),
        ),
        women: fileURLToPath(
          new URL("./templates/noi-fodraszat-demo.html", import.meta.url),
        ),
        premium: fileURLToPath(
          new URL("./templates/premium-szalon-demo.html", import.meta.url),
        ),
      },
    },
  },
});
