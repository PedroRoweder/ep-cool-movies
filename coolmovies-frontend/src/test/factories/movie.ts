import { faker } from "@faker-js/faker";
import { Sync } from "factory.ts";

export const movieFactory = Sync.makeFactory<Movies.Data>({
  id: faker.datatype.uuid(),
  title: faker.datatype.string(),
  imgUrl: faker.image.imageUrl(),
  creatorName: faker.name.fullName(),
  directorName: faker.name.fullName(),
  averageRating: faker.datatype.number({ min: 1, max: 5 }),
  releaseDate: faker.date.past().toISOString(),
});
