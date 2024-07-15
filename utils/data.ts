import images from '../public/images/blue.jpeg'
import caro from '../public/images/carosal.jpeg'
import fall from '../public/images/fall.jpeg'
import lady from '../public/images/lad.jpeg'
import emb from '../public/images/emb.jpeg'
import chal from '../public/images/chal.jpeg'
import four from '../public/images/four.png'


export const enum ButtonLinksTypes {
    FACEBOOK = 'facebook',
    INSTAGRAM = 'instagram',
    LINKEDIN = 'linkedin',
    TWITTER = 'twitter',
    BUTTON = 'button',
}

export const linkData = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Abort',
        url: '/about'
    },
    {
        name: 'Gallery',
        url: '/gallery'
    },
    {
        name: 'Commissions',
        url: '/commissions'
    },
    {
        name: 'Shop',
        url: '/shop'
    },
    {
        name: 'Consultation',
        url: '/consultation'
    },
    {
        name: 'Events/Exhibition',
        url: '/events'
    },
    {
        name: 'FAQs',
        url: '/faqs'
    },
]

export const imagesArray = [
    {
        url: images
    },
    {
        url: caro
    },
    {
        url: fall
    }
]

export const galleryCarouselImages = [
    {
        url: "lad"
    },
    {
        url: "emb"
    },
    {
        url: "chal"
    }
]

export const ButtonLinksData = [
    {
        type: ButtonLinksTypes.FACEBOOK,
        href: '/'
    },
    {
        type: ButtonLinksTypes.INSTAGRAM,
        href: '/'
    },
    {
        type: ButtonLinksTypes.LINKEDIN,
        href: '/'
    },
    {
        type: ButtonLinksTypes.TWITTER,
        href: '/'
    },
]


export const recentWorkData = [
    {
        url: "lad",
        flag: true,
    },
    {
        url: "emb",
        flag: false,
    },
    {
        url: "chal",
        flag: false,
    },
    {
        url: "fall",
        flag: false,
    }
]