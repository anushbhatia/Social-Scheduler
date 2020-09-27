import Axios from 'axios';
import adminList from '../data/adminList';
import mentorList from '../data/mentorList';

const contributorData = async () => {
	const URL = 'https://api.github.com/repos/anushbhatia/Social-Scheduler/contributors';
	return new Promise(async (resolve,reject) => {
		let res = await Axios({
			method: 'GET',
			url: URL,
		});
		if(res.error){
			reject(res.error);
		}
		let contributors = [], mentors = [], admins = [];
		res.data.map((el) => {
			const { id, login, avatar_url, html_url } = el;
			if (adminList.includes(login)) {
				admins.push({
					id,
					username: login,
					avatar: avatar_url,
					profile: html_url,
				})
			}
			else if (mentorList.includes(login)) {
				mentors.push({
					id,
					username: login,
					avatar: avatar_url,
					profile: html_url,
				})
			}
			else {
				contributors.push({
					id,
					username: login,
					avatar: avatar_url,
					profile: html_url,
				});
			}
		});
		console.log(res.data);
		resolve({
			contributors,
			mentors,
			admins
		})

	})	
};

export default contributorData;
