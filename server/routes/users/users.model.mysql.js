import usersQueries from './users.queries.js';
import { ConnectionHandler } from '../../global/handlers/connection.js';

class UsersMysql {

    constructor({ usersPool }) {
        const connectionHandler = new ConnectionHandler('users');

        this.pool = usersPool;
        this.connectionHandler = connectionHandler.connect;
    }

    getId = async ({ api_key }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getId,
               [api_key]
            );

            return rows;
        })
    }

    getByEmail = async ({ email }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getByEmail,
               [email]
            );

            return rows;
        })
    }

    getByExternalId = async ({ auth_provider, external_id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getByExternalId,
               [auth_provider, external_id]
            );

            return rows;
        })
    }

    getAll = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getAll,
               [id]
            );

            return rows;
        })
    }

    getMembership = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getMembership,
               [id]
            );

            return rows;
        })
    }

    getIdPassword = async ({ name }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getIdPassword,
               [name]
            );

            return rows;
        })
    }

    getName = async ({ name }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getName,
               [name]
            );

            return rows;
        })
    }

    getEmail = async ({ email }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getEmail,
               [email]
            );

            return rows;
        })
    }

    getAuthor = async ({ author }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.getAuthor,
               [author]
            );

            return rows;
        })
    }

    addNew = async ({ name, password, email, author, auth_provider, external_id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.addNew,
               [name, password, email, author, auth_provider, external_id]
            );

            return rows;
        })
    }

    changeExternalId = async ({ auth_provider, external_id, email }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.changeExternalId,
               [auth_provider, external_id, email]
            );

            return rows;
        })
    }

    changeName = async ({ name, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.changeName,
               [name, id]
            );

            return rows;
        })
    }

    changePassword = async ({ password, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.changePassword,
               [password, id]
            );

            return rows;
        })
    }

    changeAuthor = async ({ author, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.changeAuthor,
               [author, id]
            );

            return rows;
        })
    }

    changeEmail = async ({ email, id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.changeEmail,
               [email, id]
            );

            return rows;
        })
    }

    remove = async ({ id }) => {
        return this.connectionHandler(this.pool, async (connection) => {

            const [rows] = await connection.execute(
               usersQueries.remove,
               [id]
            );

            return rows;
        })
    }

}

export default UsersMysql;