"use client";
const BakeryHero = () => {
  const breadFeatures = [
    "We bake our signature breads in-house daily.",
    "Our breads are without any added preservatives or artificial conditioners.",
    "Our breads DO NOT contain butter, dairy or egg.",
    "Our breads come in 4 flavors viz. Multi Cereal, Whole Wheat, Omega and Country White.",
    "Our sandwiches are light on stomach and crunchy on the outside.",
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "hsl(40 33% 94%)",
        display: "flex",
        alignItems: "center",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Main Flex Container - Changed to always be flex for side-by-side layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Mobile: column
            alignItems: "center",
            gap: "2rem",
          }}
          className="lg:flex-row lg:gap-12 lg:items-stretch" // Desktop: row with stretch alignment
        >
          {/* YouTube Video Container - Left side */}
          <div
            style={{ 
              zIndex: 10,
              display: "flex",
              alignItems: "center" // Vertically center the video
            }}
            className="w-full lg:w-1/2" // Changed to exact half width
          >
            <div
              style={{
                overflow: "hidden",
                borderRadius: "1.5rem",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                width: "100%",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Bakery Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: "100%",
                  border: "none",
                  display: "block",
                }}
                className="h-64 sm:h-80 md:h-96 lg:h-[520px]"
              />
            </div>
          </div>

          {/* Content Card - Right side */}
          <div
            style={{ zIndex: 20 }}
            className="w-full lg:w-1/2 lg:flex lg:items-center" // Changed to exact half width
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "1.5rem",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                height: "100%", // Make card full height
                width: "100%", // Ensure full width
              }}
              className="p-6 sm:p-8 lg:p-10 xl:p-12"
            >
              {/* Subtitle */}
              <p
                style={{
                  color: "hsl(35 70% 40%)",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                }}
                className="text-sm sm:text-base"
              >
                At Pressman's
              </p>

              {/* Main Heading */}
              <h2
                style={{
                  color: "hsl(25 50% 25%)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
                className="text-2xl sm:text-3xl lg:text-4xl"
              >
                IT'S ALL ABOUT THE BREAD
              </h2>

              {/* Features List */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: "2rem",
                }}
                className="space-y-2 sm:space-y-3"
              >
                {breadFeatures.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      color: "hsl(25 40% 25%)",
                    }}
                  >
                    <span
                      style={{
                        color: "hsl(35 70% 40%)",
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{ lineHeight: 1.6 }}
                      className="text-sm sm:text-base"
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                style={{
                  backgroundColor: "hsl(45 85% 55%)",
                  color: "hsl(25 40% 20%)",
                  fontWeight: 600,
                  padding: "1rem 2.5rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                className="hover:scale-105 active:scale-100"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(45 85% 48%)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(45 85% 55%)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakeryHero;