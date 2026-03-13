import { useDispatch, useSelector } from "react-redux";
import {
	setFilter,
	setSort,
	setSearch,
	selectFilteredProducts,
} from "../store/productSlice";

const CATEGORIES = [
	"all",
	"Elektronika",
	"Odziez",
	"Dom i ogrod",
	"Sport",
];

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector(selectFilteredProducts);
	const { filterCategory, sortBy, sortDir, searchQuery } =
		useSelector((s) => s.products);

	const handleSort = (col) => {
		dispatch(
			setSort({
				sortBy: col,
				sortDir: sortBy === col && sortDir === "asc" ? "desc" : "asc",
			}),
		);
	};

	return (
		<div className="page">
			<h1>Produkty</h1>
			<div className="controls">
				<input
					placeholder="Szukaj..."
					value={searchQuery}
					onChange={(e) => dispatch(setSearch(e.target.value))}
					className="search-input"
				/>
			</div>
			<div className="filter-tabs">
				{CATEGORIES.map((cat) => (
					<button
						key={cat}
						className={filterCategory === cat ? "active" : ""}
						onClick={() => dispatch(setFilter(cat))}
					>
						{cat === "all" ? "Wszystkie" : cat}
					</button>
				))}
			</div>
			<table className="data-table">
				<thead>
					<tr>
						{["name", "category", "price", "stock", "sold"].map(
							(col) => (
								<th
									key={col}
									onClick={() => handleSort(col)}
								>
									{col}{" "}
									{sortBy === col
										? sortDir === "asc"
											? "▲"
											: "▼"
										: ""}
								</th>
							),
						)}
					</tr>
				</thead>
				<tbody>
					{products.map((prod) => (
						<tr key={prod.id}>
							<td>{prod.name}</td>
							<td>
								<span className="badge-cat">{prod.category}</span>
							</td>
							<td>{prod.price}</td>
							<td>{prod.stock}</td>
							<td>{prod.sold}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Products;
