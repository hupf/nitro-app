import { userRepository } from "../repositories/user-repository";

interface UsersGetManyInteractorParams {
  filters?: { filter_name?: string };
}

export function usersGetManyInteractor({
  filters,
}: UsersGetManyInteractorParams = {}) {
  // TODO: implement filtering by name
  return userRepository.findMany();
}
