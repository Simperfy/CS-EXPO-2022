
const dictString = {
    "web_title" : "CS Expo 2022",
    "placeholder_title" : "Lorem ipsum",
    "placeholder_short" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "placeholder_medium" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum sollicitudin purus, eu sollicitudin nisi porta in.",
    "placeholder_long" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum sollicitudin purus, eu sollicitudin nisi porta in. Integer fringilla aliquet felis, et convallis ex euismod nec.",
    "page_partners" : "Our Partners",
    "page_about" : "About",
    "page_gallery" : "Gallery",
    "page_projects" : "Projects",
    "page_main" : "CS Expo 2022",
    "desc_partners" : "We at CS EXPO 2022 have partnered with exceptional companies and organizations in order to bring this event to fruition. Check them out and get to know them.",
};

const dictDir = {
    "placeholder_1080" : "/images/placeholders/1920x1080.png",
    "placeholder_700" : "/images/placeholders/700.png",

}

export function DictString(key){
    return dictString[key];
}

export function DictDir(key){
    return dictDir[key];
}