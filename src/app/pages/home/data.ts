import { sliderOpt } from 'src/app/shared/data';

export const introSlider = {
    ...sliderOpt,
    nav: true,
    dots: true,
    loop: true,
    responsive: {
        992: {
            nav: true
        }
    }
}

export const brandSlider = {
    ...sliderOpt,
    nav: false,
    dots: false,
    margin: 0,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            items: 6
        },
        1360: {
            items: 7,
            nav: true,
            dots: true
        }
    }
}

export const specialSlider = {
    ...sliderOpt,
    nav: true, 
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items:2
        },
        600: {
            items:3
        },
        992: {
            items:4
        },
        1200: {
            items:4,
            dots: false,
        }
    }
}

export const trendySlider = {
    ...sliderOpt,
    nav: true, 
    dots: false,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items:2
        },
        480: {
            items:2
        },
        768: {
            items:3
        },
        992: {
            items:4
        }
    }
}

export const blogSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    }
}

export const teamslider = {
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:500,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items:2
        },
        480: {
            items:2
        },
        768: {
            items:3
        },
        992: {
            items:4
        }
    }
}

interface Category {
    image: string;
    name: string;
    query: string;
    id:number;
}

export const cats: Category[] = [
    {
        image: "assets/images/market/cats/1.jpg",
        name: "Monitors",
        query: "Monitors",
        id:11
    },
    {
        image: "assets/images/market/cats/01.jpg",
        name: "Motherboard",
        query: "Motherboard",
        id:13
    },
    {
        image: "assets/images/market/cats/3.jpg",
        name: "USB",
        query: "USB",
        id:10
    },
    {
        image: "assets/images/market/cats/5.jpg",
        name: "HDD",
        query: "HDD",
        id:2
    },
    {
        image: "assets/images/market/cats/gold_ssd.jpg",
        name: "Gold SSD",
        query: "Gold SSD",
        id:6
    },
    {
        image: "assets/images/market/cats/m.2.jpg",
        name: "M.2 SSD",
        query: "M.2 SSD",id:7
    }, {
        image: "assets/images/market/cats/10.jpg",
        name: "Graphic Card",
        query: "Graphic Card",id:12
    }
    , {
        image: "assets/images/market/cats/11.jpg",
        name: "Riser Card",
        query: "Riser Card",id:5
    }
]

export const testiSlider = {
    nav: false,
    dots: false,
    margin: 0,
    items: 6,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 2
        },
        600: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        },
        1500: {
            items: 6
        }
    }
}
