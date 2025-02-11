import routePath from "@/router/routePath";
import {
  CircleUser,
  ClipboardPen,
  HandCoins,
  Home,
  MessageCircleHeart,
  UsersRound,
  ConciergeBell,
  Settings,
  ShieldPlusIcon,
  FileTerminal,
  HelpCircleIcon,
  InfoIcon,
  WalletIcon,
} from "lucide-react";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  return menuItems.map((item, index) => <MenuItem item={item} key={index} />);
};

export const menuItems = [
  {
    icon: Home,
    label: "Dashboard ",
    route: routePath.dashboard,
  },
  {
    icon: UsersRound,
    label: "Guest ",
    route: routePath.guestManagement,
  },
  {
    icon: CircleUser,
    label: "Users",

    subMenu: [
      {
        label: "Manage Roles",
        route: routePath.roleManagement,
      },
      {
        label: "Manage Users",
        route: routePath.userManagement,
      },
    ],
  },
  {
    icon: ClipboardPen,
    label: "App Content ",
    route: routePath.contentManagement,
  },
  {
    icon: HandCoins,
    label: "Points ",
    subMenu: [
      { label: "Earn Points ", route: routePath.earnPoints },
      { label: "Redeem Points ", route: routePath.burnPoints },
      { label: "Revert Points ", route: routePath.revertPoints },
      // { label: "Transfer Points", route: routePath.pointTransfers },
    ],
  },
  // {
  //   icon: TicketCheck,
  //   label: "Coupon ",
  //   route: routePath.couponManagement,
  // },
  // {
  //   icon: CalendarDaysIcon,
  //   label: "Events",
  //   route: routePath.events,
  // },
  {
    icon: MessageCircleHeart,
    label: "Feedbacks",
    route: routePath.feedbackManagement,
  },

  {
    icon: MessageCircleHeart,
    label: "Claims",
    route: routePath.claimPointsFeedbackManagement,
  },

  {
    icon: ConciergeBell,
    label: "Push Notifications",
    subMenu: [
      { label: "Manage Templates", route: routePath.templatesManagement },
      { label: "Send Notifications", route: routePath.sendNotfications },
    ],
  },

  {
    icon: Settings,
    label: "Configurations",
    subMenu: [
      {
        label: "Locations",
        subMenu: [
          { label: "Organizations", route: routePath.organizations },
          { label: "Properties", route: routePath.propertyManagement },
          { label: "RVC Outlets", route: routePath.rvcOutlets },
          { label: "Outlet Types", route: routePath.outletTypes },
        ],
      },
      {
        label: "Loyalty",
        subMenu: [
          { label: "Loyalty Programs", route: routePath.membershipPrograms },
          {
            label: "Loyalty Tier Types",
            route: routePath.membershipTierTypes,
          },
          { label: "Loyalty Tiers", route: routePath.membershipTiers },
          {
            label: "Loyalty Categories",
            route: routePath.membershipCategories,
          },
        ],
      },

      { label: "Major Group", route: routePath.majorGroup },
      {
        label: "Points",
        subMenu: [
          { label: "Earn Points", route: routePath.earnPointsConfig },
          { label: "Burn Points", route: routePath.burnPointsConfig },
        ],
      },
      {
        label: "Discounts",
        subMenu: [
          { label: "Discount Itemizers", route: routePath.discountItemizers },
          { label: "Micros Discounts", route: routePath.microDiscounts },
          { label: "Discount Programs", route: routePath.discountPrograms },
          {
            label: "Loyalty Discounts",
            route: routePath.membershipDiscounts,
          },
          // { label: "RVC Level Discounts", route: routePath.rvcLevelDiscounts },
        ],
      },
    ],
  },

  {
    icon: WalletIcon,
    label: "Wallet",

    route: routePath.wallet,
  },
  {
    icon: InfoIcon,
    label: "Info Center",
    subMenu: [
      {
        icon: ShieldPlusIcon,
        label: "Privacy Policy",

        route: routePath.privacyPolicy,
      },

      {
        icon: InfoIcon,
        label: "About Us",
        route: routePath.aboutUs,
      },
      {
        icon: FileTerminal,
        label: "Terms & Conditions",

        route: routePath.termsAndConditions,
      },

      {
        icon: HelpCircleIcon,
        label: "FAQs",
        route: routePath.faqs,
      },
    ],
  },
];

export default MenuItems;
