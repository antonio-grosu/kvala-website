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
      <div className="flex mt-8 md:mt-12   border-b-2 border-slate-300 flex-col md:flex-row items-center justify-center gap-8  w-8/12 pb-4 mx-auto">
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
        <div className="md:hidden flex items-center justify-start gap-4">
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
        className="inline-flex w-full mx-auto justify-center text-blue-700 underline underline-offset-3 mt-4"
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
              name: "Humus 150gr. 72kCal",
              text: "näut, lamãie, utel de mástine, usturol, sâmburi pin, pità",
            },
            {
              id: 2,
              name: "Zacusca pescäreascà 150gr. 165kCal",
              text: "vinele, ardel, cedpa, cuperci, nerie merinet",
            },
            {
              id: 3,
              name: "Mix măsline 150gr. 120kCal",
              text: "mastine mix rosi uscale, patruniel usturol, ulel de mastne condimente, pita",
            },
            {
              id: 4,
              name: "Tirokafteri 150gr. 280kCal",
              text: "creme user dicante-lute de Dranzetun drecest Dila",
            },
            {
              id: 5,
              name: "Icre Kvala 150gr. 265kCal",
              text: "reteta casei, ceapa, condimente, pita",
            },
            {
              id: 6,
              name: "Melitzana 150gr. 60kCal",
              text: "reteta casei, ceapa, condimente, pita",
            },

            {
              id: 7,
              name: "Tzatziki 150gr. gokCal",
              text: "cremá de laurt cu castraveti si usturol, pitá",
            },
            {
              id: 8,
              name: "Halloumi grill 200gr. 370kCal",
              text: "brânza haltoumi la plita, cu rosil si pitá",
            },
            {
              id: 9,
              name: "Feta saganaki 200gr. 375kCal",
              text: "brânzà feta cu legume, in folie, la grátar",
            },
            {
              id: 10,
              name: "Bouiourdi 400gr. 410kCal",
              text: "mix de brânzeturi grecestl la cuptor, rosie, ardel, ceapá, utel mastine,pita",
            },
            {
              id: 11,
              name: "Särmalute grecesti 200gr. 180kCal",
              text: "foi de vita, orez, menta, tzatzikl",
            },
            {
              id: 12,
              name: "Dovlecel pane 150gr. 164kCal",
              text: "serviti cu sos tzatziki",
            },
            {
              id: 13,
              name: "Ardei cherry feta 100gr, 155kCal",
              text: "ardel cherry iute, umplut cu feta, ulei de másline, condimente,pita",
            },
            {
              id: 14,
              name: "Ardel capia la cuptor 250gr, 210kCal",
              text: "ardel capia, umplut cu feta, la cuptor, utel mäsline, otet,condimente,pita",
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
            { id: 1, name: "Cartofi Prajiti", text: "150gr. 200kCal" },
            { id: 2, name: "Orez", text: "200gr: 130kCal" },
            { id: 3, name: "Pita", text: "70gr" },
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
              name: "Platou Kvala 2/4 pers 840gr. 845kCal / 1700gr. 1710kCal",
              text: " crevel pane, calamar pane, scolci pane, caracatita la gratar. sos Kvala, mujdei, cartofi prajiti, rosii cherry",
            },
            {
              id: 2,
              name: "Kalamari 400gr. 525kCal",
              text: "calamar pane, cartofi prájiti, sos Kvala (E415. E330, E260)",
            },
            {
              id: 3,
              name: "Kalamari gemisto 400gr. 450kCal",
              text: "calamar la grátar, umplut cu feta si legume",
            },
            {
              id: 4,
              name: "Creveti saganaki 350gr. 260kCa",
              text: "creveti, sos de rosii, legume, feta, pita",
            },
            {
              id: 5,
              name: "Paste cu creveti 300gr, 160kCal",
              text: "creveti, paste, rosii cherry, ardei gras, unt, vin, condimente",
            },
            {
              id: 6,
              name: "Peste Kvala -600gr, -400kCal",
              text: "peste proaspát la grátar, sos de lámáie",
            },
            {
              id: 7,
              name: "Caracatitã 150gr, 120kCal",
              text: "caracatiá reteta casei, la grátar, sos lámáie",
            },
            {
              id: 8,
              name: "Tigaie de caracatita 300gr, 135kCal",
              text: "caracatitd, unt vin. usturol rosi cherry pitd",
            },
            {
              id: 9,
              name: "Frigärui de creveti 300gr. 125kCal",
              text: "creveti, rucola, rosii cherry, dressing de lámáie, pitó",
            },
            {
              id: 10,
              name: "Tigale de creveti 400gr, 170kCal",
              text: "creveti, unt, vin, usturol, rosil cherry, pitá",
            },
            {
              id: 11,
              name: "Tigaie de scoici 400gr. 165kCal",
              text: "carne midil, unt, vin, usturol, rosi cherry, pità",
            },
            {
              id: 12,
              name: "Scoici saganaki 350gr, 250kCal",
              text: "carne midil, sos de rosil, legume, feta, pitá",
            },
            {
              id: 13,
              name: "Creveti pane 350gr. 350kCal",
              text: "creveti pane, cartofi prájiti, sos Kvala (E415, E330, E260)",
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
            { id: 1, name: "Pui 400gr. 510kC", text: "" },
            { id: 2, name: "Porc 400gr. 480kC", text: "text" },
            { id: 3, name: "Vita 400g.450kC", text: "text" },
            {
              id: 4,
              name: "Gyros Pui",
              text: "carne de pui, tzatziki, cartof projiti,pita",
            },
            {
              id: 5,
              name: "Gyros Porc",
              text: "carne de porc, tzatziki, cartof projiti pita,",
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
              name: "Kleftico 400gr. 345kCal",
              text: "berbecut gátit incet la cuptor, cartof prájiti, pita",
            },
            {
              id: 2,
              name: "Loukanika 400gr, 410kCal",
              text: "cárnatii casei de porc la grátar, tzatziki, cartofi prajiti, pita",
            },
            {
              id: 3,
              name: "Crispy Koto 350gr. 510kCal",
              text: "fâsii de pui crocante in panko, sos Kvala (E415, E330, E260),",
            },
            {
              id: 4,
              name: "Fileto 200gr. 240kCal",
              text: "muschi de vita la gratar, rucola",
            },
            {
              id: 5,
              name: "Schnitzel de porc 450gr. 510kCal",
              text: "muschiulet de porc. panko, ou, cartofi prajiti, tzatziki",
            },
            {
              id: 6,
              name: "Pastitio 420gr. 265kCal",
              text: "paste penne, feta, cascaval, carne vita, besamel, condimente",
            },
            {
              id: 7,
              name: "Musaca 420gr. 265kCal",
              text: "cartofi, vinete, feta, cascaval, carne vitá, besamel, condimente",
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
              name: "Horiatiki 300gr, 170kCal",
              text: "salatá greceasca traditionalá, cu rosil, castravete, ardei, ceapá,masline , feta",
            },
            {
              id: 2,
              name: "Agourotomata 300gr, 80kCal",
              text: "Calala creceocca cu rosi, castravele ceand, ardel macline",
            },
            {
              id: 3,
              name: "Koto 400gr, 210kCal",
              text: "Cone dreceasca cu rost, costrovere, ceand, ardel. masline, piept de pui,pita",
            },
            {
              id: 4,
              name: "Salatä verde 190gr, 45kCal",
              text: "mix salatá verde, rosil cherry, mästine, dressing de lámale",
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
              name: "Kataif 200gr, 410kCal",
              text: "aluat in fire insiropat, nuca, friscá vegetalá cu indulcitor",
            },
            {
              id: 2,
              name: "Galaktobureko 200gr. 340kCal",
              text: "foitaj, cremá lapte, gris, vanilie, friscá vegetalá cu indulcitor",
            },
            {
              id: 3,
              name: "Profiterol 100gr. 348kCal",
              text: "2 choux cu cremá de vanilie si glazurá de ciocolata",
            },
            {
              id: 4,
              name: "Tort de fistic 100gr, 365kCal",
              text: "cu sirop cu aromá de atune, friscá vegetalá cu indulcitor",
            },
            {
              id: 5,
              name: "Portokalopita 200gr. 340kCal",
              text: "prajiturá cu aluat oud, laurt, zahár, sirop de portocale",
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
            { id: 2, name: "Apă minerală / plata 330ml", text: "" },
            { id: 3, name: "Apá minerala / platá 750ml", text: "" },
            { id: 4, name: "Fresh portocale 250ml", text: "" },
            { id: 5, name: "Limonad cu miere si mentà 400ml", text: "" },
            {
              id: 6,
              name: "Limonada cu piure natural de fructe",
              text: "amoe, dod. trucie, oure mar verde / manco / zmeura",
            },
          ]}
        />
        <MeniuType
          type="Bere"
          products={[
            { id: 1, name: "Mythos / Fix draught 400ml" },
            { id: 2, name: "AMythos 330ml", text: "" },
            { id: 3, name: "Heineken NA 330ml", text: "" },
            { id: 4, name: "Fix Greek blonde 330ml", text: "" },
            { id: 5, name: "Guiness 500ml", text: "" },
            {
              id: 6,
              name: "Corona 330mL",
              text: "",
            },
          ]}
        />
        <MeniuType
          products={[
            { id: 1, name: "Ouzo" },
            { id: 2, name: "J&B Rare", text: "" },
            { id: 3, name: "Jameson", text: "" },
            { id: 4, name: "Jack Daniel's", text: "" },
            { id: 5, name: "Glenfiddich 12yrs", text: "" },
            {
              id: 6,
              name: "Singleton 12yrs",
              text: "",
            },
            {
              id: 7,
              name: "Cardhu 12yrs",
              text: "",
            },
            {
              id: 8,
              name: "Vodka Grey Goose",
              text: "",
            },
            {
              id: 9,
              name: "Cognac Curvoisier VS",
              text: "",
            },
            {
              id: 10,
              name: "Brandy Metaxa 5",
              text: "",
            },
            {
              id: 11,
              name: "Bacardi White",
              text: "",
            },
            {
              id: 12,
              name: "Rom Bumbu",
              text: "",
            },
            {
              id: 13,
              name: "Jagermeister/Fernet",
              text: "",
            },
            {
              id: 14,
              name: "Limoncello",
              text: "",
            },
          ]}
        />
        <MeniuType
          type="Vin"
          products={[
            { id: 1, name: "Retsina Kechribari 500ml", text: "" },
            { id: 2, name: "Rasova La Plage 750ml", text: "" },
            { id: 3, name: "7Arts Sauvignon Blanc 750 ml", text: "" },
            { id: 4, name: "7Arts Fantezie 750 ml", text: "" },
            { id: 5, name: "7Arts Preludiu 750ml", text: "" },
            {
              id: 6,
              name: "Petro Vaselo - Ovas 750ml",
              text: "",
            },
            {
              id: 7,
              name: "El Cortez XO 750 ml",
              text: "",
            },
            {
              id: 8,
              name: "Davino Faurar 750ml",
              text: "",
            },
            {
              id: 9,
              name: "Davino lacob 750ml",
              text: "",
            },
            {
              id: 10,
              name: "Caii de la Letea (I1) AL 750ml",
              text: "",
            },
            {
              id: 11,
              name: "Recas Muse Rose 750ml",
              text: "",
            },
            {
              id: 12,
              name: "Budureasca 150ml | 450ml",
              text: "",
            },
            {
              id: 13,
              name: "Prosecco 100ml | 750ml",
              text: "",
            },
          ]}
        />
        <MeniuType
          type="Long Drinks"
          products={[
            {
              id: 1,
              name: "Martini Rosato",
              text: "martini rosso, apá tonica, citrice, prosecco",
            },
            {
              id: 2,
              name: "Gin Tonic",
              text: "gin Bombay, apá tonicá, lime, piper roz",
            },
            {
              id: 3,
              name: "Campari Orange",
              text: "campari, suc de portocale",
            },
            { id: 4, name: "Campari Tonic", text: "campari, apa tonica" },
            {
              id: 5,
              name: "Cuba Libre",
              text: "rom, cola, lime",
            },
            {
              id: 6,
              name: "Mojito",
              text: "rom, zahar brun, lime. menta, apa minerala",
            },
            {
              id: 7,
              name: "Hugo",
              text: "prosecco, sirop soc, apa minerala",
            },
            {
              id: 8,
              name: "Metaxa SUNTONIC",
              text: "metaxa, portocala, apã tonica",
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
              name: "Ciocolata calda cu lapte",
              text: "",
            },
            {
              id: 6,
              name: "Ceai Cald intrebati ospatarub",
              text: "",
            },
          ]}
        />
      </div>
    </main>
  );
};

export default Menu;
