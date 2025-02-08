'use strict';

/**
 * trending-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trending-topic.trending-topic');
