import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const contactItems = [
  { image: '/images/waving.png', tooltip: 'About me: Computer Science and GIS student at UW-Madison' },
  { image: '/images/resume.png', tooltip: 'Resume preview' },
  { image: '/images/github.png', tooltip: 'GitHub: heyweol' },
  { image: '/images/linkedin.png', tooltip: 'LinkedIn: Morgan Liu' },
  { image: '/images/email.png', tooltip: 'Email: hliu746@wisc.edu' },
  { image: '/images/phone.png', tooltip: 'Phone: 779-775-2283' },
];
 
export function ContactCircle() {
  return (
    <TooltipProvider>
      <div className="relative w-[500px] h-[500px] mx-auto mb-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/me-with-cats.jpg"
            alt="Morgan with cats"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        {contactItems.map((item, index) => {
          const angle = (index / contactItems.length) * 2 * Math.PI;
          const x = 200 * Math.cos(angle);
          const y = 200 * Math.sin(angle);
          return (
            <div
              key={index}
              className="absolute w-20 h-20"
              style={{
                transform: `translate(${x + 250}px, ${y + 250}px)`,
              }}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={item.image}
                    alt={`Contact item ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-full"
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
