import { Container, SectionHeader } from "@/components/ui";

const team = [
  {
    name: "Akshay Sharma",
    role: "Operations Manager",
    bio: "Leading end-to-end operations with a decade of retail-tech experience.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Deniel Jaws",
    role: "Sales Manager",
    bio: "Helping merchants find the right solution for their growth stage.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Jimmy Lincoln",
    role: "Senior Finance Officer",
    bio: "Bringing financial clarity and strategic discipline to the business.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Syed Hyder",
    role: "Managing Partner",
    bio: "Steering company vision and long-term product strategy.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

export default function Leadership() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          gradientText="Leadership"
          rest="Team"
          subtitle="Meet the visionaries and experts driving innovation and growth at SPOS."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-7 text-center hover:border-white/15 transition"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.avatar}
                alt={m.name}
                className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-[#3355FF]/40"
              />
              <h3 className="mt-4 text-lg font-bold text-white">{m.name}</h3>
              <p className="text-sm text-[#6FA8FF]">{m.role}</p>
              <p className="mt-3 text-sm text-white/65">{m.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
