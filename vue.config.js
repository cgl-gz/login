module.exports = {
    indexPath: 'index.html',
    publicPath:'./',
    devServer: {
        open: true,
        port: 3333,
        proxy: {
            '/vir_gitee286e99f81d99f/': {
                target: 'https://api.virapi.com',
                changeOrigin: true
            }
        }
    }
}