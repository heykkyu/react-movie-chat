import React from 'react';

function Food({fav}) {
  return <h1>I like {fav} </h1>;
}

function App() {
  return (
    <div>
      <div>안녕</div>
      <Food fav="kimchi"  />
      <Food fav="라면"  />
      <Food fav="소고기"  />
      <Food fav="돼지고기"  />
    </div>
  );
}

export default App;
