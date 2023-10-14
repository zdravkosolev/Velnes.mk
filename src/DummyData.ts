import FaceIcon from "./styles/Icons/Categories/FaceIcon";
import HairIcon from "./styles/Icons/Categories/HairIcon";
import HairRemovalIcon from "./styles/Icons/Categories/HairRemovalIcon";
import MedicalIcon from "./styles/Icons/Categories/MedicalIcon";
import MessageIcon from "./styles/Icons/Categories/MessageIcon";
import NailIcon from "./styles/Icons/Categories/NailIcon";
import AvatarImg from "./images/DummyImages/fb120378836111a07a5300c568dee5c5.png";
import { IChoosedTreatment } from "./Context/BookingContext/ServicesBookingProvider";

export interface ISalonServicesCategory {
    category: string;
    icon: any;
}

export interface ISalonCompanies {
    id: number;
    name: string;
    category: string;
    thumbnail: string;
    averageRating: number;
    reviewsNumber: number;
    isFavorite: boolean;
    services: string[];
    location: string;
    address: string;
}
export interface IEmployee {
    name: string;
    jobTitle: string;
    rating: number;
    avatar: string;
}
export interface ISalonReview {
    userName: string;
    avatar: string;
    datePosted: string;
    reviewRate: number;
    comment: string;
    staff: string;
    services: string[];
}
export interface IPaymentCard {
    cardName: "Visa" | "Mastercard";
    cardNumber: number;
}
export interface IRoot {
    id: number
    name: string
    category: string
    thumbnail: string
    reviewsOverall: IReviewsOverall
    reviewsNumber: number
    isFavorite: boolean
    location: string
    address: string
    salonPics: string[]
    employees: Employee[]
    services: IService[]
    appointments?: IChoosedTreatment[]
}

export interface IAppointements {
    date?: string,
    time?: string,
    service?: string,
    employee?: string
    price?: number
}
export interface IReviewsOverall {
    ambience: number
    cleanliness: number
    staff: number
}
export interface Employee {
    name: string
    jobTitle: string
    reviewsOverall: IReviewsOverall
    avatar: string
}



export interface IService {
    service: string
    price: IPrice
    category: string
}

export interface IPrice {
    short: number
    medium: number
    long: number
}


export const SalonServicesCategory: ISalonServicesCategory[] = [
    { category: "Hair", icon: HairIcon },
    { category: "Face", icon: FaceIcon },
    { category: "Nails", icon: NailIcon },
    { category: "Hair removal", icon: HairRemovalIcon },
    { category: "Massage", icon: MessageIcon },
    { category: "Medical", icon: MedicalIcon },
];


export const SalonReviews: ISalonReview[] = [
    {
        userName: "John",
        avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        datePosted: "August 2023",
        reviewRate: 3.8,
        comment:
            "Had a great experience at the salon. The staff was friendly and professional. I especially enjoyed the facial treatment.",
        staff: "Emily",
        services: ["Face"],
    },
    {
        userName: "Sophia",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        datePosted: "July 2023",
        reviewRate: 5.0,
        comment:
            "Absolutely loved my visit to this salon. Maria did an amazing job with both my nails and makeup. Highly recommended!",
        staff: "Maria",
        services: ["Nails", "Hair removal"],
    },
    {
        userName: "Michael",
        avatar:
            "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
        datePosted: "June 2023",
        reviewRate: 4.2,
        comment:
            "The salon's atmosphere is soothing and relaxing. The nail service I received was top-notch.",
        staff: "Jessica",
        services: ["Nails"],
    },
    {
        userName: "Emma",
        avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
        datePosted: "April 2023",
        reviewRate: 4.7,
        comment:
            "I had a wonderful time getting a facial done here. The staff is attentive and the results are amazing.",
        staff: "Olivia",
        services: ["Face"],
    },
    {
        userName: "Liam",
        avatar: AvatarImg,
        datePosted: "March 2023",
        reviewRate: 3.5,
        comment:
            "The salon's services are good overall, but I felt that the prices were a bit high for what I received.",
        staff: "Daniel",
        services: ["Hair"],
    },
    {
        userName: "Ava",
        avatar:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        datePosted: "February 2023",
        reviewRate: 4.9,
        comment:
            "I've been a regular customer at this salon for years. The quality of their work has never disappointed me.",
        staff: "Sophia",
        services: ["Massage", "Hair"],
    },
    {
        userName: "Noah",
        avatar:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        datePosted: "January 2023",
        reviewRate: 3.0,
        comment:
            "My experience was okay. The nail service was good, but the waiting time was quite long.",
        staff: "Emily",
        services: ["Medical"],
    },
    {
        userName: "Olivia",
        avatar:
            "https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        datePosted: "December 2022",
        reviewRate: 4.6,
        comment:
            "I was impressed with the attention to detail in the makeup service I received. Will definitely come back.",
        staff: "Maria",
        services: ["Face"],
    },
    {
        userName: "William",
        avatar:
            "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        datePosted: "November 2022",
        reviewRate: 4.0,
        comment:
            "The staff was friendly, and the atmosphere was cozy. The hair styling could have been a bit better, though.",
        staff: "Jessica",
        services: ["Hair"],
    },
    {
        userName: "Isabella",
        avatar:
            "https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        datePosted: "October 2022",
        reviewRate: 4.8,
        comment:
            "This salon is my go-to place for self-care. Their face and nail services are exceptional.",
        staff: "Sophia",
        services: ["Nails", "Face"],
    },
];


