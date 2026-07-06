class CommonUtils {

  static generateRandomNumber() {

    return Math.floor(
      Math.random() * 1000
    );

  }

}

module.exports = CommonUtils;