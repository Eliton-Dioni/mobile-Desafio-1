import axios from 'axios';

async function api() {
    // Renomeia a propriedade data do axios.get para users
    const { data: users } = await axios.get('https://api.myjson.com/bins/kj4aq');
    return users;
}

export default api;