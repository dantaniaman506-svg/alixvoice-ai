# AlixVoice AI -- Phase 1 Build Plan

The logo uses a gradient from sky blue (#4FC3F7) to deep blue (#1A3A8F), forming a stylized "A". The entire color system and UI will be built around this blue gradient palette.

## Color System

- **Primary**: Deep blue `hsl(220, 70%, 25%)` matching the logo's dark blue
- **Accent/Emerald**: `hsl(160, 84%, 39%)` for CTAs and success states
- **Cyan**: `hsl(195, 90%, 60%)` matching the logo's lighter blue, used for highlights
- **Gradients**: Sky blue → Deep blue matching the logo throughout the site

## Typography

- DM Sans (headings), Inter (body) via Google Fonts

## Files to Create/Modify

### 1. Design System Setup

- **tailwind.config.ts**: Add custom colors (`alix-blue`, `alix-cyan`, `alix-emerald`), custom fonts, animations (fade-in, slide-up, float)
- **src/index.css**: Update CSS variables to match logo palette, import Google Fonts
- Copy logo to `src/assets/logo.png`

### 2. Shared Components

- **src/components/Navbar.tsx**: Logo + "AlixVoice AI" text, nav links (Home, Pricing, Login, Sign Up), mobile hamburger menu, sticky with blur backdrop
- **src/components/Footer.tsx**: Logo, links (About, Pricing, Contact, Terms, Privacy), support email, social placeholders

### 3. Homepage (`src/pages/Index.tsx`) -- Full Rebuild

Split into section components under `src/components/home/`:

- **HeroSection.tsx**: "Never Miss a Customer Call Again" headline, subheadline, two CTA buttons ("Get Started for $1", "Watch Demo"), animated dashboard mockup preview with gradient border
- **HowItWorksSection.tsx**: 3-step cards (Customize AI Agent → Get Virtual Number → AI Answers Calls) with numbered icons
- **FeaturesSection.tsx**: 6 feature cards with icons (call handling, appointment booking, rescheduling, cancellation, dashboard, emergency forwarding)
- **IndustriesSection.tsx**: Grid of industry cards (plumbing, HVAC, solar, dental, real estate, etc.) with icons
- **PricingSection.tsx**: 4 pricing cards (Trial $1, Starter $25, Pro $50 highlighted, Elite $99), feature lists, CTA buttons
- **ExtraMinutesSection.tsx**: 4 add-on cards with the "Most Popular" badge on 100min
- **TestimonialsSection.tsx**: 5-star reviews from fictional US business owners with avatars
- **FAQSection.tsx**: 6-8 accordion items using Shadcn Accordion
- **DashboardPreview.tsx**: Animated mockup showing metrics cards and appointment table

### 4. Page Shells (minimal placeholder pages for routing)

- **src/pages/Pricing.tsx**: Reuses PricingSection + ExtraMinutesSection
- **src/pages/Login.tsx**: Email + Google login form (UI only, no auth yet)
- **src/pages/Signup.tsx**: Registration form (UI only)
- **src/pages/Dashboard.tsx**: Overview metrics + appointment table shell
- **src/pages/Onboarding.tsx**: Multi-step form shell (business info, agent config)
- **src/pages/Appointments.tsx**: Table view shell
- **src/pages/Billing.tsx**: Plan info + extra minutes shell
- **src/pages/Settings.tsx**: Profile/agent settings shell

### 5. Routing (`src/App.tsx`)

Add all routes for the above pages.

## Visual Style

- Soft shadows (`shadow-lg shadow-blue-500/5`), rounded corners (`rounded-2xl`)
- Gradient backgrounds matching logo (sky blue → deep blue)
- Cards with subtle hover lift animations
- Sections alternate between white and light blue-tinted backgrounds
- Mobile-first responsive design throughout

## What's NOT included yet (later phases)

- Supabase connection, auth, database
- API integrations (Telnyx, ElevenLabs, Lemon Squeezy)
- Real functionality behind forms

&nbsp;

&nbsp;

&nbsp;

&nbsp;

Also this is my plan of my OUR AI SAAS GOAL ■

&nbsp;

• Usa or other contries ke logo ko ek esa ai sustem bana ke dena hai jise ki unnko apna ek ai virtual number mile jo voh apne business mai implement Kar Paye aur aur hum businesses ko ai receptionist and ai customer support system dege unnko virtual number milega jo ai receptionist & ai customer support system se conected hoga apne alg alg business ke hissab se

&nbsp;

OUR TARGET AUDIENCE •

&nbsp;

• Plumbers

• air conditioner services

• Solar panel services 

• Dental clinic 

• Small health care clinics

• Painter

• Carpenter 

• Realstate

• Etc

 

HOW OUR CLIENT GET THIER AI RECEPTIONIST & COSTUMER SUPPORT SYSTEM BY ALIXVOICE AI 🟢

&nbsp;

• Sbse phele toh mera client meri website ya mere app mai ayega fir vaha pe ane ke baad voh get started with 1$ vala pe click karega fir ussko login sign in yani auth karna padega voh google ya apni email id se authantication karega fir 

&nbsp;

■ STEP 1•

&nbsp;

•client apne agent ka name rakh shkte hai

•choose karega agent voice male honi chaiye ya female 

&nbsp;

■ STEP 2•

&nbsp;

• Unke business ka naam 

• business type

• website ( optional)

• Business location

• working hours

• services name 

• emergency number for in emergency situation ai agent can give your emergency number to your client if emergency situation happen (optional)

• More about you business & F&Q (Optional)

&nbsp;

CLIENT INFORMATION 

&nbsp;

• Ab client apna real full name dalega 

• country

• area code

• Apna phone number dalega 

• apna primary email address dalega (optional )

&nbsp;

Fir

&nbsp;

■ STEP 3• [ Selecting a plan ]

&nbsp;

1$ FOR 7 DAYS TRIAL •

&nbsp;

• After 7 days monthly 25$ detuct ho jayege fir uske baad free trial khtm ho jayega jo 1$ ka tja fir humesha 25$ ka hi plan milega

• A virual Ai Number

• Realtime calling 

• Costumer support

• A dashboard

• No facility available for buying extra miniutes

• 20 minutes ( credit )

&nbsp;

25$ MONTHLY ( STARTER PLAN )

&nbsp;

• A virual Ai Number

• Realtime calling

• costumer support

• A dadhboard

• faicility for buying extra minutes 

• 120 Minutes

&nbsp;

50$ MONTHLY ( PRO )

&nbsp;

• A virual Ai Number

• Realtime calling

• costumer support

• A dadhboard

• faicility for buying extra minutes 

• 300 Minutes

&nbsp;

$ MONTHLY ( ELITE )

&nbsp;

• A virual Ai Number

• Realtime calling

• costumer support

• A dadhboard

• faicility for buying extra minutes 

• 700 Minutes

&nbsp;

CONTINUE ●

&nbsp;

Fir mai apni payment LEMON SQUEZZY mai lunga fir uske baad payment ke baad asli backend start hota hai 

&nbsp;

THE BACKEND ●

&nbsp;

Ab sbse phele payment conform hone ke baad client ko email jayega billing vaghera ka fir mera client 1$ ya 50$ pay karega jitne bhi ho fir usske baad jo jo information mere client ne di thi apne business ke bare mai apne ai agent ke bare mai jo unnko banvana tha aur apne bare mai voh sb information supabase mai mai jayega usmai ek ek order id ke naam se save hoga har client ki information sb kuch usmai ho aur alg alg ho har order id alg ho jise ki sb mix na ho jaye fir replit mere supa base se order id se sare information nikal ke 11labs ke  dnynamic prompt mai daal dega jo manie phele hi bana rakha hoga receptionist ke liye alag customer support AI agent ke liye Alag mai 11labs ki API ka use karunga fir replit hi mere liye telynx se ek number buy karega uss client ke liye especific client ke liye voh sari information supabase se nikal lega client ka area code aur country fir us hissab se replit number buy kar dega aur fir number buy hone ke baad voh number telynx se utha ke client ke order id mai jo information vaha pe ek row bana ke ai agent virtual number ke naam se dal dega fir jo number ussko jo mila voh supa base mai chla jayega fir replit supa base se us number ko utha ke client ke dashboard dekhayega jo ki client dekh payega alixvoice ai ki website mai fir agr koi real banda us number pe call karega toh replit telynx se holega ki call utha call uthane ke baad 11labs ka ai agent hai voh unse baat karega unnke business ke bare mai dynamic tarike se bhar jayega fir 11labs ka ai agent unse baat karega aur appointmnent book karega appointmnent book karne ke baad jo bhi ai agent apne client ke appointment ke liye information lega aur supa base mai save kar lega jise ki sb kuch mix na ho shi tarike se fir replit supa base se voh information utha ke ckient ko apne dashboard pe dekhayega realtime voh bhi aur agr koi appointment cancle hogi toh fir supabase ki information vaha pe cancle ka mark ya text lg jayega fir replit us booking ki canclation ko dekh ke mere client ke dashboard mai appointment vale section mai jo appointhogi uspe red cancle mark aa jaye jise ki client ko pta chal jaye yeah appointment cancke ho gayi hai aur agr koi resheduling bhi karta ho toh voh reaktike change bhi ho jaye aur vaha pe blue colour ka mark aye reshedule meri alixvoice ai ke client ke dashboard mai jise ki mere client ko pta chal paye ki appointment resheduling hui hai aur bs yeah sb hoga mera client appointment section mai unke client ki sare chije dekh shke 

&nbsp;

•  service they need.

•  preferred date and time.

•  service address.

•   - Full Name

•   - Phone Number

•   - Email (if required)

&nbsp;

&nbsp;

Aur ha extra credits ke loye bhi alg subscription hai 

&nbsp;

💎 Smart & Natural Extra Credit Pricing

🔹 40 Minutes Boost

$3

Cost: $0.80

&nbsp;

&nbsp;

🔹 100 Minutes Saver (Most Popular ⭐)

$7

Cost: $2

&nbsp;

🔹 250 Minutes Value Pack

$16

Cost: $5

&nbsp;

🔹 500 Minutes Pro Add-On

$29

Cost: $10

&nbsp;

&nbsp;

&nbsp;

USES APPS ●

Lovalble

•Supabse

•11labs

•tekynx

&nbsp;

Bhai bahut clean sundar meri website ho mai yeah chata hu jismai har chij bhi ho aur ha voh 1$ vala plan aur 25$ vala plan ek hi hai bs 1$ lege 7 din ke liye triak ke baad fir 25$ aur mintues bhi uske hissab se change yani update hoge 