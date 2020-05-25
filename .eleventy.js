module.exports = eleventyConfig => {
  // Copy our static assets to the output folder
  templateFormats: ["html", "liquid", "njk", "md", "ico"]
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("blog/images");
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });
};
