import * as React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { isVoidExpression } from "typescript";

describe("<Search />", () => {
	beforeEach(() => {
		render(<Search onChange={() => {}} />);
	});
	it("find inputs", () => {
		expect(screen.getAllByRole("searchbox")).toHaveLength(1);
	});
});
