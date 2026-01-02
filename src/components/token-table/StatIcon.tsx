import type { Token } from "../../lib/types";
import { ChefHatIcon } from "../icons/ChefHatIcon";
import { CloverIcon } from "../icons/CloverIcon";
import { GhostIcon } from "../icons/GhostIcon";
import { StarIcon } from "../icons/StarIcon";
import { TargetIcon } from "../icons/TargetIcon";
import { CrownIcon } from "../icons/CrownIcon";
import { TrophyIcon } from "../icons/TrophyIcon";
import { 
  Users, Globe, Search, Link, Eye, Leaf, Send, Box, User, Crosshair, 
  MessageCircle, Zap, Flame, Heart, Shield, Sparkles, TrendingUp,
  Bell, Bookmark, Gift, Home, Coffee, Cloud, Moon, Sun, Package,
  Radio, Flag, Camera, Music, Video, GamepadIcon, Smartphone,
  DollarSign, Bitcoin, Wallet, CreditCard, Building, Factory,
  Car, Bike, Plane, Ship, Train, Truck, Briefcase, GraduationCap,
  HeartPulse, Stethoscope, Pill, Apple, Pizza, Wine, Beer,
  ShoppingBag, ShoppingCart, Tag, Ticket, Calendar, Clock,
  MapPin, Navigation, Compass, Wifi, Bluetooth, Battery,
  Volume2, Headphones, Tv, Monitor, Printer, Mouse,
  Keyboard, Cpu, HardDrive, Database, Server, Router,
  GitBranch, GitCommit, GitPullRequest, Code, Terminal,
  FileCode, Layers, Palette, Brush, Image, Film, BookOpen,
  Book, Newspaper, PenTool, Edit3, Type, Hash, AtSign,
  Phone, Mail, MessageSquare, ThumbsUp, Share2, Download,
  Upload, ExternalLink, Lock, Unlock, Key, Shield as ShieldIcon,
  AlertCircle, AlertTriangle, CheckCircle, XCircle, HelpCircle,
  Info, MinusCircle, PlusCircle, Ban, Filter, Sliders,
  Settings, Wrench, BarChart2, PieChart, LineChart,
  Activity, Target, Award, Medal, Star as StarIconLucide
} from "lucide-react";
import { PaperclipIcon } from "../icons/PaperclipIcon";
import { CandlestickChartIcon } from "../icons/CandlestickChartIcon";

// Telegram Icon component
const TelegramIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`shrink-0 ${className}`}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.69 1.03-.58.05-1.02-.38-1.58-.75-.88-.57-1.38-.93-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.98 1.26-5.6 3.68-.53.37-1.01.55-1.44.54-.48-.01-1.4-.27-2.08-.5-.84-.27-1.51-.41-1.45-.87.03-.24.36-.48.99-.74 3.83-1.66 6.36-2.76 7.6-3.29 3.56-1.51 4.3-1.77 4.78-1.77.11 0 .36.03.52.19.12.13.15.3.14.47z"/>
  </svg>
);

// Quill Pen SVG component (for Twitter/X icon)
const QuillPenIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`shrink-0 ${className}`}
  >
    <path d="M21 2C21 1.44772 20.5523 1 20 1H8C7.44772 1 7 1.44772 7 2V4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4H17V2H15V4H9V2H7V4H5V6H19V20H5V6H5V8H7V10H5V12H7V14H5V16H7V18H5V20H7V18H9V20H15V18H17V20H19V18H21V20H19V22H21V20H23V6H21V4H19V2H21Z" />
  </svg>
);

// Men Icon component
const MenIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`shrink-0 ${className}`}
  >
    <path d="M9.5 11c1.93 0 3.5-1.57 3.5-3.5S11.43 4 9.5 4 6 5.57 6 7.5 7.57 11 9.5 11zm0-5c.83 0 1.5.67 1.5 1.5S10.33 9 9.5 9 8 8.33 8 7.5 8.67 6 9.5 6zM4 18c0-2.39 1.64-4.44 3.9-5.02-.08-.01-.15-.03-.24-.03-1.24 0-2.44.8-2.8 1.99-.18.59.26 1.06.89 1.06.45 0 .84-.3.97-.73C6.42 15.07 7.2 14.5 8 14.5c.79 0 1.57.57 1.88 1.41.13.43.52.73.97.73.63 0 1.07-.47.89-1.06-.36-1.19-1.56-1.99-2.8-1.99-.09 0-.16.02-.24.03C10.36 13.56 12 15.61 12 18v2c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-2zm12 0c0-2.39 1.64-4.44 3.9-5.02-.08-.01-.15-.03-.24-.03-1.24 0-2.44.8-2.8 1.99-.18.59.26 1.06.89 1.06.45 0 .84-.3.97-.73.31-.84 1.09-1.41 1.88-1.41.79 0 1.57.57 1.88 1.41.13.43.52.73.97.73.63 0 1.07-.47.89-1.06-.36-1.19-1.56-1.99-2.8-1.99-.09 0-.16.02-.24.03C18.36 13.56 20 15.61 20 18v2c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1v-2z"/>
  </svg>
);

