module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['bit.ly'],
    },
}

const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
    include: path.resolve(__dirname, "public/svg"),
    webpack(config, options) {
        return config;
    },
});
