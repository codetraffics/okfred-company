import station from "../assets/fuelstation.jpg";
import mining from "../assets/mining.jpg";
import construction from "../assets/construction.jpg";
import industrial from "../assets/industrial.jpg";

import dollar from "../assets/dollar.svg";
import payment from "../assets/payment.svg";
import customer from "../assets/customer.svg";
import delivery from "../assets/delivery.svg";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Services",
    url: "#services",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const counters = [
  {
    id: "00",
    number: "Cost-Effective Fueling Solutions",
    text: "Bulk fuel purchasing offers a cost-effective alternative to frequent refueling. You gain access to favorable pricing.",
  },
  {
    id: "01",
    number: "Same Day Service Availabilities",
    text: "Business doesn’t sleep, and neither should your access to fuel. Our Bulk Fuel services ensure around-the-clock availability.",
  },
  {
    id: "02",
    number: "Environmetal Responsibilities",
    text: "Our Bulk Fuel services align with sustainable practices. Reduce your carbon footprint with our eco-friendly fueling solutions.",
  },
];

export const services = [
  {
    id: "001",
    imgUrl: station,
    title: "fuel",
    subtitle: "fuel stations",
    desc: "We offer scheduled deliveries at your convenience and an optional upgrade to fuel tank monitoring. Customers may place their orders online or by calling our sales team directly. Please place orders at least 24 hours in advance.",
  },
  {
    id: "002",
    imgUrl: mining,
    title: "mining",
    subtitle: "small scale mining companies",
    desc: "Tired of running out of fuel on site? Let us do it for you. Sign up with Okfred today! We will make sure you never run out of fuel. Buy your fuel and have it delivered to your own storage tanks",
  },
  // Think about it: you buy fuel and have it either delivered to your own storage tanks or to your fuel trucks directly. You know the volumes purchased and the cost. So far so good. If you have a pump control system in place complemented by an electronic tank gauge, then you are also on top of fueling operations in your yard(s). That is great.
  {
    id: "001",
    imgUrl: construction,
    title: "construction",
    subtitle: "construction companies",
    desc: "Regardless of the client, project size, or fleet size, one thing stays consistent for every construction operation: fuel consumption. Buy your fuel and have it delivered to your own storage tanks directly.",
  },
  {
    id: "002",
    imgUrl: industrial,
    title: "industry",
    subtitle: "industrial companies",
    desc: "Fuel consumption is one of the largest daily expenditures for any industrial company. Buy your fuel and have it either delivered to your own storage tanks or to your fuel trucks directly.",
  },
];

export const features = [
  {
    id: "00",
    imgUrl: dollar,
    title: "efficient with affordable prices",
    desc: "Bulk fuel purchasing offers a cost-effective alternative to frequent refueling.",
  },
  {
    id: "01",
    imgUrl: delivery,
    title: "fast, dependable delivery",
    desc: "Okfred will deliver fuel to you anywhere. From refilling a single vehicle, to an entire fleet.",
  },
  {
    id: "02",
    imgUrl: customer,
    title: "top notch customer service",
    desc: "We pride ourselves on providing fast and courteous customer service.",
  },
  {
    id: "03",
    imgUrl: payment,
    title: "flexible billing options",
    desc: "Pay over the phone with your credit or debit card or pay with a check on delivery.",
  },
];

export const clients = [
  {
    id: "001",
    title: "Fuel Stations",
  },
  {
    id: "002",
    title: "Small Scale Mining Companies",
  },
  {
    id: "003",
    title: "Industrial Companies",
  },
  {
    id: "004",
    title: "Individual Homes",
  },
];
