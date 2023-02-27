import Page from "../Pages/Page";
import CSS from "csstype";
import React from "react";

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
		{data?.map((book: string | number | Array<data> | any) => (
			<div style={row}>
				<div style={column}>
					<h3>{book.title}</h3>
					<h4>{book.author}</h4>
					<p>Number of Pages : {book.noPages}</p>
					<p>ISBN: {book.ISBN}</p>
					<p>
						Genre:
						<ul>
							{book?.genre.map((genre: string) => (
								<li>{genre}</li>
							))}
						</ul>
					</p>
				</div>
				<div style={column}>
					<img src={book.image} alt={book.title} style={image} />
				</div>
			</div>
		))}
	</Page>
);

export default Result;
