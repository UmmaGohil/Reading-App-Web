import type { NextPage } from "next";
import Page from "./Pages/Page";
import Search from "./Components/Search";
import Calendar from "./Components/Calendar";
import ResultData from "./Components/Result";
import Data from "../Data/Data.json";
import CSS from "csstype";
import { useState } from "react";

type totalPages = number;

type parseData = number;

const Home: NextPage = () => {
	const [Result, setResult] = useState<{}[]>([]);
	const [startDate, setStartDate] = useState<any | Date>();
	const [endDate, setEndDate] = useState<any | Date>();

	// to do: change so it isn't case sensitive and matches full title of one book
	const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchResult = Data.data.filter((element) =>
			element.title.includes(e.target.value),
		);
		setResult(searchResult);
	};

	const row: CSS.Properties = {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
	};

	const column: CSS.Properties = {
		display: "flex",
		flexDirection: "column",
		flexBasis: "100%",
		flex: "1",
	};

	const average: CSS.Properties = {
		color: "#2938fa",
		fontSize: "2rem",
	};

	const noDays: number = Math.ceil(
		Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24),
	);

	const pages: totalPages[] = Result.map((a: Object) => Object.values(a)[3]);
	const parsePage: parseData[] | any = [...pages];
	const total: number = Math.round(parsePage / noDays);

	return (
		<Page variant="regular">
			<Search onChange={searchChange} />
			<div style={row}>
				<div style={column}>
					<Calendar
						startDate={startDate}
						setStartDate={setStartDate}
						endDate={endDate}
						setEndDate={setEndDate}
					/>
				</div>
				<div style={column}>
					<p id="my-test-id" style={average}>
						{total > 0
							? `${total} number of pages to read each day!`
							: "Please search for a book and select a date range."}
					</p>
				</div>
			</div>

			<ResultData data={Result !== null ? Result : Data.data} />
		</Page>
	);
};

export default Home;
