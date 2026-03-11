# Brief Refonte - Agence Prem'IA

## Analyse NoCode Factory (inspiration)

### Structure du site (sitemap)
- **Home** : Hero animé + value props chiffrées + services cards + industries/social proof + étapes business (Plan → Launch → Scale → Optimize) + outils logos + subventions + témoignages + CTA
- **Agence** (/agence-nocode) : Histoire, valeurs, méthodologie, chiffres clés, équipe
- **Services individuels** :
  - /site-internet : Process détaillé (Stratégie → Wireframe → Copywriting → Design → Dev → SEO → Formation)
  - /application-web : Idem structure process
  - /ia-automatisation : Agents IA, audit, dev sur-mesure, suivi, formation
  - /audit-nocode : Audit technique
  - /design : UX/UI
  - /seo-growth-hacking : SEO & Growth
  - /maintenance-nocode : Maintenance & Support
- **Réalisations** (/nos-realisations) : Portfolio filtrable par industrie + témoignages clients
- **Blog** (/blog) : Contenu SEO
- **Contact** (/contact) : Formulaire simple + ton décontracté

### Patterns design identifiés
- **Couleurs** : Fond blanc/gris très clair, accents dégradés pastel (rose → violet → bleu), texte noir
- **Typo** : Très grosse, bold, impact. Titres massifs. Contraste fort
- **Cards** : Arrondies, ombres douces, hover effects subtils
- **Animations** : Scroll-triggered fade-in, texte qui se révèle, carrousel logos infini, transitions fluides
- **Layout** : Beaucoup d'espace blanc, sections très aérées, grilles asymétriques
- **Ton** : Décomplexé, direct, humour (section "ils ne nous ont PAS fait confiance"), chiffres percutants
- **Social proof** : Logos clients, industries servies, chiffres (350+ projets, 97% NPS, 20+ talents)
- **Tags/badges** : Petits labels colorés sur les cards (industries, compétences)
- **CTA** : Boutons arrondis, dégradé ou noir, toujours visibles
- **Navigation** : Minimal, burger menu, banner promo en haut

---

## Adaptation Prem'IA

### Positionnement
**Prem'IA** = Agence digitale spécialisée IA & automatisation pour PME/startups
- Pas "no-code", plutôt "tech pragmatique" (on utilise les bons outils : IA, automatisation, dev moderne)
- Cible : PME, startups, indépendants qui veulent digitaliser/automatiser sans se ruiner
- Différenciateur : Pragmatisme, rapidité, IA native dans chaque projet

### Value Props (hero)
- **5x Plus rapide** : On livre en jours, pas en mois
- **3x Moins cher** : IA + automatisation = efficacité maximale
- **100% Autonome** : Formation incluse, vous gardez la main

### Services (3 pilliers principaux + 4 secondaires)
**Principaux (grandes cards visuelles)** :
1. **Sites Web & Landing Pages** : Sites performants, SEO-ready, design premium
2. **Applications Web** : Apps métier sur-mesure, dashboards, portails clients
3. **IA & Automatisation** : Agents IA, workflows automatisés, intégrations

**Secondaires (sidebar/liste)** :
4. **Audit Technique** : Analyse de l'existant, recommandations, roadmap
5. **Webdesign UX/UI** : Identité visuelle, maquettes, prototypes
6. **SEO & Growth** : Référencement, acquisition, analytics
7. **Maintenance & Support** : Hébergement, monitoring, évolutions

### Sections Home (ordre)
1. **Banner promo** (top, optionnel) : "Nouveau : Agents IA sur-mesure pour votre business"
2. **Hero** : Titre impact + sous-titre + 2 CTA (Réserver un appel / Voir nos réalisations) + carrousel logos outils
3. **Value Props** : 3 colonnes chiffrées (5x, 3x, 100%)
4. **Services** : 3 grandes cards + sidebar 4 services secondaires (comme l'image)
5. **Problème/Solution** : "Le monde change" + 2 blocs (Autonomie technique / Maîtrise des investissements)
6. **Industries** : Grille industries servies (Restauration, Retail, Santé, Tech, Immobilier, Services) + chiffres
7. **Process** : 4 étapes (Stratégie → MVP → Scale → Automatisation)
8. **Outils** : Grille logos (Next.js, React, Supabase, n8n, Make, Vercel, Tailwind, OpenAI, Claude, Stripe...)
9. **Social Proof** : Témoignages / Cas clients
10. **CTA Final** : "Un projet ? Parlons-en" + formulaire ou lien Calendly

### Stack tech
- Next.js 15 (App Router, existant)
- Tailwind CSS 4 (existant)
- Framer Motion (existant) + GSAP pour les animations avancées
- Lucide icons (existant)
- Geist font (existant)

### Animations prévues
- Hero : Texte qui se type/révèle, particules ou gradient animé en background
- Scroll : Fade-in-up sur chaque section, parallax subtil
- Cards : Hover glow/spotlight effect (déjà un composant Spotlight)
- Logos : Carrousel infini (marquee)
- Chiffres : Counter animation au scroll
- Transitions : Page transitions fluides
- Cursor : Custom cursor ou trail effect (optionnel, si pas trop lourd)

### Pages à créer (Phase 1 = Home only)
- [x] Home (refonte complète)
- [ ] Services individuels (Phase 2)
- [ ] Réalisations (Phase 2)
- [ ] À propos (Phase 2)
- [ ] Contact (Phase 2)
- [ ] Blog (Phase 3)

---

## Plan de Dev - Phase 1 (Home)

### Étape 1 : Setup & Composants de base
- Nettoyer le repo (supprimer l'ancien contenu)
- Installer GSAP (`gsap`, `@gsap/react`)
- Créer les composants UI réutilisables :
  - `AnimatedCounter` (chiffres qui s'animent)
  - `MarqueeLogos` (carrousel infini)
  - `SectionReveal` (wrapper animation scroll)
  - `GradientBlob` (backgrounds animés)
  - `ServiceCard` (grande card avec hover)
  - `IndustryBadge` (tag industrie)

### Étape 2 : Layout global
- Nouveau Navbar (minimal, burger, banner promo top)
- Footer complet (liens, légal, réseaux)
- Fond global (blanc cassé, grains subtils)

### Étape 3 : Sections Home
- Hero avec animations
- Value Props (3 colonnes)
- Services (3 cards + sidebar)
- Problème/Solution
- Industries + chiffres
- Process (4 étapes)
- Outils (grille logos)
- CTA Final

### Étape 4 : Polish
- Responsive (mobile-first)
- Performance (lazy loading, optimisation images)
- SEO meta tags
- Animations fine-tuning
- Dark/light sections alternées comme NoCode Factory
