import { UsersValidation } from './users.validations.js';
import { asyncErrorHandler } from './../../global/handlers/asyncError.js';
import { createOkResponse, createErrorResponse } from './../../global/utils/responses.js';

class UsersController {

    constructor({ usersModel }) {
        this.usersModel = usersModel;
        this.validateUsers = new UsersValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getId(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getId in users executed successfully',
            data
        }));
    })

    getByEmail = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getByEmail(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getByEmail(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByEmail in users executed successfully',
            data
        }));
    })

    getByExternalId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getByExternalId(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getByExternalId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByExternalId in users executed successfully',
            data
        }));
    })

    getAll = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getAll(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getAll(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAll in users executed successfully',
            data
        }));
    })

    getMembership = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getMembership(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getMembership(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getMembership in users executed successfully',
            data
        }));
    })

    getIdPassword = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getIdPassword(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getIdPassword(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getIdPassword in users executed successfully',
            data
        }));
    })

    getName = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getName(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getName(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getName in users executed successfully',
            data
        }));
    })

    getEmail = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getEmail(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getEmail(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getEmail in users executed successfully',
            data
        }));
    })

    getAuthor = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getAuthor(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getAuthor(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAuthor in users executed successfully',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.addNew(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'addNew in users executed successfully',
            data: [data]
        }));
    })

    changeExternalId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changeExternalId(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changeExternalId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeExternalId in users executed successfully',
            data: [data]
        }));
    })

    changeName = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changeName(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changeName(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeName in users executed successfully',
            data: [data]
        }));
    })

    changePassword = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changePassword(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changePassword(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changePassword in users executed successfully',
            data: [data]
        }));
    })

    changeAuthor = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changeAuthor(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changeAuthor(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeAuthor in users executed successfully',
            data: [data]
        }));
    })

    changeEmail = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changeEmail(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changeEmail(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeEmail in users executed successfully',
            data: [data]
        }));
    })

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'remove in users executed successfully',
            data: [data]
        }));
    })

}

export default UsersController;