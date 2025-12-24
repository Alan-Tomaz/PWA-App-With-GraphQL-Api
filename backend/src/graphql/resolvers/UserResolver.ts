import { Resolver, Query, Mutation, Arg, ID } from "type-graphql";
import { CreateUserInput } from "../dtos/inputs/createUser.js";
import { User } from "../dtos/models/user-model.js";

const users: User[] = [];

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "Olá, GraphQL 🚀";
  }

  @Query(() => User)
  user(@Arg("id", () => ID) id: string) {
    return users.find((user) => user.id === id);
  }

  @Query(() => [User])
  users() {
    return users;
  }

  @Mutation(() => User)
  async createUser(
    @Arg("user", () => CreateUserInput) user: CreateUserInput
  ): Promise<User> {
    const newUser = {
      name: user.name,
      email: user.email,
      id: (users.length + 1).toString(),
    };
    users.push(newUser);
    return newUser;
  }
}
