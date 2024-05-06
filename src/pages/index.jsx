import React from 'react';
import { Route } from 'react-router-dom';

function Page({ title, link, components }) {
  return (
    <Route exact path={link}>
      <h1>title</h1>
    </Route>
  );
}



export default Page;
