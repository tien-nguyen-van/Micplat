const SERVER_PORT_DEFAULT = 2001
const DATABASE_PORT_DEFAULT = 3306

export default {
  SERVER: {
    PORT: parseInt(process.env.SERVER_PORT, 10) || SERVER_PORT_DEFAULT
  },
  DATABASE: {
    HOST: process.env.DATABASE_HOST,
    PORT: parseInt(process.env.DATABASE_PORT, 10) || DATABASE_PORT_DEFAULT,
  }
}