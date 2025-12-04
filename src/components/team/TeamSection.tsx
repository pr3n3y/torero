import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import TeamBottomWave from "@/assets/team-bottom-wave.avif";
import { WaveShape } from "../WaveShape";

const team = [
  {
    image: teamMember1,
    name: "Bryan C. Ramirez",
    position: "CEO",
    phone: "9999999999",
    email: "xyz@email.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    image: teamMember2,
    name: "Dr. Howard M. Allis",
    position: "CTO",
    phone: "9999999999",
    email: "xyz@email.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    image: teamMember3,
    name: "Michelle C. Wood",
    position: "CFO",
    phone: "9999999999",
    email: "xyz@email.com",
    social: { linkedin: "#", twitter: "#" },
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="relative  overflow-hidden">
      {/* Decorative wave at bottom */}

     
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/background_about_01.png)`,
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet the talented individuals who make it all happen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 ">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden rounded-lg group hover:shadow-2xl transition-all duration-500 h-[600px]">
                {/* Background Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  {/* Position */}
                  <p className="text-sm font-medium mb-2 opacity-90">
                    {member.position}
                  </p>

                  {/* Name */}
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {member.name}
                  </h3>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </div>
                  </div>

                  {/* Bottom Row: Social Icons & Full Profile Button */}
                  <div className="flex items-center justify-between">
                    {/* Social Icons */}
                    <div className="flex gap-3">
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Full Profile Button */}
                    <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300 group/btn">
                      <span>Full Profile</span>
                      <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-gray-900 transition-all duration-300">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