//     {
//         service: "Manicure gellack French",
//         price: 80,
//         discoundPrice: 60,
//         salon: "Nail salon Skopje",
//         reviewsNumber: 5,
//         averageRating: 4.5,
//     },
//     {
//         service: "Pedicure with Foot Spa",
//         price: 70,
//         discoundPrice: 50,
//         salon: "Spa Haven",
//         reviewsNumber: 8,
//         averageRating: 4.2,
//     },
//     {
//         service: "Haircut and Blowout",
//         price: 120,
//         discoundPrice: 90,
//         salon: "Chic Cuts Salon",
//         reviewsNumber: 12,
//         averageRating: 4.8,
//     },
//     {
//         service: "Full Body Massage",
//         price: 150,
//         discoundPrice: 120,
//         salon: "Relaxation Retreat Spa",
//         reviewsNumber: 6,
//         averageRating: 4.6,
//     },
//     {
//         service: "Facial Treatment with Hydration",
//         price: 100,
//         discoundPrice: 80,
//         salon: "Glowing Skin Studio",
//         reviewsNumber: 10,
//         averageRating: 4.3,
//     },
//     {
//         service: "Balayage Hair Color",
//         price: 180,
//         discoundPrice: 150,
//         salon: "Color Fusion Salon",
//         reviewsNumber: 7,
//         averageRating: 4.7,
//     },
//     {
//         service: "Eyebrow Shaping and Tinting",
//         price: 40,
//         discoundPrice: 30,
//         salon: "Brow Beauty Bar",
//         reviewsNumber: 9,
//         averageRating: 4.1,
//     },
//     {
//         service: "Deep Tissue Massage",
//         price: 130,
//         discoundPrice: 100,
//         salon: "Zen Wellness Spa",
//         reviewsNumber: 11,
//         averageRating: 4.4,
//     },
//     {
//         service: "Hair Extensions Installation",
//         price: 200,
//         discoundPrice: 160,
//         salon: "Extensions Elegance",
//         reviewsNumber: 4,
//         averageRating: 4.0,
//     },
//     {
//         service: "Gentleman's Grooming Package",
//         price: 90,
//         discoundPrice: 70,
//         salon: "Dapper Den Barber Shop",
//         reviewsNumber: 3,
//         averageRating: 4.9,
//     },
// ];
export const SalonAmenities = [
    "Comfortable Seating",
    "Refreshments",
    "Magazines and Reading Material",
    "Wi-Fi",
    "Charging Stations",
    "Relaxing Music",
    "Spa-like Environment",
    "Massage Chairs or Stations",
    "Private Rooms",
    "Online Booking System",
];


