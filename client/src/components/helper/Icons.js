export const displayIcon = (name) => {
    switch (name) {
       case "breakfast": return 'fas fa-concierge-bell';
       case "king bed": return 'fas fa-bed';
       case "mini bar": return 'fas fa-glass-whiskey';
       case "24 hour room service": return 'fas fa-luggage-cart';
       case "bath": return 'fas fa-bath';
       case "shower": return 'fas fa-shower';
       case "sitting area": return 'fas fa-couch';
       case "cofee/tea": return 'fas fa-coffee';
       case "tv": return 'fas fa-tv';
       case "wifi": return 'fas fa-wifi';
       case "shuttle": return 'fas fa-shuttle-van';
       case "beach": return 'fas fa-umbrella-beach';
       case "spa": return "fas fa-spa";
       case "hot tub": return "fas fa-hot-tub";
       default: return "";
    }
}