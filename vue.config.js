const path = require('path');

module.exports = {
    configureWebpack: {
        module: {
            rules: [{
                exclude: path.resolve(__dirname, './src/dist')
            }]
        }
    }
};
