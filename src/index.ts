import superagent from 'superagent';

(async () => {
try {
    const response = await superagent.get('https://google.com');
    console.log(response);
} catch (error) {
    console.error(error);
}
})();