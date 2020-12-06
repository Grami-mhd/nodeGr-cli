module.exports = (projectName) => {
  return `PORT=3000
MONGO_SERVER_ADDRESS=localhost
MONGO_SERVER_PORT=27017
MONGO_DATABASE_NAME=${projectName}
`;
}
