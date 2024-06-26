"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";


export default function CheckoutNow({
    currency,
    price,
    description,
    image,
    name,
    price_id,
}: ProductCart) {
    const { checkoutSingleItem } = useShoppingCart();

    function buyNow(price_id: string) {
        checkoutSingleItem(price_id

        )
    }

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    };

    return (
        <Button
        variant="outline"
            onClick={() => {
              buyNow(product.price_id);
            }}
        >
           Checkout Now
        </Button>

    )
}