import Link from "next/link";
import MeniuType from "../components/MeniuPage/MeniuType";
const Menu = () => {
  return (
    <main className="py-12">
      <div
        className="w-full h-44 bg-gray-300 flex items-center justify-center
      "
        style={{
          backgroundImage: `url(/bg-all.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <h1 className="text-2xl font-semibold text-white">Meniu</h1>
      </div>
      <div className="flex mt-8 md:mt-12 slide-in  border-b-2 border-slate-300 flex-col md:flex-row items-center justify-center gap-8  w-full pb-4 mx-auto">
        {/* desktop view */}
        <Link href="#1" className="md:block hidden">
          Aperitive
        </Link>
        <Link href="#2" className="md:block hidden">
          Garnituri
        </Link>
        <Link href="#3" className="md:block hidden">
          Din Mare
        </Link>
        <Link href="#4" className="md:block hidden">
          Tigaie Greceasca
        </Link>
        <Link href="#5" className="md:block hidden">
          Specialitati
        </Link>
        <Link href="#6" className="md:block hidden">
          Salate
        </Link>
        <Link href="#7" className="md:block hidden">
          Desert
        </Link>
        <Link href="#8" className="md:block hidden">
          Bauturi
        </Link>
        {/* mobile view */}
        <div className="md:hidden flex items-center slide-in justify-start gap-4">
          <Link href="#1">Aperitive</Link>
          <Link href="#2">Garnituri</Link>
          <Link href="#3">Din Mare</Link>
          <Link href="#4">Tigaie Greceasca</Link>
        </div>
        <div className=" md:hidden flex items-center justify-start gap-4">
          <Link href="#5">Specialitati</Link>
          <Link href="#6">Salate</Link>
          <Link href="#7">Desert</Link>
          <Link href="#8">Bauturi</Link>
        </div>
      </div>
      <Link
        href="/"
        className="inline-flex w-full mx-auto justify-center slide-in text-blue-700 underline underline-offset-3 mt-4"
      >
        Descarca .pdf
      </Link>

      <div
        id="1"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Aperitive"
          products={[
            {
              id: 1,
              name: "Humus 150g 72kCal",
              text: "Năut, lămâie, ulei de măsline, usturoi, sâmburi de pin, pită",
            },
            {
              id: 2,
              name: "Zacuscă pescărească 150g 165kCal",
              text: "Vinete, ardei, ceapă, ciuperci, hering marinat",
            },
            {
              id: 3,
              name: "Mix măsline 150g 120kCal",
              text: "Măsline mix, roșii uscate, pătrunjel, usturoi, ulei de măsline, condimente, pită",
            },
            {
              id: 4,
              name: "Tirokafteri 150g 280kCal",
              text: "Cremă de brânză picantă, de origine grecească",
            },
            {
              id: 5,
              name: "Icre Kavala 150g 265kCal",
              text: "Rețeta casei, ceapă, condimente, pită",
            },
            {
              id: 6,
              name: "Melitzana 150g 60kCal",
              text: "Rețeta casei, ceapă, condimente, pită",
            },
            {
              id: 7,
              name: "Tzatziki 150g 60kCal",
              text: "Cremă de iaurt cu castraveți și usturoi, pită",
            },
            {
              id: 8,
              name: "Halloumi grill 200g 370kCal",
              text: "Brânză halloumi la grătar, cu roșii și pită",
            },
            {
              id: 9,
              name: "Feta saganaki 200g 375kCal",
              text: "Brânză feta cu legume, în folie, la grătar",
            },
            {
              id: 10,
              name: "Bouiourdi 400g 410kCal",
              text: "Mix de brânzeturi grecești la cuptor, roșii, ardei, ceapă, ulei de măsline, pită",
            },
            {
              id: 11,
              name: "Sărmăluțe grecești 200g 180kCal",
              text: "Foi de viță, orez, mentă, tzatziki",
            },
            {
              id: 12,
              name: "Dovlecel pane 150g 164kCal",
              text: "Servit cu sos tzatziki",
            },
            {
              id: 13,
              name: "Ardei cherry cu feta 100g 155kCal",
              text: "Ardei cherry iuți, umpluți cu feta, ulei de măsline, condimente, pită",
            },
            {
              id: 14,
              name: "Ardei capia la cuptor 250g 210kCal",
              text: "Ardei capia, umplut cu feta, la cuptor, ulei de măsline, oțet, condimente, pită",
            },
          ]}
        />
      </div>
      <div
        id="2"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Garnituri"
          products={[
            { id: 1, name: "Cartofi Prajiti 150gr. 200kCal", text: "" },
            { id: 2, name: "Orez 200g 130kCal", text: "" },
            { id: 3, name: "Pita 70g ", text: "" },
          ]}
        />
      </div>
      <div
        id="3"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Din Mare"
          products={[
            {
              id: 1,
              name: "Platou Kavala 2/4 pers 840g 845kCal / 1700g 1710kCal",
              text: "Creveți pane, calamar pane, scoici pane, caracatiță la grătar, sos Kavala, mujdei, cartofi prăjiți, roșii cherry",
            },
            {
              id: 2,
              name: "Kalamari 400g 525kCal",
              text: "Calamar pane, cartofi prăjiți, sos Kavala (E415, E330, E260)",
            },
            {
              id: 3,
              name: "Kalamari gemisto 400g 450kCal",
              text: "Calamar la grătar, umplut cu feta și legume",
            },
            {
              id: 4,
              name: "Creveți saganaki 350g 260kCal",
              text: "Creveți, sos de roșii, legume, feta, pită",
            },
            {
              id: 5,
              name: "Paste cu creveți 300g 160kCal",
              text: "Creveți, paste, roșii cherry, ardei gras, unt, vin, condimente",
            },
            {
              id: 6,
              name: "Pește Kavala 600g 400kCal",
              text: "Pește proaspăt la grătar, sos de lămâie",
            },
            {
              id: 7,
              name: "Caracatiță 150g 120kCal",
              text: "Caracatiță la grătar, rețeta casei, sos de lămâie",
            },
            {
              id: 8,
              name: "Tigaie de caracatiță 300g 135kCal",
              text: "Caracatiță, unt, vin, usturoi, roșii cherry, pită",
            },
            {
              id: 9,
              name: "Frigărui de creveți 300g 125kCal",
              text: "Creveți, rucola, roșii cherry, dressing de lămâie, pită",
            },
            {
              id: 10,
              name: "Tigaie de creveți 400g 170kCal",
              text: "Creveți, unt, vin, usturoi, roșii cherry, pită",
            },
            {
              id: 11,
              name: "Tigaie de scoici 400g 165kCal",
              text: "Carne de midii, unt, vin, usturoi, roșii cherry, pită",
            },
            {
              id: 12,
              name: "Scoici saganaki 350g 250kCal",
              text: "Carne de midii, sos de roșii, legume, feta, pită",
            },
            {
              id: 13,
              name: "Creveți pane 350g 350kCal",
              text: "Creveți pane, cartofi prăjiți, sos Kavala (E415, E330, E260)",
            },
          ]}
        />
      </div>

      <div
        id="4"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tigaie Greceasca"
          products={[
            { id: 1, name: "Pui 400g 510kCal", text: "" },
            { id: 2, name: "Porc 400g 480kCal", text: "Carne de porc" },
            { id: 3, name: "Vită 400g 450kCal", text: "Carne de vită" },
            {
              id: 4,
              name: "Gyros Pui",
              text: "Carne de pui, tzatziki, cartofi prăjiți, pită",
            },
            {
              id: 5,
              name: "Gyros Porc",
              text: "Carne de porc, tzatziki, cartofi prăjiți, pită",
            },
          ]}
        />
      </div>

      <div
        id="5"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Specialitati"
          products={[
            {
              id: 1,
              name: "Kleftico 400g 345kCal",
              text: "Berbecuț gătit încet la cuptor, cartofi prăjiți, pită",
            },
            {
              id: 2,
              name: "Loukanika 400g 410kCal",
              text: "Cârnați de casă din porc la grătar, tzatziki, cartofi prăjiți, pită",
            },
            {
              id: 3,
              name: "Crispy Koto 350g 510kCal",
              text: "Fâșii de pui crocante în panko, sos Kavala (E415, E330, E260)",
            },
            {
              id: 4,
              name: "Fileto 200g 240kCal",
              text: "Mușchi de vită la grătar, rucola",
            },
            {
              id: 5,
              name: "Șnițel de porc 450g 510kCal",
              text: "Mușchiuleț de porc, panko, ou, cartofi prăjiți, tzatziki",
            },
            {
              id: 6,
              name: "Pastitio 420g 265kCal",
              text: "Paste penne, feta, cașcaval, carne de vită, beșamel, condimente",
            },
            {
              id: 7,
              name: "Musaca 420g 265kCal",
              text: "Cartofi, vinete, feta, cașcaval, carne de vită, beșamel, condimente",
            },
          ]}
        />
      </div>

      <div
        id="6"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Salate"
          products={[
            {
              id: 1,
              name: "Horiatiki 300g 170kCal",
              text: "Salată grecească tradițională, cu roșii, castravete, ardei, ceapă, măsline, feta",
            },
            {
              id: 2,
              name: "Agourotomata 300g 80kCal",
              text: "Salată grecească cu roșii, castraveți, ceapă, ardei, măsline",
            },
            {
              id: 3,
              name: "Koto 400g 210kCal",
              text: "Salată grecească cu roșii, castraveți, ceapă, ardei, măsline, piept de pui, pită",
            },
            {
              id: 4,
              name: "Salată verde 190g 45kCal",
              text: "Mix salată verde, roșii cherry, măsline, dressing de lămâie",
            },
          ]}
        />
      </div>

      <div
        id="7"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Desert"
          products={[
            {
              id: 1,
              name: "Kataif 200g 410kCal",
              text: "Aluat în fire însiropat, nucă, frișcă vegetală cu îndulcitor",
            },
            {
              id: 2,
              name: "Galaktobureko 200g 340kCal",
              text: "Foietaj, cremă de lapte, griș, vanilie, frișcă vegetală cu îndulcitor",
            },
            {
              id: 3,
              name: "Profiterol 100g 348kCal",
              text: "2 choux cu cremă de vanilie și glazură de ciocolată",
            },
            {
              id: 4,
              name: "Tort de fistic 100g 365kCal",
              text: "Cu sirop cu aromă de alune, frișcă vegetală cu îndulcitor",
            },
            {
              id: 5,
              name: "Portokalopita 200g 340kCal",
              text: "Prăjitură cu aluat, ouă, iaurt, zahăr, sirop de portocale",
            },
          ]}
        />
      </div>

      <div
        id="8"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 flex flex-col gap-24 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Bauturi"
          products={[
            { id: 1, name: "Pepsi Family 250ml" },
            { id: 2, name: "Apă minerală / plată 330ml", text: "" },
            { id: 3, name: "Apă minerală / plată 750ml", text: "" },
            { id: 4, name: "Fresh de portocale 250ml", text: "" },
            { id: 5, name: "Limonadă cu miere și mentă 400ml", text: "" },
            {
              id: 6,
              name: "Limonadă cu piure natural de fructe",
              text: "Alege din: căpșune, fructul pasiunii, piure de măr verde / mango / zmeură",
            },
          ]}
        />
        <MeniuType
          type="Bere"
          products={[
            { id: 1, name: "Mythos / Fix Draught 400ml" },
            { id: 2, name: "Mythos 330ml", text: "" },
            { id: 3, name: "Heineken NA 330ml", text: "" },
            { id: 4, name: "Fix Greek Blonde 330ml", text: "" },
            { id: 5, name: "Guinness 500ml", text: "" },
            { id: 6, name: "Corona 330ml", text: "" },
          ]}
        />
        <MeniuType
          products={[
            { id: 1, name: "Ouzo" },
            { id: 2, name: "J&B Rare", text: "" },
            { id: 3, name: "Jameson", text: "" },
            { id: 4, name: "Jack Daniel's", text: "" },
            { id: 5, name: "Glenfiddich 12 ani", text: "" },
            { id: 6, name: "Singleton 12 ani", text: "" },
            { id: 7, name: "Cardhu 12 ani", text: "" },
            { id: 8, name: "Vodka Grey Goose", text: "" },
            { id: 9, name: "Cognac Courvoisier VS", text: "" },
            { id: 10, name: "Brandy Metaxa 5", text: "" },
            { id: 11, name: "Bacardi White", text: "" },
            { id: 12, name: "Rom Bumbu", text: "" },
            { id: 13, name: "Jägermeister/Fernet", text: "" },
            { id: 14, name: "Limoncello", text: "" },
          ]}
        />
        <MeniuType
          type="Vin"
          products={[
            { id: 1, name: "Retsina Kechribari 500ml", text: "" },
            { id: 2, name: "Rasova La Plage 750ml", text: "" },
            { id: 3, name: "7Arts Sauvignon Blanc 750ml", text: "" },
            { id: 4, name: "7Arts Fantezie 750ml", text: "" },
            { id: 5, name: "7Arts Preludiu 750ml", text: "" },
            { id: 6, name: "Petro Vaselo - Ovas 750ml", text: "" },
            { id: 7, name: "El Cortez XO 750ml", text: "" },
            { id: 8, name: "Davino Faurar 750ml", text: "" },
            { id: 9, name: "Davino Iacob 750ml", text: "" },
            { id: 10, name: "Caii de la Letea (I1) AL 750ml", text: "" },
            { id: 11, name: "Recas Muse Rose 750ml", text: "" },
            { id: 12, name: "Budureasca 150ml | 450ml", text: "" },
            { id: 13, name: "Prosecco 100ml | 750ml", text: "" },
          ]}
        />
        <MeniuType
          type="Long Drinks"
          products={[
            {
              id: 1,
              name: "Martini Rosato",
              text: "Martini rosso, apă tonică, citrice, prosecco",
            },
            {
              id: 2,
              name: "Gin Tonic",
              text: "Gin Bombay, apă tonică, lime, piper roz",
            },
            {
              id: 3,
              name: "Campari Orange",
              text: "Campari, suc de portocale",
            },
            { id: 4, name: "Campari Tonic", text: "Campari, apă tonică" },
            {
              id: 5,
              name: "Cuba Libre",
              text: "Rom, cola, lime",
            },
            {
              id: 6,
              name: "Mojito",
              text: "Rom, zahăr brun, lime, mentă, apă minerală",
            },
            {
              id: 7,
              name: "Hugo",
              text: "Prosecco, sirop de soc, apă minerală",
            },
            {
              id: 8,
              name: "Metaxa SUNTONIC",
              text: "Metaxa, portocală, apă tonică",
            },
          ]}
        />
        <MeniuType
          type="Cafea"
          products={[
            {
              id: 1,
              name: "Espresso / Decaf",
              text: "",
            },
            {
              id: 2,
              name: "Espresso Dublu",
              text: "",
            },
            {
              id: 3,
              name: "Cappuccino / Decaf / Latte",
              text: "",
            },
            { id: 4, name: "Caffe Frappe / Irish Coffee", text: "" },
            {
              id: 5,
              name: "Ciocolată caldă cu lapte",
              text: "",
            },
            {
              id: 6,
              name: "Ceai Cald, întrebați ospătarul",
              text: "",
            },
          ]}
        />
      </div>
    </main>
  );
};

export default Menu;
