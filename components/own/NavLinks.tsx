
import Link from "next/link";
import { ModeToggle } from "../mode-toogle";
import { Edit, Plus } from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";

export const navigation: { href: string, name: string, icon: JSX.Element }[] = [
    // { name: 'Home', href: '/' },
    { name: 'Add', href: '/products/add', icon: <Plus /> },
    { name: 'List', href: '/products/list', icon: <DashboardIcon /> },
    // { name: 'Edit', href: '/products/edit', icon: <Edit /> },
];

export default function NavLinks() {

    return (
        <nav className="my-16 animate-fade-in ">
            <ul className="flex items-center justify-center gap-4">
                {navigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-md duration-500 hover:text-primary"
                    >
                        <div className="flex items-center gap-1">
                            <p>{item.name}</p>
                            {item.icon}
                        </div>
                    </Link>
                ))}
                <ModeToggle />
            </ul>
        </nav>
    )
}