export function StatIcon({ 
  type, 
  className = "h-3 w-3" 
}: { 
  type: keyof Token['stats']['row'] | Token['stats']['progress'][0]['icon'] | 'paperclip' | 'chart' | 'quill-pen' | 'boxes' | 'user-star' | 'crosshair' | 'men' | 'telegram' | 'leaf' | 'send' | string, 
  className?: string 
}) {
  const commonClasses = `shrink-0 ${className}`;
  
  switch (type) {
    // Progress Icons
    case 'star': 
    case 'user-star': return <StarIcon className={commonClasses} />;
    case 'chef': 
    case 'chef-hat': return <ChefHatIcon className={commonClasses} />;
    case 'target': 
    case 'crosshair': return <Crosshair className={commonClasses} />;
    case 'ghost': return <GhostIcon className={commonClasses} />;
    case 'clover': return <CloverIcon className={commonClasses} />;
    case 'leaf': return <Leaf className={commonClasses} />;
    case 'send': return <Send className={commonClasses} />;
    case 'boxes': return <Box className={commonClasses} />;
    case 'men': return <MenIcon className={commonClasses} />;
    case 'telegram': return <TelegramIcon className={commonClasses} />;

    // Row Icons
    case 'website': return <Globe className={commonClasses} />;
    case 'search': return <Search className={commonClasses} />;
    case 'trophy': return <TrophyIcon className={commonClasses} />;
    case 'crown': return <CrownIcon className={commonClasses} />;
    case 'views': return <Eye className={commonClasses} />;
    case 'holders': 
    case 'user': return <Users className={commonClasses} />;
    case 'paperclip': return <PaperclipIcon className={commonClasses} />;
    case 'chart': return <CandlestickChartIcon className={commonClasses} />;
    case 'socials': return <Link className={commonClasses} />;
    
    // New Icons from the design
    case 'quill-pen': return <QuillPenIcon className={commonClasses} />;

    // Additional Icons
    case 'message': return <MessageCircle className={commonClasses} />;
    case 'zap': return <Zap className={commonClasses} />;
    case 'flame': return <Flame className={commonClasses} />;
    case 'heart': return <Heart className={commonClasses} />;
    case 'shield': return <Shield className={commonClasses} />;
    case 'sparkles': return <Sparkles className={commonClasses} />;
    case 'trending-up': return <TrendingUp className={commonClasses} />;
    case 'bell': return <Bell className={commonClasses} />;
    case 'bookmark': return <Bookmark className={commonClasses} />;
    case 'gift': return <Gift className={commonClasses} />;
    case 'home': return <Home className={commonClasses} />;
    case 'coffee': return <Coffee className={commonClasses} />;
    case 'cloud': return <Cloud className={commonClasses} />;
    case 'moon': return <Moon className={commonClasses} />;
    case 'sun': return <Sun className={commonClasses} />;
    case 'package': return <Package className={commonClasses} />;
    case 'radio': return <Radio className={commonClasses} />;
    case 'flag': return <Flag className={commonClasses} />;
    case 'camera': return <Camera className={commonClasses} />;
    case 'music': return <Music className={commonClasses} />;
    case 'video': return <Video className={commonClasses} />;
    case 'gamepad': return <GamepadIcon className={commonClasses} />;
    case 'smartphone': return <Smartphone className={commonClasses} />;
    case 'dollar': return <DollarSign className={commonClasses} />;
    case 'bitcoin': return <Bitcoin className={commonClasses} />;
    case 'wallet': return <Wallet className={commonClasses} />;
    case 'credit-card': return <CreditCard className={commonClasses} />;
    case 'building': return <Building className={commonClasses} />;
    case 'factory': return <Factory className={commonClasses} />;
    case 'car': return <Car className={commonClasses} />;
    case 'bike': return <Bike className={commonClasses} />;
    case 'plane': return <Plane className={commonClasses} />;
    case 'ship': return <Ship className={commonClasses} />;
    case 'train': return <Train className={commonClasses} />;
    case 'truck': return <Truck className={commonClasses} />;
    case 'briefcase': return <Briefcase className={commonClasses} />;
    case 'graduation-cap': return <GraduationCap className={commonClasses} />;

    default: return <Globe className={commonClasses} />;
  }
}