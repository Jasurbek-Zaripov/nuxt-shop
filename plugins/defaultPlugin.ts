export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            hello(msg: string) {
                return 'Hello ' + msg;
            }
        }
    };
});