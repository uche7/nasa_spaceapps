import { StaticImageData } from 'next/image';
import Fwf from "@/assets/images/general/landing-page/winners/winners.png";
import Idontthink from "@/assets/images/general/landing-page/winners/idontthink.png";
import Soundsurfers from "@/assets/images/general/landing-page/winners/Soundsurfers.png";

type ImageType = {
    Fwf?: StaticImageData;
    Idontthink?: StaticImageData;
    Soundsurfers?: StaticImageData;
};

type WinnerType = {
    title: string;
    name: string;
    details: { text: string; highlight: boolean }[][];
    prize: string;
    image: StaticImageData;
    member:string[];
};

export const winners: WinnerType[] = [
    {
        title: '1st',
        name: 'Fighting Fire \nwith Fire',
        details: [
            [
                { text: "SpaceApps Athlone, also known as ", highlight: false },
                { text: "HackAthlone", highlight: true },
                { text: ", is one of the 300+ locations for this year's NASA SpaceApps Challenge. ", highlight: false },
                { text: "Technology University of the Shannon", highlight: true },
                { text: " takes pride in hosting 200 participants on their campus for ", highlight: false },
                { text: "48 hours", highlight: true },
                { text: " to collaborate on ", highlight: false },
                { text: "30 problem statements", highlight: true },
                { text: " that cater to all STEAM fields.", highlight: false },
            ], [
                { text: "\nHackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions.", highlight: false },
            ]
        ],
        prize: '€ 1500',
        image: Fwf,
        member:['Robert Rafanelli','Claudia Ortiz','Joe Biju','Micheál Gill','Ray Foysal','Moaz Refaei']
    },
    {
        title: '2nd',
        name: 'IDontThink',
        details: [
            [
                { text: "SpaceApps Athlone, also known as ", highlight: false },
                { text: "HackAthlone", highlight: true },
                { text: ", is one of the 300+ locations for this year's NASA SpaceApps Challenge. ", highlight: false },
                { text: "Technology University of the Shannon", highlight: true },
                { text: " takes pride in hosting 200 participants on their campus for ", highlight: false },
                { text: "48 hours", highlight: true },
                { text: " to collaborate on ", highlight: false },
                { text: "30 problem statements", highlight: true },
                { text: " that cater to all STEAM fields.", highlight: false },
            ], [
                { text: "\nHackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions.", highlight: false },
            ]
        ],
        prize: '€ 750',
        image: Idontthink,
        member:['Piotr Warkocki','Victor Costello','Josh Quirke','James McNeill','Dylan Lowe','Sorin Stoleru'
        ]
    },
    {
        title: '3rd',
        name: 'Sound \nsurfers',
        details: [
            [
                { text: "SpaceApps Athlone, also known as ", highlight: false },
                { text: "HackAthlone", highlight: true },
                { text: ", is one of the 300+ locations for this year's NASA SpaceApps Challenge. ", highlight: false },
                { text: "Technology University of the Shannon", highlight: true },
                { text: " takes pride in hosting 200 participants on their campus for ", highlight: false },
                { text: "48 hours", highlight: true },
                { text: " to collaborate on ", highlight: false },
                { text: "30 problem statements", highlight: true },
                { text: " that cater to all STEAM fields.", highlight: false },
            ], [
                { text: "\nHackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions.", highlight: false },
            ]
        ],
        prize: '€ 250',
        image: Soundsurfers,
        member:['Eoghan Hynes','Dave','Aine','Diarmuid','Fabrizio']
    },
]
