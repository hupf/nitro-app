import { H3Event } from "h3";
import { z } from "h3-zod";

export function paramsErrorPresenter<T>(event: H3Event, error: z.ZodError<T>) {
  sendError(
    event,
    createError({
      status: 422,
      data: {
        error: "invalid_params",
        message: "Invalid URL params",
        detail: error.format(),
      },
    }),
  );
}
