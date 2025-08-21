import {
   SlStar, SlMagicWand, SlSettings, SlBriefcase,
  SlFire, SlPeople, SlDiamond
} from 'react-icons/sl';
import { PiSquaresFour, PiStarFour, PiCirclesThree  } from 'react-icons/pi';
import { LuLoaderPinwheel, LuPuzzle, LuHexagon   } from "react-icons/lu";
import { IoCubeOutline } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";
// A list of icons to be used in the IconPicker
export const BOARD_ICONS = [
  { id: 'squares', Component: PiSquaresFour },
  { id: 'star', Component: PiStarFour },
  { id: 'loader', Component: LuLoaderPinwheel },
  { id: 'puzzle', Component: LuPuzzle },
  { id: 'cube', Component: IoCubeOutline },
  { id: 'lightning', Component: BsLightning },
  { id: 'circles', Component: PiCirclesThree },
  { id: 'hexagon', Component: LuHexagon },
];

// A list of background image URLs
// export const BOARD_BACKGROUNDS = [
//   '/background/Vector.png',
//   '/background/Vector-1.png',
//   '/background/Vector-2.png',
//   '/background/Vector-3.png',
//   '/background/Vector-4.png',
//   '/background/Vector-5.png',
//   '/background/Vector-6.png',
//   '/background/Vector-7.png',
//   '/background/Vector-8.png',
//   '/background/Vector-9.png',
//   '/background/Vector-10.png',
//   '/background/Vector-11.png',
//   '/background/Vector-12.png',
//   '/background/Vector-13.png',
//   '/background/Vector-14.png',
//   // Add the rest of your image URLs here
// ];

export const BOARD_BACKGROUNDS = [
  { id: 'balloonsfest', Img: '/background/balloonsfest.png' },
  { id: 'balloon', Img: '/background/balloon.png' },
  { id: 'boat', Img: '/background/boat.png' },
  { id: 'desertsky', Img: '/background/desertsky.png' },
  { id: 'flowers', Img: '/background/flowers.png' },
  { id: 'galaxysky', Img: '/background/galaxysky.png' },
  { id: 'magicforms', Img: '/background/magicforms.png' },
  { id: 'moon', Img: '/background/moon.png' },
  { id: 'mountain', Img: '/background/mountain.png' },
  { id: 'nightsky', Img: '/background/nightsky.png' },
  { id: 'palmlist', Img: '/background/palmlist.png' },
  { id: 'sea', Img: '/background/sea.png' },
  { id: 'searocks', Img: '/background/searocks.png' },
  { id: 'sky', Img: '/background/sky.png' },
  { id: 'tree', Img: '/background/tree.png' },
];