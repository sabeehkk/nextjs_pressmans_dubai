import { useState } from "react";
import media1 from "../../public/assets/images/newspapper_cut/media-1.webp";
import media2 from  "../../public/assets/images/newspapper_cut/media-2.webp";
import media3 from  "../../public/assets/images/newspapper_cut/media-3.webp";
import media4 from  "../../public/assets/images/newspapper_cut/media-4.webp";
import media5 from  "../../public/assets/images/newspapper_cut/media-5.webp";
import media6 from  "../../public/assets/images/newspapper_cut/media-6.webp"; 
import media7 from  "../../public/assets/images/newspapper_cut/media-7-big.webp";
import media8 from  "../../public/assets/images/newspapper_cut/media-8.webp";
import media9 from  "../../public/assets/images/newspapper_cut/media-9.webp";
import media10 from  "../../public/assets/images/newspapper_cut/media-10.webp";




const mediaItems = [
  {
    id: 1,
    image: "assets/images/newspapper_cut/media-1.webp",
    title: "Gourmet Sandwich Feature",
    source: "The Daily Post",
  },
  {
    id: 2,
    image: "assets/images/newspapper_cut/media-2.webp",
    title: "Best Pressed Sandwiches",
    source: "Food Magazine",
  },
  {
    id: 3,
    image: "assets/images/newspapper_cut/media-3.webp",
    title: "Hot Pressed Delights",
    source: "City News",
  },
  {
    id: 4,
    image: "assets/images/newspapper_cut/media-4.webp",
    title: "Holiday Food Guide",
    source: "Lifestyle Weekly",
  },
  {
    id: 5,
    image: "assets/images/newspapper_cut/media-5.webp",
    title: "Holiday Food Guide",
    source: "Lifestyle Weekly",
  },
  {
    id: 6,
    image: "assets/images/newspapper_cut/media-6.webp",
    title: "Holiday Food Guide",
    source: "Lifestyle Weekly",
  },
  {
    id: 7,
    image: "assets/images/newspapper_cut/media-7-big.webp",
    title: "Holiday Food Guide",
    source: "Lifestyle Weekly",
  },
  {
    id: 8,
    image: "assets/images/newspapper_cut/media-8.webp",
    title: "Holiday Food Guide",
    source: "Lifestyle Weekly",
  },
  {
    id: 9,
    image: "assets/images/newspapper_cut/media-9.webp",
    title: "Holiday Food Guide",
    source: "Lifestyle Weekly",
  },
  {
    id: 10,
    image: "assets/images/newspapper_cut/media-10.webp",
    title: "Holiday Food Guide",
    source: "Lifestyle Weekly",
  },
];


const MediaCoverage = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <section className="!py-16 !px-4 sm:!px-6 lg:!px-8 !bg-gray-50 !min-h-screen">
      <div className="!max-w-7xl !mx-auto">
        {/* Header */}
        <div className="!mb-12 !text-left">
          <p className="!text-gray-500 !text-sm !font-medium !tracking-wider !uppercase !mb-2">
            Our Media
          </p>
          <h2 className="!text-4xl sm:!text-5xl !font-bold !text-[#8B2323] !tracking-tight">
            MEDIA COVERAGE
          </h2>
        </div>

        {/* Image Grid */}
        <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-6">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="!relative !group !overflow-hidden !rounded-lg !shadow-lg !cursor-pointer !transform !transition-all !duration-500 hover:!scale-[1.02] hover:!shadow-2xl"
            >
              {/* Image */}
              <div className="!aspect-[4/3] !overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="!w-full !h-full !object-cover !transition-transform !duration-700 group-hover:!scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/70 !via-black/20 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-500" />

              {/* Plus Button */}
              <button
                onClick={() => openModal(item)}
                className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-14 !h-14 !bg-white/90 !backdrop-blur-sm !rounded-full !flex !items-center !justify-center !shadow-xl !transition-all !duration-500 !opacity-0 !scale-50 group-hover:!opacity-100 group-hover:!scale-100 hover:!bg-white hover:!shadow-2xl !z-10"
                aria-label={`View ${item.title}`}
              >
                <svg
                  className="!w-8 !h-8 !text-[#8B2323] !transition-transform !duration-300 hover:!rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>

              {/* Title Overlay on Hover */}
              <div className="!absolute !bottom-0 !left-0 !right-0 !p-4 !translate-y-full group-hover:!translate-y-0 !transition-transform !duration-500">
                <h3 className="!text-white !font-semibold !text-lg !mb-1">
                  {item.title}
                </h3>
                <p className="!text-white/80 !text-sm">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`!fixed !inset-0 !z-50 !flex !items-center !justify-center !p-4 !transition-all !duration-300 ${
            isModalOpen ? "!opacity-100" : "!opacity-0"
          }`}
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="!absolute !inset-0 !bg-black/80 !backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className={`!relative !max-w-4xl !w-full !max-h-[90vh] !bg-white !rounded-2xl !overflow-hidden !shadow-2xl !transform !transition-all !duration-500 ${
              isModalOpen
                ? "!scale-100 !opacity-100 !translate-y-0"
                : "!scale-95 !opacity-0 !translate-y-8"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="!absolute !top-4 !right-4 !z-10 !w-10 !h-10 !bg-white/90 !backdrop-blur-sm !rounded-full !flex !items-center !justify-center !shadow-lg !transition-all !duration-300 hover:!bg-white hover:!scale-110 hover:!rotate-90"
              aria-label="Close modal"
            >
              <svg
                className="!w-6 !h-6 !text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="!relative !w-full !max-h-[70vh] !overflow-hidden">
              <img
                src={selectedImage?.image}
                alt={selectedImage?.title}
                className="!w-full !h-auto !object-contain"
              />
            </div>

            {/* Info */}
            {/* <div className="!p-6 !bg-white">
              <h3 className="!text-2xl !font-bold !text-gray-900 !mb-2">
                {selectedImage?.title}
              </h3>
              <p className="!text-gray-600 !flex !items-center !gap-2">
                <span className="!w-2 !h-2 !bg-[#8B2323] !rounded-full" />
                {selectedImage?.source}
              </p>
            </div> */}
          </div>
        </div>
      )}

      {/* Inline Keyframe Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default MediaCoverage;
