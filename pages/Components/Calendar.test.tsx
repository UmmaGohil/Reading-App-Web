import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Calendar from "./Calendar";

it("renders correctly", () => {
	const result = render(
		<Calendar
			startDate={1 / 1 / 1}
			setStartDate={() => {}}
			endDate={1 / 1 / 1}
			setEndDate={() => {}}
		/>,
	);
	expect(result).toMatchSnapshot();
});
