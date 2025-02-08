'use strict';

/**
 * recent-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recent-article.recent-article');
