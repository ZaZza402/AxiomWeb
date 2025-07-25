module.exports = function(eleventyConfig) {
  
  // These lines are CRUCIAL. They copy your assets to the final site.
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // This defines the basic folder structure for our project.
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
