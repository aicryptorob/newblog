module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: '*', // Allow requests from any domain
    },
  },
  middleware: [
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
            'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    'strapi::cors', // CORS middleware is already in the original code
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ],
});
