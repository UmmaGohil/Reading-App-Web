import * as React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("<Calendar />", () => {
  beforeEach(() => {
    render(
      <Calendar
        startDate={1 / 1 / 1}
        setStartDate={1 / 1 / 1}
        endDate={1 / 1 / 1}
        setEndDate={1 / 1 / 1}
      />
    );
  });
  it("find inputs", () => {
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
  });
});
