import { useSafeValidatedParams, z } from "h3-zod";
import { paramsErrorPresenter } from "~~/src/presenters/params-error";
import { usersGetByIdInteractor } from "~~/src/interactors/users-get-by-id";
import { resultOrNotFoundPresenter } from "~~/src/presenters/result-or-not-found";

export default defineEventHandler(async (event) => {
  const { error, data: params } = await useSafeValidatedParams(event, {
    id: z.coerce.number(),
  });

  if (!params?.id) {
    return paramsErrorPresenter(event, error);
  }

  const result = await usersGetByIdInteractor({ id: params.id });
  return resultOrNotFoundPresenter(event, result);
});
