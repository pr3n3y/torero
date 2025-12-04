import { cn } from "@/lib/utils";

type FloatingBlobProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
  animation?: "animate-float" | "animate-floatUpDown";
  loading?: "eager" | "lazy";
};

const FloatingBlob = ({
  src,
  width,
  height,
  className = "",
  animation = "animate-floatUpDown",
  loading = "lazy",
}: FloatingBlobProps) => (
  <div
    className={cn("absolute hidden md:block z-[9999]", className, animation)}
  >
    <img
      decoding="async"
      width={width}
      height={height}
      src={src}
      className="z-50"
      alt={src}
      data-full_image_src={src}
      title="hero floating blob 1"
      loading={loading}
      sizes={`(max-width: ${width}px) 100vw, ${width}px`}
    />
  </div>
);

export default FloatingBlob;
