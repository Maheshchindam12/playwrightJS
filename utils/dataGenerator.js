const generateName = (length = 6) => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let name = "";

  for (let i = 0; i < length; i++) {
    name += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
};

const generatePinCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

module.exports = { generateName, generatePinCode };