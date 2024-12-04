let recipes = [

    {
        "name": "Brokkolicremsuppe",
        "preparationTime": 10,
        "cookingTime": 15,
        "servings": 4,
        "utensils": ["Pürierstab"],
        "ingredients": [
            {"min": 500, "max": null, "desc": "g Brokkoli"},
            {"min": 300, "max": null, "desc": "g Kartoffeln"},
            {"min": 1, "max": null, "desc": "Liter Gemüsebrühe"},
            {"min": 2, "max": null, "desc": "EL Butter"},
            {"min": 1, "max": 2, "desc": "rote Zwiebeln"},
            {"min": null, "max": null, "desc": "Salz, Pfeffer, Muskatnuss - nach Geschmack"},
            {"min": null, "max": null, "desc": "Petersilie - frisch & gehackt"}
        ],
        "instructions": [
            "Kartoffeln schälen und grob würfeln. Brokkoli in Röschen teilen. Den Strunk ebenfalls würfeln. Zwiebel und Knoblauchzehe schälen und grob würfeln.",
            "Butter in einem Topf erhitzen. Zwiebel darin glasig dünsten. Kartoffel- und Brokkoli-Stücke kurz mit anbraten und zuletzt den Knoblauch anschwitzen.",
            "Alles mit Gemüsebrühe ablöschen und für 12 - 15 Minuten bei geschlossenem Deckel köcheln lassen, bis die Kartoffeln gar sind.",
            "Suppe kurz vom Herd nehmen und mit einem Pürierstab cremig pürieren. 100 ml der Kochsahne unterrühren und die Brokkolicremesuppe nochmals erwärmen lassen.",
            "Mit Salz, Pfeffer und Muskatnuss abschmecken. Suppenteller füllen und mit weiterer Sahne sowie nach Geschmack mit gehackter Petersilie servieren."
        ],
        "imgPath": "Images/Rezepte/Brokkolicremesuppe.webp",
        "rate": 4
    },
    {
        "name": "Granola",
        "preparationTime": 5,
        "cookingTime": 15,
        "servings": 10,
        "utensils": ["Topf", "Normales Backblech", "Verschließbares Glas"],
        "ingredients": [
            {"min": 250, "max": null, "desc": "g Haferflocken - zart"},
            {"min": 100, "max": null, "desc": "g Mandeln - gestiftelt"},
            {"min": 100, "max": null, "desc": "g Ahornsirup"},
            {"min": 80, "max": null, "desc": "g Kokosöl"},
            {"min": null, "max": null, "desc": "Prise Zimt - meine Empfehlung"}
        ],
        "instructions": [
            "Kokosöl und Ahornsirup im Topf erwärmen, bis das Öl geschmolzen ist. Danach vom Herd nehmen. Nach Geschmack mit einer Prise Zimt, Vanille oder Salz verfeinern.",
            "Mandeln in den Topf geben und gut unterrühren. Dann Haferflocken hinzugeben und mit einem Teigschaber gleichmäßig vermengen. Masse auf einem Backblech mit Backpapier verteilen und etwas flach drücken.",
            "Bei 160 Grad Umluft im vorgeheizten Ofen für 15 - 20 Minuten backen, bis das Granola knusprig braun ist. Nach 10 Minuten einmal wenden (nicht wieder flach drücken, sondern krümelig lassen).",
            "Aus dem Ofen holen, nochmal vorsichtig wenden und gut auskühlen lassen. Am besten in einem großen, verschließbaren Glas lagern."
        ],
        "imgPath": "Images/Rezepte/Granola.webp",
        "rate": 5
    },
    {
        "name": "Caesar Salad",
        "preparationTime": 5,
        "cookingTime": 5,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 1, "max": null, "desc": "großer Römersalat"},
            {"min": 30, "max": null, "desc": "g Parmesan"},
            {"min": 100, "max": null, "desc": "g Weißbrot - Ciabatta, Baguette oder Toastbrot"},
            {"min": 1, "max": 2, "desc": "Zehen Knoblauch"},
            {"min": 1, "max": 2, "desc": "TL Öl"},
            {"min": 50, "max": null, "desc": "g Mayonnaise - oder Salatcreme"},
            {"min": 50, "max": null, "desc": "g Naturjoghurt"},
            {"min": 1, "max": null, "desc": "TL Dijon-Senf - alternativ normaler Senf"},
            {"min": 2, "max": null, "desc": "TL Zitronensaft"},
            {"min": null, "max": null, "desc": "etwas Pfeffer"}
        ],
        "instructions": [
            "Den Salat in grobe Stücke schneiden, gründlich waschen und im Sieb abtropfen lassen. Den Parmesan reiben oder hobeln.",
            "Für das Dressing: Naturjoghurt, Mayonnaise und Senf in eine kleine Schüssel geben. Zitrone (2 TL Saft) und Knoblauchzehe pressen. Zusammen mit etwas frisch gemahlenem Pfeffer hinzugeben. Alles gut miteinander verrühren und kurz ziehen lassen.",
            "Für die Croûtons: Das Weißbrot in Würfel schneiden. In einer Pfanne etwas Öl erhitzen und die Brotwürfel bei mittlerer Hitze zu knusprig braunen Croûtons anrösten. Dazu gebe ich noch 1 – 2 Zehen Knoblauch. Je nachdem wieviel Öl das Brot aufsaugt, kippe ich etwas Öl nach.",
            "Salat in eine Schüssel geben und gut mit dem Dressing vermengen. Die Hälfte des Parmesans dazugeben. Den Salat auf zwei Portionen verteilen und die knusprigen Knoblauch-Croûtons sowie den restlichen Parmesan darüber geben."
        ],
        "imgPath": "Images/Rezepte/CaesarSalad.webp",
        "rate": 3
    },
    {
        "name": "Gnocchi",
        "preparationTime": 5,
        "cookingTime": 10,
        "servings": 4,
        "utensils": ["Pfanne"],
        "ingredients": [
            {"min": 600, "max": null, "desc": "g Gnocchi - aus dem Kühlregal"},
            {"min": 200, "max": null, "desc": "g Kochsahne - 15% Fett"},
            {"min": 50, "max": null, "desc": "g Babyspinat"},
            {"min": 10, "max": null, "desc": "kleine Tomaten"},
            {"min": 1, "max": null, "desc": "rote Zwiebel"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 1, "max": null, "desc": "EL Tomatenmark"},
            {"min": null, "max": null, "desc": "etwas Parmesan"},
            {"min": 1, "max": null, "desc": "EL Butter"},
            {"min": 5, "max": null, "desc": "EL Wasser"},
            {"min": null, "max": null, "desc": "etwas Salz und Pfeffer"}
        ],
        "instructions": [
            "Zwiebel in feine Würfel hacken, Knoblauchzehe schälen und Tomaten halbieren.",
            "Butter bei mittlerer Hitze in der Pfanne schmelzen. Zwiebel kurz darin andünsten. Gnocchi hinzugeben und bei hoher Hitze kurz mit anbraten.",
            "Hitze reduzieren. Knoblauch pressen und zusammen mit Tomatenmark hinzugeben. Mit der Kochsahne aufgießen, alles gut miteinander verrühren und etwas einkochen lassen. Danach zunächst 5 EL Wasser unterrühren, damit die Soße nicht allzu dick wird. Auf niedriger Stufe einkochen, bis die Gnocchi gar sind.",
            "Mit Salz und Pfeffer abschmecken, den Babyspinat und die Tomaten hinzugeben und gut unterrühren. Beides nur leicht erwärmen, damit die frischen Zutaten schön knackig bleiben.",
            "Zum Servieren etwas frischen Parmesan über die Gnocchi reiben."
        ],
        "imgPath": "Images/Rezepte/Gnocchi.webp",
        "rate": 3
    },
    {
        "name": "Dinkelbrot",
        "preparationTime": 5,
        "cookingTime": 60,
        "servings": 1,
        "utensils": ["Backform ca. 10 x 30 cm"],
        "ingredients": [
            {"min": 300, "max": null, "desc": "g Dinkel-Vollkornmehl"},
            {"min": 200, "max": null, "desc": "g Dinkelmehl - Type 630"},
            {"min": 500, "max": null, "desc": "ml Wasser - lauwarm"},
            {"min": 1, "max": null, "desc": "Würfel frische Hefe"},
            {"min": 150, "max": null, "desc": "g Körner oder Nüsse"},
            {"min": 2, "max": null, "desc": "EL Zitronensaft - frisch gepresst"},
            {"min": 2, "max": null, "desc": "TL Salz - gestrichen"}
        ],
        "instructions": [
            "Hinweis vorab: Ofen NICHT vorheizen!",
            "Lauwarmes Wasser in eine Schüssel geben, die Hefe hineinbröseln und gut verrühren, bis sie sich aufgelöst hat.",
            "Das helle Dinkelmehl, Salz, Zitronensaft und fast alle Körner hinzugeben. Zutaten mit Küchenmaschine oder Handrührgerät gut mischen. Einen Teil der Körner aufbewahren, um damit das Brot zu dekorieren.",
            "Nun das Dinkel-Vollkornmehl hinzugeben alles zu einem einheitlichen Teig kneten. Dieser sollte schön klebrig und nicht zu fest sein.",
            "Die Form mit Öl bepinseln. Den Teig in die Backform geben und glatt streichen. Die übrigen Körner auf dem Brot verteilen.",
            "Das Vollkornbrot kommt nun bei 180 Grad Umluft (200 Grad Ober/Unterhitze) für 1 Stunde in den Backofen (ohne Vorheizen). Nach 10 Minuten mittig der Länge nach einschneiden. Im Anschluss gut abkühlen lassen, damit es sich besser schneiden lässt."
        ],
        "imgPath": "Images/Rezepte/Dinkelbrot.webp",
        "rate": 4
    },
    {
        "name": "Porridge",
        "preparationTime": 0,
        "cookingTime": 10,
        "servings": 1,
        "utensils": ["Topf"],
        "ingredients": [
            {"min": 50, "max": null, "desc": "g zarte Haferflocken"},
            {"min": 100, "max": null, "desc": "ml Wasser"},
            {"min": 100, "max": null, "desc": "ml Milch - oder pflanzliche Alternative"},
            {"min": 1, "max": null, "desc": "Prise Salz"},
            {"min": null, "max": null, "desc": "Süße nach Geschmack - Ahornsirup, Honig oder Zucker"},
            {"min": null, "max": null, "desc": "Optional zum Toppen: gehackte Haselnüsse - oder Mandeln"},
            {"min": null, "max": null, "desc": "1 Prise Zimt"}
        ],
        "instructions": [
            "Wasser, Milch (oder Pflanzendrink), Salz und Haferflocken in einem Topf zum Kochen bringen. Danach die Hitze herunterschalten.",
            "Für ca. 5 Minuten leicht köcheln lassen, bis die gewünschte Konsistenz erreicht ist. Ständig umrühren, damit nichts anbrennt.",
            "Mit Süße der Wahl abschmecken. Porridge in eine Schale füllen. Mit gehackten Nüssen und Zimt, wahlweise Obst oder anderen Lieblingszutaten dekorieren (siehe Tipps oben)."
        ],
        "imgPath": "Images/Rezepte/Porridge.webp",
        "rate": 5
    },
    {
        "name": "Kichererbsen-Curry",
        "preparationTime": 5,
        "cookingTime": 15,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 400, "max": null, "desc": "g Dosen Kichererbsen (abgespült & abgetropft)"},
            {"min": 400, "max": null, "desc": "g Dose gehackte Tomaten"},
            {"min": 400, "max": null, "desc": "ml Dose Kokosmilch"},
            {"min": 1, "max": null, "desc": "rote Zwiebel"},
            {"min": 2, "max": null, "desc": "Zehen Knoblauch"},
            {"min": 2, "max": null, "desc": "EL Kokosöl - oder Rapsöl"},
            {"min": 1, "max": null, "desc": "Spritzer Limettensaft - oder Zitronensaft"},
            {"min": 1, "max": null, "desc": "TL Zucker"},
            {"min": null, "max": null, "desc": "Salz & Pfeffer"},
            {"min": 1, "max": null, "desc": "EL Currypulver"},
            {"min": 1, "max": null, "desc": "TL Kreuzkümmel"},
            {"min": null, "max": null, "desc": "Optional: Koriander - frisch"},
            {"min": null, "max": null, "desc": "Chiliflocken"}
        ],
        "instructions": [
            "Zwiebel und Knoblauch schälen und hacken.",
            "Öl in der Pfanne erhitzen, erst die Zwiebeln, dann den Knoblauch kurz auf mittlerer Hitze anschwitzen. Gewürze hinzugeben und unterrühren.",
            "Dann Kokosmilch, gehackte Tomaten, abgespülte und abgetropfte Kichererbsen, einen Spritzer Limettensaft und Zucker hinzugeben. Für 10 - 15 Minuten ohne Deckel köcheln lassen.",
            "Mit Salz und Pfeffer abschmecken. Mit Reis (z.B. Basmatireis) und optional frischem Koriander servieren."
        ],
        "imgPath": "Images/Rezepte/KichererbsenCurry.webp",
        "rate": 2
    },
    {
        "name": "Hähnchenbrust im Backofen",
        "preparationTime": 5,
        "cookingTime": 20,
        "servings": 3,
        "utensils": [
            "Auflaufform",
            "Fleischthermometer"
        ],
        "ingredients": [
            {"min": 600, "max": null, "desc": "g Hähnchenbrustfilets"},
            {"min": 4, "max": null, "desc": "EL Öl"},
            {"min": 0.5, "max": 1, "desc": "TL Salz"},
            {"min": 2, "max": null, "desc": "TL Paprikapulver edelsüß"},
            {"min": 1, "max": null, "desc": "TL Knoblauchpulver"},
            {"min": 0.5, "max": null, "desc": "TL Paprikapulver rosenscharf"},
            {"min": 1, "max": null, "desc": "Prise Currypulver"}
        ],
        "instructions": [
            "Hähnchenbrust ggf. mit einem Küchentuch abtupfen, aber nicht waschen (siehe Empfehlung in den Notizen).",
            "Öl und Gewürze zu einer Marinade verrühren. Die Hähnchenbrustfilets in eine Backform legen und rundherum mit der Marinade einreiben.",
            "Im vorgeheizten Backofen bei 180 Grad Umluft für ca. 20 - 25 Minuten garen. Die Backzeit ist abhängig von der Größe der Hähnchenbrust und dem Ofen."
        ],
        "imgPath": "Images/Rezepte/Haehnchenbrust.webp",
        "rate": 2
    },
    {
        "name": "Rosenkohlauflauf",
        "preparationTime": 15,
        "cookingTime": 40,
        "servings": 4,
        "utensils": [
            "Auflaufform 20 x 30 cm"
        ],
        "ingredients": [
            {"min": 500, "max": null, "desc": "g Rosenkohl"},
            {"min": 700, "max": null, "desc": "g Kartoffeln"},
            {"min": 250, "max": null, "desc": "ml Kochsahne"},
            {"min": 250, "max": null, "desc": "ml Milch"},
            {"min": 1, "max": null, "desc": "TL Gemüsebrühe"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 1, "max": null, "desc": "Prise Salz"},
            {"min": 1, "max": null, "desc": "Prise Pfeffer"},
            {"min": 1, "max": null, "desc": "Prise Muskatnuss"},
            {"min": 150, "max": null, "desc": "g Emmentaler oder Gouda - gerieben"}
        ],
        "instructions": [
            "Rosenkohl waschen. Strunk großzügig abschneiden, sodass die äußeren und welken Blätter abfallen. Strunk noch kreuzweise einschneiden, damit der Rosenkohl gleichmäßig gart.",
            "Kartoffeln schälen, der Länge nach halbieren und in 1 - 1,5 cm dicke Scheiben schneiden. Zusammen mit Rosenkohl im Topf mit gesalzenem Wasser aufkochen und für ca. 5 Minuten köcheln lassen. Im Anschluss abgießen und in die Auflaufform geben.",
            "Währenddessen in einer Schüssel Kochsahne, Milch, gepressten Knoblauch und Gemüsebrühe-Pulver zu einer Soße verrühren. Mit Salz, Pfeffer und Muskatnuss abschmecken.",
            "Soße über das Gemüse geben und alles mit Käse bestreuen. Im vorgeheizten Backofen bei 180 Grad Umluft (200 Grad O/U-Hitze) für ca. 40 Minuten goldbraun backen, bis das Gemüse gar ist."
        ],
        "imgPath": "Images/Rezepte/Rosenkohlauflauf.webp",
        "rate": 2
    },
    {
        "name": "Blumenkohlauflauf",
        "preparationTime": 10,
        "cookingTime": 25,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 500, "max": null, "desc": "g Blumenkohl - tiefgekühlt"},
            {"min": 30, "max": null, "desc": "g Butter"},
            {"min": 20, "max": null, "desc": "g Mehl"},
            {"min": 375, "max": null, "desc": "ml Milch - kalt"},
            {"min": 0.5, "max": null, "desc": "TL Salz"},
            {"min": 0.25, "max": null, "desc": "TL Muskatnuss - gerieben"},
            {"min": 100, "max": null, "desc": "g Gouda - gerieben"},
            {"min": null, "max": null, "desc": "etwas Schnittlauch - frisch"}
        ],
        "instructions": [
            "Den Tiefkühl-Blumenkohl kurz antauen lassen und dann in einem Sieb mit warmem Wasser abspülen. Abtropfen lassen.",
            "Butter im Topf schmelzen, dann sofort Mehl unterrühren und bei hoher Hitze kurz weiterrühren. Nun Schluck für Schluck die kalte Milch unterrühren. Die Milch immer erst andicken lassen, bevor der nächste Schluck hinzu kommt. Zum Schluss soll eine Soßen-Konsistenz entstehen, die weder zu dünn noch zu dick ist. Für 5 Minuten weiter auf niedriger Hitze köcheln lassen und immer wieder umrühren. Mit Salz und Muskatnuss abschmecken.",
            "Den abgetropften Blumenkohl in eine Auflaufform geben, sodass die Röschen nebeneinander liegen. Sollten manche Röschen zu groß sein, diese vorher halbieren. Erst die Bechamelsoße und dann den geriebenen Käse über dem Blumenkohl verteilen.",
            "Im vorgeheizten Backofen bei 180 Grad Umluft für 25 - 30 Minuten backen, bis der Blumenkohl gar und der Käse knusprig braun ist.",
            "Während der Backzeit etwas Schnittlauch in Röllchen schneiden und vor dem Servieren frisch über dem Blumenkohl-Auflauf verteilen."
        ],
        "imgPath": "Images/Rezepte/Blumenkohlauflauf.webp",
        "rate": 3
    },
    {
        "name": "Kürbissuppe mit Kokosmilch & Ingwer",
        "preparationTime": 10,
        "cookingTime": 10,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 500, "max": null, "desc": "g Hokkaidokürbis"},
            {"min": 200, "max": null, "desc": "g Kartoffeln"},
            {"min": 120, "max": null, "desc": "g Möhren"},
            {"min": 1, "max": null, "desc": "rote Zwiebel"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 1, "max": null, "desc": "kleines Stück Ingwer"},
            {"min": 30, "max": null, "desc": "g Butter"},
            {"min": 250, "max": null, "desc": "ml Wasser"},
            {"min": 400, "max": null, "desc": "ml Kokosmilch"},
            {"min": 5, "max": null, "desc": "g Gemüsebrühe"},
            {"min": 1, "max": null, "desc": "TL Pfeffer"},
            {"min": 1, "max": null, "desc": "TL Salz"}
        ],
        "instructions": [
            "Kürbis halbieren, entkernen und in kleine Stücke schneiden. Die Kartoffeln und die Möhre ebenfalls schälen und in gleich große Stücke schneiden. Die Zwiebel, Knoblauchzehe und Ingwer schälen und grob Würfeln.",
            "Butter in einem großen Topf erhitzen und die Zwiebel darin glasig anbraten. Knoblauch und Ingwer ganz kurz mit anbraten und dann Kartoffeln, Möhre und Kürbis hinzugeben. Ebenfalls kurz mit anbraten.",
            "Mit dem Wasser und der Kokosmilch (ein wenig zum Servieren aufbewahren) aufgießen, die Gemüsebrühe sowie den Pfeffer hinzugeben und die Suppe aufkochen lassen. Mit geschlossenem Deckel bei niedriger Hitze für 8 - 10 Minuten kochen lassen, bis die Zutaten gar sind.",
            "Den Topf vom Herd nehmen und die Zutaten mit einem Pürierstab cremig pürieren. Die Suppe hat nach dem Pürieren eine eher festere Konsistenz. Nach Belieben noch 50 - 100 ml Wasser unterrühren und im Anschluss noch einmal mit Salz und Pfeffer abschmecken.",
            "Die Kürbissuppe mit der Kokosmilch und optional Kräutern und Chili servieren."
        ],
        "imgPath": "Images/Rezepte/KürbissuppeMitKokos.webp",
        "rate": 4
    },
    {
        "name": "Bauerntopf mit Hackfleisch & Kartoffeln",
        "preparationTime": 10,
        "cookingTime": 30,
        "servings": 4,
        "utensils": [
            "Topf oder große Pfanne mit Deckel"
        ],
        "ingredients": [
            {"min": 600, "max": null, "desc": "g Kartoffeln"},
            {"min": 500, "max": null, "desc": "g Hackfleisch"},
            {"min": 2, "max": null, "desc": "Paprikas (rot & gelb)"},
            {"min": 400, "max": null, "desc": "ml Gemüsebrühe"},
            {"min": 1, "max": null, "desc": "Dose gehackte Tomaten"},
            {"min": 1, "max": null, "desc": "große rote Zwiebel"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 200, "max": null, "desc": "g Schmand"},
            {"min": 2, "max": null, "desc": "EL Öl"},
            {"min": 1, "max": null, "desc": "etwas Schnittlauch"},
            {"min": 2, "max": null, "desc": "TL Paprikapulver"},
            {"min": 0.5, "max": null, "desc": "TL Paprikapulver"},
            {"min": 1, "max": null, "desc": "Prise Salz & Pfeffer"},
            {"min": null, "max": null, "desc": "Optional: je 1 Prise Zucker & Paprikapulver (geräuchert)"}
        ],
        "instructions": [
            "Kartoffeln schälen und Paprika entkernen. Beides mundgerecht würfeln (Kartoffeln 1,5 - 2 cm / Paprika ruhig etwas größer). Zwiebeln fein würfeln. Knoblauch schälen und in einer Knoblauchpresse bereitlegen.",
            "Öl im Topf oder großer Pfanne erhitzen und Hackfleisch auf hoher Hitze krümelig anbraten. Danach auf mittlerer Hitze die Zwiebeln glasig andünsten. Kurz noch Knoblauch dazu pressen und zusammen mit Kartoffeln sowie Paprika anbraten.",
            "Nun alles mit gehackten Tomaten sowie Gemüsebrühe ablöschen. Mit Paprikapulver edelsüß und rosenscharf, Pfeffer und optional Paprikapulver geräuchert und Zucker würzen.",
            "Für 20 - 25 Minuten (je nach Größe der Gemüsestücke) mit geschlossenem Deckel auf niedriger Hitze köcheln lassen, bis die Kartoffeln gar sind. Mit Salz abschmecken.",
            "Den Bauerntopf mit einem großen Klecks Schmand und frisch gehacktem Schnittlauch servieren."
        ],
        "imgPath": "Images/Rezepte/Bauerntopf.webp",
        "rate": 4
    },
    {
        "name": "Kürbisrisotto",
        "preparationTime": 10,
        "cookingTime": 20,
        "servings": 4,
        "utensils": [
            "Topf oder große Pfanne mit Deckel"
        ],
        "ingredients": [
            {"min": 400, "max": null, "desc": "g Hokkaidokürbis"},
            {"min": 2, "max": null, "desc": "Schalotten"},
            {"min": 2, "max": null, "desc": "Zehen Knoblauch"},
            {"min": 2, "max": null, "desc": "EL Öl"},
            {"min": 300, "max": null, "desc": "g Risottoreis"},
            {"min": 200, "max": null, "desc": "ml Weißwein"},
            {"min": 1, "max": null, "desc": "Liter Gemüsebrühe - mit kochendem Wasser vorbereitet"},
            {"min": 2, "max": null, "desc": "EL Butter"},
            {"min": 70, "max": null, "desc": "g Parmesan - gerieben"},
            {"min": 1, "max": null, "desc": "Prise Pfeffer"},
            {"min": null, "max": null, "desc": "Thymian - frisch"}
        ],
        "instructions": [
            "Kürbis halbieren, aushöhlen und in mundgerechte Stücke schneiden. Schalotten und Knoblauch fein hacken.",
            "Öl in einem Topf erhitzen und Schalotten- sowie Kürbisstücke darin anbraten, bis die Zwiebeln glasig sind. Knoblauch und Reis kurz mit anschwitzen und danach sofort alles mit Weißwein ablöschen.",
            "Nun immer so viel heiße Gemüsebrühe dazugeben, sodass der Reis gerade bedeckt ist. Unter Rühren immer wieder einkochen lassen (ohne Deckel), bis die Gemüsebrühe aufgebraucht und der Reis gar ist. Das dauert 20 - 25 Minuten.",
            "Parmesan und Butter unter das Risotto rühren. Mit Pfeffer und ggf. Salz abschmecken und nach Geschmack mit Thymian servieren."
        ],
        "imgPath": "Images/Rezepte/Kürbisrisotto.webp",
        "rate": 5
    },
    {
        "name": "Kürbissuppe",
        "preparationTime": 5,
        "cookingTime": 10,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 500, "max": null, "desc": "g Hokkaidokürbis - gewürfelt"},
            {"min": 300, "max": null, "desc": "g Kartoffeln - gewürfelt"},
            {"min": 2, "max": null, "desc": "Schalotten - oder rote Zwiebeln"},
            {"min": 30, "max": null, "desc": "g Butter"},
            {"min": 750, "max": null, "desc": "ml Wasser"},
            {"min": 15, "max": null, "desc": "g Gemüsebrühe"},
            {"min": 150, "max": null, "desc": "g Crème fraîche"},
            {"min": 1, "max": null, "desc": "TL Salz"},
            {"min": 1, "max": null, "desc": "TL Cayennepfeffer"},
            {"min": null, "max": null, "desc": "optional: frische Petersilie - gehackt"}
        ],
        "instructions": [
            "Kürbis halbieren, entkernen und in kleine Stücke schneiden. Die Kartoffeln ebenfalls schälen und in gleich große Stücke schneiden. Die Schalotten würfeln. Die Petersilie hacken.",
            "Butter in einem großen Topf erhitzen und die Schalotten darin glasig anbraten. Die Kartoffeln und den Kürbis hinzugeben und kurz mit braten.",
            "Mit dem Wasser aufgießen, die Gemüsebrühe hinzugeben und die Suppe aufkochen lassen. Mit geschlossenem Deckel bei niedriger Hitze für 5 - 8 Minuten kochen lassen, bis die Zutaten gar sind.",
            "Den Topf vom Herd nehmen und die Zutaten mit einem Pürierstab cremig pürieren. Den Großteil der Crème fraîche unterrühren und die Kürbissuppe mit Salz und Cayennepfeffer abschmecken. Gut verrühren.",
            "Mit der restlichen Crème fraîche und Petersilie servieren."
        ],
        "imgPath": "Images/Rezepte/Kürbissuppe.webp",
        "rate": 5
    },
    {
        "name": "Bruschetta",
        "preparationTime": 10,
        "cookingTime": 5,
        "servings": 12,
        "utensils": [],
        "ingredients": [
            {"min": 1, "max": null, "desc": "Ciabatta oder Baguette - frisch oder zum Aufbacken"},
            {"min": 500, "max": null, "desc": "g Roma- oder Strauchtomaten"},
            {"min": 2, "max": null, "desc": "Zehen Knoblauch - große"},
            {"min": 10, "max": null, "desc": "Basilikumblätter - große, frische"},
            {"min": 3, "max": null, "desc": "EL Olivenöl"},
            {"min": null, "max": null, "desc": "Salz & Pfeffer"}
        ],
        "instructions": [
            "Tomaten entkernen und würfeln. Eine große Knoblauchzehe pressen und die andere Zehe schälen und halbieren.",
            "Die Basilikumblätter stapeln, längs rollen und in dünne Streifen schneiden.",
            "Tomaten, Basilikum, gepressten Knoblauch, 1 EL Olivenöl, Salz & Pfeffer vermengen und kurz ziehen lassen.",
            "Ciabatta in 12 - 14 Scheiben schneiden und bei 180 Grad Umluft für 5 - 8 Minuten im Backofen rösten oder im Toaster knusprig toasten. Danach mit der halbierten Knoblauchzehe einreiben und auf einen Teller legen. Alle Scheiben mit 2 EL Öl beträufeln.",
            "Die marinierten Tomaten auf den Brotscheiben verteilen und sofort servieren.",
            "Alternativ kühl genießen. Dazu alles getrennt aufbewahren und später zusammenfügen, damit das Brot nicht durchweicht.",
            "Mit weiterem Basilikum servieren."
        ],
        "imgPath": "Images/Rezepte/Bruschetta.webp",
        "rate": 5
    },
    {
        "name": "Gefüllte Zucchini",
        "preparationTime": 15,
        "cookingTime": 20,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 4, "max": null, "desc": "Zucchini, mittelgroß - ca. 1,2 kg"},
            {"min": 500, "max": null, "desc": "g Hackfleisch - gemischt"},
            {"min": 100, "max": null, "desc": "g Mozzarella - oder Gouda"},
            {"min": 400, "max": null, "desc": "g Dose gehackte Tomaten"},
            {"min": 2, "max": null, "desc": "EL Tomatenmark"},
            {"min": 1, "max": null, "desc": "rote Zwiebel"},
            {"min": 1, "max": null, "desc": "EL Öl"},
            {"min": null, "max": null, "desc": "Gewürze"},
            {"min": 1, "max": null, "desc": "TL Oregano - getrocknet"},
            {"min": 1, "max": null, "desc": "TL Basilikum - getrocknet"},
            {"min": 0.5, "max": null, "desc": "TL Knoblauchpulver - oder 1 gepresste Zehe Knoblauch"},
            {"min": 0.5, "max": null, "desc": "TL Thymian - getrocknet"},
            {"min": 0.5, "max": null, "desc": "TL Salz"},
            {"min": 0.25, "max": null, "desc": "TL Pfeffer"}
        ],
        "instructions": [
            "Öl in einer Pfanne erhitzen und das Hackfleisch auf hoher Hitze krümelig braten.",
            "Zwiebel hacken und mit anschwitzen. Tomatenmark und Gewürze hinzugeben, kurz auf mittlerer Hitze anbraten. Zuletzt die gehackten Tomaten hinzugeben und etwas einköcheln lassen, bis die Zucchini vorbereitet sind.",
            "Währenddessen Zucchini längs halbieren und das Kerngehäuse entfernen. Die Zucchini-Hälften auf ein Backblech mit Backpapier legen.",
            "Zucchini mit Hacksoße füllen und Käse bestreuen. Bei 180 Grad Umluft im vorgeheizten Backofen für 20 - 25 Minuten garen."
        ],
        "imgPath": "Images/Rezepte/GefuellteZucchini.webp",
        "rate": 5
    },
    {
        "name": "Ofengemüse mit Kartoffeln",
        "preparationTime": 5,
        "cookingTime": 30,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 4, "max": null, "desc": "Kartoffen - mittelgroß"},
            {"min": 1, "max": null, "desc": "Zucchini - groß"},
            {"min": 1, "max": null, "desc": "Paprika - groß"},
            {"min": 1, "max": null, "desc": "Zwiebel - rot"},
            {"min": 0.5, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 3, "max": null, "desc": "EL Öl"},
            {"min": 0.5, "max": null, "desc": "TL Salz, Oregano, Thymian, Basilikum"},
            {"min": null, "max": null, "desc": "etwas Paprika rosenscharf, Pfeffer"}
        ],
        "instructions": [
            "Den Ofen vorheizen. Die Kartoffeln schälen und in Würfel schneiden. Die Zucchini längs halbieren und in dicke Scheiben schneiden. Die Paprika entkernen, dabei vierteln und der Breite nach in Scheiben schneiden. Das Gemüse in eine große Schüssel geben. Die rote Zwiebel in halbe Ringe schneiden.",
            "Das Öl, die Gewürze und den gepressten oder gehackten Knoblauch in einer kleinen Schale mixen. Über dem Gemüse verteilen und dieses in der Schüssel gut durchmixen.",
            "Das Gemüse auf ein mit Backpapier ausgelegtes Backblech geben. Darüber die Zwiebelringe verteilen.",
            "Bei 200 Grad Umluft für mind. 30 Minuten backen. Wer die Kartoffeln noch etwas knuspriger mag, kann das Gemüse auch etwas länger backen."
        ],
        "imgPath": "Images/Rezepte/Ofengemuese.webp",
        "rate": 5
    },
    {
        "name": "Guacamole",
        "preparationTime": 5,
        "cookingTime": 5,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 2, "max": null, "desc": "Avocados - reif"},
            {"min": 1, "max": null, "desc": "Tomate - reif"},
            {"min": 1, "max": null, "desc": "Limette - oder 1 EL Zitronensaft"},
            {"min": 1, "max": null, "desc": "rote Zwiebel - oder 1 Schalotte"},
            {"min": null, "max": null, "desc": "Salz & Pfeffer - nach Geschmack"},
            {"min": null, "max": null, "desc": "Optional: Chili, Jalapenos, Korianderblätter, Joghurt"}
        ],
        "instructions": [
            "Avocados längs aufschneiden und Kern entfernen. Fruchtfleisch in eine Schüssel löffeln und mit einer Gabel zerdrücken, bis eine cremige Konsistenz entsteht.",
            "Saft der Limette oder Zitrone direkt über die Avocado pressen.",
            "Tomate halbieren, Kerngehäuse entfernen und in feine Würfel hacken. Zwiebel und Knoblauch schälen sowie klein hacken und alles zur Avocado geben.",
            "Mit Salz und Pfeffer würzen, alles gut vermengen und abschmecken.",
            "Optional etwas Chili oder Chilipulver, klein gehackte Jalapenos oder frische Korianderblätter untermischen. Für einen milderen Geschmack mit Joghurt servieren oder diesen unterrühren."
        ],
        "imgPath": "Images/Rezepte/Guacamole.webp",
        "rate": 4
    },
    {
        "name": "Kritharaki Salat",
        "preparationTime": 5,
        "cookingTime": 15,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 250, "max": null, "desc": "g Kritharaki - oder Orzo-Pasta"},
            {"min": 1, "max": null, "desc": "Gurke"},
            {"min": 400, "max": null, "desc": "g kleine Tomaten"},
            {"min": 150, "max": 200, "desc": "g Feta"},
            {"min": 1, "max": null, "desc": "rote Zwiebel"},
            {"min": 2, "max": null, "desc": "TL Oregano - getrocknet"},
            {"min": null, "max": null, "desc": "etwas frisches Basilikum"},
            {"min": null, "max": null, "desc": "Dressing"},
            {"min": 4, "max": null, "desc": "EL Öl - Raps- oder Sonnenblumenöl"},
            {"min": 2, "max": null, "desc": "EL Zitronensaft - ½ Zitrone"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 0.5, "max": null, "desc": "TL Zucker - oder Honig"},
            {"min": 2, "max": null, "desc": "Prisen Salz & Pfeffer"}
        ],
        "instructions": [
            "Kritharaki nach Packungsanleitung in reichlich gesalzenem Wasser al dente (bissfest) kochen. Danach in ein Sieb geben und kalt abspülen. Kurz abtropfen lassen.",
            "Währenddessen Gemüse waschen. Gurke längs Vierteln und in grobe Stücke schneiden. Kleine Tomaten halbieren. Zwiebel schälen, vierteln und in dünne Scheiben schneiden. Feta fein würfeln oder später über den Salat bröseln.",
            "Dressing aus Öl, frisch gepresstem Zitronensaft, gepresstem Knoblauch, Zucker oder Honig, Salz und Pfeffer anrühren.",
            "Gurke, Tomate, Zwiebel und zuletzt Feta in eine passende Schüssel geben. Oregano über den Feta streuen. Abgetropfte Nudeln sowie Dressing hinzugeben und alles gut miteinander vermengen. Nach Bedarf mit weiterem Salz und Zitronensaft abschmecken.",
            "Einige frisch gezupfte Basilikumblätter in Streifen schneiden und den Kritharaki-Salat damit servieren."
        ],
        "imgPath": "Images/Rezepte/KritharakiSalat.webp",
        "rate": 4
    },
    {
        "name": "Gemüsepfanne mit Feta & Frischkäse",
        "preparationTime": 5,
        "cookingTime": 10,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 1, "max": null, "desc": "Zucchini - mittelgroß"},
            {"min": 1, "max": null, "desc": "Paprika - gelb"},
            {"min": 200, "max": null, "desc": "g kleine Tomaten"},
            {"min": 1, "max": null, "desc": "rote Zwiebel"},
            {"min": 1, "max": 2, "desc": "Zehen Knoblauch"},
            {"min": 0.5, "max": null, "desc": "Pck. Feta - 100 g"},
            {"min": 75, "max": null, "desc": "ml Wasser"},
            {"min": 1, "max": null, "desc": "EL Kräuterfrischkäse"},
            {"min": 2, "max": null, "desc": "EL Öl"},
            {"min": 1, "max": null, "desc": "TL Oregano - getrocknet"},
            {"min": 1, "max": null, "desc": "TL Basilikum - getrocknet"},
            {"min": null, "max": null, "desc": "etwas Salz und Pfeffer"}
        ],
        "instructions": [
            "Das Gemüse waschen und schneiden. Die Zucchini der Länge nach halbieren und in Scheiben schneiden. Die Paprika entkernen und in Stifte schneiden. Die kleinen Tomaten halbieren und die Zwiebel sowie den Knoblauch schälen. Die Zwiebel würfeln oder in halbe Scheiben schneiden.",
            "Das Öl in einer großen Pfanne erhitzen und darin nach und nach das Gemüse kurz auf hoher Hitze anbraten. Zuerst die Paprika, dann die Zucchini hinzugeben. Zuletzt auf mittlere Hitze stellen und die Zwiebel, Tomaten und den gepressten Knoblauch mit anbraten.",
            "Das Gemüse mit den Gewürzen vermengen, alles mit dem Wasser ablöschen und den Frischkäse unterrühren. Je nachdem wie knackig oder weich du dein Gemüse magst, noch etwas einkochen lassen oder sofort servieren.",
            "Vor dem Servieren noch den Feta über die Gemüsepfanne bröseln."
        ],
        "imgPath": "Images/Rezepte/Gemuesepfanne.webp",
        "rate": 5
    },
    {
        "name": "Spaghettisalat mit Pesto",
        "preparationTime": 5,
        "cookingTime": 10,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 500, "max": null, "desc": "g Spaghetti"},
            {"min": 200, "max": null, "desc": "g Pesto Rosso"},
            {"min": 200, "max": null, "desc": "g kleine Tomaten"},
            {"min": 125, "max": null, "desc": "g Mozzarella - Mini Kugeln"},
            {"min": 50, "max": null, "desc": "g Rucola"},
            {"min": 50, "max": null, "desc": "g Pinienkerne"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"}
        ],
        "instructions": [
            "Spaghetti nach Packungsanleitung al dente kochen.",
            "Währenddessen Tomaten und Mozzarella-Kugeln halbieren, Rucola waschen und in Stücke schneiden, Knoblauch schälen.",
            "Pinienkerne in einer Pfanne ohne Öl goldbraun rösten.",
            "Fertige Spaghetti abspülen und mit Pesto Rosso und gepresstem Knoblauch vermengen.",
            "Restliche Zutaten untermischen.",
            "Spaghettisalat sofort servieren oder abgedeckt im Kühlschrank lagern."
        ],
        "imgPath": "Images/Rezepte/Spaghettisalat.webp",
        "rate": 5
    },
    {
        "name": "Gnocchi",
        "preparationTime": 5,
        "cookingTime": 15,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 400, "max": null, "desc": "g Gnocchi (frisch, Kühlregal)"},
            {"min": 150, "max": null, "desc": "g Cherry-Tomaten"},
            {"min": 125, "max": null, "desc": "g Mini-Mozzarella"},
            {"min": 20, "max": null, "desc": "g Rucola"},
            {"min": 2, "max": null, "desc": "Zehen Knoblauch"},
            {"min": 2, "max": null, "desc": "EL Öl (z.B. Rapsöl)"},
            {"min": 1, "max": null, "desc": "EL gemischte Kräuter (Tiefkühler)"},
            {"min": null, "max": null, "desc": "Prise Salz und Pfeffer"}
        ],
        "instructions": [
            "Tomaten halbieren, Knoblauch hacken.",
            "Öl, Kräuter, Knoblauch, Salz und Pfeffer mischen.",
            "Gnocchi auf einem Blech oder in einer Auflaufform verteilen.",
            "Tomaten und die Öl-Mischung darüber geben, gut vermengen.",
            "Mini-Mozzarella darüber verteilen.",
            "Im vorgeheizten Backofen bei 200 Grad Umluft für ca. 15 Minuten backen.",
            "Frischen Rucola auf dem Blech verteilen und servieren."
        ],
        "imgPath": "Images/Rezepte/Gnocchi2.webp",
        "rate": 4
    },
    {
        "name": "Reissalat mit Thunfisch & Paprika",
        "preparationTime": 5,
        "cookingTime": 10,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 250, "max": null, "desc": "g Basmatireis"},
            {"min": 2, "max": null, "desc": "rote Paprikas"},
            {"min": 150, "max": 200, "desc": "g Feta"},
            {"min": 12, "max": null, "desc": "kleine Gewürzgurken - Cornichons"},
            {"min": 1, "max": null, "desc": "rote Zwiebel"},
            {"min": 150, "max": null, "desc": "g abgetropfter Thunfisch"},
            {"min": 6, "max": null, "desc": "EL Mayonnaise oder Salatcreme"},
            {"min": 3, "max": 4, "desc": "EL Gurkenwasser"},
            {"min": null, "max": null, "desc": "etwas Schnittlauch"},
            {"min": null, "max": null, "desc": "Salz & Pfeffer"}
        ],
        "instructions": [
            "Reis nach Packungsanleitung kochen.",
            "Währenddessen Paprikas und Feta in Würfel schneiden, Gewürzgurken in Scheiben schneiden, Zwiebel schälen und in dünne Scheiben schneiden, Schnittlauch in Ringe schneiden.",
            "Mayo und Gurkenwasser vermengen.",
            "Fertigen Reis abgießen und abtropfen lassen.",
            "Reis mit dem Dressing vermengen, dann Zutaten untermischen.",
            "Reissalat kurz ziehen lassen und servieren oder abgedeckt im Kühlschrank lagern."
        ],
        "imgPath": "Images/Rezepte/Reissalat.webp",
        "rate": 5
    },
    {
        "name": "Gnocchi Auflauf mit Pesto & grünem Spargel",
        "preparationTime": 5,
        "cookingTime": 20,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 300, "max": null, "desc": "g Gnocchi - Kühlregal"},
            {"min": 250, "max": null, "desc": "g Spargel - grün"},
            {"min": 100, "max": null, "desc": "g Tomaten - klein"},
            {"min": 50, "max": null, "desc": "g Pesto Rosso"},
            {"min": 2, "max": 3, "desc": "EL Olivenöl"},
            {"min": 2, "max": 3, "desc": "Prisen Salz - oder Salzflocken"},
            {"min": null, "max": null, "desc": "etwas Parmesan - nach Geschmack"}
        ],
        "instructions": [
            "Spargel und Tomaten waschen, Spargel holzige Enden abschneiden, Tomaten halbieren.",
            "Gemüse in eine Schüssel geben, Olivenöl und Salz hinzufügen, vermengen.",
            "Gnocchi mit Pesto vermengen, in eine Backform geben.",
            "Gemüse darüber verteilen, kurz mixen.",
            "Optional Parmesan darüber reiben.",
            "Bei 180 Grad Umluft für ca. 20 Minuten backen."
        ],
        "imgPath": "Images/Rezepte/Gnocchiauflauf.webp",
        "rate": 4
    },
    {
        "name": "Overnight Oats",
        "preparationTime": 0,
        "cookingTime": 5,
        "servings": 1,
        "utensils": [],
        "ingredients": [
            {"min": 50, "max": null, "desc": "g Haferflocken"},
            {"min": 1, "max": null, "desc": "Banane"},
            {"min": 100, "max": null, "desc": "ml Milch"},
            {"min": 0.5, "max": null, "desc": "kleine Zitrone"},
            {"min": 75, "max": null, "desc": "g Joghurt"},
            {"min": 50, "max": null, "desc": "g Erdbeeren oder Himbeeren"}
        ],
        "instructions": [
            "Banane zerdrücken und mit Zitronensaft vermischen.",
            "In ein verschließbares Glas Haferflocken, Milch und Bananenmus geben, vermischen.",
            "Joghurt darüber verteilen, Früchte darüber geben.",
            "Glas verschließen und über Nacht in den Kühlschrank stellen."
        ],
        "imgPath": "Images/Rezepte/OvernightOats.webp",
        "rate": 5
    },
    {
        "name": "Smashed Potatoes",
        "preparationTime": 15,
        "cookingTime": 25,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 500, "max": null, "desc": "g kleine Kartoffeln - Drillinge"},
            {"min": 2, "max": null, "desc": "EL Öl - Sonnenblumen-, Raps- oder Olivenöl"},
            {"min": null, "max": null, "desc": "etwas Salz"},
            {"min": null, "max": null, "desc": "etwas Pfeffer, Thymian & Rosmarin - optional"}
        ],
        "instructions": [
            "Kartoffeln weich kochen und abkühlen lassen.",
            "Backblech mit Backpapier belegen, Kartoffeln darauf platzieren und zerdrücken.",
            "Öl und Gewürze hinzufügen.",
            "Im vorgeheizten Backofen bei 220 Grad Ober-/Unterhitze für 25 - 30 Minuten backen."
        ],
        "imgPath": "Images/Rezepte/SmahedPotatoes.webp",
        "rate": 5
    },
    {
        "name": "Obstsalat",
        "preparationTime": 0,
        "cookingTime": 10,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 1, "max": null, "desc": "Apfel"},
            {"min": 1, "max": null, "desc": "Banane"},
            {"min": 100, "max": null, "desc": "g Trauben"},
            {"min": 150, "max": null, "desc": "g Erdbeeren"},
            {"min": 1, "max": null, "desc": "Orange"},
            {"min": 1, "max": null, "desc": "Kiwi"},
            {"min": 0.5, "max": null, "desc": "kleine Zitrone"}
        ],
        "instructions": [
            "Alle Zutaten waschen und kleinschneiden.",
            "Apfel und Orange würfeln, Kiwi vierteln und würfeln, Erdbeeren halbieren, Banane scheiben.",
            "Obststücke in eine Schüssel geben, Trauben hinzufügen.",
            "Zitronensaft darüber träufeln, umrühren."
        ],
        "imgPath": "Images/Rezepte/Obstsalat.webp",
        "rate": 5
    },
    {
        "name": "Nudeln mit Gemüse-Soße",
        "preparationTime": 5,
        "cookingTime": 30,
        "servings": 2,
        "utensils": ["Standmixer"],
        "ingredients": [
            {"min": 250, "max": null, "desc": "g Nudeln - z.B. Fusilli"},
            {"min": 1, "max": null, "desc": "Zucchini - 1 mittelgroße"},
            {"min": 1, "max": null, "desc": "Paprika - rot, 1 mittelgroße"},
            {"min": 1, "max": null, "desc": "kleine Tomaten"},
            {"min": 1, "max": null, "desc": "rote Zwiebel - groß"},
            {"min": 2, "max": null, "desc": "Zehen Knoblauch"},
            {"min": 2, "max": null, "desc": "EL Öl"},
            {"min": 1, "max": null, "desc": "TL Basilikum - getrocknet oder frisch"},
            {"min": 1, "max": null, "desc": "TL Oregano - getrocknet"},
            {"min": null, "max": null, "desc": "Salz und Pfeffer"},
            {"min": 2, "max": null, "desc": "EL Frischkäse"},
            {"min": 75, "max": null, "desc": "ml Nudelwasser"}
        ],
        "instructions": [
            "Das Gemüse in grobe Stücke schneiden. Die Zwiebel vierteln und die Knoblauchzehen ganz lassen. Beides nur schälen. Alles auf einem Backblech verteilen und das Öl sowie die Gewürze darüber verteilen.",
            "Alles vermengen, auf dem Blech ausbreiten und bei 200 Grad Umluft für ca. 25 Minuten backen.",
            "5 Minuten vor Ende der Backzeit die Nudeln kochen. Kurz vor Ende der Kochzeit etwas Nudelwasser abschöpfen.",
            "Das Ofengemüse zusammen mit dem Nudelwasser und Frischkäse in einen Mixer geben und zu einer cremigen Soße pürieren. Abschmecken.",
            "Die Nudeln abgießen und mit der Gemüsesoße vermengen. Mit etwas Frischkäse und ggf. Kräutern servieren."
        ],
        "imgPath": "Images/Rezepte/NudelnMitGemueseSosse.webp",
        "rate": 4
    },
    {
        "name": "Paprika-Reis-Pfanne",
        "preparationTime": 15,
        "cookingTime": 25,
        "servings": 2,
        "utensils": ["Große Pfanne"],
        "ingredients": [
            {"min": 250, "max": null, "desc": "g Basmatireis"},
            {"min": 2, "max": null, "desc": "Paprikas - rot"},
            {"min": 2, "max": null, "desc": "EL Rapsöl"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 2, "max": null, "desc": "EL Tomatenmark - oder Ajvar"},
            {"min": 1, "max": null, "desc": "EL Paprikapulver - edelsüß"},
            {"min": null, "max": null, "desc": "Prise Cayennepfeffer & Paprika rosenscharf"},
            {"min": 750, "max": null, "desc": "ml Wasser"},
            {"min": 10, "max": null, "desc": "g Gemüsebrühe"},
            {"min": 300, "max": null, "desc": "g Naturjoghurt"},
            {"min": 2, "max": null, "desc": "Zehen Knoblauch"},
            {"min": 1, "max": null, "desc": "EL Zitronensaft"},
            {"min": 1, "max": null, "desc": "EL Rapsöl"},
            {"min": 2, "max": null, "desc": "Prise Salz und Cayennepfeffer"},
            {"min": 2, "max": null, "desc": "TL gemischte Kräuter - z.B. 8 Kräuter (TK)"}
        ],
        "instructions": [
            "Paprikas in Würfel schneiden. Knoblauch schälen.",
            "Öl in einer Pfanne erhitzen und darin die Paprika auf hoher Stufe anbraten.",
            "Währenddessen den Basmatireis warm waschen, bis das Wasser klar wird. In einem Sieb abtropfen lassen.",
            "Knoblauch in die Pfanne pressen, Tomatenmark und Gewürze hinzugeben. Alles vermengen und kurz auf mittlerer Hitze mit anbraten.",
            "Den gewaschenen Reis zusammen mit 500 ml Wasser und der Gemüsebrühe dazugeben. Alles gut verrühren und so lange köcheln lassen, bis das Wasser eingekocht ist. Danach noch 250 ml Wasser unterrühren und mit geschlossenem Deckel auf niedriger Stufe köcheln lassen, bis der Reis gar ist. Dabei immer wieder umrühren.",
            "Während der Reis gart die Soße zubereiten. Dazu Joghurt, gepressten Knoblauch, Zitronensaft, Rapsöl, Gewürze und gemischte Kräuter miteinander verrühren. Kurz ziehen lassen."
        ],
        "imgPath": "Images/Rezepte/PaprikaReisPfanne.webp",
        "rate": 5
    },
    {
        "name": "Hokkaiko Pommes",
        "preparationTime": 10,
        "cookingTime": 25,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 750, "max": null, "desc": "g Hokkaido - je nach Größe ½ - 1 Kürbis"},
            {"min": 2, "max": 3, "desc": "EL Olivenöl - oder neutrales Öl wie z.B. Rapsöl"},
            {"min": 3, "max": null, "desc": "Zehen Knoblauch"},
            {"min": 1, "max": null, "desc": "TL Rosmarin"},
            {"min": 1, "max": null, "desc": "TL Thymian"},
            {"min": null, "max": null, "desc": "Salz & Pfeffer - nach Geschmack"}
        ],
        "instructions": [
            "Den Ofen auf 200 Grad Umluft vorheizen. Den Hokkaido halbieren, entkernen und in dicke Scheiben schneiden. Je nach Geschmack die Schale abschneiden (oder eben dranlassen) und in Pommes-Form schneiden.",
            "Die Pommes auf einem mit Backpapier belegtem Backblech verteilen, das Öl darüber geben und es gut verteilen. Die Knoblauchzehen lösen und das harte Ende abschneiden. Die Zehen mit einem Messerrücken plattdrücken und mit auf das Blech geben.",
            "Für eine Gewürzvariante entscheiden oder den Kürbis auf dem Blech in zwei Hälften teilen. Gewürze über die Pommes geben und diese gut damit einreiben.",
            "Bei 200 Grad Umluft für 20 - 25 Minuten knusprig backen. Tipp: Alle 10 Minuten kurz den Ofen öffnen, damit die Feuchtigkeit entweichen kann. So wird jede Art von Pommes im Ofen knuspriger.",
            "Sofort servieren und vorher gut salzen sowie nach Geschmack etwas Pfeffer darüber geben."
        ],
        "imgPath": "Images/Rezepte/HokkaikoPommes.webp",
        "rate": 5
    },
    {
        "name": "Indisches Hähnchencurry mit Reis und Gemüse",
        "preparationTime": 10,
        "cookingTime": 15,
        "servings": 4,
        "utensils": [],
        "ingredients": [
            {"min": 400, "max": null, "desc": "g Hähnchenfleisch"},
            {"min": 250, "max": null, "desc": "g Basmatireis"},
            {"min": 3, "max": null, "desc": "kleine Zucchini"},
            {"min": 15, "max": null, "desc": "g frischer Ingwer"},
            {"min": 2, "max": null, "desc": "Zehen Knoblauch"},
            {"min": 3, "max": null, "desc": "Zwiebeln - rot"},
            {"min": 250, "max": null, "desc": "ml Kochsahne"},
            {"min": 200, "max": null, "desc": "g Schmand"},
            {"min": 6, "max": null, "desc": "EL Kokosmilch - cremig, aus der Dose"},
            {"min": 1, "max": null, "desc": "etwas Öl - z.B. Rapsöl oder Kokosöl"},
            {"min": 2, "max": null, "desc": "Lorbeerblätter - optional"},
            {"min": 1, "max": null, "desc": "TL Currypulver"},
            {"min": 1, "max": null, "desc": "TL Kurkuma"},
            {"min": 1, "max": null, "desc": "TL Cayennepfeffer"},
            {"min": 1, "max": null, "desc": "TL Salz"},
            {"min": 1, "max": null, "desc": "TL Koriander - optional"},
            {"min": 2, "max": null, "desc": "TL Hühnerbrühe - Pulver"}
        ],
        "instructions": [
            "Die Zwiebeln fein würfeln. Den Knoblauch und den Ingwer fein reiben oder hacken. Die Zucchini in Ringe und dann ggf. noch in Streifen schneiden. Das Hähnchenfleisch waschen, abtupfen und ebenfalls in Streifen schneiden.",
            "Den Reis waschen und nach Packungsanleitung in Salzwasser für ca. 10 - 12 Minuten kochen.",
            "Das Öl in einer großen Pfanne erhitzen und die Zwiebeln, das Hähnchenfleisch sowie die Lorbeerblätter gemeinsam darin anbraten. Wenn das Fleisch goldbraun ist, Curry, Kurkuma, Cayennepfeffer und Salz hinzugeben und die Gewürze kurz anschwitzen lassen. Die Zucchini hinzugeben und ebenfalls kurz mit anbraten. Zuletzt Ingwer und Knoblauch hinzugeben und kurz mit anschwitzen.",
            "Mit der Kochsahne ablöschen sowie Schmand und Kokosmilch gut unterrühren. Mit der Brühe und ggf. Koriander abschmecken. Alles kurz einkochen lassen, sodass das Fleisch gar ist und die Soße die gewünschte Konsistenz hat.",
            "Mit dem Reis servieren."
        ],
        "imgPath": "Images/Rezepte/Haehnchencurry.webp",
        "rate": 4
    },
    {
        "name": "Pasta mit Lachs",
        "preparationTime": 5,
        "cookingTime": 10,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 250, "max": null, "desc": "g Lachs"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 250, "max": null, "desc": "ml Kochsahne"},
            {"min": 2, "max": null, "desc": "EL Öl"},
            {"min": null, "max": null, "desc": "etwas Zitronensaft"},
            {"min": null, "max": null, "desc": "etwas Dill"},
            {"min": null, "max": null, "desc": "etwas Salz und Pfeffer"},
            {"min": 400, "max": null, "desc": "g frische Pasta (aus dem Kühlregal)"}
        ],
        "instructions": [
            "Den Knoblauch und Dill hacken. Die Zitrone halbieren. Den Lachs an- oder auftauen lassen, würfeln und in Öl auf hoher Stufe knusprig anbraten.",
            "Den Knoblauch kurz mit anbraten und den Lachs mit etwas Zitronensaft, Salz und frischem Pfeffer würzen.",
            "Die Kochsahne hinzugeben, eine Minute einkochen lassen und die frische Pasta direkt mit untermischen. Für 2 - 3 Minuten mit Deckel garen lassen. Alternativ normale Pasta kochen und ebenfalls mit einkochen lassen.",
            "Mit Dill, Salz und Pfeffer abschmecken."
        ],
        "imgPath": "Images/Rezepte/PastaMitLachs.webp",
        "rate": 5
    },
    {
        "name": "Schokomuffins",
        "preparationTime": 5,
        "cookingTime": 20,
        "servings": 8,
        "utensils": ["Standmixer", "Muffinförmchen"],
        "ingredients": [
            {"min": 50, "max": null, "desc": "g Haferflocken"},
            {"min": 50, "max": null, "desc": "g Dinkelmehl"},
            {"min": 85, "max": null, "desc": "g Datteln - getrocknet & entsteint"},
            {"min": 200, "max": null, "desc": "g Milch - alternativ Pflanzendrink"},
            {"min": 25, "max": null, "desc": "g Backkakao"},
            {"min": 1, "max": null, "desc": "TL Backpulver"},
            {"min": 20, "max": null, "desc": "g Zartbitterschokolade"},
            {"min": 20, "max": null, "desc": "g Walnüsse"}
        ],
        "instructions": [
            "Haferflocken in den Mixer geben und kurz zerkleinern, bis eine Art Mehl entsteht. Dieses in eine Schüssel geben.",
            "Nun Milch, entsteinte Datteln und Backkakao ebenfalls mixen, bis eine cremige Konsistenz entsteht und die Mischung ebenfalls zum Haferflockenmehl in die Schüssel geben.",
            "Backpulver mit Dinkelmehl vermengen und unter die anderen Zutaten rühren. Der Teig ist etwas fester, da die Haferflocken quellen.",
            "Optional gehackte Zartbitterschokolade und Walnüsse unter den Teig geben.",
            "Den Muffinteig gleichmäßig auf 8 Förmchen verteilen und bei im vorgeheizten Backofen bei 180 Grad Umluft für 18 - 22 Minuten backen."
        ],
        "imgPath": "Images/Rezepte/Schokomuffins.webp",
        "rate": 5
    },
    {
        "name": "Zucchini Puffer",
        "preparationTime": 10,
        "cookingTime": 10,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 2, "max": null, "desc": "Zucchini - ca. 500 - 600 g"},
            {"min": 2, "max": null, "desc": "Eier"},
            {"min": 75, "max": null, "desc": "g Mehl - Weizen- oder Dinkelmehl"},
            {"min": 1, "max": 1.5, "desc": "Zehe Knoblauch"},
            {"min": 0.5, "max": 0.75, "desc": "TL Salz"},
            {"min": null, "max": null, "desc": "etwas Pfeffer"},
            {"min": 1, "max": null, "desc": "Zwiebel (optional)"},
            {"min": null, "max": null, "desc": "Öl zum Ausbacken"},
            {"min": 150, "max": null, "desc": "g Joghurt"},
            {"min": 1, "max": null, "desc": "TL Zitronensaft"},
            {"min": 1, "max": null, "desc": "TL gemischte Kräuter - TK"},
            {"min": 1, "max": 1.5, "desc": "Zehe Knoblauch"},
            {"min": null, "max": null, "desc": "Salz und Pfeffer"}
        ],
        "instructions": [
            "Zucchini reiben, salzen und 10 Minuten ziehen lassen.",
            "Währenddessen alle Zutaten für den Dip in einer Schüssel verrühren und kurz ziehen lassen.",
            "Die Zucchini auspressen und mit Eiern, Mehl, Knoblauch und Pfeffer zu einem Teig verkneten. Optional noch gehackte Zwiebeln, Feta oder Parmesan unter den Teig mischen.",
            "In einer Pfanne das Öl erhitzen. Dünne Puffer formen und sie bei mittlerer bis hoher Hitze von beiden Seiten goldbraun ausbacken.",
            "Die Bratlinge mit dem Joghurt Dip servieren."
        ],
        "imgPath": "Images/Rezepte/ZucchiniPuffer.webp",
        "rate": 4
    },
    {
        "name": "Bananen Haferflocken Kekse",
        "preparationTime": 5,
        "cookingTime": 15,
        "servings": 12,
        "utensils": [],
        "ingredients": [
            {"min": 2, "max": null, "desc": "Bananen - mittelgroß"},
            {"min": 100, "max": null, "desc": "g Haferflocken"},
            {"min": 20, "max": null, "desc": "g Schokostückchen - backfest"}
        ],
        "instructions": [
            "Die Banane mit einer Gabel zerdrücken und die Haferflocken sowie die Schokostückchen gut unterrühren.",
            "Auf einem mit Backpapier ausgelegtem Backblech pro Keks einen gehäuften Esslöffel der Masse geben. Es sollten 12 Kekse dabei herauskommen. Mit dem Esslöffel etwas platt drücken und in runde Form bringen.",
            "Bei 180 °C Umluft für 15 – 20 Minuten knusprig braun backen."
        ],
        "imgPath": "Images/Rezepte/BananenHaferflockenKekse.webp",
        "rate": 5
    },
    {
        "name": "Knusprige Ofenkartoffel Bowl",
        "preparationTime": 5,
        "cookingTime": 25,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 500, "max": null, "desc": "g Kartoffeln - ca. 5 mittelgroße"},
            {"min": 2, "max": null, "desc": "EL Olivenöl - extra nativ"},
            {"min": 2, "max": null, "desc": "TL Paprikapulver - edelsüß"},
            {"min": 0.5, "max": null, "desc": "TL Paprikapulver - rosenscharf"},
            {"min": null, "max": null, "desc": "Salz, Pfeffer"},
            {"min": 2, "max": null, "desc": "Handvoll Salat - gemischt"},
            {"min": 10, "max": null, "desc": "Stück Cherrytomaten"},
            {"min": 1, "max": null, "desc": "Stück Avocado"},
            {"min": 4, "max": null, "desc": "EL Olivenöl - extra nativ"},
            {"min": 2, "max": null, "desc": "EL Zitronensaft"},
            {"min": 1, "max": 1.5, "desc": "Zehe Knoblauch"},
            {"min": 1, "max": null, "desc": "TL Honig"},
            {"min": null, "max": null, "desc": "Salz, Pfeffer"}
        ],
        "instructions": [
            "Kartoffeln schälen, längs vierteln und in grobe Würfel schneiden. Mit Olivenöl und Gewürzen vermengen (Salz kommt später drauf) und auf ein Backblech mit Backpapier geben. Bei 200 Grad Umluft im vorgeheizten Backofen ca. 25 Minuten knusprig braun backen.",
            "Währenddessen den Salat waschen und trocknen, die kleinen Tomaten halbieren und die Avocado in dünne Streifen schneiden.",
            "Für das Dressing eine halbe Zitrone pressen und 2 EL vom Zitronensaft zusammen mit dem Olivenöl sowie den anderen Zutaten verrühren.",
            "Die knusprigen Kartoffeln nach Geschmack salzen und gemeinsam mit Salat, Tomaten und Avocado in einer Schüssel servieren. Das Olivenöl-Knoblauch-Dressing über den Salat geben und sofort genießen."
        ],
        "imgPath": "Images/Rezepte/OfenkartoffelBowl.webp",
        "rate": 4
    },
    {
        "name": "Erdbeer-Dessert im Glas - locker leicht",
        "preparationTime": 5,
        "cookingTime": 10,
        "servings": 4,
        "utensils": ["4 Dessertgläser á 180 - 200 ml (z.B. WECK oder IKEA)"],
        "ingredients": [
            {"min": 250, "max": 300, "desc": "g Erdbeeren - möglichst kleine"},
            {"min": 250, "max": null, "desc": "g Joghurt 3,5%"},
            {"min": 250, "max": null, "desc": "g Skyr - oder Magerquark"},
            {"min": 100, "max": null, "desc": "g Hafer-Cookies mit Schokoboden"},
            {"min": 2, "max": null, "desc": "Pck. Vanillezucker"}
        ],
        "instructions": [
            "Haferkekse fein zerbröseln. Das klappt in einer Zipper-Tüte und mit einem Nudelholz zum Draufhauen (alternativ mit einem Mixer). Keksbrösel gleichmäßig in die Gläser füllen und etwas am Boden festdrücken.",
            "Erdbeeren gründlich waschen. Zwei Erdbeeren mit Grün halbieren und zur Deko aufbewahren. Bei den restlichen Erdbeeren das Grün entfernen und sie vierteln (oder noch kleiner schneiden). Mit einem Päckchen Vanillezucker verrühren und kurz ziehen lassen.",
            "Joghurt, Skyr und das zweite Päckchen Vanillezucker miteinander cremig rühren und gleichmäßig auf die Gläser aufteilen.",
            "Gezuckerte Erdbeeren über der Joghurt-Mischung verteilen.",
            "Mit den Erdbeerhälften dekorieren und bis zum Servieren im Kühlschrank kaltstellen. Schmeckt am besten sofort."
        ],
        "imgPath": "Images/Rezepte/ErdbeerDessertImGlas.webp",
        "rate": 3
    },
    {
        "name": "Pasta mit grünem Spargel",
        "preparationTime": 5,
        "cookingTime": 10,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 200, "max": 250, "desc": "g Pasta - Spaghetti, Fusilli oder Penne"},
            {"min": 400, "max": null, "desc": "g grüner Spargel - 1 Bund"},
            {"min": 250, "max": null, "desc": "ml Kochsahne (15% Fett) - oder 7% Fett"},
            {"min": 100, "max": null, "desc": "g gekochter Schinken - 3 Scheiben"},
            {"min": 15, "max": null, "desc": "g Parmesan"},
            {"min": 1, "max": null, "desc": "TL Tomatenmark"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 1, "max": null, "desc": "EL Öl"},
            {"min": null, "max": null, "desc": "Salz & Pfeffer"}
        ],
        "instructions": [
            "In einem Topf Salzwasser zum Kochen bringen.",
            "Das untere Drittel vom Spargel schälen und die Stangen vierteln. Den Schinken fein würfeln. Den Knoblauch schälen.",
            "Pasta zusammen mit dem Spargel in einen Topf geben. Den Spargel 5 Minuten (oder bis er gar ist) kochen und dann mit einer Kelle herausholen. Die Pasta nach Packungsanleitung fertig garen.",
            "Währenddessen in einer Pfanne das Öl erhitzen und den Schinken darin knusprig anbraten. Den Knoblauch dazu pressen und zusammen mit Tomatenmark bei mittlerer Hitze kurz anrösten. Mit der Kochsahne ablöschen und diese kurz einkochen lassen. Die Soße mit 5 EL Pastawasser verrühren und mit Salz und Pfeffer abschmecken.",
            "In die Pfanne den gekochten grünen Spargel geben und geriebenen Parmesan unterrühren.",
            "Die fertige Pasta abgießen. Zusammen mit der Spargel-Soße und mehr Parmesan servieren."
        ],
        "imgPath": "Images/Rezepte/PastaMitGruenemSpargel.webp",
        "rate": 4
    },
    {
        "name": "Knoblauchsoße - das beste Rezept",
        "preparationTime": 5,
        "cookingTime": 0,
        "servings": 1,
        "utensils": ["Knoblauchpresse"],
        "ingredients": [
            {"min": 80, "max": null, "desc": "g Mayonnaise"},
            {"min": 20, "max": null, "desc": "g Ketchup"},
            {"min": 50, "max": null, "desc": "g griechischer Joghurt - 5% Fett"},
            {"min": 1, "max": null, "desc": "TL Senf"},
            {"min": 1, "max": 2, "desc": "Zehen Knoblauch"},
            {"min": null, "max": null, "desc": "je 2 Prisen Salz, Pfeffer, Paprikapulver"},
            {"min": null, "max": null, "desc": "etwas Oregano - optional"}
        ],
        "instructions": [
            "Mayonnaise, Ketchup, Senf und griechischen Joghurt in eine Schüssel geben und Salz, Pfeffer und Paprikapulver hinzufügen.",
            "Um der Soße den leckeren Knoblauchgeschmack zu verleihen, 1 oder 2 Knoblauchzehen hineinpressen.",
            "Alle Zutaten zu einer gleichmäßigen Soße verrühren.",
            "Mit Paprikapulver und Oregano dekorieren.",
            "Optional: Wenn du die Soße als Pizzadip verwendest, kannst du auch Oregano hinzufügen, denn der passt besonders gut dazu."
        ],
        "imgPath": "Images/Rezepte/Knoblauchsoße.webp",
        "rate": 5
    },
    {
        "name": "Avocado-Salat mit Feta & Tomaten",
        "preparationTime": 10,
        "cookingTime": 0,
        "servings": 2,
        "utensils": [],
        "ingredients": [
            {"min": 1, "max": null, "desc": "Avocado"},
            {"min": 250, "max": null, "desc": "g Tomaten - kleine"},
            {"min": 200, "max": null, "desc": "g Feta"},
            {"min": 4, "max": null, "desc": "EL Öl"},
            {"min": 2, "max": null, "desc": "EL Zitronensaft - frisch gepresst von ca. ½ Zitrone"},
            {"min": 1, "max": null, "desc": "Zehe Knoblauch"},
            {"min": 1, "max": null, "desc": "TL Zucker - alternativ Agavendicksaft oder Honig"},
            {"min": 1, "max": null, "desc": "EL Oregano"},
            {"min": null, "max": null, "desc": "etwas Salz und Pfeffer"}
        ],
        "instructions": [
            "Kleine Tomaten halbieren, Feta und Avocado grob würfeln.",
            "Aus Öl, Zitronensaft, Zucker oder Alternative, gepresstem Knoblauch, etwas Salz und Pfeffer das Dressing anrühren.",
            "Tomaten, Feta, Dressing und Oregano in eine Schüssel geben. Gut vermengen und zum Schluss vorsichtig die Avocado-Würfel unterheben.",
            "Sofort genießen oder die Avocado vorab mit frischem Zitronensaft beträufeln. So bleibt sie länger strahlend grün."
        ],
        "imgPath": "Images/Rezepte/AvocadoSalatMitFetaTomaten.webp",
        "rate": 4
    }
];