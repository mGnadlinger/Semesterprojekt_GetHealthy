let tipps = [
    {
        "title": "Einfach mal entspannen!",
        "description": "Auf Stress im Alltag reagiert unser Gehirn prompt: Es schüttet vermehrt das Stresshormon Cortisol aus. Es hält uns wach und aktiv, obwohl wir erschöpft und müde sind, schwächt die Immunabwehr und beeinträchtigt unseren Stoffwechsel. Als erste Entspannungsmaßnahmen können eine Reise ans Meer, in der Natur wandern, autogenes Training, progressive Muskelentspannung, Meditation oder Yoga-Übungen helfen. Langfristig sollten größte Stressfaktoren ausgeschaltet werden."
    },
    {
        "title": "Smoothies zum Frühstück",
        "description": "Macht euch morgens oder zwischendurch einen Smoothie aus frischem Obst und Gemüse für einen ordentlichen Immun-Kick."
    },
    {
        "title": "Stoffwechsel-Kick am Morgen",
        "description": "Ein Glas warmes Wasser mit Zitrone am Morgen gibt dem Körper die Flüssigkeit, die er braucht, und unterstützt durch seine antibakterielle Wirkung das Ausschwemmen von Giftstoffen. Eine Prise Cayenne-Pfeffer kann den Stoffwechsel ankurbeln."
    },
    {
        "title": "Auf deinem Atem achten",
        "description": "Atemtechniken können in Stresssituationen beruhigen. Eine davon ist die 4-7-8-Atemtechnik, bei der tief durch die Nase ein- und durch den Mund ausatmet wird, während man bis vier, sieben und acht zählt. Dieser Zyklus wird mehrmals wiederholt."
    },
    {
        "title": "Mahlzeiten vorbereiten",
        "description": "Gesunde Ernährung braucht Zeit. Essensrationen für die Arbeit können am Wochenende vorbereitet und bei Bedarf eingefroren werden, um abends nach der Arbeit Zeit zu sparen. Meal Prep ist eine gute Methode dafür."
    },
    {
        "title": "Krafttraining statt Diät",
        "description": "Muskeln erhöhen den Energieumsatz und lassen Fett schmelzen. Krafttraining führt zu einem festen Körper, im Gegensatz zu schwabbeliger Haut bei Diäten. Liegestütze und Sit-ups sind gute Übungen."
    },
    {
        "title": "Abendrituale befolgen",
        "description": "Eine Stunde vor dem Schlafen keine elektronischen Geräte nutzen. Stattdessen ein Buch lesen, um den Geist zu beruhigen und auf den Schlaf vorzubereiten."
    },
    {
        "title": "Ein neues Sport-Outfit gönnen",
        "description": "Funktionale Fitnesskleidung ist angenehmer zu tragen und gibt ein besseres Gefühl beim Training. Sie transportiert Schweiß direkt ab und verleiht mehr Selbstbewusstsein."
    },
    {
        "title": "Wasser mit Früchten als erfrischender Detox-Drink",
        "description": "Wasser mit Früchten eignet sich als erfrischender Detox-Drink. Früchte wie Zitrone, Grapefruit, Gurke, Kirschen oder Melone sind basisch und gut für den Körper."
    },
    {
        "title": "Genügend Schlaf",
        "description": "Ein erwachsener Mensch benötigt sieben bis acht Stunden Schlaf pro Nacht. Schlafmangel beeinträchtigt die Aufmerksamkeit, Leistungsfähigkeit und Essgewohnheiten. Rituale vor dem Schlafengehen, wie Meditation, können beim Einschlafen helfen."
    },
    {
        "title": "Regelmäßige Gesundheits-Check-ups",
        "description": "Regelmäßige Gesundheits-Check-ups beim Arzt geben Aufschluss über den Gesundheitszustand und können Krankheiten frühzeitig erkennen. Ab einem bestimmten Alter übernimmt die Krankenkasse die Kosten für solche Untersuchungen."
    },
    {
        "title": "Findet heraus, was ihr liebt!",
        "description": "Es ist wichtig zu wissen, was einen erfüllt, um einen gesunden Lebensstil zu führen. Neue Fitnessprogramme oder kreative Aktivitäten können dabei helfen, herauszufinden, was einem Spaß macht."
    },
    {
        "title": "Niemals aufgeben!",
        "description": "Mit dem Versprechen, niemals aufzugeben, erreicht man seine Ziele. Visualisierungstechniken können helfen, das Ziel im Kopf zu behalten und in schwierigen Momenten motiviert zu bleiben."
    },
    {
        "title": "Natürliche Lebensmittel essen",
        "description": "Frische Produkte liefern Energie und Nährstoffe, während verarbeitete Lebensmittel oft chemische Zusätze enthalten. Eine gesunde Ernährung basiert auf natürlichen Lebensmitteln."
    },
    {
        "title": "Gesund leben geht auch ohne Verzicht",
        "description": "Ausschluss-Diäten führen zu Verzicht und können langfristig zu Mangelerscheinungen und Krankheiten führen. Eine ausgewogene Ernährungsumstellung in Kombination mit Bewegung und Schlaf ist für ein gesundes Leben besser geeignet."
    },
    {
        "title": "Ohne Frühstück ist der Tag gelaufen?!",
        "description": "Ein gesundes Frühstück bringt den Stoffwechsel in Schwung und liefert eine gute Energiebasis für den Tag."
    },
    {
        "title": "Wie steht's mit Milch?",
        "description": "Milchqualität kann durch Massentierhaltung und schlechte Futterqualität beeinträchtigt sein. Alternativ kann auf Mandel- oder Sojamilch ausgewichen werden, sofern sie Calcium enthalten und nicht mit Zucker versetzt sind."
    },
    {
        "title": "Weniger Alkohol trinken",
        "description": "Übermäßiger Alkoholkonsum kann zu Gesundheitsproblemen wie Diabetes, Gedächtnisverlust und Herzproblemen führen. Es ist ratsam, den Alkoholkonsum zu reduzieren."
    },
    {
        "title": "Ein fleischloser Tag pro Woche",
        "description": "Ein fleischloser Tag pro Woche kann die Verdauung entlasten, wertvolle Nährstoffe liefern und ein gutes Gewissen geben."
    },
    {
        "title": "Zum Essen an den Tisch",
        "description": "Beim Essen am Tisch nehmen wir unsere Mahlzeiten bewusster zu uns und erleichtern Magen und Darm die Verdauung."
    },
    {
        "title": "Vegane Desserts - ein kluger Kompromiss!",
        "description": "Vegane Desserts können gesünder sein und dennoch den süßen Zahn befriedigen."
    },
    {
        "title": "Proteine für einen straffen Körper",
        "description": "Proteine sind wichtig für die Muskulatur und Regenerationsprozesse. Gesunde Proteinquellen sind Fleisch, Fisch, Milchprodukte, Hülsenfrüchte, Nüsse und Tofu."
    },
    {
        "title": "Rotes Fleisch ist tabu",
        "description": "Rotes Fleisch kann das Risiko für Herz-Kreislauf-Erkrankungen erhöhen. Eine mediterrane Ernährung mit frischem Fisch ist gesünder."
    },
    {
        "title": "Drei große oder lieber mehrere kleine Mahlzeiten?",
        "description": "Regelmäßiges und bewusstes Essen ist wichtig für den Körper. Die Wahl zwischen drei großen oder mehreren kleinen Mahlzeiten hängt von den persönlichen Vorlieben ab. Eine negative Energiebilanz ist entscheidend für Gewichtsabnahme."
    },
    {
        "title": "Grüner Tee für die Gesundheit",
        "description": "Grüner Tee enthält Gerbstoffe, die den Magen-Darm-Trakt beruhigen und das Risiko für Herz-Kreislauf-Erkrankungen senken. Er enthält auch viele Vitamine, Mineralstoffe und sekundäre Pflanzenstoffe."
    },
    {
        "title": "Ingwer - heilende Schärfe",
        "description": "Ingwer wirkt entzündungshemmend, lindert Schmerzen und beruhigt den Magen-Darm-Trakt. Er kann auch bei Reiseübelkeit und Erkältungen helfen."
    },
    {
        "title": "Achtsam ernähren",
        "description": "Es ist wichtig, nur zu essen, wenn man hungrig ist, um übermäßiges Essen zu vermeiden. Ablenkungen sollten vermieden werden, um bewusstes Essen zu fördern."
    },
    {
        "title": "Besser schlafen mit leerem Magen",
        "description": "Mindestens zwei Stunden vor dem Schlafengehen sollte nichts mehr gegessen werden, um die Verdauung nicht zu stören und eine erholsame Nachtruhe zu ermöglichen."
    },
    {
        "title": "Finger weg von Softdrinks!",
        "description": "Softdrinks enthalten viel Zucker und können zu Gesundheitsproblemen wie Karies, Übergewicht und Diabetes führen. Sie sollten durch Wasser mit Früchten ersetzt werden."
    },
    {
        "title": "Ihr seid eure oberste Priorität",
        "description": "Gesundheit sollte oberste Priorität haben. Pulver, Tabletten und Hungern sind keine langfristigen Lösungen. Die Entscheidung für einen gesunden Lebensstil beginnt bei einem selbst."
    },
    {
        "title": "Ein Date mit euch selbst",
        "description": "Verabredet euch selbst zum Sport, um den inneren Schweinehund zu überwinden. Eine feste Verabredung im Kalender hilft, motiviert zu bleiben."
    },
    {
        "title": "Intervalltraining lohnt sich",
        "description": "Intervalltraining ist effektiver als Ausdauertraining, da es den Stoffwechsel ankurbelt und den Nachbrenneffekt fördert. Es gibt viele verschiedene Formen von Intervalltraining, die in das Workout eingebaut werden können."
    },
    {
        "title": "Für Abwechslung sorgen",
        "description": "Abwechslung im Training fördert das Muskelwachstum und die Leistung. Unterschiedliche Trainingsarten und -intensitäten sollten ausprobiert werden, um die Muskulatur herauszufordern."
    },
    {
        "title": "Das Ziel vor Augen halten",
        "description": "Disziplin und Eigenmotivation sind wichtig, um Trainingsziele zu erreichen. Regelmäßige Überprüfung und Anpassung des Trainingsplans helfen, motiviert zu bleiben."
    },
    {
        "title": "Im Zweifel Unterstützung einfordern",
        "description": "Wenn Zweifel an der Erreichbarkeit der Ziele bestehen, kann Unterstützung von Freunden oder Familie helfen, den inneren Schweinehund zu überwinden und motiviert zu bleiben."
    },
    {
        "title": "Zucker und Salz in Maßen ",
        "description": " Verwenden Sie möglichst selten Zucker oder Lebensmittel mit Zucker, denn diese sorgen für einen erhöhten Blutzuckerspiegel, den der Körper mit Insulin in Schach hält. <br><br> Verwenden Sie statt Salz lieber frische Kräuter zum Würzen. Generell wird in Deutschland zu viel Salz verwendet, was sich im Einzelnen negativ auf den Blutdruck auswirken kann."
    }
]