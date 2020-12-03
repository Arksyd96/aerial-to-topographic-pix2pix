import React, { useContext, useState } from "react";
import Image from "./Image";
import Input from "./Input";
import { Context } from "../context";
import axios from "axios";
import Notification from "./Notification";

const App = () => {
	const { x, y, sat, topo, setX, setY, setSat, setTopo } = useContext(Context);

	const [satLoading, setSatLoading] = useState(!!sat);
	const [topoLoading, setTopoLoading] = useState(!!topo);
	const [notifVisible, setNotifVisible] = useState(false);

	const findHandler = async () => {
		setSatLoading(true);
		await axios
			.get("https://sat-topo-server.herokuapp.com/api/sat/", { params: { x, y } })
			.then(({ data }) => setSat(data.img))
			.catch((err) => {
				console.log(err);
				setNotifVisible(true);
				setSat(null);
			})
			.finally((_) => setSatLoading(false));
		setTimeout(() => setNotifVisible(false), 5000);
	};

	const transformHandler = async () => {
		setTopoLoading(true);
		await axios
			.get("https://sat-topo-server.herokuapp.com/api/topo", { params: { x, y } })
			.then(({ data }) => setTopo(data.img))
			.catch((err) => console.log(err))
			.finally((_) => setTopoLoading(false));
	};

	return (
		<>
			<Notification
				title="No image found"
				message="Please try new coordinates"
				visible={notifVisible}
			/>
			<h1 style={{ marginBottom: "15px" }}>Satellite to topographic image</h1>
			<div style={{ marginBottom: "30px" }}>
				<p>
					Satellite images fetched from{" "}
					<a href="https://arcgis.com" target="blank">
						ArcGIS.com
          </a>
          .
        </p>
				<p>
					We suggest searching images using coordinates near X: 2915 and Y: 1486
					for better results.
        </p>
			</div>
			<div className="form">
				<Input label="X" content={x} setContent={setX} />
				<Input label="Y" content={y} setContent={setY} />
				<button disabled={satLoading} onClick={findHandler}>
					Find
        </button>
			</div>
			<div className="content">
				<Image
					loading={satLoading}
					src={sat ? `data:image/png;base64,${sat}` : null}
				/>
				<button
					disabled={!sat || topoLoading}
					className="primary"
					onClick={transformHandler}
				>
					Transform
        </button>
				<Image
					loading={topoLoading}
					src={topo ? `data:image/png;base64,${topo}` : null}
				/>
			</div>
		</>
	);
};

export default App;
