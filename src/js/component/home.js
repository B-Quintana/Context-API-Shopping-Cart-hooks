import React from "react";
import { TshirtList } from "./TshirtList";
import { Cart } from "./Cart";
import { CartProvider } from "./CartContext";
import {navbar} from "./navbar"
import {cards} from "./cards"
export function Home() {
	return (
    <>
			<Navbar />
			<Jumbotron />
		<div className="card-group d-flex justify-content-center">
				{va.map((item, index) => (
					<Cards key={index} myimage={item} />
				))}
			</div>
		</>
    );
                }


