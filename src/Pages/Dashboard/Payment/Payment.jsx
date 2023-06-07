
// import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// import CheckoutFrom from './CheckoutFrom';
// import { Elements } from '@stripe/react-stripe-js';







const Payment = () => {
    return (

        <div className="w-full">
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h2>Payment </h2>
            {/* <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
            </Elements> */}

        </div>

    );
};

export default Payment;