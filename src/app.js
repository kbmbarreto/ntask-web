const Signin = require('./components/signin.js');
const Signup = require('./components/signup.js');
class App {
    constructor(body) {
        this.signin = new Signin(body);
        this.signup = new Signup(body);
    }
    init() {
        this.signin.render();
        this.addEventListener();
    }
    addEventListener() {
        this.signinEvents();
        this.signupEvents();
    }
    signinEvents() {
        this.signin.on('error', () => {
            alert('Erro de autenticação');
        });
        this.signin.on('open_signup', () => {
            this.signup.render();
        });
        this.signin.on('signin', (token) => {
            localStorage.setItem('token', token);
            alert('Você esta autenticado!');
        });
    }
    signupEvents() {
        this.signup.on('error', () => {
            alert('Erro no cadastro');
        });
        this.signup.on('signup', (user) => {
            alert(`${user.name} cadastrado com sucesso!`);
            this.signin.render();
        });
    }
}
module.exports = App;
