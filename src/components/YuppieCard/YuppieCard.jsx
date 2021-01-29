import {Link} from 'react-router-dom';

export default function YuppieCard({ yuppie }) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{yuppie.name}</h3>
      </div>
      <div className='panel-body'>
        <ul>
          <li>Age: {yuppie.age}</li>
          <li>Location: {yuppie.location}</li>
          <li>Occupation: {yuppie.occupation}</li>
        </ul>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN</Link>
      </div>
    </div>
  );
}
