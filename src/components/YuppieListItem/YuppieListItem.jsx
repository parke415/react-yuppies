import React from 'react';
import {Link} from 'react-router-dom';
import './YuppieListItem.css';

export default function YuppieListItem({ yuppie, handleDeleteYuppie }) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{yuppie.name}</h3>
      </div>
      <div className='panel-footer YuppieListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{ pathname: '/details', state: {yuppie} }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{ pathname: '/edit', state: {yuppie} }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteYuppie(yuppie._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
