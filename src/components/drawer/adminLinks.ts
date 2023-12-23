import { IconType } from 'react-icons';
import {
  MdOutlineArticle,
  MdOutlineHome,
  MdRecordVoiceOver,
  MdOutlineSplitscreen,
  MdOutlineSettings,
} from 'react-icons/md';
import { TbUsers } from 'react-icons/tb';
import { CiMicrophoneOn } from 'react-icons/ci';

interface TAdminLink {
  title: string;
  icon: IconType;
  path: string;
}

export const adminLinks: TAdminLink[] = [
  {
    title: 'الرئيسية',
    icon: MdOutlineHome,
    path: '/',
  },
  {
    title: 'الاخبار',
    icon: MdOutlineArticle,
    path: '/news',
  },
  {
    title: 'المستخدمين',
    icon: TbUsers,
    path: '/users',
  },
  {
    title: 'المقدمين',
    icon: MdRecordVoiceOver,
    path: '/hosts',
  },
  {
    title: 'البرامج',
    icon: CiMicrophoneOn,
    path: '/programs',
  },
  {
    title: 'البانرز',
    icon: MdOutlineSplitscreen,
    path: '/banners',
  },
  {
    title: 'الضبط',
    icon: MdOutlineSettings,
    path: '/settings',
  },
];
