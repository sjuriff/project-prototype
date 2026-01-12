'use client'

import { Smartphone, Check, BadgeQuestionMark, QrCode, Zap, Globe, CloudDownload, FileCog, Settings, Wifi } from "lucide-react"
import { useState, useRef } from "react"
import Link from "next/link"
import PrimaryButton from "./buttons/primary-button"
import paths from "@/paths"
import IphoneSvgIcon from "./iphone-svg"
import AndroidSvgIcon from "./android-svg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const PHONE_HOVER_COLOR = '#f9f871'



export default function ESimInfoHero() {
  const [iPhoneHovered, setIPhoneHovered] = useState(false)
  const [androidHovered, setAndroidHovered] = useState(false)
  const [androidColor, setAndroidColor] = useState('#ffffff')
  const androidRef = useRef<SVGSVGElement>(null)
  const iPhoneRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    if (!iPhoneRef.current || !androidRef.current) return

    if (androidHovered) {
      gsap.to(androidRef.current, {
        duration: 0.3,
        translateX: 12,
        scale: 1.1,
        onStart: () => {
          setAndroidColor(PHONE_HOVER_COLOR)
        }
      })

      gsap.to('#android', {
        duration: 0.3,
        translateX: 12,
        translateY: 0,
        opacity: 1,
      })
    } else {
      gsap.to(androidRef.current, {
        duration: 0.3,
        translateX: 0,
        scale: 1,
        onStart: () => {
          setAndroidColor('#ffffff')
        }
      })

      gsap.to('#android', {
        duration: 0.3,
        translateX: 0,
        opacity: 0,
        translateY: 10,
      })
    }

    if (iPhoneHovered) {
      gsap.to(iPhoneRef.current, {
        fill: PHONE_HOVER_COLOR,
        duration: 0.3,
        translateX: -12,
        color: PHONE_HOVER_COLOR,
        textShadow: '0 0 5px #ffffff',
        scale: 1.1
      })

      gsap.to('#iphone', {
        duration: 0.3,
        translateX: -12,
        translateY: 0,
        opacity: 1,
      })
    } else {
      gsap.to(iPhoneRef.current, {
        fill: '#ffffff',
        duration: 0.3,
        translateX: 0,
        color: '#ffffff',
        textShadow: 'none',
        scale: 1
      })

      gsap.to('#iphone', {
        duration: 0.3,
        translateX: 0,
        opacity: 0,
        translateY: 10,
      })
    }


  }, [iPhoneHovered, androidHovered])
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-3 p-4 bg-primary rounded-full">
              <BadgeQuestionMark className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h1 className="text-5xl font-heading md:text-6xl tracking-tight text-primary-text">
              Hva er eSIM?
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              eSIM sørger for at du slipper høye roamingkostnader når du er på reise. Du vet hvor mye surfingen din vil koste allerede før du reiser. Et eSIM fungerer som et fysisk SIM-kort, bare digitalt. Det er forhåndsbetalt, krever ikke et eget abonnement og du får forutsigbare kostnader. Du kan ha både en eSIM og ditt vanlige SIM-kort på telefonen samtidig. Med Beam eSIM kan du kjøpe datapakker og spare penger mens du er på reise!
            </p>
          </div>

          {/* Visual Cards Grid */}
          <div className="grid md:grid-cols-12 gap-6">
            {/* Traditional SIM Card */}




            {/* eSIM */}
            <div className="p-8 relative col-span-12 bg-tertiary  flex flex-col items-center   rounded-2xl shadow-lg border border-tertiary space-y-4 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/20 -translate-y-1/2 translate-x-1/2"
              
              />

              <div className="flex relative  items-center justify-center  ">
                <div className="flex flex-col  gap-1 items-center">
                  <IphoneSvgIcon ref={iPhoneRef} size={70} color={'#ffff'} />
                  <p id="iphone" className={` opacity-0 font-body text-center text-sm text-tertiary-text`}>iPhone</p>
                </div>
                <div className="w-12 h-12 z-10 absolute -top-6 left-1/2 transform -translate-x-1/2  bg-primary rounded-full  flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-text" />

                </div>
                <div className="flex   flex-col gap-1 justify-center items-center">
                  <AndroidSvgIcon ref={androidRef} screenColor="#5346d6" size={70} color={androidColor} />
                  <p id="android" className="opacity-0 font-body text-sm text-center text-tertiary-text">Android</p>
                </div>


              </div>
              <h3 className="text-tertiary-text text-xl font-heading">Kjapp installeringsguide</h3>
              <p className="text-tertiary-text/90 font-body text-sm">
                Se hvordan du installerer eSIM på <Link onMouseEnter={() => setIPhoneHovered(true)} onMouseLeave={() => setIPhoneHovered(false)} className='underline' href={'/info#iphone'}>iPhone</Link> og <Link onMouseEnter={() => setAndroidHovered(true)} onMouseLeave={() => setAndroidHovered(false)} className='underline' href={'/info#android'}>Android </Link>
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-6  w-full mx-auto items-center justify-center gap-6">
            <div className="p-6 shadow-md  col-span-2 h-[200px] bg-card  space-y-4  rounded-xl border border-primary-text">
              <div className="w-10 h-10 relative rounded-full  bg-primary flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-text" />
              </div>
              <h3 className="text-primary-text font-heading">Din mobil må ha støtte eSIM</h3>
              <p className="text-primary-text/90 font-body text-sm">
                eSIM er et innebygd digitalt SIM-kort, som de fleste moderne smarttelefoner har
              </p>
            </div>
            <div className="p-6 shadow-md  col-span-2 h-[200px] bg-card  space-y-4  rounded-xl border border-primary-text ">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Wifi className="w-5 h-5 text-primary-text" />
              </div>
              <h3 className="text-primary-text font-heading">Stabilt internett</h3>
              <p className="text-primary-text/90 font-body text-sm">
                Du trenger WiFi for å aktivere ditt eSIM fra Beam.
              </p>
            </div>

            <div className="p-6 shadow-md col-span-2 h-[200px] rounded-xl border border-primary-text space-y-4 ">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <CloudDownload className="w-5 h-5 text-primary-text" />
              </div>
              <h3 className="text-primary-text font-heading"> Installer før avreise</h3>
              <p className="text-primary-text/90 font-body text-sm">
                Du kan aktivere ditt eSIM når som helst, datapakken skrus på automatisk når du lander.
              </p>
            </div>


          </div>

        </div>
        <div className="w-full mt-12 flex items-center justify-center">
          <Link href={paths.info}>
            <PrimaryButton>
              Les mer om eSIM
            </PrimaryButton>
          </Link>
        </div>

      </div>
    </div>
  )
}