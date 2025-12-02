import heroWave from "@/assets/wave_white_bottom_left_hero.avif";
import { cn } from "@/lib/utils";

interface WaveShapeProps {
  variant?: "teal" | "coral" | "purple";
  position?: "top" | "bottom";
  className?: string;
  wave?: string
}

export const WaveShape = ({
  variant = "teal",
  position = "bottom",
  className = "",
  wave = heroWave
}: WaveShapeProps) => {



  return (
    <div
      className={cn(`absolute   w-[100vw]  pointer-events-none bottom-0 `, className)}
    >
      <img src={wave} className="w-full" />
    </div>
  );
};
