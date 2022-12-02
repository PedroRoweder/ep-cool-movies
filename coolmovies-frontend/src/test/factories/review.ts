import { faker } from "@faker-js/faker";
import { Sync } from "factory.ts";

export const reviewFactory = Sync.makeFactory<Movies.ReviewsData>({
  id: faker.datatype.uuid(),
  title: faker.datatype.string(),
  rating: faker.datatype.number({ min: 1, max: 5 }),
  body: faker.lorem.sentences(10),
});
