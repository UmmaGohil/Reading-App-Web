/*import * as React from "react";
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
});*/

import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Search from "./Search";

it("renders correctly", () => {
	const result = render(<Search onChange={() => {}} />);
	expect(result).toMatchSnapshot();
});
