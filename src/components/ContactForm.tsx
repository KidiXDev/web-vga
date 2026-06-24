import { ArrowRight, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl bg-dark-card border border-white/5 shadow-2xl overflow-hidden">
          {/* Top Section: Address & Buttons */}
          <div className="p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-white/5 text-left">
            {/* Address Details */}
            <div className="flex items-start gap-4 flex-1">
              <div className="p-3.5 bg-brand-blue/10 rounded-2xl text-brand-blue shrink-0 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col max-w-2xl">
                <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-wider">
                  Laboratorium Pusat Akahito Store
                </span>
                <span className="text-base sm:text-lg text-gray-200 font-sans mt-2 leading-relaxed font-medium">
                  Jl. Kudan I, Tlogomulyo, Kec. Pedurungan, Kota Semarang, Jawa
                  Tengah 50195, Indonesia
                </span>
              </div>
            </div>

            {/* Action Buttons (Stacked on desktop, side-by-side on tablet/mobile) */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3.5 shrink-0 w-full lg:w-72">
              <a
                href="https://wa.me/6289660225666"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20ba56] text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-[#25D366]/10"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008 0c3.202.001 6.212 1.248 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.035-4.48c1.661.988 3.295 1.528 5.217 1.53h.005c5.385 0 9.767-4.329 9.77-9.645a9.53 9.53 0 0 0-2.858-6.84C15.938 2.3 13.524 2.036 12.01 2.036c-5.39 0-9.774 4.331-9.778 9.648-.002 1.936.516 3.526 1.554 5.214l-.995 3.637 3.792-.985zm11.366-6.282c-.31-.155-1.838-.895-2.126-.998-.288-.103-.497-.155-.706.155-.21.31-.81 1.031-.992 1.238-.182.206-.364.232-.674.077-.31-.155-1.31-.476-2.497-1.52-.924-.813-1.547-1.817-1.728-2.126-.182-.31-.02-.477.136-.631.139-.14.31-.361.464-.541.155-.18.206-.31.31-.516.103-.206.052-.387-.026-.541-.077-.155-.706-1.675-.968-2.302-.255-.611-.513-.529-.706-.539-.182-.01-.392-.01-.601-.01-.21 0-.55.077-.837.387-.288.31-1.1.1.077-1.1 2.424 0 2.63 1.838 1.44 2.88 2.576.222.194.442.361.654.516.31.226.58.196.793.165.215-.031.706-.288.806-.567.103-.278.103-.516.072-.567-.031-.052-.139-.083-.448-.238z" />
                </svg>
                Hubungi via WhatsApp
              </a>

              <a
                href="https://www.google.com/maps/place/Service+VGA+Semarang+Akahito+Store/data=!4m2!3m1!1s0x0:0xc70b6c5e73ac811f?sa=X&ved=1t:2428&hl=id-ID&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Buka di Google Maps
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* Bottom Section: Embedded Map */}
          <div className="w-full h-[380px] relative">
            <iframe
              src="https://maps.google.com/maps?q=Service%20VGA%20Semarang%20Akahito%20Store&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-none grayscale opacity-80 invert contrast-[1.1] focus:outline-none"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service VGA Semarang Akahito Store Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

