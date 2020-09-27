import React, { useState, useEffect } from 'react'
import contributorData from '../../../lib/contributers'
import CardItem from './CardItem'

const Cards = () => {
	let [dataVal, setData] = useState({
		contributors: [],
		admins: [],
		mentors: []
	});
	let [loading, setLoading] = useState(true)
	useEffect(() => {
		async function fetchContributors() {
			let data = await contributorData();
			setData(data);
			setLoading(false);
		}
		fetchContributors();
	}, [])

	return (
		<div className="detail container">
			{!loading &&
				<React.Fragment>
					<div className="container maintainers">
						<h2>Project Maintainers</h2>
						<div className="contain">
						{
							dataVal.admins.length && dataVal.admins.map((el) => <CardItem image={el.avatar} name={el.username} profileurl={el.profile} key={el.id} />)
						}
						</div>
					</div>
					<div className="container topmargin maintainers" id="mentor">
						<h2>Mentors</h2>
						<div className="contain">
						{
							dataVal.mentors.length &&
							dataVal.mentors.map((el) => <CardItem image={el.avatar} name={el.username} profileurl={el.profile} key={el.id} />)
						}
						</div>
					</div>
					<div className="container topmargin maintainers">
						<h2>Contributors</h2>
						<div className="contain">
							{dataVal.contributors.length &&
								dataVal.contributors.map((el) => <CardItem image={el.avatar} name={el.username} profileurl={el.profile} key={el.id} />)
							}
						</div>
					</div>
				</React.Fragment>
			}
		</div>
	)
}

export default Cards;