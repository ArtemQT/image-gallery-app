export interface IFooterColumn {
    columnTitle: string;
    links: string[];
}

export const footerColumns: IFooterColumn[] = [
    {
        columnTitle: 'Company',
        links: ['About', 'Features', 'Works', 'Career'],
    },
    {
        columnTitle: 'Help',
        links: [
            'Customer Support',
            'Delivery Details',
            'Terms & Conditions',
            'Privacy Policy',
        ],
    },
    {
        columnTitle: 'FAQ',
        links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
    },
    {
        columnTitle: 'Resources',
        links: [
            'Free eBooks',
            'Development Tutorial',
            'How to - Blog',
            'Youtube Playlist',
        ],
    },
];
