import * as React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  beforeEach(() => {
    render(<Home />);
  });
  it("pages to read each day!", () => {
    const message = "pages to read each day!";

    expect(screen.getByText(message)).toBeInTheDocument();
  });
  afterAll(cleanup);
});
