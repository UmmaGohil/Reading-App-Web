import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Page from "./Page";

it("renders correctly", () => {
	const result = render(<Page title="test" variant="regular" children={<div>test</div>}/></Page>);
	expect(result).toMatchSnapshot();
});
