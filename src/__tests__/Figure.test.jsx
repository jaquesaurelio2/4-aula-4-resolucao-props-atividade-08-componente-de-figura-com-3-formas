import { render } from "@testing-library/react";
import Figure from "../components/Figure";

describe("Figure component", () => {
  it("should render correctly a square Figure", () => {
    const { container } = render(<Figure type="square" />);

    expect(container.getElementsByClassName("square").length).toBe(1);
  });

  it("should render correctly a square Figure [2]", () => {
    const { container } = render(<Figure />);

    expect(container.getElementsByClassName("square").length).toBe(1);
  });

  it("should render correctly a circle Figure", () => {
    const { container } = render(<Figure type="circle" />);

    expect(container.getElementsByClassName("circle").length).toBe(1);
  });

  it("should render correctly a triangle Figure", () => {
    const { container } = render(<Figure type="triangle" />);

    expect(container.getElementsByClassName("triangle").length).toBe(1);
  });
});
