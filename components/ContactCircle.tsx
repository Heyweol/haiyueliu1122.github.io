import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const contactItems = [
  { image: '/images/wave.jpg', tooltip: 'About me: Computer Science and GIS student at UW-Madison' },
  { image: '/images/hand.jpg', tooltip: 'Resume preview' },
  { image: '/images/face.jpg', tooltip: 'GitHub: heyweol' },
  { image: '/images/confidence.jpg', tooltip: 'LinkedIn: Morgan Liu' },
  { image: '/images/heart.jpg', tooltip: 'Email: hliu746@wisc.edu' },
  { image: '/images/callme.jpg', tooltip: 'Phone: 779-775-2283' },
];
 
export function ContactCircle() {
  return (
    <TooltipProvider>
      <div className="relative w-[500px] h-[500px] mx-auto mb-20">
        {/* Central image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/me-with-cats.jpg"
            alt="Morgan with cats"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        
        {/* Arcs */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
          {contactItems.map((_, index) => {
            const startAngle = (index / contactItems.length) * 2 * Math.PI;
            const endAngle = ((index + 1) / contactItems.length) * 2 * Math.PI;
            const radius = 200;
            const startX = 250 + radius * Math.cos(startAngle);
            const startY = 250 + radius * Math.sin(startAngle);
            const endX = 250 + radius * Math.cos(endAngle);
            const endY = 250 + radius * Math.sin(endAngle);
            
            return (
              <path
                key={`arc-${index}`}
                d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Contact items */}
        {contactItems.map((item, index) => {
          const angle = (index / contactItems.length) * 2 * Math.PI;
          const x = 200 * Math.cos(angle);
          const y = 200 * Math.sin(angle);
          return (
            <div
              key={index}
              className="absolute w-20 h-20 transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10"
              style={{
                transform: `translate(${x + 240}px, ${y + 240}px) translate(-50%, -50%)`,
              }}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={item.image}
                    alt={`Contact item ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-full transition-all duration-300 ease-in-out hover:shadow-lg"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
