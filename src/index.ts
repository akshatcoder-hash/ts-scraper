import axios from 'axios';

(async () => {
try {
    const response = await axios.get('https://google.com');
    console.log(response);
} catch (error) {
    console.error(error);
}
})();