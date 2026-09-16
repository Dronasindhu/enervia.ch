// ── Language switching (de default, en available) ──
(function () {
  var STORE_KEY = 'enervia-lang';
  var currentLang = 'de';

  var dict = {
    de: {
      'topbar': 'Greater Zurich · Unabhängige Projektbegleitung · Ausführung durch qualifizierte Partnerbetriebe',
      'nav.solar': 'Solar',
      'nav.klima': 'Klima',
      'nav.service': 'Service',
      'nav.partner': 'Partnernetzwerk',
      'nav.about': 'Über uns',
      'nav.cta': 'Projekt prüfen →',
      'menu.label': 'Menü',
      'footer.desc': 'Wir helfen dir, die passende Energielösung zu finden, vergleichen geeignete Partner und koordinieren dein Projekt.',
      'footer.solutions': 'Lösungen',
      'footer.klima': 'Klimaanlage',
      'footer.service': 'Service & Wartung',
      'footer.contact': 'Kontakt',
      'footer.legal': 'Wichtig',
      'footer.privacy': 'Datenschutz',
      'footer.imprint': 'Impressum',
      'footer.terms': 'AGB',
      'footer.disclaimer': 'Regulierte Installationsarbeiten werden durch entsprechend qualifizierte Partnerbetriebe ausgeführt.',
      // home
      'title.home': 'Enervia.ch – Solar & Klima einfach gemacht',
      'meta.home': 'Solar und Klima in Greater Zurich: Beratung, Partnervergleich, Projektkoordination und Service.',
      'alt.heroSolar': 'Modernes Schweizer Haus mit Solaranlage',
      'alt.solarHouse': 'Photovoltaik auf einem Einfamilienhaus',
      'alt.climateRoom': 'Modernes Wohnzimmer mit Klimaanlage',
      'alt.installer': 'Fachbetrieb montiert Solarmodule',
      'hero.kicker': 'Hausenergie, ohne Fachchinesisch',
      'hero.h1': 'Dein Zuhause. <br>Mehr Energie. <br>Mehr Komfort.',
      'hero.lead': 'Solarstrom oder Klimaanlage? Wir helfen dir, die richtige Lösung zu wählen, vergleichen passende Fachpartner und begleiten dein Projekt bis zur Inbetriebnahme — und danach.',
      'hero.cta1': 'Mein Projekt prüfen →',
      'hero.cta2': 'Was passt zu mir?',
      'hero.trust1': 'Unabhängige Orientierung',
      'hero.trust2': 'Geprüfte Partner',
      'hero.trust3': 'Ein Ansprechpartner',
      'hero.float1': 'Eigenen Strom produzieren →',
      'hero.float2': 'Angenehm wohnen →',
      'choose.h2': 'Was soll dein Zuhause besser können?',
      'choose.p': 'Zwei klare Einstiege. Keine Produktflut. Wir führen dich von deiner Situation zur passenden Lösung.',
      'choose.tag1': 'Solarenergie',
      'choose.card1h': 'Strom selbst produzieren.',
      'choose.card1p': 'Wir prüfen Bedarf und Dach, vergleichen passende Partnerangebote und koordinieren die nächsten Schritte.',
      'choose.tag2': 'Klimaanlage',
      'choose.card2h': 'Sommer entspannt geniessen.',
      'choose.card2p': 'Wir helfen bei Auswahl, Angebot und Koordination — die Installation übernimmt ein qualifizierter Fachbetrieb.',
      'value.h2': 'Du musst nicht wissen, welche Technik du brauchst.',
      'value.p': 'Das ist unser Job: Bedarf verstehen, Optionen sortieren, gute Partner zusammenbringen und den Prozess transparent halten.',
      'value.s1h': 'Projekt beschreiben',
      'value.s1p': 'Ein paar Angaben zu Haus, Verbrauch oder Räumen genügen für den Start.',
      'value.s2h': 'Lösung einordnen',
      'value.s2p': 'Wir strukturieren Anforderungen und zeigen dir die sinnvollen Varianten.',
      'value.s3h': 'Partner vergleichen',
      'value.s3p': 'Passende Fachpartner werden nach Qualität, Preis, Kapazität und Eignung ausgewählt.',
      'value.s4h': 'Projekt begleiten',
      'value.s4p': 'Wir bleiben dein Ansprechpartner und koordinieren bis zur Übergabe — auf Wunsch auch danach.',
      'proof.kicker': 'Unser Modell',
      'proof.h2': 'Wir koordinieren. Fachbetriebe installieren.',
      'proof.p': 'Enervia.ch selbst führt keine bewilligungs- oder fachausweispflichtigen Installationsarbeiten aus. Dafür arbeiten wir mit passenden qualifizierten Partnerbetrieben. So bleibt unsere Rolle klar: Beratung, Vergleich, Koordination und Servicekontinuität.',
      'proof.c1b': 'Keine versteckte Eigenmontage',
      'proof.c1s': 'Technische Verantwortung bleibt dort, wo die Qualifikation sitzt.',
      'proof.c2b': 'Mehr Auswahl',
      'proof.c2s': 'Premium-, Value- oder Spezialpartner je nach Projekt.',
      'proof.c3b': 'Ein zentraler Kontakt',
      'proof.c3s': 'Unterlagen, Service und Nachbetreuung an einem Ort.',
      'proof.btn': 'So wählen wir Partner →',
      'cta.kicker': 'Kostenloser Projektcheck',
      'cta.h2': 'Erzähl uns, was du verbessern möchtest.',
      'cta.p': 'Wir sagen dir, welche nächsten Schritte sinnvoll sind — ohne dass du zuerst Produkte vergleichen musst.',
      'cta.btn': 'Projekt starten →',
      // solar
      'title.solar': 'Solar – Enervia.ch',
      'meta.solar': 'Solarprojekt prüfen, Partner vergleichen und Umsetzung koordinieren.',
      'alt.solarHome': 'Haus mit Photovoltaikanlage',
      'solar.h1': 'Mehr vom eigenen Dach.',
      'solar.lead': 'Wir strukturieren dein Solarprojekt, vergleichen passende Fachpartner und begleiten dich vom ersten Check bis zur Inbetriebnahme.',
      'solar.cta1': 'Solarprojekt prüfen →',
      'solar.cta2': "So funktioniert's",
      'solar.notice': 'Ausführung und bewilligungspflichtige Arbeiten erfolgen durch entsprechend autorisierte Partnerbetriebe.',
      'solar.sec.h2': 'Ein Projekt. Drei sinnvolle Wege.',
      'solar.sec.p': 'Wir vermeiden den üblichen Angebotsdschungel und zeigen dir höchstens wenige passende Optionen.',
      'solar.pill1': 'Best Value',
      'solar.c1h': 'Starkes Preis-Leistungs-Verhältnis',
      'solar.c1p': 'Vetted regional partner, klarer Leistungsumfang, faire Kosten.',
      'solar.pill2': 'Premium',
      'solar.c2h': 'Mehr Komfort und Service',
      'solar.c2p': 'Etablierte Partner, schnellere Reaktion, hochwertige Komponenten und Betreuung.',
      'solar.pill3': 'Review',
      'solar.c3h': 'Du hast schon ein Angebot?',
      'solar.c3p': 'Wir prüfen Struktur, Komponenten, Preislogik und offene Punkte unabhängig.',
      'solar.cta.h2': 'Was könnte Solar bei dir leisten?',
      'solar.cta.p': 'Adresse, Stromverbrauch und ein paar Fotos reichen für den Start.',
      'solar.cta.btn': 'Kostenlos prüfen →',
      // klima
      'title.klima': 'Klima – Enervia.ch',
      'meta.klima': 'Klimaanlagenprojekt in Greater Zurich: Bedarf klären, Fachpartner koordinieren, Service organisieren.',
      'alt.homeClimate': 'Helles Wohnzimmer mit Klimaanlage',
      'klima.h1': 'Kühl wohnen. Ohne Technikstress.',
      'klima.lead': 'Du beschreibst Räume und Situation. Wir helfen bei Auswahl und Angebotsvergleich und koordinieren einen qualifizierten Fachbetrieb für die Umsetzung.',
      'klima.cta1': 'Klima-Projekt prüfen →',
      'klima.cta2': 'Was wir übernehmen',
      'klima.notice': 'Kältemittel- und elektrotechnische Arbeiten erfolgen ausschliesslich durch entsprechend qualifizierte beziehungsweise autorisierte Partner.',
      'klima.sec.h2': 'Vom heissen Zimmer zur klaren Lösung.',
      'klima.sec.p': 'Keine 80 Geräte im Shop. Zuerst verstehen wir, was dein Zuhause braucht.',
      'klima.c1h': 'Bedarf & Räume',
      'klima.c1p': 'Zimmerzahl, Fläche, Nutzung, Lärmempfindlichkeit und mögliche Ausseneinheit.',
      'klima.c2h': 'Angebot & Partner',
      'klima.c2p': 'Geeignete Lösung mit transparenten Installationspositionen und Partnerbetrieb.',
      'klima.c3h': 'Koordination & Service',
      'klima.c3p': 'Termin, Dokumentation, Übergabe und spätere Wartungskoordination.',
      'klima.cta.h2': 'Wie viele Räume möchtest du angenehm halten?',
      'klima.cta.p': 'Starte mit unserem kurzen Projektcheck.',
      'klima.cta.btn': 'Projekt starten →',
      // service
      'title.svc': 'Service – Enervia.ch',
      'meta.svc': 'Enervia.ch Care: Dokumentation, Wartungskoordination und Servicekontinuität.',
      'alt.installer2': 'Fachpartner bei der Installation',
      'svc.pill': 'Enervia.ch Care',
      'svc.h1': 'Ein Ansprechpartner. Auch nach dem Projekt.',
      'svc.lead': 'Dokumente, Wartung, Herstellerinformationen und Servicekoordination bleiben strukturiert — auch wenn sich ein ursprünglicher Partner irgendwann verändert.',
      'svc.cta': 'Service anfragen →',
      'svc.sec.h2': 'Servicekontinuität statt leerer Versprechen.',
      'svc.sec.p': 'Wir versprechen nicht, jede Fremdgarantie selbst zu übernehmen. Wir schaffen aber einen klaren Weg, wenn du später Hilfe brauchst.',
      'svc.c1h': 'Digitaler Anlagenpass',
      'svc.c1p': 'Modelle, Seriennummern, Dokumente, Garantien, Partner und Projektdaten an einem Ort.',
      'svc.c2h': 'Wartungskoordination',
      'svc.c2p': 'Wir erinnern, vermitteln und koordinieren passende Servicepartner.',
      'svc.c3h': 'Partnerwechsel möglich',
      'svc.c3p': 'Wenn ein ursprünglicher Betrieb nicht verfügbar ist, suchen wir eine geeignete Alternative aus dem Netzwerk.',
      // partner
      'title.ptr': 'Partnernetzwerk – Enervia.ch',
      'meta.ptr': 'Vetted Fachpartner für Solar, Klima und Service.',
      'alt.installerDach': 'Solar-Fachbetrieb auf einem Dach',
      'ptr.h1': 'Gute Projekte brauchen gute Fachbetriebe.',
      'ptr.lead': 'Wir bauen ein Netzwerk aus spezialisierten Installations- und Servicepartnern auf. Entscheidend sind Eignung, Qualifikation, Qualität, Verfügbarkeit und transparente Zusammenarbeit.',
      'ptr.cta': 'Partner werden →',
      'ptr.sec.h2': 'Was wir prüfen.',
      'ptr.sec.p': 'Unsere Kunden sollen nicht den billigsten Betrieb bekommen, sondern den passenden.',
      'ptr.c1h': 'Qualifikation & Bewilligungen',
      'ptr.c1p': 'Nachweis passend zum jeweiligen technischen Leistungsumfang.',
      'ptr.c2h': 'Versicherung & Referenzen',
      'ptr.c2p': 'Unternehmensdaten, Haftpflicht, Projekterfahrung und belastbare Referenzen.',
      'ptr.c3h': 'Service & Reaktionszeit',
      'ptr.c3p': 'Quote SLA, Kommunikation, Reklamationsverhalten und spätere Servicefähigkeit.',
      // about
      'title.about': 'Über uns – Enervia.ch',
      'meta.about': 'Enervia.ch macht Solar- und Klimaprojekte verständlich und koordiniert passende Fachpartner.',
      'alt.solarHome': 'Schweizer Haus mit moderner Energielösung',
      'about.pill': 'Über Enervia.ch',
      'about.h1': 'Hausenergie soll sich einfach anfühlen.',
      'about.lead': 'Wir bauen keine Installationsfirma, die alles selbst machen will. Wir bauen die bessere Kundenschnittstelle: verständlich, transparent und mit den richtigen Fachpartnern dahinter.',
      'about.cta': 'Mit uns sprechen →',
      'about.sec.h2': 'Unsere Rolle ist bewusst klar.',
      'about.sec.p': 'Wir fokussieren uns auf die Teile, bei denen Kunden oft am meisten Unsicherheit haben.',
      'about.c1h': 'Verstehen',
      'about.c1p': 'Was braucht das Haus wirklich? Was ist optional? Was lohnt sich nicht?',
      'about.c2h': 'Vergleichen',
      'about.c2p': 'Partner, Leistungsumfang, Kosten und Servicebedingungen werden nachvollziehbar.',
      'about.c3h': 'Begleiten',
      'about.c3p': 'Ein Projekt endet für uns nicht mit der Vermittlung eines Kontakts.',
      // contact
      'title.contact': 'Projekt prüfen – Enervia.ch',
      'meta.contact': 'Kostenloser Projektcheck für Solar, Klima und Service.',
      'ck.pill': 'Projektcheck',
      'ck.h1': 'Was möchtest du zuhause verbessern?',
      'ck.p': 'In zwei Minuten wissen wir genug, um den richtigen nächsten Schritt vorzuschlagen.',
      'ck.label.type': 'Projekt',
      'ck.opt.solar': 'Solar',
      'ck.opt.climate': 'Klimaanlage',
      'ck.opt.both': 'Solar + Klima',
      'ck.opt.service': 'Service',
      'ck.label.plz': 'PLZ',
      'ck.placeholder.plz': '8001',
      'ck.label.firstName': 'Vorname',
      'ck.placeholder.firstName': 'Anna',
      'ck.label.lastName': 'Nachname',
      'ck.placeholder.lastName': 'Müller',
      'ck.label.email': 'E-Mail',
      'ck.placeholder.email': 'anna@example.ch',
      'ck.label.phone': 'Telefon',
      'ck.placeholder.phone': '+41 79 000 00 00',
      'ck.label.message': 'Erzähl uns kurz von deinem Projekt',
      'ck.placeholder.message': "Zum Beispiel: Einfamilienhaus, ca. 6'000 kWh Stromverbrauch, Interesse an Solar + Batterie …",
      'ck.label.upload': 'Fotos / Dokumente',
      'ck.notice': 'Prototyp: Übermittlung an Google Sheets ist aktiv.',
      'ck.submit': 'Projekt kostenlos prüfen →',
      'ck.sending': 'Wird gesendet...',
      'ck.success': 'Vielen Dank! Deine Anfrage wurde erfolgreich gesendet.',
      'ck.error': 'Es gab einen Fehler beim Senden. Bitte versuche es später noch einmal.'
    },
    en: {
      'topbar': 'Greater Zurich · Independent project guidance · Execution by qualified partner companies',
      'nav.solar': 'Solar',
      'nav.klima': 'Climate',
      'nav.service': 'Service',
      'nav.partner': 'Partner network',
      'nav.about': 'About us',
      'nav.cta': 'Check my project →',
      'menu.label': 'Menu',
      'footer.desc': 'We help you find the right energy solution, compare suitable partners and coordinate your project.',
      'footer.solutions': 'Solutions',
      'footer.klima': 'Air conditioning',
      'footer.service': 'Service & maintenance',
      'footer.contact': 'Contact',
      'footer.legal': 'Important',
      'footer.privacy': 'Privacy',
      'footer.imprint': 'Imprint',
      'footer.terms': 'Terms & conditions',
      'footer.disclaimer': 'Regulated installation work is carried out by appropriately qualified partner companies.',
      // home
      'title.home': 'Enervia.ch – Solar & climate made simple',
      'meta.home': 'Solar and climate in Greater Zurich: advice, partner comparison, project coordination and service.',
      'alt.heroSolar': 'Modern Swiss house with solar installation',
      'alt.solarHouse': 'Photovoltaic system on a single-family house',
      'alt.climateRoom': 'Modern living room with air conditioning',
      'alt.installer': 'Specialist company installing solar modules',
      'hero.kicker': 'Home energy, without the jargon',
      'hero.h1': 'Your home. <br>More energy. <br>More comfort.',
      'hero.lead': 'Solar power or air conditioning? We help you choose the right solution, compare suitable specialist partners and accompany your project through to commissioning — and beyond.',
      'hero.cta1': 'Check my project →',
      'hero.cta2': 'What fits me?',
      'hero.trust1': 'Independent guidance',
      'hero.trust2': 'Vetted partners',
      'hero.trust3': 'One point of contact',
      'hero.float1': 'Produce your own power →',
      'hero.float2': 'Live comfortably →',
      'choose.h2': 'What should your home do better?',
      'choose.p': 'Two clear starting points. No product overload. We guide you from your situation to the right solution.',
      'choose.tag1': 'Solar power',
      'choose.card1h': 'Generate your own electricity.',
      'choose.card1p': 'We assess your needs and roof, compare suitable partner offers and coordinate the next steps.',
      'choose.tag2': 'Air conditioning',
      'choose.card2h': 'Enjoy summer stress-free.',
      'choose.card2p': 'We help with selection, quotes and coordination — a qualified specialist carries out the installation.',
      'value.h2': "You don't need to know which technology you need.",
      'value.p': "That's our job: understand your needs, sort the options, bring together good partners and keep the process transparent.",
      'value.s1h': 'Describe your project',
      'value.s1p': 'A few details about your home, consumption or rooms are enough to get started.',
      'value.s2h': 'Nail down the solution',
      'value.s2p': 'We structure your requirements and show you the options that make sense.',
      'value.s3h': 'Compare partners',
      'value.s3p': 'Suitable specialist partners are selected by quality, price, capacity and fit.',
      'value.s4h': 'We stay with you',
      'value.s4p': 'We remain your point of contact and coordinate everything until handover — and beyond if you wish.',
      'proof.kicker': 'Our model',
      'proof.h2': 'We coordinate. Specialist companies install.',
      'proof.p': 'Enervia.ch itself does not carry out installation work that requires permits or professional certification. Instead, we work with vetted, qualified partner companies. That keeps our role clear: advice, comparison, coordination and service continuity.',
      'proof.c1b': 'No hidden self-installation',
      'proof.c1s': 'Technical responsibility stays where the qualification is.',
      'proof.c2b': 'More choice',
      'proof.c2s': 'Premium, value or specialist partners depending on the project.',
      'proof.c3b': 'One central contact',
      'proof.c3s': 'Documents, service and aftercare in one place.',
      'proof.btn': 'How we choose partners →',
      'cta.kicker': 'Free project check',
      'cta.h2': "Tell us what you'd like to improve.",
      'cta.p': "We'll tell you what sensible next steps look like — without you having to compare products first.",
      'cta.btn': 'Start your project →',
      // solar
      'title.solar': 'Solar – Enervia.ch',
      'meta.solar': 'Get your solar project checked, compare partners and coordinate implementation.',
      'alt.solarHome': 'House with photovoltaic system',
      'solar.h1': 'More from your own roof.',
      'solar.lead': 'We structure your solar project, compare suitable specialist partners and accompany you from the first check to commissioning.',
      'solar.cta1': 'Check your solar project →',
      'solar.cta2': 'How it works',
      'solar.notice': 'Installation and work requiring permits are carried out by appropriately authorised partner companies.',
      'solar.sec.h2': 'One project. Three sensible paths.',
      'solar.sec.p': 'We avoid the usual quote jungle and show you only a few suitable options.',
      'solar.pill1': 'Best Value',
      'solar.c1h': 'Strong value for money',
      'solar.c1p': 'Vetted regional partner, clear scope of work, fair costs.',
      'solar.pill2': 'Premium',
      'solar.c2h': 'More comfort and service',
      'solar.c2p': 'Established partners, faster response, high-quality components and care.',
      'solar.pill3': 'Review',
      'solar.c3h': 'Already have a quote?',
      'solar.c3p': 'We independently review structure, components, pricing logic and open points.',
      'solar.cta.h2': 'What could solar do for you?',
      'solar.cta.p': 'Address, electricity consumption and a few photos are enough to get started.',
      'solar.cta.btn': 'Check for free →',
      // klima
      'title.klima': 'Climate – Enervia.ch',
      'meta.klima': 'Air conditioning projects in Greater Zurich: clarify needs, coordinate specialist partners, organise service.',
      'alt.homeClimate': 'Bright living room with air conditioning',
      'klima.h1': 'Cool living. No tech stress.',
      'klima.lead': 'You describe your rooms and situation. We help with selection and quote comparison and coordinate a qualified specialist for the installation.',
      'klima.cta1': 'Check your climate project →',
      'klima.cta2': 'What we take care of',
      'klima.notice': 'Refrigerant and electrical engineering work is carried out exclusively by appropriately qualified or authorised partners.',
      'klima.sec.h2': 'From hot rooms to a clear solution.',
      'klima.sec.p': 'No 80 devices in the shop. First we understand what your home needs.',
      'klima.c1h': 'Needs & rooms',
      'klima.c1p': 'Number of rooms, floor area, use, noise sensitivity and possible outdoor unit.',
      'klima.c2h': 'Quote & partner',
      'klima.c2p': 'Suitable solution with transparent installation line items and partner company.',
      'klima.c3h': 'Coordination & service',
      'klima.c3p': 'Scheduling, documentation, handover and later maintenance coordination.',
      'klima.cta.h2': 'How many rooms would you like to keep comfortable?',
      'klima.cta.p': 'Start with our short project check.',
      'klima.cta.btn': 'Start project →',
      // service
      'title.svc': 'Service – Enervia.ch',
      'meta.svc': 'Enervia.ch Care: documentation, maintenance coordination and service continuity.',
      'alt.installer2': 'Specialist partner during installation',
      'svc.pill': 'Enervia.ch Care',
      'svc.h1': 'One point of contact. Even after the project.',
      'svc.lead': 'Documents, maintenance, manufacturer information and service coordination stay organised — even if an original partner changes over time.',
      'svc.cta': 'Request service →',
      'svc.sec.h2': 'Service continuity instead of empty promises.',
      'svc.sec.p': "We don't promise to take over every third-party warranty ourselves. But we create a clear path when you need help later.",
      'svc.c1h': 'Digital asset pass',
      'svc.c1p': 'Models, serial numbers, documents, warranties, partners and project data in one place.',
      'svc.c2h': 'Maintenance coordination',
      'svc.c2p': 'We remind, refer and coordinate suitable service partners.',
      'svc.c3h': 'Partner switch possible',
      'svc.c3p': "If the original company isn't available, we find a suitable alternative from the network.",
      // partner
      'title.ptr': 'Partner network – Enervia.ch',
      'meta.ptr': 'Vetted specialist partners for solar, climate and service.',
      'alt.installerDach': 'Solar specialist company on a roof',
      'ptr.h1': 'Good projects need good specialist companies.',
      'ptr.lead': "We're building a network of specialised installation and service partners. What matters is fit, qualification, quality, availability and transparent collaboration.",
      'ptr.cta': 'Become a partner →',
      'ptr.sec.h2': 'What we check.',
      'ptr.sec.p': "Our clients shouldn't get the cheapest company, but the right one.",
      'ptr.c1h': 'Qualification & permits',
      'ptr.c1p': 'Evidence appropriate to the respective technical scope.',
      'ptr.c2h': 'Insurance & references',
      'ptr.c2p': 'Company data, liability insurance, project experience and solid references.',
      'ptr.c3h': 'Service & response time',
      'ptr.c3p': 'Quoted SLA, communication, complaint handling and long-term service capability.',
      // about
      'title.about': 'About us – Enervia.ch',
      'meta.about': 'Enervia.ch makes solar and climate projects understandable and coordinates suitable specialist partners.',
      'alt.solarHome': 'Swiss house with modern energy solution',
      'about.pill': 'About Enervia.ch',
      'about.h1': 'Home energy should feel simple.',
      'about.lead': "We're not building an installation company that wants to do everything itself. We're building the better customer interface: understandable, transparent and backed by the right specialist partners.",
      'about.cta': 'Talk to us →',
      'about.sec.h2': 'Our role is deliberately clear.',
      'about.sec.p': 'We focus on the parts where clients often feel most uncertain.',
      'about.c1h': 'Understand',
      'about.c1p': "What does the house really need? What's optional? What isn't worth it?",
      'about.c2h': 'Compare',
      'about.c2p': 'Partners, scope of work, costs and service terms become transparent.',
      'about.c3h': 'Accompany',
      'about.c3p': "For us, a project doesn't end with referrals.",
      // contact
      'title.contact': 'Check your project – Enervia.ch',
      'meta.contact': 'Free project check for solar, climate and service.',
      'ck.pill': 'Project check',
      'ck.h1': 'What would you like to improve at home?',
      'ck.p': "In two minutes we'll know enough to suggest the right next step.",
      'ck.label.type': 'Project',
      'ck.opt.solar': 'Solar',
      'ck.opt.climate': 'Air conditioning',
      'ck.opt.both': 'Solar + Air conditioning',
      'ck.opt.service': 'Service',
      'ck.label.plz': 'Postal code',
      'ck.placeholder.plz': '8001',
      'ck.label.firstName': 'First name',
      'ck.placeholder.firstName': 'Anna',
      'ck.label.lastName': 'Last name',
      'ck.placeholder.lastName': 'Müller',
      'ck.label.email': 'Email',
      'ck.placeholder.email': 'anna@example.ch',
      'ck.label.phone': 'Phone',
      'ck.placeholder.phone': '+41 79 000 00 00',
      'ck.label.message': 'Tell us briefly about your project',
      'ck.placeholder.message': 'For example: single-family house, approx. 6\'000 kWh electricity consumption, interest in solar + battery …',
      'ck.label.upload': 'Photos / documents',
      'ck.notice': 'Prototype: submission to Google Sheets is active.',
      'ck.submit': 'Check your project for free →',
      'ck.sending': 'Sending...',
      'ck.success': 'Thank you! Your request was sent successfully.',
      'ck.error': 'There was an error sending your request. Please try again later.'
    }
  };

  function storedLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    return (saved === 'en' || saved === 'de') ? saved : 'de';
  }

  function applyLang(lang) {
    currentLang = lang;
    var l = dict[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = l[key] !== undefined ? l[key] : dict.de[key];
      if (val === undefined) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var val = l[key] !== undefined ? l[key] : dict.de[key];
      if (val !== undefined) el.setAttribute('alt', val);
    });

    document.querySelectorAll('[data-i18n-meta]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-meta');
      var val = l[key] !== undefined ? l[key] : dict.de[key];
      if (val !== undefined) el.setAttribute('content', val);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = l[key] !== undefined ? l[key] : dict.de[key];
      if (val !== undefined) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var val = l[key] !== undefined ? l[key] : dict.de[key];
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('.langToggle').forEach(function (btn) {
      btn.textContent = lang === 'de' ? 'EN' : 'DE';
      btn.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Auf Deutsch umschalten');
    });

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  window.EnerviaI18n = {
    t: function (key, lang) {
      var l = dict[lang || currentLang];
      if (l && l[key] !== undefined) return l[key];
      if (dict.de[key] !== undefined) return dict.de[key];
      return key;
    },
    getLang: function () { return currentLang; },
    apply: applyLang
  };

  function init() {
    applyLang(storedLang());
    document.querySelectorAll('.langToggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(currentLang === 'de' ? 'en' : 'de');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();