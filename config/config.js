const env = (process.env.ENV || 'qa').trim();

const config = {
    qa: {
        url: 'https://www.saucedemo.com',
        username: 'standard_user',
        password: 'secret_sauce'
    },

    stage: {
        url: 'https://demoqa.com',
        username: 'stage_user',
        password: 'stage_pass'
    },

    prod: {
        url: 'https://the-internet.herokuapp.com',
        username: '',
        password: ''
    }
};
console.log("ENV =", env);
console.log("CONFIG =", config[env]);
module.exports = config[env];