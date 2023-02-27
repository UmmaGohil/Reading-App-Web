import Page from "../Pages/Page";
import { enGB } from "date-fns/locale";
import { DateChangeCallBack, DateRangePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import CSS from "csstype";

interface Props {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	startDate: Date | string | any;
	setStartDate: DateChangeCallBack;
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	endDate: Date | string | any;
	setEndDate: DateChangeCallBack;
}

const input: CSS.Properties = {
	width: "7rem",
	height: "2rem",
	color: "#2938fa",
	border: "1px solid #f1a5d0",
	fontSize: "1rem",
	marginLeft: "1rem",
	borderRadius: "0.5rem",
	textAlign: "center",
};

const daterange: CSS.Properties = {
	marginTop: "-11vh",
};
const Calendar = ({ startDate, setStartDate, endDate, setEndDate }: Props) => {
	//const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

	return (
		<Page variant="regular">
			<DateRangePicker
				startDate={startDate}
				endDate={endDate}
				onStartDateChange={setStartDate}
				onEndDateChange={setEndDate}
				minimumDate={new Date()}
				minimumLength={1}
				format="dd MMM yyyy"
				locale={enGB}
			>
				{({ startDateInputProps, endDateInputProps, focus }) => (
					<div style={daterange}>
						<input
							className={`input${focus === startDate ? " -focused" : ""}`}
							{...startDateInputProps}
							placeholder="Start date"
							style={input}
						/>
						<span className="date-range_arrow" />
						<input
							className={`input${focus === endDate ? " -focused" : ""}`}
							{...endDateInputProps}
							placeholder="End date"
							style={input}
						/>
					</div>
				)}
			</DateRangePicker>
		</Page>
	);
};

export default Calendar;
