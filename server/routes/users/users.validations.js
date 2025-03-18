import { z } from 'zod';

export class UsersValidation {

   schema = z.object({
      id: z.number(),
      name: z.union([z.string(), z.null()]),
      password: z.string(),
      email: z.union([z.string(), z.null()]),
      author: z.union([z.string(), z.null()]),
      external_id: z.union([z.string(), z.null()]),
      auth_provider: z.union([z.string(), z.null()]),
      membership_type: z.string(),
      api_key: z.union([z.string(), z.null()]),
   })

   getId = (data) => this.schema.pick({ api_key: true }).safeParse(data)
   getByEmail = (data) => this.schema.pick({ email: true }).safeParse(data)
   getByExternalId = (data) => this.schema.pick({ auth_provider: true, external_id: true }).safeParse(data)
   getAll = (data) => this.schema.pick({ id: true }).safeParse(data)
   getMembership = (data) => this.schema.pick({ id: true }).safeParse(data)
   getIdPassword = (data) => this.schema.pick({ name: true }).safeParse(data)
   getName = (data) => this.schema.pick({ name: true }).safeParse(data)
   getEmail = (data) => this.schema.pick({ email: true }).safeParse(data)
   getAuthor = (data) => this.schema.pick({ author: true }).safeParse(data)
   addNew = (data) => this.schema.pick({ name: true, password: true, email: true, author: true, auth_provider: true, external_id: true }).safeParse(data)
   changeExternalId = (data) => this.schema.pick({ auth_provider: true, external_id: true, email: true }).safeParse(data)
   changeName = (data) => this.schema.pick({ name: true, id: true }).safeParse(data)
   changePassword = (data) => this.schema.pick({ password: true, id: true }).safeParse(data)
   changeAuthor = (data) => this.schema.pick({ author: true, id: true }).safeParse(data)
   changeEmail = (data) => this.schema.pick({ email: true, id: true }).safeParse(data)
   remove = (data) => this.schema.pick({ id: true }).safeParse(data)
}

export class UsersStringValidation {

   schema = z.object({
      id: z.string(),
      name: z.string(),
      password: z.string(),
      email: z.string(),
      author: z.string(),
      external_id: z.string(),
      auth_provider: z.string(),
      membership_type: z.string(),
      api_key: z.string(),
   })

   getId = (data) => this.schema.pick({ api_key: true }).safeParse(data)
   getByEmail = (data) => this.schema.pick({ email: true }).safeParse(data)
   getByExternalId = (data) => this.schema.pick({ auth_provider: true, external_id: true }).safeParse(data)
   getAll = (data) => this.schema.pick({ id: true }).safeParse(data)
   getMembership = (data) => this.schema.pick({ id: true }).safeParse(data)
   getIdPassword = (data) => this.schema.pick({ name: true }).safeParse(data)
   getName = (data) => this.schema.pick({ name: true }).safeParse(data)
   getEmail = (data) => this.schema.pick({ email: true }).safeParse(data)
   getAuthor = (data) => this.schema.pick({ author: true }).safeParse(data)
}