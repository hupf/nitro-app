import { H3Event } from "h3";
import { z } from "h3-zod";

export function queryErrorPresenter<T>(event: H3Event, error: z.ZodError<T>) {
  sendError(
    event,
    createError({
      status: 422,
      data: {
        error: "invalid_query",
        message: "Invalid URL query",
        detail: error.format(),
      },
    }),
  );
}
