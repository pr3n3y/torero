import { Button } from "@/components/ui/button";
import { WaveShape } from "../WaveShape";

const JoinTeamSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center relative z-10">
        <h2 className="text-3xl md:text-6xl font-medium font-display text-foreground max-w-8xl mx-auto mb-8 animate-fade-in">
          We are eager to find creative and passionate people to join our
          development team.
        </h2>
        <Button
          className="animate-fade-in px-7 py-6 text-xl rounded-full bg-[#057485]"
          style={{ animationDelay: "0.2s" }}
        >
          Apply here
        </Button>
      </div>
      <WaveShape
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/Wave_grey_bottom_left_shape_01.png"
        className="bottom-0"
      />
    </section>
  );
};

export default JoinTeamSection;
