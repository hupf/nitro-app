import { userRepository } from "../repositories/user-repository";

interface UsersGetByIdInteractorParams {
  id: number;
}

export function usersGetByIdInteractor({ id }: UsersGetByIdInteractorParams) {
  return userRepository.findById(id);
}
