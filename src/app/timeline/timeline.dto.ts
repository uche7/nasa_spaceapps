// timeline.dto.ts

export interface ScheduleItem {
    time: string;
    title: string;
    content: string;
}

export interface DaySchedule {
    title: string;
    day: ScheduleItem[];
    slug: string;
}

export const schedule: DaySchedule[] = [
    {
        title: 'Day 1',
        day: [
            { time: '17:30 - 18:00', title: 'Registration Check', content: 'Participants register themselves at the Engineering Building desk to collect IDs, T-Shirts and Merchandise.' },
            { time: '18:30 - 18:45', title: 'Opening Ceremony & 101', content: 'The event’s venue, provisions, itinerary, judging criteria, NASA’s Challenges and Open Data are discussed in detail.' },
            { time: '17:30 - 19:30', title: 'PITCH101 & Pitch-Fest', content: '30 seconds stage time for everyone, A Pitch-Fest is a rapid networking event that helps in skill discovery.' },
            { time: '17:30 - 20:00', title: 'Team Formation Session + Disperse to Workspaces', content: '30 different QR codes, 1 for each challenge will be on display in the atrium to help in clustered networking. As soon as participants form teams, they will be allocated a workspace for the hackathon ' },
            { time: '17:30 - 21:30', title: 'Pizza Time!', content: 'Come down to the Engineering Building Atrium Area for some pizza on the house' },
            { time: '23:00 - Day2 06:00', title: 'Overnight Hacking, Snacking & Napping', content: 'Continue working on your projects in your workspaces and drop down to the support desk for some midnight snacks.' },
        ],
        slug: 'day-1'
    },
    {
        title: 'Day 2',
        day: [
            { time: '9:00 - 10:00', title: 'Breakfast', content: 'Come down to the Engineering Building Atrium for some peanut butter and jelly or cereal as you like' },
            { time: '10:00 - End of Event', title: 'Mentor and Support Hours (10 AM –End of Event)', content: 'Mentors from diverse backgrounds would be accessible to all participants (first come-first served)' },
            { time: '13:00 - 14:00', title: 'Lunch', content: 'Grab and go with some sandwiches from the Atrium but make sure to keep your workspaces clean!' },
            { time: '14:00 - 15:00', title: '“Design Hacking” by Design Brew', content: 'Hands-on design workshop relevant for the hackathon. TopicTBD' },
            { time: '15:00 - 16:00', title: '“Resume Hacking” by Prashant Chauhan', content: 'Hands-on workshop to edit resumes and approach job applications in Ireland. TopicTBD' },
            { time: '16:00 - 16:30', title: 'Coffee Evening and Important Announcements for Day 3', content: 'Come down in front of X103 for some coffee and to get some relevant information about the Final Demo Day' },
            { time: '21:00 - Day3 06:00', title: 'Coffee Evening and Important Announcements for Day 3', content: 'Come down to the Engineering Building Atrium Area for some pizza and snacks on the house' },
        ],
        slug: 'day-2'
    },
    {
        title: 'Day 3',
        day: [
            { time: '9:00 - 10:00', title: 'Breakfast', content: 'Toast, fruits and muffins on the house @ Engineering Building Atrium (in front of X103)' },
            { time: '10:30 - 12:00', title: 'Practice Presentations and Feedback Sessions', content: 'Time and feedback will be given to assist the hackers with a dry run of the presentation (Sessions in Y103 and X103)' },
            { time: '13:00 - 14:00', title: 'Lunch', content: 'T minus 1 hour, fuel up before the presentations start!' },
            { time: '14:00 - 17:00', title: 'Final Presentations', content: 'The time for the participants to show off their hard work during the event!' },
            { time: '17:30 - 17:45', title: 'Awards and Closing Ceremony', content: 'The Global Nominees are announced, along with some next steps.' },
            { time: '17:45 - 18:00', title: 'Wrap Up and Disperse', content: 'Some final comments by organizers and the Host institution by all members disperse after the event concludes.' },
        ],
        slug: 'day-3'
    },
];
