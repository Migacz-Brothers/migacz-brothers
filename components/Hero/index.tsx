import { h1, p, section } from "@/components/design-system";
import cn from "clsx";
import Illustrations from "./Illustrations";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className='light-noise-background md:py-32 py-18'>
      <section
        className={cn(
          section,
          "flex flex-col flex-wrap lg:max-h-[580px] justify-center"
        )}
      >
        <div className='max-w-[652px] flex flex-col self-start mr-4 lg:order-1 lg:mt-[95px] mt-0'>
          <span className={cn(p, "uppercase underline lg:mb-3 mb-1")}>
            MigaczBrothers
          </span>
          <h1 className={cn(h1, "lg:mb-6 mb-4 md:max-w-none max-w-[464px]")}>
            Helping companies create unique{" "}
            <strong className='gradient-bold'>digital products</strong>.
          </h1>
        </div>
        <div className='self-start flex lg:flex-col flex-col-reverse max-w-[445px] w-full mr-4 lg:order-1 order-2 lg:mb-[95px] mb-0'>
          <p className={cn(p, "font-medium lg:mb-16 mb-0 max-w-[434px]")}>
            Get access to high-end designers, frontend and backend developers,
            branding specialists, and much more in a{" "}
            <strong className='font-medium underline'>single place</strong>!
          </p>
          <Cta />
        </div>
        <Illustrations className='lg:self-end lg:order-1 mb-4 lg:mb-0' />
      </section>
    </div>
  );
}

const Cta = () => {
  return (
    <Link
      href='#'
      className={cn(
        "group hover:brightness-90 duration-300 bg-cta text-cta py-[3px] pr-[3px] md:pl-4 pl-2 w-full md:rounded-2xl rounded-lg flex items-center mb-4 lg:mb-0"
      )}
    >
      <span className='font-body text-sm md:text-base'>
        Contact us at{" "}
        <strong className='font-semibold group-hover:underline'>
          hello@migaczbrothers.com
        </strong>
      </span>
      <div className='cta-button-gradient md:w-14 md:h-14 xsm:w-8 xsm:h-8 w-11 h-11 aspect-square grid place-items-center md:rounded-[13px] rounded-[5px] ml-auto group-hover:brightness-125 duration-300'>
        <ArrowUpRight
          size={36}
          strokeWidth={2.5}
          absoluteStrokeWidth
          className='text-[#f4f4f4] md:w-auto w-6 md:h-auto h-6'
        />
      </div>
    </Link>
  );
};
