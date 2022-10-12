import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="font-normal my-3 text-sky-900"
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </AccordionBody>
      </Accordion>
      {/* <hr className="border-1 border-gray-300"></hr> */}
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="font-normal my-3"
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </AccordionBody>
      </Accordion>
      {/* <hr className="border-1 border-gray-300"></hr> */}
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="font-normal my-3"
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </AccordionBody>
      </Accordion>
      {/* <hr className="border-1 border-gray-300"></hr> */}
      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="font-normal my-3"
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </AccordionBody>
      </Accordion>
      {/* <hr className="border-1 border-gray-300"></hr> */}
      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="font-normal my-3"
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
