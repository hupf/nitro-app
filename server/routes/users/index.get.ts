import { useSafeValidatedQuery, z } from "h3-zod";
import { usersGetManyInteractor } from "~~/src/interactors/users-get-many-interactor";
import { queryErrorPresenter } from "~~/src/presenters/query-error";

export default defineEventHandler(async (event) => {
  const { error, data: filters } = await useSafeValidatedQuery(event, {
    filter_name: z.string().optional(),
  });

  if (error) {
    return queryErrorPresenter(event, error);
  }

  return usersGetManyInteractor({ filters });
});
