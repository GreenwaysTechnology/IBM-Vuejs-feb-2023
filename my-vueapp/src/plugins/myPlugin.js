export const myPlugin = {
    install(app, options) {
        //application object referenced in the plugin as first parameter
        app.config.globalProperties.$uppercase = key => {
            return key.toUpperCase();
        }
    }
}