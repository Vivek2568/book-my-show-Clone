const Settings = {
    infinite: true,
    autoplay: false,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide: 0,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToScroll:3,
                slidesToShow:3,
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToScroll:2,
                slidesToShow:2,
            }
        }, {
            breakpoint:400,
            settings:{
                slidesToScroll:1,
                slidesToShow:1,
            }
        }
    ]
}
export default Settings;