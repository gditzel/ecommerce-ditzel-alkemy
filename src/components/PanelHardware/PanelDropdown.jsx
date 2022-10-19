import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import EllipsisVertical from "../../utils/svg/EllipsisVertical";

import PanelHardware from "./PanelHardware";

export function PanelDropdown() {
  return (
    <>
      <Menu
        as="div"
        className="relative inline-block text-center w-full md:flex md:justify-start"
      >
        <Menu.Button className="inline-flex justify-center rounded-md border border-slate-500 text-sky-900 font-medium my-5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <EllipsisVertical />
          Componentes
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-screen origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <>
                    <PanelHardware />
                  </>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
