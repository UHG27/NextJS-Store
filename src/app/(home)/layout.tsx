"use client"

import { Description } from "../componentes/shared/Header/home/Description"
import { Hero } from "../componentes/shared/Header/home/Hero"
import { useEffect } from "react"

export default function HomeLayout({children}: {children: React.ReactNode}) {
    useEffect(()=> {
        console.log('envio de metricas')
    }, [])
    return(
        <div>
            <Hero/>
            <Description/>
            {children}
        </div>
    )
}