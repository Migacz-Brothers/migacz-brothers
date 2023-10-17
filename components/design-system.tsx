export const h1 = 'font-header text-main leading-header text-3xl md:text-5xl';
export const h2 = 'font-header text-main leading-header text-2xl md:text-4xl';
export const h3 = 'font-header text-main leading-header text-lg md:text-2xl';
export const p = 'font-body text-main text-sm md:text-base leading-body';
export const section = 'max-w-[1232px] md:px-4 px-8 mx-auto';

interface TagsProps {
  tagList: string[];
}

export const Tags = ({ tagList }: TagsProps) => (
  <ul className='flex gap-1 md:gap-2'>
    {tagList.map((tag, i) => (
      <li
        key={`tag-${i}-${tag}`}
        className='font-header text-main leading-header text-xs md:text-base px-[12px] md:px-[25px] py-[3px] md:py-[5px] rounded md:rounded-lg bg-tag backdrop-blur-xsm outline outline-1 md:outline-2 -outline-offset-1 md:-outline-offset-1 group-hover:bg-tag-hover duration-300'
      >
        {tag}
      </li>
    ))}
  </ul>
);
