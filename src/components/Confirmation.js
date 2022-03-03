import Lottie from "lottie-react";
import orderConfirmed from "../lotties/order_confirmed.json";

function CheckoutConfirmation() {

  return (
    <div className="confirm-wrap">
      <Lottie autoplay loop style={{height: 600}} animationData={orderConfirmed} />
    </div>
  );
}

export default CheckoutConfirmation;
