import './YuppieListPage.css';
import YuppieList from '../../components/YuppieList/YuppieList';

export default function YuppieListPage({ yuppies, handleDeleteYuppie }) {
  return (
    <>
      <h1>Yuppie List</h1>
      <div className='YuppieListPage-grid'>
        <YuppieList yuppies={yuppies} handleDeleteYuppie={handleDeleteYuppie} />
      </div>
    </>
  );
}
