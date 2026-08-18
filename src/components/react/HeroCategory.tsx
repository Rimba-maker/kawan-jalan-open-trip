import { motion, useReducedMotion } from "framer-motion";

interface HeroCategoryProps {
  headline: string;
  subtext: string;
  heroImage: string;
  heroImageAlt: string;
  accent: string;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroCategory({ headline, subtext, heroImage, heroImageAlt, accent }: HeroCategoryProps) {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 pt-14 pb-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:pt-20">
      <motion.div
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={reduce ? undefined : container}
      >
        <motion.h1
          variants={reduce ? undefined : item}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl"
        >
          {headline}
        </motion.h1>

        <motion.p variants={reduce ? undefined : item} className="mt-5 max-w-[46ch] text-lg leading-relaxed text-body">
          {subtext}
        </motion.p>

        <motion.div variants={reduce ? undefined : item} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#jadwal-trip"
            className="rounded-pill bg-primary px-7 py-3.5 text-base font-semibold text-on-primary transition-transform hover:brightness-95 active:scale-[0.98]"
          >
            Cek Jadwal Trip
          </a>
          <a
            href="/#cerita-trip"
            className="rounded-pill border-2 px-7 py-3 text-base font-semibold text-ink transition-colors"
            style={{ borderColor: accent }}
          >
            Lihat Cerita Trip
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="overflow-hidden rounded-card"
      >
        <img
          src={heroImage}
          alt={heroImageAlt}
          width={1200}
          height={1080}
          className="aspect-[10/9] w-full object-cover"
          loading="eager"
        />
      </motion.div>
    </section>
  );
}
