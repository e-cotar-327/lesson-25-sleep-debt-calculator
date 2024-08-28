# lesson-25-sleep-debt-calculator

Sleep Debt Calculator

Știați că girafele dorm doar 4,6 ore pe zi? Noi, oamenii, avem nevoie de mai mult decât atât. Dacă nu dormim suficient, acumulăm un deficit de somn. În acest proiect, vom calcula dacă dormiți suficient în fiecare săptămână folosind un calculator de deficit de somn. Programul va determina orele reale și ideale de somn pentru fiecare noapte din ultima săptămână. În final, va calcula, în ore, cât de departe sunteți de obiectivul săptămânal de somn.
1.	Prima problemă de rezolvat este determinarea numărului de ore de somn obținut în fiecare noapte a săptămânii. Puteți crea o funcție care returnează numărul de ore de odihnă pentru orice noapte dată. În loc să scrieți șapte funcții diferite (una pentru fiecare zi a săptămânii), mai bine scrieţi o singură funcție cu un parametru pentru ziua respectivă. Creați o funcție numită getSleepHours cu un singur parametru numit day.
2.	Funcția ar trebui să accepte o zi ca argument și să returneze numărul de ore pe care le-ați dormit în acea noapte. De exemplu, dacă ați dormit 8 ore luni noaptea, apelul getSleepHours('monday') ar trebui să returneze 8. Folosiți o instrucțiune if/else sau switch pentru a implementa acest lucru.
3.	Testați funcția apelând-o de mai multe ori și imprimând rezultatele în consolă. Puteți elimina testele când știți că funcția dvs. funcționează.
4.	Acum că ați scris o funcție pentru a obține orele de somn pentru fiecare noapte, trebuie să faceți trei lucruri:
o	Obțineți orele totale de somn pe care le-ați dormit efectiv.
o	Obțineți orele ideale de somn pe care le preferați.
o	Calculați deficitul de somn, dacă există.
Pentru a obține orele totale de somn pe care le-ați dormit efectiv, creați o nouă funcție numită getActualSleepHours care nu acceptă parametri.
5.	În interiorul funcției getActualSleepHours(), apelați funcția getSleepHours() pentru fiecare zi a săptămânii. Adăugați rezultatele împreună și returnați suma folosind o returnare implicită.
6.	Pentru a obține orele ideale de somn pe care le preferați, creați o funcție numită getIdealSleepHours fără parametri. În interiorul funcției, declarați o variabilă numită idealHours și setați valoarea acesteia la orele ideale pe noapte. Apoi, returnați idealHours înmulțit cu 7. Veți dori să înmulțiți cu 7 pentru a obține orele totale pe care le preferați pe săptămână.
7.	Testați cele două noi funcții apelându-le și imprimând rezultatele în consolă. Puteți elimina testele când știți că funcțiile dvs. funcționează.
8.	Acum că puteți obține orele reale de somn și orele ideale de somn, este timpul să calculați deficitul de somn. Creați o funcție numită calculateSleepDebt fără parametri. În interiorul blocului său, creați o variabilă numită actualSleepHours care va fi egală cu apelul funcției getActualSleepHours(). Apoi, creați o altă variabilă numită idealSleepHours, setată egală cu apelul funcției getIdealSleepHours().
9.	Acum că aveți actualSleepHours și idealSleepHours, puteți scrie câteva instrucțiuni if/else pentru a afișa rezultatul în consolă. Funcția ar trebui să îndeplinească următoarea logică:
o	Dacă somnul actual este egal cu somnul ideal, logați în consolă că utilizatorul a obținut cantitatea perfectă de somn.
o	Dacă somnul actual este mai mare decât somnul ideal, logați în consolă că utilizatorul a dormit mai mult decât era necesar.
o	Dacă somnul actual este mai mic decât somnul ideal, logați în consolă că utilizatorul ar trebui să se odihnească.
10.	Pentru a face acest calculator mai util, adăugați orele cu care utilizatorul este peste sau sub somnul său ideal în fiecare declarație de logare din calculateSleepDebt().
11.	Pe ultimul rând al programului, porniți programul apelând funcția calculateSleepDebt().
12.	Pentru practică suplimentară, încercați următoarele:
•	getActualSleepHours() ar putea fi implementat fără a apela getSleepHours(). Utilizați numere literale și operatorul + pentru a rescrie getActualSleepHours(). Ar trebui să returneze în continuare orele totale reale dormite în săptămână.
•	Unele persoane au nevoie să doarmă mai mult decât altele. Rescrieți getIdealSleepHours() astfel încât să îi puteți transmite un argument, cum ar fi getIdealSleepHours(8), unde 8 sunt orele ideale pe noapte. Actualizați și apelul către getIdealSleepHours() din calculateSleepDebt().

