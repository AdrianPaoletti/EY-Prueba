import ImagesList from "./ImagesList";
import { fireEvent, render, screen } from "@testing-library/react";
import { imagesDataMock } from "../../__mocks__/imagesData";

const imagesListMockProps = {
  lastElementRef: jest.fn(),
  images: imagesDataMock,
  setImages: jest.fn(),
  imageLoaded: true,
  setImageLoaded: jest.fn(),
};

describe("Given an ImagesList component", () => {
  describe("When is rendered and interactions are made", () => {
    test("Then setImages function should be called after firing the click event from the image", () => {
      render(<ImagesList {...imagesListMockProps} />);
      const images = screen.getAllByRole("img");

      fireEvent.click(images[0]);

      expect(imagesListMockProps.setImages).toHaveBeenCalled();
    });

    test("Then setImageLoaded function should be called after firing the load event from the image", () => {
      render(<ImagesList {...imagesListMockProps} imageLoaded={false} />);
      const images = screen.getAllByRole("img");

      fireEvent.load(images[0]);

      expect(imagesListMockProps.setImageLoaded).toHaveBeenCalled();
    });
  });
});
