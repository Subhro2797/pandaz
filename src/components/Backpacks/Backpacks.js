import React from 'react';
import Backpack from '../Backpack/Backpack';

const Backpacks = () => {
    return (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <Backpack name='Safari'
                strength="Easy Carry"
                description="Carry your backpack with ease owing to the Soft Padded Handle or by sliding it in
                your
                luggage trolley with the Smart Sleeve"
                price='$50'></Backpack>
            <Backpack name='Wildcraft'
                strength='Premium Durable Fabric'
                description="Engineered for performance, this polyester fabric has high-tenacity durability and is water
                and dust resistant."
                price='$70'></Backpack>
            <Backpack name='Sky Bags'
                strength='Laptop And Tablet Sleeve'
                description="A dedicated compartment to keep your
                Laptop and Tablet organized."
                price='$80'></Backpack>
        </div>
    );
};

export default Backpacks;