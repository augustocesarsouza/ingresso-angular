const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:8080",
    secure: false,
    logLevel: "debug",
    pathRewrite: {
      "^/api": "",
    },
  },
];

// aqui "^/api": "", - ele vai substituir o "/api" que vai ter por nada se não ele falaha aquu "`${environment.BASE_URL}/upload`" que está api no environment
// VIDEO QUE EXPLICA -> Curso Angular #138: Http: Removendo CORS com Angular Proxy

module.exports = PROXY_CONFIG;
