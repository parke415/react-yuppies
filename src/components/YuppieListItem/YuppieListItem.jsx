import './YuppieListItem.css';

export default function YuppieListItem({ yuppieItem }) {
  return (
    <div className="YuppieListItem">
      <div className="emoji flex-ctr-ctr">{yuppieItem.name}</div>
    </div>
  );
}