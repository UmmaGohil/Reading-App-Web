import Page from "../Pages/Page";
import CSS from "csstype";

interface Props {
	data: {}[];
}

type data = {
	genre: [];
};

// need an interface to capture shape of data from results

const row: CSS.Properties = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	width: "100%",
	color: "#2938fa",
	fontSize: "1.5rem",
};

const column: CSS.Properties = {
	display: "flex",
	flexDirection: "column",
	flexBasis: "100%",
	flex: "1",
};

const image: CSS.Properties = {
	height: "40vh",
	width: "25vh",
};

const Result = ({ data }: Props) => (
	<Page variant="regular">
		{data?.map((a: string | number | Array<data> | any) => (
			<div style={row}>
				<div style={column}>
					<h3>{a.title}</h3>
					<h4>{a.author}</h4>
					<p>Number of Pages : {a.noPages}</p>
					<p>ISBN: {a.ISBN}</p>
					<p>Genre: {a.genre}</p>
				</div>
				<div style={column}>
					<img src={a.image} alt={a.title} style={image} />
				</div>
			</div>
		))}
	</Page>
);

export default Result;