//     {
//         name: "Emily",
//         jobTitle: "Hair specialist",
//         rating: 4.2,
//         avatar:
//             "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
//     },
//     {
//         name: "Denise",
//         jobTitle: "Hair specialist",
//         rating: 4.5,
//         avatar:
//             "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
//     },
//     {
//         name: "Sofia",
//         jobTitle: "Nail specialist",
//         rating: 3.5,
//         avatar:
//             "https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//         name: "Margot",
//         jobTitle: "Nail specialist",
//         rating: 5,
//         avatar:
//             "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
//     },
//     {
//         name: "Gal",
//         jobTitle: "Massage specialist",
//         rating: 5,
//         avatar:
//             "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
//     },
//     {
//         name: "Letty",
//         jobTitle: "Massage specialist",
//         rating: 4.8,
//         avatar:
//             "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
//     },
//     {
//         name: "Dominic",
//         jobTitle: "Medical specialist",
//         rating: 4.7,
//         avatar:
//             "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     },
//     {
//         name: "Jack",
//         jobTitle: "Medical specialist",
//         rating: 3.5,
//         avatar:
//             "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     },
//     {
//         name: "Simon",
//         jobTitle: "Face specialist",
//         rating: 4.5,
//         avatar:
//             "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
//     },
//     {
//         name: "Dwayne",
//         jobTitle: "Face specialist",
//         rating: 4.3,
//         avatar:
//             "https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//         name: "William",
//         jobTitle: "Hair removal specialist",
//         rating: 3.2,
//         avatar:
//             "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
//     },
//     {
//         name: "Manuel",
//         jobTitle: "Hair removal specialist",
//         rating: 2.9,
//         avatar:
//             "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
//     },
// ];
// export const SalonImgArr = [
//     "https://fastly.picsum.photos/id/662/450/300.jpg?hmac=SXOr__mXicfkHn5B1KkqGeCB2O5KkJeyFWjt_wcg1t4",
//     "https://fastly.picsum.photos/id/401/450/300.jpg?hmac=ggyhibypVtkQ6FUdaSHaGeE6Sp4jCap_gtw3N-2hbh8",
//     'https://fastly.picsum.photos/id/1/450/300.jpg?hmac=0QS6Lq1Lowue07X0Gsp2ngO30ZnB7uQwXab9ZpsSj4k',
//     'https://fastly.picsum.photos/id/656/450/300.jpg?hmac=WxcveGEE8iR0tlNfGSSEMtn-gvlYCUjps0Ps5pp364U',
//     'https://fastly.picsum.photos/id/415/450/300.jpg?hmac=1kwJ0bWjEFwnxCvr5C2h44chBRMvvcX4ivhbVRwcnZU',
//     'https://fastly.picsum.photos/id/221/450/300.jpg?hmac=o9wrpLYi2_y54G7EZmpUEmo2O9eR0HLMXGg6HGLoDxk',
//     'https://fastly.picsum.photos/id/428/450/300.jpg?hmac=FX8pOgKlRybjeHpCm8__QvOSKz1Y3x8AarmjxUajPb0',
//     'https://fastly.picsum.photos/id/775/450/300.jpg?hmac=HzZOQuoW4gQ7smhuIIOj65YgJpcYNqstV8tJBwWdaCs',
//     'https://fastly.picsum.photos/id/62/450/300.jpg?hmac=wT9ils_bXby_jTPt-t-5NoFdUS3dsRN8DpyXi6HfCNI',
//     'https://fastly.picsum.photos/id/929/450/300.jpg?hmac=tnUyvunkJFw06Oyo4aO-8xoi3ciZRovbX3Ctobw-Nos',
//     'https://fastly.picsum.photos/id/663/450/300.jpg?hmac=l6nW4vqAIIYSMLRZLl97ylG7hq3tjD90_-UHPk1KkbY',
//     'https://fastly.picsum.photos/id/885/450/300.jpg?hmac=CRMuCz3HsmKQ5bStukCoUcHqhpw9u95yvCQRdEhckFU',
//     'https://fastly.picsum.photos/id/790/450/300.jpg?hmac=WKMPAcxXRKbbF7carA53m0tSgNitEwuZKoMSjeXQaAM',
//     'https://fastly.picsum.photos/id/176/450/300.jpg?hmac=dp_iQ11SyOwhxGEhwVV_UU5XaHgSp3kaPs0z5Oxe6iA'
// ];
export let userCard: IPaymentCard[] = [
    {

        cardNumber: 1234123212331234,
        cardName: "Mastercard",

    }
    , {

        cardNumber: 7787878687787853,
        cardName: "Visa",
    }
]