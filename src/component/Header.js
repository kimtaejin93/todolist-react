import React from 'react';

const Header = ({ todoNum }) => {
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
  const date1 = new Date();

  return (
    <div className='header'>
      <h1>{`${date1.getFullYear()}년 ${
        date1.getMonth() + 1
      }월 ${date1.getDate()}일`}</h1>
      <div className='day'>{`${WEEKDAY[date1.getDay()]}요일`}</div>
      <div className='tasks-left'>할일{todoNum}개남음</div>
    </div>
  );
};

export default Header;
