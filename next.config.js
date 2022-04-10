module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['bit.ly'],
    },
}
module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
};