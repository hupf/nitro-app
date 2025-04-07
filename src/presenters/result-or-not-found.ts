import { H3Event } from "h3";

export async function resultOrNotFoundPresenter<T>(event: H3Event, result: T) {
  return (
    result ??
    sendError(
      event,
      createError({
        status: 404,
        statusText: "Not found",
        data: {
          error: "not_found",
          message: "Entry does not exist",
        },
      }),
    )
  );
}
