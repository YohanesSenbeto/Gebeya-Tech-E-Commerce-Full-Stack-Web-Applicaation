import { loadStripe } from "@stripe/stripe-js";

// Replace with your own publishable key from Stripe Dashboard
const stripePromise = loadStripe(
    "pk_test_51OVLc2HjxnpOvxRWl5YIZ6YlWUdabpFjF1hHlMRS0aNUBrY4LdCjd4jTKgvToLjzeuKhKHePgJosQokqtXu9RL8V002dPdJwiw"
);

export default stripePromise;
