import { H3Event } from "h3";
import { useSafeValidatedParams, useSafeValidatedQuery, z } from "h3-zod";
import { UserRepository } from "./user-repository";
import { UsersGetManyInteractor } from "./users-get-many-interactor";
import { UsersGetByIdInteractor } from "./users-get-by-id-interactor";

export class UserController {
  constructor(private userRepository: UserRepository) {}

  async getMany(event: H3Event) {
    const {
      data: { filter_name },
    } = await useSafeValidatedQuery(event, {
      filter_name: z.string().optional(),
    });

    const interactor = new UsersGetManyInteractor(this.userRepository);
    interactor.execute({});
  }

  async getById(event: H3Event) {
    // const id = Number(getRouterParam(event, "id"));
    const {
      data: { id },
    } = await useSafeValidatedParams(event, {
      id: z.number(),
    });

    if (!id) {
      return sendError(event, createError({ status: 422 }));
    }

    const interactor = new UsersGetByIdInteractor(this.userRepository);
    interactor.execute({ id });
  }
}
