import Image from 'next/image';
import { Wifi, Globe, Calendar, Shield } from 'lucide-react';
import parisImage from '@/public/images/paris.jpg';

export default function ButtonTest() {
  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-surface rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Polaroid Image */}
            <div className="flex  justify-center items-center p-8 md:p-12 bg-[#D6E3FF]">
              <div className="p-6 border rounded-xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300" style={{
                backgroundColor: '#ddd8caff', // warm paper
                backgroundImage: "url('/images/polaroid-texture.avif')", // repeating grain
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                border: '1px solid #e6e1d4',
                boxShadow: `
      0 12px 25px rgba(0,0,0,0.20),
      0 2px 3px rgba(0,0,0,0.10),
      inset 0 0 6px rgba(0,0,0,0.10)  // thickness effect
    `
              }}
              >
                <Image
                  src={parisImage}
                  alt="Paris, France"
                  className="w-full rounded-xl h-80 object-cover"
                  style={{ border: '1px solid #D0D0C8' }}
                />
                <div className="mt-4 text-center font-handwriting" style={{ color: 'var(--text-primary)' }}>
                  Paris, Frankrike
                </div>
              </div>
            </div>

            {/* Right side - Product Details */}
            <div className="p-8 md:p-12 bg-[#F9F9FF]">
              <div className="inline-block px-3 py-1 text-black bg-[#F9F871] rounded-full mb-4" >
                Populær
              </div>

              <h1 className="mb-2" style={{ color: 'var(--text-primary)' }}>Frankrike eSIM Data Plan</h1>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Hold deg tilkoblet gjennom hele reisen din i Frankrike med vårt høyhastighets eSIM-dataabonnement
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl" style={{ color: 'var(--blue-primary)' }}>100 kr</span>
                <span style={{ color: 'var(--text-secondary)' }}>engangsbetaling</span>
              </div>

              <div className="space-y-4 mb-8">
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 px-6 bg-[#F9F871] rounded-lg transition-colors text-black"  >
                  Yellow one
                </button>

                <button className="w-full py-3 px-6 bg-[#F5FF57] rounded-lg transition-colors text-black"  >
                  Yellow two
                </button>
                <button className="w-full py-3 px-6 bg-[#FFF36C] rounded-lg transition-colors text-black"  >
                  Yellow three
                </button>
                <button className="w-full py-3 px-6 bg-[#F7EA4A] rounded-lg transition-colors text-black"  >
                  Yellow four
                </button>
                <button className="w-full py-3 px-6 bg-[#FFE070] rounded-lg transition-colors text-black"  >
                  Yellow five
                </button>


              </div>

              <div className="mt-6 p-4 rounded-lg bg-[rgb(10,28,64)]/80 " style={{}}>
                <p className='text-white' style={{}}>
                  ✓ Ingen kontrakter eller abonnementer<br />
                  ✓ Behold ditt orginale nummer<br />
                  ✓ Kompatibel med alle eSIM-enheter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}