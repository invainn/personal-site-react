const contentful = require('contentful');

export default contentful.createClient({
    host: 'cdn.contentful.com',
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_TOKEN,
});
