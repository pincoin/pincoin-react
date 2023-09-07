import { cartActions } from '../slices/cartSlice';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://example.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            return await response.json();
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (error) {
            // toast message
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        // toast message

        const sendRequest = async () => {
            const response = await fetch('https://example.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest();
            // toast message
        } catch (error) {
            // toast message
        }
    };
};
