import { h1, p, section } from "@/components/design-system";
import cn from "clsx";
import Illustrations from "./Illustrations";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className='light-noise-background py-32'>
      <section
        className={cn(
          section,
          "flex flex-col flex-wrap max-h-[580px] justify-center"
        )}
      >
        <div className='max-w-[652px] flex flex-col self-start'>
          <span className={cn(p, "uppercase underline mb-3")}>
            MigaczBrothers
          </span>
          <h1 className={cn(h1, "mb-6")}>
            Helping companies create unique{" "}
            <strong className='gradient-bold'>digital products</strong>.
          </h1>
        </div>
        <div className='self-start flex flex-col max-w-[534px] w-full'>
          <p className={cn(p, "font-medium mb-16 max-w-[434px]")}>
            Get access to high-end designers, frontend and backend developers,
            branding specialists, and much more in a{" "}
            <strong className='font-medium underline'>single place</strong>!
          </p>
          <Link
            href='#'
            className={cn(
              "bg-cta text-cta py-[2px] pr-[2px] pl-4 w-full rounded-2xl flex items-center"
            )}
          >
            <span className='font-body text-sm md:text-base'>
              Contact us at{" "}
              <strong className='font-semibold'>
                hello@migaczbrothers.com
              </strong>
            </span>
            <div className='cta-button-gradient w-14 h-14 grid place-items-center rounded-[14px] ml-auto'>
              <ArrowUpRight
                size={36}
                strokeWidth={2.5}
                absoluteStrokeWidth
                className='text-[#f4f4f4]'
              />
            </div>
          </Link>
        </div>
        <Illustrations className='self-end' />
      </section>
    </div>
  );
}
