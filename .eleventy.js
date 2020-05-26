const moment = require('moment');
moment.locale('en');

const pluginRss = require("@11ty/eleventy-plugin-rss"); //RSS

module.exports = eleventyConfig => {

  // Copy our static assets to the output folder
  templateFormats: ["html", "liquid", "njk", "md", "ico"]
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("blog/images");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("png");
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
