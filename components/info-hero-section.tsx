import { Smartphone, CheckCircle2 } from "lucide-react";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="py-16 relative px-6 bg-secondary md:py-24">
    
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="inline-flex bg-primary items-center justify-center w-20 h-20 rounded-full mb-8"
        >
          <Smartphone className="w-10 h-10 text-primary-text"  />
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="mb-1 text-lg text-center" style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-primary-text)'
                    }}>
                      Hva er eSIM
                    </h2>
                    <div className="mb-12    py-4 px-2 rounded-2xl">
                      <p className='font-body text-sm text-center leading-relaxed text-balance'>eSIM sørger for at du slipper høye roamingkostnader når du er på reise. Du vet hvor mye surfingen din vil koste allerede før du reiser.
        
                        Et eSIM fungerer som et fysisk SIM-kort, bare digitalt. Det er forhåndsbetalt, krever ikke et eget abonnement og du får forutsigbare kostnader. Du kan ha både en eSIM og ditt vanlige SIM-kort på telefonen samtidig. Med Beam eSIM kan du kjøpe datapakker og spare penger mens du er på reise!</p>
                    </div>
        
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                          backgroundColor: 'var(--color-primary)'
                        }}>
                          <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                        </div>
                        <div className="text-left">
                          <h4 className="text-left" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-text)' }}>
                            Din mobil må ha støtte eSIM
                          </h4>
                          <p className='text-sm' style={{ color: 'var(--color-secondary-text)' }}>
                            eSIM er et innebygd digitalt SIM-kort, som de fleste moderne smarttelefoner har.
                          </p>
                        </div>
                      </div>
        
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                          backgroundColor: 'var(--color-primary)'
                        }}>
                          <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                        </div>
                        <div className="text-left">
                          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-text)' }}>
                            Kjapp installeringsguide
                          </h4>
                          <p className='text-sm' style={{ color: 'var(--color-secondary-text)' }}>
                            Se hvordan du installerer eSIM på <Link className='underline' href={''}>iPhone</Link> og <Link className='underline' href={''}>Android </Link>
                          </p>
                        </div>
                      </div>
        
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                          backgroundColor: 'var(--color-primary)'
                        }}>
                          <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                        </div>
                        <div className="text-left">
                          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-text)' }}>
                            Stabilt internett
                          </h4>
                          <p className='text-sm' style={{ color: 'var(--color-secondary-text)' }}>
                            Du trenger WiFi for å aktivere ditt eSIM fra Beam.
                          </p>
                        </div>
                      </div>
        
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{
                          backgroundColor: 'var(--color-primary)'
                        }}>
                          <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                        </div>
                        <div className="text-left">
                          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-text)' }}>
                            Installer før avreise
                          </h4>
                          <p className='text-sm' style={{ color: 'var(--color-secondary-text)' }}>
                            Du kan aktivere ditt eSIM når som helst, datapakken skrus på automatisk når du lander.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
    </section>
  );
}
