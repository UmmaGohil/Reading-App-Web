import * as React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("<Search />", () => {
  beforeEach(() => {
    render(<Search onChange="test" />);
  });
  it("find inputs", () => {
    expect(screen.getAllByRole("searchbox")).toHaveLength(1);
  });
});
