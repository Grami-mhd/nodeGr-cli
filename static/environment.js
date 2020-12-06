module.exports = () => {
  return `export const Environment = {
  PORT: process.env.PORT,
  MONGO_SERVER_ADDRESS: process.env.MONGO_SERVER_ADDRESS,
  MONGO_SERVER_PORT: process.env.MONGO_SERVER_PORT,
  MONGO_DATABASE_NAME: process.env.MONGO_DATABASE_NAME
};
`;
}
