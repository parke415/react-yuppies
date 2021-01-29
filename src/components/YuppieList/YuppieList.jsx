import './YuppieList.css';
import YuppieListItem from '../YuppieListItem/YuppieListItem';

export default function YuppieList({ yuppies, handleDeleteYuppie }) {
  return (
    <main className="YuppieList">
      {yuppies.map(yuppie =>
        <YuppieListItem key={yuppie._id} yuppie={yuppie} handleDeleteYuppie={handleDeleteYuppie} />
      )}
    </main>
  );
}