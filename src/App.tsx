import React, { useState, useEffect } from 'react';
import { Header, Footer } from "./Layout";
import { Icon } from '@iconify/react';
import CountdownTimer from "./CountdownTimer";
import {
  Play,
  Star,
  Users,
  TrendingUp,
  MessageCircle,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  DollarSign,
  Award,
  Target,
  Phone,
  Mail,
  ArrowRight,
  X,
  UserPlus,
  BookOpen,
  User,
  Check,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';

function App() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    if (!window.__VIEWCONTENT_FIRED__) {
      window.fbq?.("track", "ViewContent", {
        page: "sameer-landing-page",
        section: "hero"
      });
      window.__VIEWCONTENT_FIRED__ = true;
    }
  }, []);

  const trackSubscribe = () => {
    if (!window.__SUBSCRIBE_FIRED__) {
      const eventId = "sub_" + Date.now();

      window.fbq?.("track", "Subscribe", {
        content_name: "WhatsApp Mentorship",
        platform: "whatsapp"
      }, { eventID: eventId });

      // OPTIONAL: Send eventId to backend for CAPI
      window.__SUBSCRIBE_EVENT_ID__ = eventId;

      window.__SUBSCRIBE_FIRED__ = true;
    }
  };


  // NOX-style 1-Hour Countdown (for FOMO Section)
  function CountdownBoxes() {
    const target = React.useMemo(() => new Date(Date.now() + 60 * 60 * 1000), []);
    const [timeLeft, setTimeLeft] = React.useState({ m: 0, s: 0 });

    React.useEffect(() => {
      const tick = () => {
        const diff = Math.max(0, target - new Date());
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setTimeLeft({ m, s });
      };
      tick();
      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }, [target]);

    const Box = ({ label, value }) => (
      <div className="min-w-[80px] md:min-w-[100px]">
        <div className="relative rounded-xl p-4 bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]">
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              boxShadow:
                "0 0 20px rgba(199,160,85,0.25), inset 0 0 12px rgba(199,160,85,0.10)",
            }}
          />
          <div className="text-3xl md:text-5xl font-extrabold tracking-widest text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#EFD9B0] mt-1">
            {label}
          </div>
        </div>
      </div>
    );




    return (
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <Box label="Minutes" value={timeLeft.m} />
        <span className="text-[#EFD9B0]/70 font-bold text-3xl">:</span>
        <Box label="Seconds" value={timeLeft.s} />
      </div>
    );
  }




  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppPopup(true);
    }, 30000); // Show popup after 30 seconds

    return () => clearTimeout(timer);
  }, []);



  return (
    <>

      <div
        className="min-h-screen bg-[#F8F8F8]"
        style={{
          '--color-primary': '#C7A055',
          '--color-primary1': '#EFD9B0',
          '--color-secondary': '#182432',
          '--color-accent': '#421B20',
          '--color-bg': '#F8F8F8',
          '--color-bg1': '#012B85',
          '--color-text': '#182432',
          '--color-body-text': '#000000'
        } as React.CSSProperties & Record<string, string>}
      >

        <Header />
        {/* Hero Section – Sameer Suthar */}
        <section
          id="about"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/30 text-[#182432] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] opacity-10 bg-cover bg-center pointer-events-none" />

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT SIDE – CONTENT */}
              <div className="space-y-10">

                {/* Headline */}
                <div className="space-y-5">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                    Hi, I’m
                    <span className="text-[#C7A055]"> Sameer Suthar</span>
                  </h1>

                  <h2 className="text-xl md:text-2xl font-semibold text-[#182432]">
                    A 21-year-old student who built
                    <span className="text-[#C7A055] font-bold"> ₹5,00,000+ </span>
                    digital income — without quitting college.
                  </h2>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Rajasthan se ek <span className="font-semibold text-[#C7A055]">normal 1st year student</span>,
                    jiske paas na koi technical background tha, na koi shortcuts.
                    <br /><br />
                    Maine sirf ek cheez ki —
                    <span className="font-semibold text-[#C7A055]"> sahi mentorship + proven system</span> follow kiya.
                    Dheere-dheere skills build ki,
                    confidence aaya,
                    aur affiliate marketing se
                    <span className="font-bold text-[#C7A055]"> consistent online income</span> generate hone laga.
                    <br /><br />
                    Aaj main un students aur beginners ko guide karta hoon
                    jo genuinely seekhna chahte hain —
                    bina fake promises,
                    bina hype,
                    bas real execution ke saath.
                  </p>
                </div>

                {/* FOMO / SEAT INFO */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-red-700 font-bold text-base md:text-lg">
                      Only <span className="text-red-600">6/10 mentorship slots</span> open this month —
                      serious learners only.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <a
                    href="https://wa.aisensy.com/aaauzt"
                    target="_blank"
                    onClick={trackSubscribe}
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center 
                       bg-[#25D366] hover:bg-[#20C157] text-white 
                       px-6 py-4 rounded-full text-lg font-bold 
                       transition-all duration-300 
                       transform hover:scale-105 hover:-translate-y-1 
                       shadow-xl gap-3"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                    <span>Chat With Me on WhatsApp</span>
                  </a>

                  <p className="text-sm text-gray-500 mt-3">
                    Direct mentorship • No spam • Clear guidance 💬
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE – PROFILE */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">

                  <div className="relative w-64 md:w-80 h-80 rounded-2xl overflow-hidden 
                          shadow-2xl border border-[#E9E4D8] bg-white 
                          transition-all duration-500 
                          group-hover:shadow-[0_15px_60px_rgba(0,0,0,0.20)] 
                          group-hover:-translate-y-1">
                    <img
                      src="/assets/images/sameer-suthar.jpeg"
                      alt="Sameer Suthar – Student Affiliate Marketer"
                      className="w-full h-full object-cover"
                    />

                    {/* Bottom Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        Sameer Suthar
                      </h3>
                      <p className="text-sm md:text-base text-[#C7A055] font-semibold">
                        Student • Affiliate Marketer
                      </p>
                    </div>

                    {/* Vertical Badge */}
                    <div className="absolute top-4 right-0 bg-[#182432] text-white font-bold 
                            px-3 py-2 rounded-l-lg shadow-md 
                            flex flex-col items-center space-y-1">
                      <img
                        src="/assets/images/stravix.png"
                        alt="StraviX Logo"
                        className="w-14 md:w-20"
                      />
                      <p className="text-sm md:text-md">StraviX</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Feedback Highlight Section – Sameer Suthar */}
        <section className="py-14 md:py-24 bg-gradient-to-br from-[#FFF7EC] via-white to-[#FDFBF7] relative overflow-hidden">

          {/* Soft Decorative Glows */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#C7A055]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#EFD9B0]/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#182432] mb-6 leading-snug">
              Real Students. Real Results.
              <br className="hidden md:block" />
              <span className="text-[#C7A055]">No Fake Stories. No Shortcuts.</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ye sirf motivation video nahi hai.
              <br className="hidden md:block" />
              Yahan aap dekhenge <span className="font-semibold text-[#C7A055]">real students, beginners aur working log</span>
              jo StraviX ke structured system ke saath
              apni <span className="font-semibold text-[#C7A055]">first digital income </span> aur
              confidence build kar paaye.
              <br /><br />
              Agar aap bhi soch rahe ho —
              <span className="italic">“kya main bhi kar paunga?”</span>,
              toh ye video aapke liye hai.
            </p>

            {/* Proof Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 
                    rounded-full bg-white/80 backdrop-blur border border-[#EFD9B0]/60 
                    shadow-sm text-sm md:text-base font-semibold text-[#182432]">
              🎥 Real feedback from StraviX learners
            </div>

            {/* Video Wrapper */}
            <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden 
                    shadow-[0_12px_45px_rgba(0,0,0,0.12)] group">

              {/* Hover Shine */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                      opacity-0 group-hover:opacity-30 
                      transition-all duration-500 pointer-events-none"></div>

              <iframe
                src="https://www.youtube.com/embed/ypC2S3WExWc?rel=0"
                title="StraviX Real Student Feedback"
                className="w-full h-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Soft CTA Line */}
            <p className="mt-10 text-gray-600 text-base md:text-lg">
              👀 Watch carefully.
              <br className="hidden md:block" />
              Inme se kaafi log bhi kabhi <span className="font-semibold">beginners</span> hi the — just like you.
            </p>

          </div>
        </section>


        {/* Social Proof Section – Sameer Suthar */}
        <section className="py-16 bg-gradient-to-br from-[#FFFDF9] via-white to-[#FFF8F0] relative overflow-hidden">

          {/* Soft Glows */}
          <div className="absolute -top-12 -left-12 w-44 h-44 bg-[#EFD9B0]/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C7A055]/15 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Headings */}
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#C7A055] tracking-wide uppercase">
                  My Real Milestones
                </h2>

                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#182432] leading-snug">
                  Proof That Consistency Works
                </h3>

                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Ye koi overnight success nahi tha.
                  <br />
                  Ye result tha <span className="text-[#C7A055] font-semibold">learning, execution aur patience</span> ka.
                  Neeche woh milestones hain jo meri student-to-earner journey ko define karte hain.
                </p>
              </div>

              {/* Milestones Slider */}
              <div className="relative mb-14">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-6 pb-4" style={{ width: "max-content" }}>
                    {/* Slide – StraviX Growth Icon Award */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden 
                shadow-xl hover:shadow-2xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/sameer-ssm.jpg"
                          alt="StraviX Growth Icon Award"
                          className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>

                      <div className="p-5 bg-[#182432] text-white">
                        <p className="font-semibold leading-relaxed">
                          Awarded the
                          <span className="text-[#C7A055] font-bold"> StraviX Growth Icon</span> —
                          for consistency, discipline, aur real execution as a student.
                        </p>
                      </div>
                    </div>


                    {/* Slide 1 – StraviX Success Meet */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden 
                            shadow-xl hover:shadow-2xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/sameer-ssm.jpeg"
                          alt="StraviX Success Meet"
                          className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white">
                        <p className="font-semibold leading-relaxed">
                          Attended <span className="text-[#C7A055] font-bold">StraviX Success Meet 2025</span> —
                          learning directly from mentors & top performers.
                        </p>
                      </div>
                    </div>

                    {/* Slide 2 – ₹10K with StraviX */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden 
                            shadow-xl hover:shadow-2xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/10k-income.png"
                          alt="Earned 10k with StraviX"
                          className="w-full h-64 md:h-96 object-contain bg-white"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white">
                        <p className="font-semibold leading-relaxed">
                          First solid breakthrough —
                          earned <span className="text-[#C7A055] font-bold">₹10,000+ with StraviX</span>
                          &nbsp;by following the system step-by-step.
                        </p>
                      </div>
                    </div>

                    {/* Slide 3 – ₹1 Lakh with Future Skills */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden 
                            shadow-xl hover:shadow-2xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/1lakh-done.png"
                          alt="1 Lakh with Future Skills"
                          className="w-full h-64 md:h-96 object-contain bg-white"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white">
                        <p className="font-semibold leading-relaxed">
                          Skills + consistency ka power —
                          crossed <span className="text-[#C7A055] font-bold">₹1,00,000 with future-ready skills</span>.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mobile Hint */}
                <div className="flex justify-center mt-4 md:hidden">
                  <p className="text-sm text-gray-500">← Swipe to explore milestones →</p>
                </div>
              </div>

              {/* CTA Block */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-lg mb-4">
                    ⚡ Same roadmap, same system — only <span className="font-bold">6/10 mentorship slots</span> left this month.
                  </p>
                  <a
                    href="https://wa.aisensy.com/aaauzt"
                    target="_blank"
                    onClick={trackSubscribe}
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center 
                       bg-[#25D366] hover:bg-[#20C157] 
                       text-white px-6 py-3 rounded-full text-lg 
                       gap-2 font-bold transition-all duration-300 
                       transform hover:scale-105 shadow-lg"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                    Talk to Me on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Real People. Real Growth – Community Proof Section */}
        <section
          id="testimonials"
          className="bg-gradient-to-br from-white via-[#F8F8F8] to-[#EFD9B0]/10 py-20 relative overflow-hidden"
        >
          {/* Soft Glow Effects */}
          <div className="absolute -top-14 left-0 w-56 h-56 bg-[#C7A055]/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EFD9B0]/25 blur-3xl rounded-full"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Heading Section */}
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#182432] mb-4">
                  Real People. <span className="text-[#C7A055]">Real Progress.</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Ye sirf screenshots ya videos nahi hain.
                  <br className="hidden md:block" />
                  Ye proof hai ki jab <span className="font-semibold text-[#C7A055]">students aur beginners</span>
                  sahi mentorship, clear roadmap aur consistent action follow karte hain,
                  toh results automatically follow karte hain.
                </p>
              </div>

              {/* ========================= */}
              {/* IMAGE TESTIMONIALS */}
              {/* ========================= */}
              <div className="mb-24">
                <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#182432] text-center">
                  Stories That Don’t Need Explanation
                </h3>

                <div className="relative mb-6">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-6 pb-4" style={{ width: "max-content" }}>

                      {/* Images – SAME FILES */}
                      {[
                        "jyoti.webp",
                        "sumyya.webp",
                        "sikha.webp",
                        "vishnu.webp",
                        "seema.webp",
                        "poonam.webp",
                      ].map((img, index) => (
                        <div
                          key={index}
                          className="relative w-64 md:w-64 flex-shrink-0 group"
                        >
                          <div className="rounded-2xl overflow-hidden bg-white 
                                  shadow-md group-hover:shadow-2xl 
                                  transition-all duration-300">
                            <img
                              src={`/assets/screenshots/${img}`}
                              alt={`StraviX learner result ${index + 1}`}
                              className="w-full h-102 md:h-96 object-contain bg-gray-100"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to see more results →</p>
                  </div>
                </div>

                <p className="text-center text-gray-600 italic max-w-3xl mx-auto">
                  Ye sab log kabhi beginners hi the —
                  bas ek difference tha:
                  <span className="font-semibold"> unhone action lena start kiya.</span>
                </p>
              </div>

              {/* ========================= */}
              {/* VIDEO TESTIMONIALS */}
              {/* ========================= */}
              <div className="mb-20">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#182432] text-center">
                  Real Journeys. Real Confidence.
                </h3>

                <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                  In videos mein aap dekhenge ki kaise
                  students, working professionals aur beginners ne
                  StraviX ke structured system ke saath
                  apna <span className="font-semibold text-[#C7A055]">first digital income </span>
                  aur self-belief build kiya.
                </p>

                <div className="relative mb-6">
                  <div className="overflow-x-auto scrollbar-hide flex md:justify-center">
                    <div className="flex space-x-6 pb-4" style={{ width: "max-content" }}>

                      {/* Videos – SAME IDS */}
                      {[
                        "ZGz-tOp5kLw",
                        "vPMrU7nWzEk",
                        "lZxH1DQpKy0",
                        "ZSp1-UsgmDs",
                        "dFh03dWJ950",
                        
                      ].map((id, index) => (
                        <div
                          key={index}
                          className="relative w-56 md:w-64 flex-shrink-0 group"
                        >
                          <div className="relative aspect-[9/16] bg-gray-900 
                                  rounded-2xl overflow-hidden 
                                  shadow-md group-hover:shadow-2xl 
                                  transition-all duration-300">
                            <iframe
                              src={`https://www.youtube.com/embed/${id}`}
                              title={`StraviX success story ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full rounded-2xl"
                            ></iframe>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to watch more stories →</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 
                      border-l-4 border-red-500 
                      p-8 rounded-2xl shadow-sm">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-lg mb-5">
                    ⚡ Same system. Same mentorship.
                    <br className="hidden md:block" />
                    Only <span className="font-bold">6/10 mentorship slots</span> available this month.
                  </p>

                  <a
                    href="https://wa.aisensy.com/aaauzt"
                    target="_blank"
                    onClick={trackSubscribe}
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center 
                       bg-[#25D366] hover:bg-[#20C157] 
                       text-white px-6 py-4 rounded-full text-lg 
                       font-bold transition-all duration-300 
                       transform hover:scale-105 shadow-lg gap-2"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                    Start Your Journey on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Registered & Legal Section - NEW PREMIUM DESIGN */}
        <section className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-white relative overflow-hidden">

          {/* Soft Background Glows */}
          <div className="absolute top-8 -left-8 w-44 h-44 bg-[#C7A055]/25 blur-3xl rounded-full"></div>
          <div className="absolute bottom-8 -right-8 w-56 h-56 bg-[#EFD9B0]/30 blur-3xl rounded-full"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">

              {/* Title */}
              <h2 className="text-[#C7A055] text-3xl md:text-5xl font-extrabold mb-4 tracking-wide leading-snug">
                100% Registered & Legal
              </h2>

              <p className="text-lg md:text-xl text-[#182432] mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
                StraviX koi shortcut ya grey-area system nahi hai.
                Yeh ek <span className="font-semibold">fully registered, verified aur transparent organization</span> hai
                jahan processes, payouts aur mentorship sab kuch legally aur ethically operate hota hai.
                <br /><br />
                Isi wajah se hazaaron students aur working professionals
                bina hesitation StraviX par trust karte hain.
              </p>

              {/* -------------------------------------- */}
              {/* Premium Document Grid */}
              {/* -------------------------------------- */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

                {/* MSME Certificate */}
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E3D8]/70 overflow-hidden 
                hover:shadow-2xl hover:-translate-y-1 transition duration-500">
                  <div className="aspect-[3/4] bg-white relative overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486593/StraviX_Official_Docs_2__pages-to-jpg-0001_kzkph1.jpg"
                      alt="MSME Certificate"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-white/40 backdrop-blur-sm border-t border-[#E8E3D8]/50">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">
                      MSME Registered
                    </h3>
                  </div>
                </div>

                {/* PAN Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#E8E3D8] overflow-hidden 
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="aspect-auto md:aspect-[3/4] overflow-hidden relative">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486593/StraviX_Official_Docs_2__pages-to-jpg-0002_dtnmph.jpg"
                      alt="PAN Card"
                      className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-white/40 backdrop-blur-sm border-t border-[#E8E3D8]/50">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">
                      PAN Verified
                    </h3>
                  </div>
                </div>

                {/* ISO Certificate */}
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E3D8]/70 overflow-hidden 
                hover:shadow-2xl hover:-translate-y-1 transition duration-500">
                  <div className="aspect-[3/4] bg-white relative overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486594/StraviX_Official_Docs_2__pages-to-jpg-0003_ahwvng.jpg"
                      alt="ISO Certificate"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-white/40 backdrop-blur-sm border-t border-[#E8E3D8]/50">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">
                      ISO Certified
                    </h3>
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={() => setShowWhatsAppPopup(true)}
                  className="bg-[#25D366] hover:bg-[#20C157] text-white px-6 py-3 rounded-full 
text-[16px] font-bold transition-all duration-300 transform hover:scale-105 
shadow-lg hover:shadow-[#25D366]/40 flex items-center gap-2 mx-auto"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                  Talk to Me on WhatsApp
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Growth & Impact Section – Sameer Reimagined */}
        <section className="relative py-28 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/40 overflow-hidden">

          {/* Soft Floral Background */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-[0.06]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-[#182432]">
                  Grow With a
                  <span className="text-[#C7A055]"> Proven System</span>,
                  <br className="hidden md:block" />
                  Not Random Motivation
                </h2>

                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
                  StraviX sirf ek platform nahi hai —
                  yeh ek <span className="font-semibold text-[#C7A055]">action-driven ecosystem</span> hai
                  jahan students aur beginners
                  skills seekhte hain, apply karte hain
                  aur step-by-step
                  <span className="font-semibold text-[#C7A055]"> real digital growth</span> experience karte hain.
                </p>
              </div>

              {/* ================================ */}
              {/* IMPACT CARDS – UPGRADED UI */}
              {/* ================================ */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-28">

                {[
                  {
                    title: "You’re Never Alone Here",
                    text: "Ek community jo sirf cheer nahi karti — balki guide karti, correct karti aur push bhi karti hai.",
                    icon: <Users className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Built on Trust & Transparency",
                    text: "Registered, legal aur process-driven system — jahan clarity aur ethics pe compromise nahi hota.",
                    icon: <Award className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Progress > Perfection",
                    text: "Chhoti wins se leke big milestones tak — har effort ko track, appreciate aur celebrate kiya jaata hai.",
                    icon: <Star className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Consistency Gets You Noticed",
                    text: "Jo log regular action lete hain, unhe milta hai spotlight, recognition aur growth opportunities.",
                    icon: <Target className="w-8 h-8 text-white" />,
                  }
                ].map((card, i) => (
                  <div
                    key={i}
                    className="group relative bg-white/70 backdrop-blur-xl 
                       border border-[#EFD9B0]/50 
                       p-10 rounded-3xl 
                       shadow-md hover:shadow-2xl hover:-translate-y-3 
                       transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    {/* Subtle Gold Hover Layer */}
                    <div className="absolute inset-0 rounded-3xl 
                            bg-gradient-to-br from-[#EFD9B0]/50 to-white/40 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                      <div className="w-18 h-18 p-4 bg-[#C7A055] rounded-2xl 
                              flex items-center justify-center shadow-lg 
                              group-hover:scale-110 transition-all duration-300">
                        {card.icon}
                      </div>

                      <h3 className="text-[21px] font-bold text-[#182432] leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-[15.5px]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

              {/* ======================================= */}
              {/* CTA BLOCK – STRONGER & CLEARER */}
              {/* ======================================= */}
              <div className="bg-gradient-to-r from-[#FFF4EA] via-[#FFF1F1] to-[#FFEFD8] 
                      border-l-4 border-[#C7A055] 
                      p-12 rounded-3xl shadow-xl text-center">

                <p className="text-[#182432] font-semibold text-lg md:text-xl mb-8 leading-relaxed max-w-4xl mx-auto">
                  🚀 Agar aap sirf motivate nahi —
                  <span className="text-[#C7A055] font-bold"> guided, accountable aur consistent</span>
                  rehna chahte ho,
                  toh StraviX ek aisi jagah hai
                  jahan learning aur earning saath-saath grow hoti hai.
                </p>

                <a
                  href="https://wa.aisensy.com/aaauzt"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackSubscribe}
                  className="track-subscribe-btn inline-flex items-center justify-center 
                     bg-[#25D366] hover:bg-[#20C157] 
                     text-white px-8 py-4 rounded-full 
                     text-lg font-bold transition-all duration-300 
                     transform hover:scale-105 
                     shadow-lg hover:shadow-[#25D366]/40 gap-2"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                  Join the Growth Journey
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* How It Works – Clear & Student-Friendly */}
        <section className="relative py-28 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/25 overflow-hidden">

          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-waves.svg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>

          <div className="relative container mx-auto px-6">

            {/* Header */}
            <div className="max-w-5xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] leading-snug">
                A Simple, <span className="text-[#C7A055]">No-Confusion</span> Roadmap
              </h2>

              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
                Yahan koi complicated theory ya guessing game nahi hai.
                Sirf <span className="font-semibold text-[#C7A055]">3 clear steps</span> —
                jinke through aap guidance, execution aur results ko
                ek proper sequence me experience karte ho.
              </p>
            </div>

            {/* Steps Flow */}
            <div className="relative flex flex-col md:flex-row justify-center items-start gap-20 mb-24">

              {/* Connector Line */}
              <div className="hidden md:block absolute top-36 left-0 right-0 h-[4px] 
                      bg-gradient-to-r from-[#EFD9B0] to-[#C7A055]/80 
                      rounded-full -z-10"></div>

              {/* STEP 1 */}
              <div className="group relative bg-white/75 backdrop-blur-xl 
                      border border-[#EFD9B0]/60 p-12 rounded-3xl 
                      shadow-md hover:shadow-2xl hover:-translate-y-3 
                      transition-all duration-500 w-full md:w-1/3 text-center">

                <div className="absolute -top-8 left-1/2 -translate-x-1/2 
                        w-16 h-16 rounded-full bg-[#182432] text-white 
                        flex items-center justify-center font-bold text-2xl shadow-xl">
                  1
                </div>

                <div className="w-20 h-20 bg-[#C7A055] rounded-2xl 
                        flex items-center justify-center mx-auto mb-8 
                        shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <UserPlus className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#182432] mb-4">
                  Join the Mentorship
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Sabse pehle aap ek <span className="font-semibold">structured mentorship</span> join karte ho —
                  jahan aapko clear direction milti hai ki
                  kya karna hai, kya avoid karna hai,
                  aur kis pace par move karna hai.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="group relative bg-white/75 backdrop-blur-xl 
                      border border-[#EFD9B0]/60 p-12 rounded-3xl 
                      shadow-md hover:shadow-2xl hover:-translate-y-3 
                      transition-all duration-500 w-full md:w-1/3 text-center">

                <div className="absolute -top-8 left-1/2 -translate-x-1/2 
                        w-16 h-16 rounded-full bg-[#182432] text-white 
                        flex items-center justify-center font-bold text-2xl shadow-xl">
                  2
                </div>

                <div className="w-20 h-20 bg-[#C7A055] rounded-2xl 
                        flex items-center justify-center mx-auto mb-8 
                        shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#182432] mb-4">
                  Learn by Doing
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Sirf videos dekhna nahi —
                  yahan <span className="font-semibold">practical execution</span> hota hai.
                  Step-by-step tasks, live guidance
                  aur real examples ke saath
                  aap skills ko apply karna seekhte ho.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="group relative bg-white/75 backdrop-blur-xl 
                      border border-[#EFD9B0]/60 p-12 rounded-3xl 
                      shadow-md hover:shadow-2xl hover:-translate-y-3 
                      transition-all duration-500 w-full md:w-1/3 text-center">

                <div className="absolute -top-8 left-1/2 -translate-x-1/2 
                        w-16 h-16 rounded-full bg-[#182432] text-white 
                        flex items-center justify-center font-bold text-2xl shadow-xl">
                  3
                </div>

                <div className="w-20 h-20 bg-[#C7A055] rounded-2xl 
                        flex items-center justify-center mx-auto mb-8 
                        shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#182432] mb-4">
                  Earn & Scale Confidently
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Jab execution strong ho jaata hai,
                  aap apna <span className="font-semibold">first payout</span> unlock karte ho —
                  aur phir ek proven system ke saath
                  income ko month-on-month grow karte ho.
                </p>
              </div>

            </div>

            {/* CTA Section */}
            <div className="relative bg-gradient-to-r from-[#FFF3E0] to-[#FDE9C9] 
                    border border-[#EFD9B0]/60 rounded-3xl p-12 text-center 
                    shadow-xl hover:shadow-2xl transition-all duration-500">

              <p className="text-lg md:text-xl font-semibold text-[#182432] mb-8 leading-relaxed max-w-3xl mx-auto">
                🚀 Agar aap clarity ke saath start karna chahte ho —
                bina confusion, bina trial-and-error —
                toh ye roadmap aapke liye hi design kiya gaya hai.
                <br />
                <span className="text-red-600 font-bold">6/10 mentorship seats</span> hi available hain this month.
              </p>

              <a
                href="https://wa.aisensy.com/aaauzt"
                target="_blank"
                onClick={trackSubscribe}
                rel="noopener noreferrer"
                className="track-subscribe-btn inline-flex items-center justify-center 
                   bg-[#25D366] hover:bg-[#20C157] 
                   text-white font-bold py-4 px-8 rounded-full text-lg 
                   transition-all duration-300 shadow-lg 
                   hover:shadow-[#25D366]/40 transform hover:scale-105 gap-2"
              >
                <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                Start with Step 1 on WhatsApp
              </a>
            </div>

          </div>
        </section>

        {/* What You’ll Get – High-Impact Experience Section */}
        <section className="relative py-28 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/25 overflow-hidden">

          {/* Soft Floral Texture */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-[0.06]"></div>

          <div className="relative max-w-6xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] leading-snug">
                What You’ll <span className="text-[#C7A055]">Actually Get Inside</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
                Yahan sirf information nahi milti.
                Aapko milta hai ek <span className="font-semibold text-[#C7A055]">guided environment</span>
                jahan learning, execution aur confidence
                step-by-step naturally build hota hai.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-12 mb-24">

              {[
                {
                  icon: <User className="w-7 h-7 text-white" />,
                  title: "Personal, Step-by-Step Mentorship",
                  text: "Har stage par clear guidance — kya karna hai, kaise karna hai aur kis order me karna hai. Confusion ki jagah clarity milti hai.",
                },
                {
                  icon: <BookOpen className="w-7 h-7 text-white" />,
                  title: "Future-Ready Digital & Sales Skills",
                  text: "Content, communication, sales aur personal branding — woh skills jo sirf earning nahi, long-term growth banati hain.",
                },
                {
                  icon: <Users className="w-7 h-7 text-white" />,
                  title: "Action-Oriented Learning Community",
                  text: "Aisi community jahan log sirf sunte nahi — apply karte hain, discuss karte hain aur ek-dusre ko accountable rakhte hain.",
                },
                {
                  icon: <Target className="w-7 h-7 text-white" />,
                  title: "A Proven, Repeatable System",
                  text: "Yeh koi experiment nahi hai. Ye woh framework hai jisse 1000+ learners ne apna first digital income unlock kiya.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-white/85 backdrop-blur-xl 
                     border border-[#EFD9B0]/50 rounded-3xl p-10 
                     shadow-md hover:shadow-2xl hover:-translate-y-2 
                     transition-all duration-500 flex items-start gap-6"
                >
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-[#C7A055] to-[#DCC08A] 
                          rounded-2xl p-4 shadow-md 
                          group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-bold text-[#182432] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

              {/* Highlight Card */}
              <div className="group relative bg-white/85 backdrop-blur-xl 
                      border border-[#EFD9B0]/50 rounded-3xl p-10 
                      shadow-md hover:shadow-2xl hover:-translate-y-2 
                      transition-all duration-500 md:col-span-2 flex items-start gap-6">

                <div className="bg-gradient-to-br from-[#C7A055] to-[#DCC08A] 
                        rounded-2xl p-4 shadow-md 
                        group-hover:scale-110 transition-all duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#182432] mb-3">
                    Recognition, Rewards & Real Validation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yahan effort unnoticed nahi jaata.
                    Consistency par milta hai recognition — shoutouts, rewards,
                    milestones aur StraviX spotlight moments
                    jo motivation ko naturally boost karte hain.
                  </p>
                </div>
              </div>

            </div>

            {/* Comparison */}
            <div className="rounded-3xl bg-white/75 backdrop-blur-xl 
                    shadow-xl border border-[#EFD9B0]/60 
                    mb-24 p-12 relative overflow-hidden">

              {/* Soft Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r 
                      from-[#FFEAEA]/40 via-transparent to-[#E9FFE9]/40 
                      pointer-events-none"></div>

              <div className="relative grid md:grid-cols-2 gap-12 text-center">

                {/* Without */}
                <div className="p-6 rounded-xl hover:bg-red-50 transition-all duration-300">
                  <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                    <X className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-3">
                    Without a System
                  </h3>
                  <p className="text-red-600 leading-relaxed">
                    Random efforts, confusion aur trial-and-error —
                    jisse time waste hota hai aur confidence break hota hai.
                  </p>
                </div>

                {/* With */}
                <div className="p-6 rounded-xl hover:bg-green-50 transition-all duration-300">
                  <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-3">
                    With StraviX
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    Clear roadmap, daily guidance aur expert mentorship —
                    ek aisa system jo consistently progress deliver karta hai.
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FFF4E0] to-[#FDE9C9] 
                      rounded-3xl shadow-lg p-10 
                      border border-[#EFD9B0]/60">

                <p className="text-lg md:text-xl font-semibold text-[#182432] mb-8 leading-relaxed max-w-3xl mx-auto">
                  🎯 Agar aap sirf seekhna nahi,
                  balki <span className="text-[#C7A055] font-bold">execute karke results</span> lana chahte ho —
                  toh ye mentorship aapke liye design ki gayi hai.
                </p>

                <a
                  href="https://wa.aisensy.com/aaauzt"
                  target="_blank"
                  onClick={trackSubscribe}
                  rel="noopener noreferrer"
                  className="track-subscribe-btn inline-flex items-center justify-center 
                     bg-[#25D366] hover:bg-[#20C157] 
                     text-white font-bold py-4 px-8 rounded-full 
                     text-lg transition-all shadow-lg 
                     hover:shadow-[#25D366]/40 transform hover:scale-105 gap-2"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                  Talk to Me on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* My Real Journey – Sameer Suthar */}
        <section className="relative py-24 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#F4E6C9]/40 overflow-hidden">

          {/* Soft Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] mb-5 leading-snug">
                My <span className="text-[#C7A055]">Real Journey</span> —
                From <span className="text-[#C7A055]">Student Life</span> to
                <span className="text-[#C7A055]"> Self-Made Wins</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Main koi born entrepreneur nahi tha.
                Main bhi ek normal student tha — confusion, pressure aur
                “future ka kya hoga?” wale thoughts ke saath.
                <br /><br />
                Jab maine digital skills + right mentorship ko seriously liya,
                tab cheezein badalni shuru hui.
                Aaj main apni journey share karta hoon taaki
                <span className="text-[#C7A055] font-semibold"> students & beginners </span>
                ko shortcut nahi, ek clear path mil sake.
              </p>
            </div>

            {/* Journey Timeline */}
            <div className="relative flex flex-col md:flex-row items-center justify-center mb-28 gap-20">

              {/* Connector */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[5px] 
        bg-gradient-to-r from-[#FFD6D6] via-[#EFD9B0] to-[#C9F7D5] rounded-full -z-10 opacity-70" />

              {/* Step 1 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-red-200 rounded-full shadow-xl 
          flex items-center justify-center mx-auto group-hover:scale-110 transition-all">
                  <span className="text-4xl">🎓</span>
                </div>
                <h3 className="font-bold text-xl text-[#182432] mt-5">Confused Student Phase</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Degree chal rahi thi, clarity nahi thi.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-yellow-200 rounded-full shadow-xl 
          flex items-center justify-center mx-auto group-hover:scale-110 transition-all">
                  <span className="text-4xl">🧠</span>
                </div>
                <h3 className="font-bold text-xl text-[#182432] mt-5">Skill + Mentorship</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Digital skills seekhi, system samjha.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-green-200 rounded-full shadow-xl 
          flex items-center justify-center mx-auto group-hover:scale-110 transition-all">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="font-bold text-xl text-[#182432] mt-5">Self-Made Results</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Income, confidence & real wins.
                </p>
              </div>
            </div>

            {/* Image Grid (same images, better framing) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
              {[
                "/assets/images/sameer.jpeg",
                "/assets/images/sameer-ssm.jpg",
                "/assets/images/sameer-ssm.jpeg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl 
          transition-all duration-500 hover:-translate-y-1"
                >
                  <img src={img} className="w-full h-full aspect-[3/4] object-cover" alt="Sameer Journey" />
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="text-center mb-24">
              <p className="text-lg md:text-2xl text-[#182432] font-medium italic max-w-4xl mx-auto leading-relaxed">
                “Mera turning point koi magic nahi tha —
                <span className="text-[#C7A055] font-semibold"> ek serious decision </span>
                aur daily action tha.
                Agar main kar sakta hoon,
                toh koi bhi student kar sakta hai.”
              </p>
            </div>

            {/* Video Highlights – SAMEER */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">

              {[
                {
                  title: "Bought iPhone 13 With My Own Money",
                  src: "https://www.youtube.com/embed/Q7FXMKC6_5E"
                },
                {
                  title: "₹1,00,000 Income Achievement",
                  src: "https://www.youtube.com/embed/rHK0oLYC4WU"
                },
                {
                  title: "100K Income Celebration",
                  src: "https://www.youtube.com/embed/5xEgKSpxcAU"
                }
              ].map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 
          shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-[#182432] mb-4 text-center">
                    {v.title}
                  </h3>

                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                    <iframe
                      src={v.src}
                      className="absolute inset-0 w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">

              {[
                {
                  title: "Fully Sponsored 2-Day Trip",
                  src: "https://www.youtube.com/embed/jdkcFHSAU78"
                },
                {
                  title: "Fully Sponsored - Room Tour",
                  src: "https://www.youtube.com/embed/z0WHf151VjM"
                },
                {
                  title: "Live On Insta With StraviX CEO - Aakash Sir",
                  src: "https://www.youtube.com/embed/7vtLOB7FEFs"
                }
              ].map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 
          shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-[#182432] mb-4 text-center">
                    {v.title}
                  </h3>

                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                    <iframe
                      src={v.src}
                      className="absolute inset-0 w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FFF4E0] to-[#FFE9E9] 
        border border-[#EFD9B0]/60 p-10 rounded-3xl shadow-xl">

                <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6 leading-relaxed">
                  🚀 Ye achievements show-off nahi hain —
                  ye proof hain ki sahi direction mile
                  toh student life ke saath bhi
                  <span className="text-[#C7A055] font-bold"> real progress </span>
                  possible hai.
                </p>

                <a
                  href="https://wa.aisensy.com/aaauzt"
                  className="inline-flex items-center justify-center gap-2 
          bg-[#25D366] hover:bg-[#20C157] text-white font-bold 
          py-4 px-6 rounded-full text-[16px] shadow-lg 
          hover:shadow-[#25D366]/40 transform hover:scale-105 transition-all"
                >
                  <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
                  Talk to Me on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* Final CTA – Premium Redesign */}
        <section className="relative py-24 bg-[#070B14] overflow-hidden">

          {/* Background Glow Mesh */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-[#C7A055]/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#EFD9B0]/10 blur-[120px] rounded-full" />
            <div className="absolute top-20 left-10 w-[18rem] h-[18rem] bg-[#C7A055]/20 blur-[90px] rounded-full opacity-30" />
          </div>

          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('/assets/patterns/grid.svg')] bg-cover"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Your Digital Income Journey
              <span className="block text-[#C7A055]">Starts With One Right Step</span>
            </h2>

            {/* Sub Text */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Main <span className="text-[#C7A055] font-semibold">Sameer Suthar</span>,
              ek normal college student tha —
              jiske paas na experience tha, na clarity.
              <br /><br />
              Lekin ek <span className="font-semibold">structured system</span>,
              right mentorship aur consistent action ne
              meri digital income journey ko real banaya.
              <br />
              Ab main wahi <span className="text-[#C7A055] font-semibold">tested roadmap</span>
              aapko step-by-step follow karna sikhaata hoon.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 mb-12">

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">Registered & Verified</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <Users className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">1000+ Learners Guided</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <Award className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">System-Driven Results</span>
              </div>
            </div>

            {/* FOMO Line */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-[#C7A055]/30 backdrop-blur-xl shadow-md">
                <span className="text-xl">⚡</span>
                <span className="text-[#EFD9B0] font-semibold text-base md:text-lg">
                  Limited intake this month —
                  <span className="font-bold"> 6/10 mentorship seats</span> remaining
                </span>
              </div>
            </div>

            {/* Countdown */}
            <div className="mb-12">
              <CountdownBoxes />
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.aisensy.com/aaauzt"
              target="_blank"
              onClick={trackSubscribe}
              rel="noopener noreferrer"
              className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
             text-white font-bold py-4 px-6 rounded-full text-[16px] transition-all duration-300 
             shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:scale-[1.06] gap-1 mx-auto"
            >
              <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
              Start With Clarity on WhatsApp
            </a>
          </div>

          {/* Floating WhatsApp Button (Mobile) */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <a
              href="https://wa.aisensy.com/aaauzt"
              onClick={trackSubscribe}
              className="w-full bg-[#25D366] hover:bg-[#20C157] text-white font-bold py-4 px-6 
             rounded-full text-lg shadow-2xl flex items-center justify-center gap-3 
             animate-bounce relative"
            >
              <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
              <span className="absolute w-6 h-6 flex justify-center items-center -top-0 -right-0 
               bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse">
                1
              </span>
              Chat With Me on WhatsApp
            </a>
          </div>

        </section>


        {/* FAQ Section – Premium Redesign */}
        <section
          id="faq"
          className="relative py-24 bg-[#FDFBF6] overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-[#C7A055]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-[#EFD9B0]/20 blur-[100px] rounded-full" />
          </div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.06] bg-[url('/assets/patterns/grid.svg')] bg-cover"></div>

          <div className="relative max-w-5xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] mb-4">
                Honest Answers to
                <span className="text-[#C7A055]"> Common Questions</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Yeh woh doubts hain jo almost har student ya beginner ke mind me aate hain.
                No marketing talk — sirf clear, practical aur honest answers.
              </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-6 mb-20">

              {[
                {
                  q: "Kya mujhe pehle se digital marketing, sales ya technical knowledge chahiye?",
                  a: "Bilkul nahi. Yeh mentorship beginners ke liye design ki gayi hai. Agar aap student ho ya bilkul fresh ho, toh bhi aap zero se step-by-step sikh sakte ho — bina pressure aur bina confusion."
                },
                {
                  q: "Daily kitna time dena realistically possible hai?",
                  a: "Agar aap 2–3 focused hours daily de sakte ho, toh kaafi hai. Yahan random hard work nahi, balki clear tasks + smart execution sikhaya jaata hai."
                },
                {
                  q: "Kya StraviX genuinely trusted aur legal platform hai?",
                  a: "Haan. StraviX ek registered, verified aur transparent ecosystem hai. Koi shortcuts ya fake promises nahi — sirf systems, mentorship aur real execution."
                },
                {
                  q: "Mentorship ke andar mujhe exactly kya milega?",
                  a: "Aapko milega structured roadmap, personal guidance, digital & sales skills training, aur ek active community jo aapko accountable rakhti hai."
                },
                {
                  q: "Kya ye sirf earning ke baare me hai?",
                  a: "Nahi. Focus sirf paisa nahi hai. Sabse pehle clarity, confidence aur skills build hoti hain — earning naturally uska result hoti hai."
                },
                {
                  q: "Support ka system kaise hota hai?",
                  a: "Aapko WhatsApp-based mentorship, regular guidance, doubt-solving aur progress tracking milta hai — taaki aap kabhi stuck feel na karo."
                }
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-white/70 backdrop-blur-xl border border-[#EFD9B0]/40 
                 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 
                 overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer 
                         px-6 py-5 text-left text-lg font-semibold text-[#182432] 
                         list-none select-none group-open:text-[#C7A055] transition-all">
                    <span>{item.q}</span>

                    {/* Icon */}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full 
                        bg-[#C7A055]/10 text-[#C7A055] group-open:rotate-180 
                        transition-all duration-300">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </summary>

                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t 
                      border-[#EFD9B0]/40 bg-gradient-to-r from-white via-[#FFFDF9] 
                      to-[#FFF5E4] animate-fadeIn">
                    {item.a}
                  </div>
                </details>
              ))}

            </div>

            {/* CTA Box */}
            <div className="relative bg-gradient-to-r from-[#C7A055] to-[#D8B464] 
            rounded-3xl p-6 md:p-8 text-center shadow-2xl border border-[#EFD9B0]/40 
            overflow-hidden">

              {/* Texture */}
              <div className="absolute inset-0 bg-[url('/assets/patterns/gold-wave.svg')] 
              bg-cover opacity-15"></div>

              <p className="relative text-md md:text-2xl font-semibold mb-6 text-white z-10 leading-relaxed">
                Agar doubts clear ho gaye hain,
                <br className="hidden md:block" />
                toh ab next step lene ka time hai — clarity ke saath, pressure ke bina.
              </p>

              <a
                href="https://wa.aisensy.com/aaauzt"
                target="_blank"
                onClick={trackSubscribe}
                rel="noopener noreferrer"
                className="relative track-subscribe-btn inline-flex items-center justify-center 
           bg-[#25D366] hover:bg-[#20BA5A] max-w-fit text-white font-bold py-3 px-5 
           rounded-full text-[16px] md:text-xl transition-all duration-300 
           transform hover:scale-105 shadow-xl hover:shadow-green-400/30 gap-2 z-10"
              >
                <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
                Chat With Me on WhatsApp
              </a>
            </div>
          </div>
        </section>



        {/* Floating WhatsApp Button – Premium Edition */}
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
          <button
            onClick={() => setShowWhatsAppPopup(true)}
            aria-label="Open WhatsApp Chat"
            className="group relative bg-[#25D366] text-white p-4 rounded-full shadow-xl 
               hover:shadow-green-400/40 transform hover:scale-110 transition-all duration-300"
          >
            {/* Official WhatsApp Icon */}
            <Icon icon="ic:baseline-whatsapp" className='w-8 h-8' />

            {/* Notification Badge */}
            <span
              className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold 
                 px-1.5 py-[1px] rounded-full animate-pulse shadow-md"
            >
              1
            </span>
          </button>
        </div>


        {/* WhatsApp Popup */}
        {showWhatsAppPopup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">

            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-[#EFD9B0]/50 
                    shadow-[0_0_60px_rgba(199,160,85,0.25)] max-w-md w-full p-8 animate-slideUp">

              {/* Close Icon */}
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#C7A055] transition-all"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Icon Glow */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-[#25D366]/25 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative w-24 h-24 text-white bg-[#25D366] rounded-3xl flex items-center justify-center shadow-xl">
                  <Icon icon="ic:baseline-whatsapp" className='w-12 h-12' />
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-3xl font-extrabold text-[#182432] mb-3 text-center leading-snug">
                Start Your <span className="text-[#C7A055]">Digital Journey</span>
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed text-center text-base md:text-lg">
                Message on WhatsApp and get <span className="font-semibold text-[#C7A055]">step-by-step mentorship</span>
                to build your online income — with clarity & confidence.
              </p>

              {/* CTA Button */}
              <a
                href="https://wa.aisensy.com/aaauzt"
                target="_blank"
                onClick={trackSubscribe}
                rel="noopener noreferrer"
                className="track-subscribe-btn flex items-center justify-center gap-3 bg-[#25D366] 
                   hover:bg-[#20C157] text-white font-bold max-w-fit py-2 px-4 rounded-full text-lg 
                   transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/30 mx-auto"
              >
                <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />

                Chat on WhatsApp
              </a>

              {/* Trust Line */}
              <p className="text-sm text-gray-500 mt-6 italic text-center">
                Direct mentorship • No spam • Real support 💬
              </p>
            </div>
          </div>
        )}


        <Footer />
      </div>
    </>
  );
}

export default App;
