import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";


export const navLinks = [
    { href: "/", label: "Home", icon: <IoHome /> },
    { href: "/services", label: "Services", icon: <IoPerson /> },
    { href: "/skills", label: "Skills", icon: <IoMdSettings /> },
    { href: "/projects", label: "Projects", icon: <FaFolderOpen /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];