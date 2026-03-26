const campData = {
    1: { name: "Camp 1", price: "₹1,800", desc: "Experience the ultimate riverside stay at Camp 1. Located directly on the banks of the Ganges, this site offers premium luxury tents with modern amenities.", wa: "Hello! I am interested in booking Camp 1. Please share availability.", imgs: ["https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800","https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800","https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800","https://images.unsplash.com/photo-1533873984035-25970ab07461?q=80&w=800","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800","https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=800","https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800","https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800"] },
    2: { name: "Camp 2", price: "₹2,200", desc: "Camp 2 is nestled high in the hills of Tapovan, offering unparalleled mountain views.", wa: "Hello! I am interested in booking Camp 2. Please share availability.", imgs: ["https://images.unsplash.com/photo-1533873984035-25970ab07461?q=80&w=800","https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800","https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800","https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800","https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800","https://images.unsplash.com/photo-1483728642387-6c3bdd6c93ec?q=80&w=800","https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800","https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800"] },
    3: { name: "Camp 3", price: "₹2,500", desc: "Hidden within a dense pine forest, Camp 3 provides a cool, shaded environment perfect for meditation.", wa: "Hello! I am interested in booking Camp 3. Please share availability.", imgs: ["https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800","https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800","https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800","https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=800","https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=800","https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800","https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800"] },
    4: { name: "Camp 4", price: "₹3,000", desc: "Camp 4 is designed for the modern nomad. Perfect spot for groups and solo travelers.", wa: "Hello! I am interested in booking Camp 4. Please share availability.", imgs: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800","https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800","https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800","https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800","https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800","https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800"] },
    5: { name: "Camp 5", price: "₹3,500", desc: "Royal glamping at its best. Camp 5 offers fully air-conditioned cottages.", wa: "Hello! I am interested in booking Camp 5. Please share availability.", imgs: ["https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=800","https://images.unsplash.com/photo-1503221043305-f7498f8b7888?q=80&w=800","https://images.unsplash.com/photo-1510312305653-8ed496efbe75?q=80&w=800","https://images.unsplash.com/photo-1465408953385-7c4627c29435?q=80&w=800","https://images.unsplash.com/photo-1533167649158-6d508895b680?q=80&w=800","https://images.unsplash.com/photo-1496080174650-637e3f22fa03?q=80&w=800","https://images.unsplash.com/photo-1526491109672-74740652b963?q=80&w=800","https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800"] },
    6: { name: "Camp 6", price: "₹4,000", desc: "Focus on your wellness at Camp 6 with dedicated yoga decks and organic dining.", wa: "Hello! I am interested in booking Camp 6. Please share availability.", imgs: ["https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800","https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800","https://images.unsplash.com/photo-1512101176959-c557f3516787?q=80&w=800","https://images.unsplash.com/photo-1518602164578-cd0074062767?q=80&w=800","https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?q=80&w=800","https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800","https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800"] },
    7: { name: "Camp 7", price: "₹2,000", desc: "Camp 7 is the best location for stargazing under the clear Himalayan sky.", wa: "Hello! I am interested in booking Camp 7. Please share availability.", imgs: ["https://images.unsplash.com/photo-1521033335978-f1ca5d73958d?q=80&w=800","https://images.unsplash.com/photo-1470252649358-96957c7d31d7?q=80&w=800","https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=800","https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=800","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800","https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800","https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=800","https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800"] },
    8: { name: "Camp 8", price: "₹4,500", desc: "Camp 8 is our flagship property with an infinity pool overlooking the mountains.", wa: "Hello! I am interested in booking Camp 8. Please share availability.", imgs: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800","https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800","https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800","https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800","https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800","https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800","https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800"] }
};

function openDetails(id) {
    const camp = campData[id];
    let galleryHtml = '';
    camp.imgs.forEach(url => {
        galleryHtml += `<img src="${url}" class="gallery-img">`;
    });

    const content = `
        <div class="gallery-grid">${galleryHtml}</div>
        <div class="details-info-section">
            <h2>${camp.name}</h2>
            <p>${camp.desc}</p>
            <div class="price-tag" style="margin-bottom:40px;">${camp.price} / person</div>
            <div class="amenities-list">
                <div class="amenity"><i class="fas fa-utensils"></i> All Meals</div>
                <div class="amenity"><i class="fas fa-fire"></i> Bonfire</div>
                <div class="amenity"><i class="fas fa-wifi"></i> Free Wifi</div>
            </div>
            <a href="https://wa.me/919958234358?text=${encodeURIComponent(camp.wa)}" class="cta-call" style="width: fit-content; margin: 0 auto 50px auto;">BOOK VIA WHATSAPP</a>
        </div>
    `;
    document.getElementById('details-content-box').innerHTML = content;
    document.getElementById('main-site').style.display = 'none';
    document.getElementById('details-page').style.display = 'block';
    window.scrollTo(0,0);

    // Push state to history to enable back button functionality
    history.pushState({ campOpen: true }, "");
}

// Handle Browser Back button
window.onpopstate = function(event) {
    if (document.getElementById('details-page').style.display === 'block') {
        document.getElementById('details-page').style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
        const campSection = document.getElementById('camps');
        window.scrollTo(0, campSection.offsetTop - 100);
    }
};

// Navbar shrink and logo scale on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const logo = document.querySelector('.nav-logo-img');
    const isMobile = window.innerWidth <= 768;
    
    if (window.scrollY > 50) {
        nav.style.height = isMobile ? '80px' : '85px';
        logo.style.height = isMobile ? '60px' : '65px';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.height = isMobile ? '95px' : '110px';
        logo.style.height = isMobile ? '75px' : '90px';
        nav.style.boxShadow = 'none';
    }
});