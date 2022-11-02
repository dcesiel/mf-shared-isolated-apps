const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    mode: 'development',
    output:{
        publicPath:'auto'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'App1',
            shared: [
                'is-positive'
            ]
        }),
    ]
};
