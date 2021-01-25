import React, {useEffect, useState} from "react";
import firebase from "../../util/Firebase";
import BasicTable from "../form/table";

export default function NewsList(props) {
	let [news, setNews] = useState([]);


	useEffect(() => {
		let db = firebase.firestore();
		db.collection("news").orderBy("scraping_time").limit(20)
			.onSnapshot(function (querySnapshot) {
				let news = [];
				querySnapshot.forEach(function (doc) {
					news.push(doc.data());
				});
				setNews(news);
			});
	}, []);

	useEffect(() => {
		console.log(news)
	}, [news])

	return (
		<div>
			<BasicTable news={news}/>
		</div>
	)
}

