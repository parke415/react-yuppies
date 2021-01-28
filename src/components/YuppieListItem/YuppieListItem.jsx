import './YuppieListItem.css';

export default function YuppieListItem({ yuppie }) {
  return (
    <div className="YuppieListItem">
      <div>{yuppie.name} ({yuppie.age}), {yuppie.occupation} in {yuppie.location}</div>
    </div>
  );
}