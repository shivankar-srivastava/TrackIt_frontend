
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('signup', { title: 'Signup page', message: 'Create your account!' });
});
app.get('/home',(req,res)=>
{
    res.render('home', { title: 'Home page', message: 'Welcome to Home Page!' });
});
app.get('/update', (req, res) => {
    res.render('update', { title: 'Update details', message: 'Update your details' });
});
app.get('/expense', (req, res) => {
    res.render('expense', { title: 'Expense page', message: 'Manage your expenses' });
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About page', message: 'Learn more about us' });
});
app.get('/support', (req, res) => {
    res.render('support', { title: 'Support page', message: 'Get support here' });
});
app.listen(port, () =>{
console.log(`Server started on port ${port}`);});

