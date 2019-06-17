export default function getServerUrl(appUrl: string) {
    const ngrok = appUrl.indexOf('github') > -1;
    if (ngrok) {
        return 'https://2d435709.ngrok.io/api'
    }
    return 'http://localhost:4243/api';
}