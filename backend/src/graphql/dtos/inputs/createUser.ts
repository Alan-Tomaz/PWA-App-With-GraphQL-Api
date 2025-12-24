import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;
}
