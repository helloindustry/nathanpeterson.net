const moment = require('moment');
moment.locale('en');

const pluginRss = require("@11ty/eleventy-plugin-rss"); //RSS

module.exports = eleventyConfig => {

  // Copy our static assets to the output folder
  templateFormats: ["html", "liquid", "njk", "md"]
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("blog/images");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("android-chrome-384x384.png");
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });
  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });
  eleventyConfig.addPlugin(pluginRss); // RSS

};
