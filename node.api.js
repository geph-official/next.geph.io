export default () => ({
  webpack: (config, {stage}) => {
    if (stage === 'node') {
      const fileRule = config.module.rules[0].oneOf.find((x) => x.loader === 'url-loader');
      fileRule.options.name = 'static/[name].[hash:8].[ext]';
    }
    return config;
  },
});
