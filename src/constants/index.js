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
    id: "0000",
    title: "Home",
    url: "#home",
  },
  {
    id: "0001",
    title: "About",
    url: "#about",
  },
  {
    id: "0002",
    title: "Services",
    url: "#services",
  },
  {
    id: "0003",
    title: "Contact",
    url: "#contact",
  },
];

export const counters = [
  {
    id: "00000",
    number: "Cost-Effective Fueling Solutions",
    text: "Bulk fuel purchasing offers a cost-effective alternative to frequent refueling. You gain access to favorable pricing.",
  },
  {
    id: "00001",
    number: "Same Day Service Availabilities",
    text: "Business doesn’t sleep, and neither should your access to fuel. Our Bulk Fuel services ensure around-the-clock availability.",
  },
  {
    id: "00002",
    number: "Environmetal Responsibilities",
    text: "Our Bulk Fuel services align with sustainable practices. Reduce your carbon footprint with our eco-friendly fueling solutions.",
  },
];

export const services = [
  {
    id: "0010",
    imgUrl: station,
    title: "fuel",
    subtitle: "fuel stations",
    desc: "We offer scheduled deliveries at your convenience and an optional upgrade to fuel tank monitoring. Customers may place their orders online or by calling our sales team directly. Please place orders at least 24 hours in advance.",
  },
  {
    id: "0020",
    imgUrl: mining,
    title: "mining",
    subtitle: "small scale mining companies",
    desc: "Tired of running out of fuel on site? Let us do it for you. Sign up with Okfred today! We will make sure you never run out of fuel. Buy your fuel and have it delivered to your own storage tanks",
  },
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
    id: "0100",
    imgUrl: dollar,
    title: "efficient with affordable prices",
    desc: "Bulk fuel purchasing offers a cost-effective alternative to frequent refueling.",
  },
  {
    id: "0200",
    imgUrl: delivery,
    title: "fast, dependable delivery",
    desc: "Okfred will deliver fuel to you anywhere. From refilling a single vehicle, to an entire fleet.",
  },
  {
    id: "0300",
    imgUrl: customer,
    title: "top notch customer service",
    desc: "We pride ourselves on providing fast and courteous customer service.",
  },
  {
    id: "0400",
    imgUrl: payment,
    title: "flexible billing options",
    desc: "Pay over the phone with your credit or debit card or pay with a check on delivery.",
  },
];

export const clients = [
  {
    id: "1000",
    title: "Fuel Stations",
  },
  {
    id: "2000",
    title: "Small Scale Mining Companies",
  },
  {
    id: "3000",
    title: "Industrial Companies",
  },
  {
    id: "4000",
    title: "Individual Homes",
  },
];
