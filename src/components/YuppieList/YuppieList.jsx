import './YuppieList.css';
import YuppieListItem from '../YuppieListItem/YuppieListItem';

export default function YuppieList({ yuppies }) {
  const showYuppies = yuppies.map(item =>
    <YuppieListItem
      key={item._id}
      yuppieItem={item}
      // handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="YuppieList">
      {showYuppies}
    </main>
  );
}