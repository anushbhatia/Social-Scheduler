import React, { useState, useEffect } from 'react'
import Axios from 'axios'


const useContributerData = props => {
    const URL = 'https://api.github.com/repos/anushbhatia/Social-Scheduler/stats/contributors'
    const [data, setData] = useState([]);
    const [err, seterr] = useState(null);

    const response = async () => {
        try {
            let res = await Axios({
                method: "GET",
                url: URL
            });

            let contribtorList = []

            res.data.map(el => {

                const { id, login, avatar_url, html_url } = el.author
                
                if (login !== 'anushbhatia' && login !== 'smaranjitghose' && login !== 'abhu-A-J') {
                    contribtorList.push({
                        id: id,
                        username: login,
                        avatar: avatar_url,
                        profile: html_url
                    })
                }

            })

            setData(contribtorList)
        } catch (error) {
            seterr(error);
        }
    }

    useEffect(() => {
        response()
    }, [])

    return [data, err]
}


export default useContributerData
