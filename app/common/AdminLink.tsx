import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

type PropType = {
  href: Url;
  Icon: IconType;
  label: string;
};
export default function AdminLink({ href, Icon, label }: PropType) {
  const pathname = usePathname();

  const isActive =
    href === "/" ? pathname === href : pathname.includes(href as string);

  return (
    <Link
      href={href}
      className={clsx(
        `block py-2 px-4 rounded-lg hover:bg-gray-700`,
        isActive && "bg-gray-700"
      )}
    >
      <Icon className="inline-block mr-2" />
      {label}
    </Link>
  );
}
