import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroHome() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:pt-20">
      <motion.div
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={reduce ? undefined : container}
      >
        <motion.h1
          variants={reduce ? undefined : item}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl"
        >
          Liburan Gak Harus Nunggu Ada Teman Yang Bisa Ikut.
        </motion.h1>

        <motion.p
          variants={reduce ? undefined : item}
          className="mt-5 max-w-[46ch] text-lg leading-relaxed text-body"
        >
          Open trip domestik sampai luar negeri, harga terjangkau, dan kamu bakal gabung dengan teman seru sepanjang jalan.
        </motion.p>

        <motion.div variants={reduce ? undefined : item} className="mt-8">
          <a
            href="#pilih-kategori"
            className="inline-block rounded-pill bg-primary px-7 py-3.5 text-base font-semibold text-on-primary transition-transform hover:brightness-95 active:scale-[0.98]"
          >
            Pilih Trip Kamu
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
          src="https://picsum.photos/seed/kawan-jalan-hero-group/1000/900"
          alt="Grup traveler Kawan Jalan tertawa bersama di puncak gunung saat golden hour"
          className="aspect-[10/9] w-full object-cover"
          loading="eager"
        />
      </motion.div>
    </section>
  );
}
