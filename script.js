const campData = {
    1: { 
        name: "Camp 1", 
        price: "₹1,800", 
        desc: "Experience the ultimate riverside stay at Camp 1. Located directly on the banks of the Ganges, this site offers premium luxury tents with modern amenities.", 
        wa: "Hello! I am interested in booking Camp 1. Please share availability.", 
        imgs: [
            "Camp1.1.png",
            "Camp1.2.png",
            "Camp1.3.png",
            "Camp1.4.png",
            "Camp1.5.png",
            "Camp1.6.png",
            "Camp1.7.png",
            "Camp1.8.png"
        ] 
    },
    2: { 
        name: "Camp 2", 
        price: "₹2,200", 
        desc: "Camp 2 is nestled high in the hills of Tapovan, offering unparalleled mountain views. Ideal for those seeking peace and a panoramic look at the Himalayan landscape.", 
        wa: "Hello! I am interested in booking Camp 2. Please share availability.", 
        imgs: [
            "Camp2.1.png",
            "Camp2.2.png",
            "Camp2.3.png",
            "Camp2.4.png",
            "Camp2.5.png",
            "Camp2.6.png",
            "Camp2.7.png",
            "Camp2.8.png"
        ] 
    },
    3: { 
        name: "Camp 3", price: "₹2,500", 
        desc: "Hidden within a dense pine forest, Camp 3 provides a cool, shaded environment perfect for meditation.", 
        wa: "Hello! I am interested in booking Camp 3. Please share availability.", 
        imgs: [
            "Camp3.1.png",
            "Camp3.2.png",
            "Camp3.3.png",
            "Camp3.4.png",
            "Camp3.5.png",
            "Camp3.6.png",
            "Camp3.7.png",
            "Camp3.8.png"
        ] 
    },
    4: { 
        name: "Camp 4", price: "₹3,000", 
        desc: "Camp 4 is designed for the modern nomad. Perfect spot for groups and solo travelers.", 
        wa: "Hello! I am interested in booking Camp 4. Please share availability.", 
        imgs: [
            "Camp4.1.png",
            "Camp4.2.png",
            "Camp4.3.png",
            "Camp4.4.png",
            "Camp4.5.png",
            "Camp4.6.png",
            "Camp4.7.png",
            "Camp4.8.png"
        ] 
    },
    5: { 
        name: "Camp 5", price: "₹3,500", 
        desc: "Royal glamping at its best. Camp 5 offers fully air-conditioned cottages.", 
        wa: "Hello! I am interested in booking Camp 5. Please share availability.", 
        imgs: [
            "Camp5.1.png",
            "Camp5.2.png",
            "Camp5.3.png",
            "Camp5.4.png",
            "Camp5.5.png",
            "Camp5.6.png",
            "Camp5.7.png",
            "Camp5.8.png"
        ] 
    },
    6: { 
        name: "Camp 6", price: "₹4,000", 
        desc: "Focus on your wellness at Camp 6 with dedicated yoga decks and organic dining.", 
        wa: "Hello! I am interested in booking Camp 6. Please share availability.", 
        imgs: [
            "Camp6.1.png",
            "Camp6.2.png",
            "Camp6.3.png",
            "Camp6.4.png",
            "Camp6.5.png",
            "Camp6.6.png",
            "Camp6.7.png",
            "Camp6.8.png"
        ] 
    },
    7: { 
        name: "Camp 7", price: "₹2,000", 
        desc: "Camp 7 is the best location for stargazing under the clear Himalayan sky.", 
        wa: "Hello! I am interested in booking Camp 7. Please share availability.", 
        imgs: [
            "Camp7.1.png",
            "Camp7.2.png",
            "Camp7.3.png",
            "Camp7.4.png",
            "Camp7.5.png",
            "Camp7.6.png",
            "Camp7.7.png",
            "Camp7.8.png"
        ] 
    },
    8: { 
        name: "Camp 8", price: "₹4,500", 
        desc: "Camp 8 is our flagship property with an infinity pool overlooking the mountains.", 
        wa: "Hello! I am interested in booking Camp 8. Please share availability.", 
        imgs: [
            "Camp8.1.png",
            "Camp8.2.png",
            "Camp8.3.png",
            "Camp8.4.png",
            "Camp8.5.png",
            "Camp8.6.png",
            "Camp8.7.png",
            "Camp8.8.png"
        ] 
    }
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
            <a href="https://wa.me/919958234358?text=${encodeURIComponent(camp.wa)}" target="_blank" class="cta-call" style="width: fit-content; margin: 0 auto 50px auto;">BOOK VIA WHATSAPP</a>
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
