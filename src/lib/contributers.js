import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import adminList from '../data/adminList';
import mentorList from '../data/mentorList';
import Card from '../components/Card';

const useContributerData = (props) => {
  const URL =
    'https://api.github.com/repos/anushbhatia/Social-Scheduler/stats/contributors';
  const [data, setData] = useState([]);
  const [err, seterr] = useState(null);

  const response = async () => {
    try {
      let res = await Axios({
        method: 'GET',
        url: URL,
      });

      let contribtorList = [];

      res.data.map((el) => {
        const { id, login, avatar_url, html_url } = el.author;

        if (!adminList.includes(login) && !mentorList.includes(login)) {
          contribtorList.push({
            id: id,
            username: login,
            avatar: avatar_url,
            profile: html_url,
          });
        }
      });
      const data = [];
      for (let i = 0; i < contribtorList.length; i = i + 3) {
        data.push(contribtorList.slice(i, i + 3));
      }
      setData(data);
    } catch (error) {
      seterr(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

  // return [data, err]
  if (data.length === 0) return null;
  return data.map((el, ind) => {
    const classes = ['row', 'topmargin'];
    if (ind === 0) {
      classes.pop();
    }

    return (
      <div className={classes.join(' ')} key={ind + ''}>
        {el.map((el) => {
          return <Card image={el.avatar} name={el.username} key={el.id} />;
        })}
      </div>
    );
  });
};

export default useContributerData;
