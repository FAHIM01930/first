// ওয়েবসাইট লোড মেসেজ
console.log("Website Loaded Successfully");

// ফুটারে সাল আপডেট
document.getElementById('year').textContent = new Date().getFullYear();

// স্ক্রলিং এনিমেশন
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// স্মুথ স্ক্রলিং
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

});
// --- হ্যামবার্গার মেনু লজিক (এটা যোগ করুন) ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if(burger){
    burger.addEventListener('click', () => {
        // মেনু টগল করা
        nav.classList.toggle('nav-active');
        
        // বার্গার আইকন এনিমেশন (অপশনাল)
        burger.classList.toggle('toggle');
    });
}

// মেনুর লিংকে ক্লিক করলে মেনু বন্ধ হবে
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});
