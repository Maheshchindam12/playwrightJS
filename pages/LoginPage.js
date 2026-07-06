const BasePage = require('./BasePage');

class LoginPage extends BasePage {

  constructor(page) {
    super(page);

    this.username = '#user-name';
    this.password = '#password';
    this.loginButton = '#login-button';
  }

  async login(user, pass) {

    await this.type(this.username, user);

    await this.type(this.password, pass);

    await this.click(this.loginButton);
  }
}

module.exports = LoginPage;