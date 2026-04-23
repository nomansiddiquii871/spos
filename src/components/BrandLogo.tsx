import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({
  href = "/",
  className = "",
  imageClassName = "",
  width = 128,
  height = 40,
}: {
  href?: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 shrink-0 ${className}`}>
      <Image
        src="/logo-removebg-preview.png"
        alt="Clovpay logo"
        width={width}
        height={height}
        priority
        className={imageClassName}
      />
      <span className="sr-only">Clovpay</span>
    </Link>
  );
}