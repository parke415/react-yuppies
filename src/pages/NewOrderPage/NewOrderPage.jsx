import React from 'react';
import YuppieList from '../../components/YuppieList/YuppieList';

export default function NewOrderPage({ yuppies }) {
  return (
    <>
      <h1>NewOrderPage</h1>
      <div>
        <YuppieList yuppies={yuppies} />
      </div>
    </>
  )
}