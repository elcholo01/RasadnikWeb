# Podešavanje Email Funkcionalnosti

## Korak 1: Gmail App Password
Da biste koristili Gmail SMTP server, potrebno je da kreirate "App Password":

1. Idite na [Google Account Security](https://myaccount.google.com/security)
2. Uključite "2-Step Verification" ako nije uključena
3. Idite na "App passwords"
4. Kreirajte novi app password za "Mail"
5. Kopirajte generisani password (16 karaktera)

## Korak 2: Ažuriranje config.ini
U `backend/config.ini` fajlu zamenite sledeće vrednosti:

```ini
[PROD]
EMAIL_USER = tilijarasadnik5@gmail.com
EMAIL_PASSWORD = tilija123.
ADMIN_EMAIL = dvdcolak@gmail.com
```

**Napomena:** Trenutno je podešeno da se poruke šalju sa `tilijarasadnik5@gmail.com` na `dvdcolak@gmail.com`.

## Korak 3: Instalacija potrebnih paketa
```bash
cd backend
pip install -r requirements.txt
```

## Korak 4: Testiranje
Pokrenite backend server i testirajte kontakt formu. Poruke će stizati na email adresu navedenu u `ADMIN_EMAIL`.

## Napomene:
- Gmail ima ograničenja za slanje email-ova (500 dnevno za free nalog)
- App password je bezbedniji od obične lozinke
- Za produkciju preporučujemo korišćenje profesionalnih email servisa
