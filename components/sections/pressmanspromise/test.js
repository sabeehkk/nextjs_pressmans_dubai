const Test =()=>{
    const features = [
        {
          icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M52 24H12L8 56H56L52 24Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 24V16C16 12.6863 17.2643 9.5 19.5147 7.24968C21.7651 4.99935 24.9513 3.73502 28.265 3.73502H35.735C39.0487 3.73502 42.2349 4.99935 44.4853 7.24968C46.7357 9.5 48 12.6863 48 16V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="20" y="12" width="24" height="8" rx="2" fill="currentColor" fillOpacity="0.2"/>
            </svg>
          ),
          title: "Hot & Fresh Food",
          description: "We do not pre-make any order. All our menu items are made to your order using only Fresh and Premium ingredients."
        },
        {
          icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12H28V52H20V12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 12V8C24 6.93913 24.4214 5.92172 25.1716 5.17157C25.9217 4.42143 26.9391 4 28 4C29.0609 4 30.0783 4.42143 30.8284 5.17157C31.5786 5.92172 32 6.93913 32 8V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36 32C36 26.4 38 12 38 12H52C52 12 54 26.4 54 32C54 37.6 50 42 45 42C40 42 36 37.6 36 32Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M45 42V52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M38 52H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Quick Service",
          description: "We aim to prepare your order and serve within 8 minutes so that you can have more time to relish your food and enjoy a conversation."
        },
        {
          icon: (
            <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="16" width="48" height="40" rx="2" stroke="currentColor" strokeWidth="2.5"/>
              <path d="M16 24H48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M20 32H28M20 40H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="40" cy="36" r="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 16L12 8H52L56 16" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
            </svg>
          ),
          title: "Healthy On Budget",
          description: "Our menu pricing is not only attractive for individuals but also for friends, families and kids who can simply spend good time and enjoy good food at Pressman's."
        }
      ];
    
      const stats = [
        { value: "97K", label: "Happy Customers" },
        { value: "72%", label: "Repeat orders" },
        { value: "1.53M", label: "Meals delivered" },
        { value: "9", label: "Locations" }
      ];
    
      return (
        <div className="min-h-screen bg-gradient-to-br from-amber-200 via-yellow-300 to-yellow-300 !pb-6">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-16 md:mb-20">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute -top-4 -left-8 text-amber-800 opacity-30">
                    <svg className="w-8 h-8 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-6 text-amber-800 opacity-40">
                    <svg className="w-6 h-6 animate-pulse" style={{animationDelay: '0.3s'}} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="absolute top-6 -left-4 text-amber-800 opacity-25">
                    <svg className="w-4 h-4 animate-pulse" style={{animationDelay: '0.6s'}} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
              </div>
    
              <h1 className="text-1xl md:!text-1xl lg:!text-6xl !pt-14 font-bold text-amber-900 mb-6 tracking-tight">
                PRESSMAN'S PROMISE
              </h1>
              <p className="text-xl md:text-2xl text-amber-800 font-medium max-w-4xl mx-auto">
                Visit a nearby Pressman's outlet today and we assure you:
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white !p-8 rounded-2xl  shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-900"
                >
                  <div className="text-amber-600 mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base ">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
    
            <div className="bg-white rounded-3xl shadow-2xl !p-8 md:!p-12 !mt-4 ">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-2 md:mb-3">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base font-medium">
                      {stat.label}
                    </div>
                    {index < stats.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-20 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="ml-3 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              WhatsApp
            </span>
          </a>
        </div>
      );
    }

export default Test