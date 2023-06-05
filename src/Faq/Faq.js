import React from "react";
import Navi from '../Navigator/Navi';
import '../Main/main.scss';

const faq = () => {
    return (
        <>
        <Navi />
            <div className="top__content">
                <div className="top__content--left">
                    <h1>Učestala pitanja</h1>
                    <p>Ovde ćete naći odgovore na većinu pitanja, međutim neoklevajte da nas kontaktirate putem e-mail ili telefona.</p>
                </div>
                <div className="top__content--right"></div>
            </div>
            <div class="pitanja">
                {/* <div class="pitanja__container"> */}
                    <div class="pitanja__levo">
                        <h2>Koja je razlika između LAPL i PPL dozvole ?</h2>
                    <p> LAPL dozvola je dozvola koja omogućava letenje EASA sertifikovanim avionima do 2000kg sa makimalno 3 putnika. Moguće je leteti i avione koji imaju 6 sedišta ali je dozvoljeno samo 3 putnika. LAPL piloti mogu da upišu ovlašćenje za noćno letenje. PPL dozvola omogućava letenje avionima do 5.700kg,  sa 19 putnika. 
                    Ukoliko planirate da se bavite hobi letenjem dovoljno je da imate LAPL dozvolu. Ukoliko planirate da nastavite školovanje svakako je savet PPL dozvola.
                    </p>
                    <h2>Kako mogu da dobijem ultralaku dozvolu ako imam PPL/LAPL dozvolu ?</h2>
                    <p> Piloti sa važećim ovlašćenjem SEP (land), tj dozvolom PPL ili LAPL mogu da dobiju ultralaku dozvolu tako što upišu školu i nalete 2/3 sata sa instruktorm. Nakon toga se izlazi na praktičan ispit za dozvolu. </p>

                    <h2> Da li mogu da platim na rate ili moram sve odmah da platim ?</h2>
                    <p>  Teorija se plaća prilikom upisa u školu. Praktična obuka se plaća uporedno sa letenjem. Na taj način je omogućeno da se obuka plaća kroz nekoliko meseci, tj u periodu trajanja obuke. Moguće je dogovor sa školom oko tempa plćanja. 
                    </p>
                    <h2>Koliko vremena nedeljno treba da izdvojim za letenje ?</h2>
                    <p>Ne postoji određeno vreme koje je potrebno izdvojiti. Uobičajeni tempo rada je 3 puta nedeljno po 1-2h letenja, odnosno da se izdvoji bar 3 sata dnevno. Ukoliko je tempo sporiji sama obuka će  se produžiti za određeni broj sati što zavisi od svakog kandidata pojedinačno. </p>

                    <h2>	Jel Virus SW 121 ultralaki avion ?</h2>
                    <p>  Virus SW 121 nije ultralaki avion I piloti sa ultralakom dozvolom ne mogu da lete ovaj avion.</p>

                    <h2>	Gde sve letite u toku timebuildinga ?</h2>
                    <p> U toku timebuildinga pilot skuplja iskustvo koje mu je potrebno za nastavak školovanja. Naš savet je da se u toku timebuildinga proba što više aviona jer piloti tako šire svoje znanje I iskustvo. Svi sati kao PIC ili DUAL na sertifikovanim avionima se priznaje. </p> 

                    <h2>	Koliko vremena treba da dobijem dozvolu ?</h2>
                    <p>  Da bi se dobila PPL dozvola potrebno je oko 4-6 meseci u zavisnosti od vremenskih uslova I tempa letenja.</p>
                    
                        </div>
                        <div class="pitanja__desno"><h2>	Kako mogu da dobijem PPL ako imam LAPL dozvolu ?</h2>
                        <p>  Imaoci LAPL dozvole mogu da upišu obuku za PPL dozvolu i potrebno je da nalete 15 sati sa instuktorom. Nakon toga izlaze na ispit za PPL dozvolu. Teorija za LAPL i PPL je ista tako da se ne polaže teorija. </p>
                        <h2>  Kako mogu da dobijem LAPL ili PPL ako imam ultralaku dozvolu?</h2>
                        <p>  Piloti ultralakih vazduhoplova moraju da upišu školu I završe obuku kao da nemaju ni jednu dozvolu. Ultralaka dozvola se ne priznaje ka daljim ovlašćenjima.</p> 
                        <h2>  Da li se nalet na avion Virus SW 121 priznaje ?</h2>
                        <p>  Pipistrel Virus SW 121 je EASA sertifikovan aviona po seritfikacionim ulslovima CS-LSA. Nalet na ovom avionu se priznaje. Avion može da radi i naprednu obuku kao i deo CPL obuke. </p>
                        <h2>  Kada mogu da počnem da letim ?</h2>
                        <p class="space">  Praktična obuka može da se počne nakon odslušane teorijske obuke u školi.</p>
                        <h2> Da li ne naša dozvola priznata u Evropi ?</h2>
                        <p> Srpske dozvole nisu priznate u Evropi. Postoji način konverzije dozvole I uslov za nastavak školovanja u Evropi prihvata našu PPL dozvolu. </p> 
                        <h2>  Šta mi sve treba da letim u inostranstvu ?</h2>
                        <p>  Da bi se letelo van Srbije
                        potreban je položen ICAO Engleski jezik. Priprema za letenje se vrši sa našim instruktorima I nakon toga se smišlja plan letenja. Sa našom školom je moguće leteti bilo gde van Srbije u dogovoru sa školom. </p>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default faq;