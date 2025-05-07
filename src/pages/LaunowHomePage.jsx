import React, { useState, useEffect } from "react";
import { MoveRight, CheckCircle, Star, Clock, Truck, Smile, Award, Instagram, Youtube, Twitter, Linkedin, Activity, X } from "lucide-react";
import logoHeader from "../assets/logo_header.png";
import logoLight from "../assets/logo_light.png";
import washingMachineVideo from "../assets/waiting_laundry.mp4";
import studentImg from "../assets/student.png";
import AboutUsModal from "../components/AboutUsModal";
import MobileNav from "../components/MobileNav";

export default function LaunowHomePage({ setPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("iron");
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showAINotification, setShowAINotification] = useState(true);
  const [isAIHovered, setIsAIHovered] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAIHovered) {
        setShowAINotification(prev => !prev);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAIHovered]);

  const services = [
    {
      id: "iron",
      title: "Iron",
      desc: "Professional ironing for your garments",
      icon: "🧥"
    },
    {
      id: "washfold",
      title: "Wash and Fold",
      desc: "Wash and fold service for your clothes",
      icon: "🧺"
    },
    {
      id: "washiron",
      title: "Wash and Iron",
      desc: "Wash and iron service for your clothes",
      icon: "👕"
    }
  ];

  const testimonials = [
    {
      name: "Priya S",
      role: "Engineering Student",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Launow has transformed my hostel life! No more weekend laundry struggles. Their student plan is perfect for my budget, and the WhatsApp booking is super convenient."
    },
    {
      name: "Karthik R",
      role: "Software Developer",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "As a busy professional, Launow has been a lifesaver. The quality is impeccable, and I love that they're eco-conscious. The mobile notifications keep me updated about my order status."
    },
    {
      name: "Ram kumar",
      role: "Local Business Owner",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "I've tried several laundry services in Salem, but Launow stands out. Their attention to detail is remarkable, and the staff is always courteous. Highly recommend!"
    }
  ];

  const benefits = [
    {
      title: "Express Service",
      desc: "24-hour turnaround for urgent needs",
      icon: <Clock className="text-blue-500" size={24} />
    },
    {
      title: "Free Pickup & Delivery",
      desc: "Doorstep service anywhere in Salem",
      icon: <Truck className="text-blue-500" size={24} />
    },
    {
      title: "Eco-Friendly",
      desc: "Sustainable cleaning practices",
      icon: <CheckCircle className="text-blue-500" size={24} />
    },
    {
      title: "LauNow 360",
      desc: "AI-powered garment lifespan tracking",
      icon: <Activity className="text-blue-500" size={24} />
    }
  ];

  const pricingTabs = {
    iron: [
      { service: "Iron (Washbuddy)", price: "₹13/piece" }
    ],
    washfold: [
      { service: "Wash and Fold (Washbuddy)", price: "₹76/kg" }
    ],
    washiron: [
      { service: "Wash and Iron (Washbuddy)", price: "₹94/kg" }
    ]
  };

  const methodPricing = {
    iron: {
      washbuddy: { regular: "₹15/piece", discount: "₹13.5/piece" },
      tumbledry: { regular: "₹35/piece", discount: "₹28/piece" }
    },
    washfold: {
      washbuddy: { regular: "₹40/piece, ₹89/kg", discount: "₹36/piece, ₹80.1/kg" },
      tumbledry: { regular: "₹85/kg", discount: "₹68/kg" }
    },
    washiron: {
      washbuddy: { regular: "₹45/piece, ₹110/kg", discount: "₹40.5/piece, ₹99/kg" },
      tumbledry: { regular: "₹130/kg", discount: "₹104/kg" }
    }
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919488073258?text=Hi!%20I%27m%20interested%20in%20using%20Launow%E2%80%99s%20services.%20Please%20send%20me%20the%20details",
      "_blank"
    );
  };

  // FAQ data
  const faqs = [
    {
      question: "How long does the service take?",
      answer:
        "Our standard service takes 24-48 hours from pickup to delivery. We also offer express service with same-day or next-day delivery options for urgent needs.",
    },
    {
      question: "What areas in Salem do you cover?",
      answer:
        "We offer pickup and delivery services throughout Salem city and surrounding areas, including all major colleges, hostels, residential colonies, and apartments.",
    },
    {
      question: "How is pricing calculated?",
      answer:
        "For regular wash & iron services, we charge by weight (per kg). For dry cleaning and specialty items, we charge per piece. Student plans are available on a monthly subscription basis with a predetermined weight limit.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods including UPI, credit/debit cards, net banking, and cash on delivery. For subscription plans, we offer convenient auto-pay options.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is confirmed, you'll receive status updates via WhatsApp at each stage of the process - from pickup to cleaning to delivery. You can also contact our customer support for real-time updates.",
    },
  ];

  // Update the comparisonRows for Transparent Pricing with rounded discount prices
  const comparisonRows = [
    { service: "Iron", washbuddy: "₹14/piece", tumbledry: "₹28/piece" },
    { service: "Wash and Fold", washbuddy: "₹36/piece, ₹80/kg", tumbledry: "₹68/kg" },
    { service: "Wash and Iron", washbuddy: "₹41/piece, ₹99/kg", tumbledry: "₹104/kg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logoHeader} alt="Launow Logo" className="h-10 w-auto mr-2" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsAboutModalOpen(true);
                }}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                About Us
              </a>
              <button 
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Book on WhatsApp</span>
                <MoveRight size={16} />
              </button>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileNavOpen(true)}
                className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                <span className="block">Laundry Made</span>
                <span className="block text-blue-600">Simple & Smart</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-lg">
                Salem's premium laundry service at your doorstep. Professional cleaning, 
                free pickup & delivery, all at affordable prices.
              </p>
              <div className="mt-10 flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={handleWhatsApp}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Schedule Pickup</span>
                  <MoveRight size={16} />
                </button>
                <a 
                  href="#pricing" 
                  className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2 transition-all transform hover:-translate-y-1"
                >
                  <span>View Pricing</span>
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-1" />
                  <span>Free Pickup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-1" />
                  <span>24hr Turnaround</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-1" />
                  <span>Eco-friendly</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto w-52 h-48 sm:w-72 sm:h-64 md:w-96 md:h-80 lg:w-[28rem] lg:h-[30rem]">
                <video
                  src={washingMachineVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/api/placeholder/600/400"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">4.9/5 Rating</p>
                  <p className="text-sm text-gray-500">500+ Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">100+</p>
              <p className="text-gray-600 mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">200+</p>
              <p className="text-gray-600 mt-1">Orders Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">24h</p>
              <p className="text-gray-600 mt-1">Turnaround Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">4.9★</p>
              <p className="text-gray-600 mt-1">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Premium Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Professional laundry and cleaning services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 group flex flex-col"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex justify-center">
                  <span className="text-5xl">{service.icon}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.desc}</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {/* Washbuddy Pricing */}
                      <div>
                        <div className="font-semibold text-blue-700 mb-1">Washbuddy</div>
                        <div className="text-xs text-gray-500">Regular</div>
                        <div className="font-medium text-gray-900 mb-1">
                          {service.id === 'iron' && methodPricing[service.id].washbuddy.regular}
                          {service.id === 'washfold' && (
                            <>
                              {methodPricing[service.id].washbuddy.regular.split(', ').map((p, i) => (
                                <div key={i}>{p}</div>
                              ))}
                            </>
                          )}
                          {service.id === 'washiron' && (
                            <>
                              {methodPricing[service.id].washbuddy.regular.split(', ').map((p, i) => (
                                <div key={i}>{p}</div>
                              ))}
                            </>
                          )}
                        </div>
                        <div className="text-xs text-green-700">Discount</div>
                        <div className="font-medium text-green-700">
                          {service.id === 'iron' && methodPricing[service.id].washbuddy.discount}
                          {service.id === 'washfold' && (
                            <>
                              {methodPricing[service.id].washbuddy.discount.split(', ').map((p, i) => (
                                <div key={i}>{p}</div>
                              ))}
                            </>
                          )}
                          {service.id === 'washiron' && (
                            <>
                              {methodPricing[service.id].washbuddy.discount.split(', ').map((p, i) => (
                                <div key={i}>{p}</div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                      {/* Tumble Dry Pricing */}
                      <div>
                        <div className="font-semibold text-indigo-700 mb-1">Tumble Dry</div>
                        <div className="text-xs text-gray-500">Regular</div>
                        <div className="font-medium text-gray-900 mb-1">
                          {methodPricing[service.id].tumbledry.regular.split(', ').map((p, i) => (
                            <div key={i}>{p}</div>
                          ))}
                        </div>
                        <div className="text-xs text-green-700">Discount</div>
                        <div className="font-medium text-green-700">
                          {methodPricing[service.id].tumbledry.discount.split(', ').map((p, i) => (
                            <div key={i}>{p}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-end items-end">
                    <button 
                      onClick={handleWhatsApp}
                      className="text-blue-600 hover:text-blue-800 flex items-center group-hover:font-medium"
                    >
                      <span>Book Now</span>
                      <MoveRight size={16} className="ml-1 transition-all group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How Launow Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Experience hassle-free laundry in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Schedule</h3>
              <p className="mt-2 text-gray-600">Book your pickup via WhatsApp or our website</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Pickup</h3>
              <p className="mt-2 text-gray-600">We collect your clothes from your doorstep</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Professional Clean</h3>
              <p className="mt-2 text-gray-600">We clean, iron, and package your clothes</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Delivery</h3>
              <p className="mt-2 text-gray-600">Fresh clothes delivered back to your doorstep</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={handleWhatsApp}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 mx-auto shadow-lg transition-all hover:shadow-xl"
            >
              <span>Schedule Your First Pickup</span>
              <MoveRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Launch Off: 20% Discount to Students</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Enjoy special student rates on all our premium laundry services!
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Service</th>
                  <th className="px-6 py-3 border-b text-left text-sm font-semibold text-blue-600">Washbuddy</th>
                  <th className="px-6 py-3 border-b text-left text-sm font-semibold text-indigo-600">Tumble Dry</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="border-b last:border-b-0">
                    <td className="px-6 py-4 text-gray-900 font-medium">{row.service}</td>
                    <td className="px-6 py-4 text-blue-700">{row.washbuddy}</td>
                    <td className="px-6 py-4 text-indigo-700">{row.tumbledry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-white">Need a Custom Quote?</h3>
              <p className="mt-2 text-blue-100">
                Have special requirements or bulk orders? We offer customized pricing.
              </p>
              <button 
                onClick={handleWhatsApp}
                className="mt-6 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Contact Us</span>
                <MoveRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Launow</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with Salem's premier laundry service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers in Salem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://g.page/launow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <span>See more reviews on Google</span>
              <MoveRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to know about our services
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-0"
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${openFaq === idx ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div
                    id={`faq-panel-${idx}`}
                    className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready for Fresh, Clean Clothes?</h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers in Salem who have made laundry day a breeze
          </p>
          <div className="mt-10">
            <button 
              onClick={handleWhatsApp}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium text-lg inline-flex items-center space-x-2 shadow-lg transition-all hover:shadow-xl"
            >
              <span>Schedule Your Pickup Now</span>
              <MoveRight size={20} />
            </button>
            <p className="mt-4 text-blue-100">No contracts. No commitments. Just clean clothes.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logoLight} alt="Launow Logo" className="h-10 w-auto mb-4" />
              <p className="text-gray-400">
                Salem's premium laundry service at your doorstep. Professional cleaning with free pickup & delivery.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://instagram.com/launowindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/@Launowindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Youtube size={20} />
                </a>
                <a href="https://x.com/LaunowIndia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="https://linkedin.com/company/launow" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsAboutModalOpen(true);
                    }}
                    className="hover:text-white"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Salem, Tamil Nadu 636007</li>
                <li>+91 94880 73258</li>
                <li>support@launow.in</li>
              </ul>
              <button 
                onClick={handleWhatsApp}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2"
              >
                <span>WhatsApp Us</span>
                <MoveRight size={14} />
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Launow. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setPage("privacy");
                }} 
                className="hover:text-white"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setPage("terms");
                }} 
                className="hover:text-white"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setPage("refund");
                }} 
                className="hover:text-white"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      <AboutUsModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />

      <MobileNav 
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        setPage={setPage}
        handleWhatsApp={handleWhatsApp}
        openAboutModal={() => setIsAboutModalOpen(true)}
      />
    </div>
  );
}