import { render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("<Button>", () => {
  it("should render the button with the test load more", () => {
    render(<Button text="load more" />);

    expect.assertion(0);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });
});
