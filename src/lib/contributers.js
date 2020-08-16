import React, { useState, useEffect } from 'react'
import Axios from 'axios'


const useContributerData = props => {
    const URL = 'https://api.github.com/repos/anushbhatia/Social-Scheduler/stats/contributors'
    let [data, setData] = useState([]);
    let [err, seterr] = useState(null);

    const response = async () => {
        try {
            let res = await Axios({
                method: "GET",
                url: URL
            });

            let d = []

            res.data.map(el => {
                d.push({
                    id: el.author.id,
                    username: el.author.login,
                    avatar: el.author.avatar_url,
                    profile: el.author.html_url
                })
            })

            setData(d)
        } catch (error) {
            seterr(error);
        }
    }

    useEffect(() => {
        response()
    }, data)

    return [data, err]
}


export default useContributerData
