import { Description } from "../componentes/shared/Header/home/Description"
import { Hero } from "../componentes/shared/Header/home/Hero"


export default function HomeLayout({children}: {children: React.ReactNode}) {
    return(
        <div>
            <Hero/>
            <Description/>
            {children}
        </div>
    )
}