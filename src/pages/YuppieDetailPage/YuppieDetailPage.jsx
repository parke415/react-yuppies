import YuppieCard from "../../components/YuppieCard/YuppieCard";
import { useLocation } from 'react-router-dom';

export default function YuppieDetailPage() {
  
  const yuppie = useLocation().state.yuppie;

  return (
    <>
      <h1>Yuppie Details</h1>
      <YuppieCard yuppie={yuppie} key={yuppie._id} />
    </>
  );
}
