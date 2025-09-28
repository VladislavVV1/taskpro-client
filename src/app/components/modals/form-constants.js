import {
   SlStar, SlMagicWand, SlSettings, SlBriefcase,
  SlFire, SlPeople, SlDiamond
} from 'react-icons/sl';
import { PiSquaresFour, PiStarFour, PiCirclesThree  } from 'react-icons/pi';
import { LuLoaderPinwheel, LuPuzzle, LuHexagon   } from "react-icons/lu";
import { IoCubeOutline } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";
import { color } from 'framer-motion';
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

export const BOARD_BACKGROUNDS = [
  {id: 'default', Img: '/background/default.svg' },
  { id: 'balloonsfest', Img: '/background/balloonsfest.webp' },
  { id: 'balloon', Img: '/background/balloon.webp' },
  { id: 'boat', Img: '/background/boat.webp' },
  { id: 'desertsky', Img: '/background/desertsky.webp' },
  { id: 'flowers', Img: '/background/flowers.webp' },
  { id: 'galaxysky', Img: '/background/galaxysky.webp' },
  { id: 'magicforms', Img: '/background/magicforms.webp' },
  { id: 'moon', Img: '/background/moon.webp' },
  { id: 'mountain', Img: '/background/mountain.webp' },
  { id: 'nightsky', Img: '/background/nightsky.webp' },
  { id: 'palmlist', Img: '/background/palmlist.webp' },
  { id: 'sea', Img: '/background/sea.webp' },
  { id: 'searocks', Img: '/background/searocks.webp' },
  { id: 'sky', Img: '/background/sky.webp' },
  { id: 'tree', Img: '/background/tree.webp' },
];

export const PRIORITY_LEVELS = [
  { id: 'Low', name: 'Low', color: '#8FA1D0' },
  { id: 'Medium', name: 'Medium', color: '#E09CB5' },
  { id: 'High', name: 'High', color: '#BEDBB0' },
  { id: 'Without', name: 'Without', color: 'var(--priority-without)' },
];