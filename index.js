import {
	animate,
	inView,
	stagger,
} from "https://cdn.jsdelivr.net/npm/motion@10.17.0/+esm";
import SplitType from "https://cdn.jsdelivr.net/npm/split-type@0.3.4/+esm";

const menuButton = document.getElementById("menu-button");
const menuList = document.getElementById("menu-list");
const car = document.getElementById("car");
const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("button");
const circles = document.querySelectorAll("[data-circles]");

menuButton.addEventListener("click", () => {
	animate(menuList, { left: "0" });
	document.body.classList.toggle("overflow-hidden");
});
menuList.addEventListener("click", () => {
	if (window.innerWidth > 768) {
		return;
	}
	animate(menuList, { left: "-100%" });
	document.body.classList.toggle("overflow-hidden");
});

inView(title, () => {
	if (window.innerWidth < 768) {
		return;
	}
	const splitText = new SplitType([title, text]);
	animate(
		splitText.chars,
		{ opacity: [0, 1] },
		{ duration: 0.5, delay: stagger(0.02) }
	);
	animate(button, { opacity: [0, 1] }, { duration: 0.5, delay: 0.75 });
});

inView(circles, () => {
	animate(circles, { opacity: 1 }, { duration: 2, delay: stagger(0.25) });
});

inView(car, () => {
	animate(car, { x: ["110%", "-50%"] }, { duration: 1, delay: 0.25 });
});

// LEAFLET
L.map("map", {
	layers: [
		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: "",
		}),
	],
	center: [41.85, -87.7],
	zoom: 9,
	scrollWheelZoom: false,
});
