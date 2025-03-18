import { createErrorResponse } from './../../global/utils/responses.js';
import { UsersStringValidation } from './users.validations.js';

class SanitizeGetRequests {

    constructor() {
        this.validateStringUsers = new UsersStringValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getId = (req, res, next) => {
        const validation = this.validateStringUsers.getId(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //api_key goes from string to string | null
        req.sanitizedData.api_key = validation.data.api_key === 'null' ? null : validation.data.api_key;

        next();
    }

    getByEmail = (req, res, next) => {
        const validation = this.validateStringUsers.getByEmail(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //email goes from string to string | null
        req.sanitizedData.email = validation.data.email === 'null' ? null : validation.data.email;

        next();
    }

    getByExternalId = (req, res, next) => {
        const validation = this.validateStringUsers.getByExternalId(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //auth_provider goes from string to string | null
        req.sanitizedData.auth_provider = validation.data.auth_provider === 'null' ? null : validation.data.auth_provider;
        //external_id goes from string to string | null
        req.sanitizedData.external_id = validation.data.external_id === 'null' ? null : validation.data.external_id;

        next();
    }

    getAll = (req, res, next) => {
        const validation = this.validateStringUsers.getAll(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //id goes from string to number
        req.sanitizedData.id = parseInt(validation.data.id, 10);

        next();
    }

    getMembership = (req, res, next) => {
        const validation = this.validateStringUsers.getMembership(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //id goes from string to number
        req.sanitizedData.id = parseInt(validation.data.id, 10);

        next();
    }

    getIdPassword = (req, res, next) => {
        const validation = this.validateStringUsers.getIdPassword(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //name goes from string to string | null
        req.sanitizedData.name = validation.data.name === 'null' ? null : validation.data.name;

        next();
    }

    getName = (req, res, next) => {
        const validation = this.validateStringUsers.getName(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //name goes from string to string | null
        req.sanitizedData.name = validation.data.name === 'null' ? null : validation.data.name;

        next();
    }

    getEmail = (req, res, next) => {
        const validation = this.validateStringUsers.getEmail(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //email goes from string to string | null
        req.sanitizedData.email = validation.data.email === 'null' ? null : validation.data.email;

        next();
    }

    getAuthor = (req, res, next) => {
        const validation = this.validateStringUsers.getAuthor(req.query);
        if (!validation.success) return this.validationErr(res, validation.error);

        // Initialize req.sanitizedData
        req.sanitizedData = {};

        //author goes from string to string | null
        req.sanitizedData.author = validation.data.author === 'null' ? null : validation.data.author;

        next();
    }

}

export default SanitizeGetRequests;