import { ResCard } from './Rescard';
import { allResData } from '../utilities/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Body = () => {
  const [listRes, setListRes] = useState(allResData);
  const [data] = useState(allResData);
  function filter(text) {
    if (!text) return setListRes(data);
    const filtered = data.filter(res =>
      res.name.toLowerCase().includes(text.toLowerCase())
    );
    setListRes(filtered);
  }
  return (
    <div className="body">
      <div className="input-search">
        <input
          type="search"
          placeholder="Search restaraunt"
          onChange={e => filter(e.target.value)}
        />
        <button className="search-btn">Search</button>
        <button
          className="top-btn"
          onClick={() => {
            const filtered = listRes.filter(res => res.rating > 4.3);
            setListRes(filtered);
          }}
        >
          Top restaraunt
        </button>
      </div>
      <div className="res-container">
        {listRes.map((data, index) => (
          <Link
            className="res-links"
            to={`/restaurants/${index + 1}`}
            key={index}
          >
            <ResCard resData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};
