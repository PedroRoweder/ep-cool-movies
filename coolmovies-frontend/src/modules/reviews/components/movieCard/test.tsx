import React from "react";
import { screen } from "@testing-library/react";
import { movieFactory, render } from "../../../../test";
import MovieCard from "./MovieCard";

const mockMovie = movieFactory.build({ imgUrl: "/test.jpeg" });

describe("<MovieCard />", () => {
  it("renders movie title", () => {
    render(<MovieCard openDetails={jest.fn()} {...mockMovie} />);

    const title = screen.getByText(mockMovie.title);

    expect(title).toBeInTheDocument();
  });
});
