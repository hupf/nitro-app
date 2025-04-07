import { UserRepository } from "./user-repository";

interface UsersGetManyInteractorInput {}

export class UsersGetManyInteractor {
  constructor(private userRepository: UserRepository) {}

  execute(input: UsersGetManyInteractorInput) {
    return this.userRepository.findMany();
  }
}
