import {
  mobile,
  backend,
  creator,
  web,
  instagram,
  facebook,
  youtube,
  whatsapp,
  Matter,
  anupama,
  singhproperty,
  breaktime,
  honourhomes,
  carrent,
  jobit,
  tripguide,
  page
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Make360Degree",
    icon: web,
  },
  {
    title: "Matterport ",
    icon: mobile,
  },
  {
    title: "360 Camera",
    icon: backend,
  },
  {
    title: "Business Work",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/make360degree/",
  },
  {
    name: "Youtube",
    icon: youtube,
    link: "https://www.youtube.com/@make360degree",
  },
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/make360degree?mibextid=ZbWKwL",
  },
  {
    name: "MatterPort",
    icon: Matter,
    link: "https://www.matterport.com",
  },
  {
    name: "Whatsapp Businesss",
    icon: whatsapp,
    link: "https://wa.me/message/OU7TJSX5SLHKP1",
  },
];

const experiences = [
  {
    title: "Anumpama Properties",
    company_name: "Faridabad",
    icon: Matter,
    iconBg: "#E6DEDD",
    date: "May 23, 2023",
    points: [
      {
        description:
          "The 360° house walk-through model in 3D is Anupama Property watch this and experience the real world walk through model.",
        image: anupama,
        url: "https://my.matterport.com/show/?m=r7TicAHxNvy&lang=en",
      },
    ],
  },
  {
    title: "The Break Time Restro",
    company_name: "Faridabad",
    icon: Matter,
    iconBg: "#E6DEDD",
    date: "April 11, 2023",
    points: [
      {
        description:
          "The Break Time Restro Relac Unwind and Savor the moment at our inviting break time restro where every bite is a delightful escape and best interior also.",
        image: breaktime,
        url: "https://my.matterport.com/show/?m=yeZ7xRYU4o1&lang=en",
      },
    ],
  },
  {
    title: "Singh Properties",
    company_name: "Gurugram",
    icon: Matter,
    iconBg: "#E6DEDD",
    date: "Jun 20, 2023",
    points: [
      {
        description:
          "The Singh's Properties Gives you indulge exquisite living at our luxurious flats, where elegance meets comfort.",
        image: singhproperty,
        url: "https://my.matterport.com/show/?m=GmnfuCdmkAR&lang=en",
      },
    ],
  },
 
  {
    title: "Honour Homes",
    company_name: "Sector-88 Faridabad",
    icon: Matter,
    iconBg: "#E6DEDD",
    date: "jun 17, 2023",
    points: [
      {
        description:
          "The Honour Homes Create cherished memories in our Honor Homes - the perfect heaven for your family's dreams to flourish.",
        image: honourhomes,
        url: "https://my.matterport.com/show/?m=r7TicAHxNvy&lang=en",
      },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Instagram",
    description:
      "Join Our Social Page For More Content To 3d Walk Through Model",
    tags: [
      {
        name: "instagram",
        color: "blue-text-gradient",
      },
      {
        name: "make360degree",
        color: "green-text-gradient",
      },
      {
        name: "MatterPort",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.instagram.com/p/Ctv7O_eLCQD/",
  },
  {
    name: "Facebook",
    description:
      "Join Our Social Page For More Content To 3d Walk Through Model.",
    tags: [
      {
        name: "facebook",
        color: "blue-text-gradient",
      },
      {
        name: "3DHouse",
        color: "green-text-gradient",
      },
      {
        name: "BusinessModel",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://fb.watch/lVa3i8n3XM/?mibextid=ZbWKwL",
  },
  {
    name: "Youtube",
    description:
      "watch our latest 3d model video to See how we can work and create a better 360 view.",
    tags: [
      {
        name: "Youtube",
        color: "blue-text-gradient",
      },
      {
        name: "WalkThroughModel",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.youtube.com/watch?v=UcaBtLKufJU&feature=youtu.be&ab_channel=Make360Degree",
  },
  {
    name: "Whatsapp",
    description: "For Business Related Queries and Services Contact us.",
    tags: [
      {
        name: "whatsappBusiness",
        color: "green-text-gradient",
      },
      {
        name: "WalkThroughModel",
        color: "pink-text-gradient",
      },
     
    ],
    image: page,
    source_code_link: "https://wa.me/message/OU7TJSX5SLHKP1",
  },

];  

export { services, technologies, experiences, testimonials, projects };
