import React from "react";
import { useHistory } from "react-router-dom";
import { list } from "../../data/Data";

const RecentCard = () => {
  const history = useHistory();

  const handleButtonClick = (link) => {
    history.push(link);
  };

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, name, price } = val;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <h4>{name}</h4>
              </div>
              <div className='button flex'>
                <div>
                  
                  <button className='btn2' onClick={() => handleButtonClick('/report')}>{price}</button>
                  <label htmlFor=''></label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
