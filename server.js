const app = require('./app');

app.listen(process.env.PORT).on('listening', () => {
    console.log('OK YOUR API IS RUNNING');
});