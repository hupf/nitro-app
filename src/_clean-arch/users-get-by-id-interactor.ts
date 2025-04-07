import { UserRepository } from "./user-repository";

interface UsersGetByIdInteractorInput {
  id: number;
}

// TODO: Would be nice if this was a simple function
export class UsersGetByIdInteractor {
  constructor(private userRepository: UserRepository) {}

  execute({ id }: UsersGetByIdInteractorInput) {
    return this.userRepository.findById(id);
  }
}
