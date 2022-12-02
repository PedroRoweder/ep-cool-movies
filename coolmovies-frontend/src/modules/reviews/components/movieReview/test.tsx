import React from "react";
import { screen } from "@testing-library/react";
import { movieFactory, render, reviewFactory } from "../../../../test";
import MovieReview from "./MovieReview";
import { userEvent } from "../../../../test/userEvent";

const mockMovie = movieFactory.build({ imgUrl: "/test.jpeg" });
const mockReview = reviewFactory.build();

describe("<MovieReview />", () => {
  describe("isEditing false", () => {
    it("renders reviw data", () => {
      render(<MovieReview movieId={mockMovie.id} {...mockReview} />);

      const title = screen.getByText(mockReview.title);
      const body = screen.getByText(mockReview.body);
      const rating = screen.getByTestId("review-rating");
      const editButton = screen.getByTestId("edit-review-button");

      expect(rating).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(body).toBeInTheDocument();
      expect(editButton).toBeInTheDocument();
    });
    it("doesnt render edit fields", () => {
      render(<MovieReview movieId={mockMovie.id} {...mockReview} />);

      const titleInput = screen.queryByTestId("title-edit-input");
      const bodyInput = screen.queryByTestId("body-edit-input");

      expect(titleInput).not.toBeInTheDocument();
      expect(bodyInput).not.toBeInTheDocument();
    });
  });
});
