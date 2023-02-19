import { connect} from "react-redux";

const TotalSum = ({items}) => {
  
return (

 <div >
{items.reduce((sum, item) => {
    sum += item.food.price * item.qty;
    return sum;
  }, 0)}
</div>);
}
const connector = connect((state) => ({
  items: state.basket,
}));

export default connector (TotalSum);