import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molla-all-service-centers',
  templateUrl: './all-service-centers.component.html',
  styleUrls: ['./all-service-centers.component.scss']
})
export class AllServiceCentersComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  northcenters = [
    {
      state: 'Delhi',
      expanded: false,
      interneldata: [
        {
          title: 'JANAK PURI - NEW DELHI',
          shop: 'LOTUS COMPUTECH',
          address: '510, Suneja Tower - 2, District Centre, Janak Puri, New Delhi - 110058',
          contactperson: 'VINAY',
          email: 'LOTUSCOMPUTECH@GMAIL.COM',
          phone1: 9718051232,
          phone2: 1147330512,
          state: 'DELHI',
          city: 'JANAK PURI',
          location: "https://goo.gl/maps/SksjQ3zZCNicLHNM7",
          expanded: false
        },
        {
          title: 'Delhi - Wazirpur',
          shop: 'Aarush Infotech Services',
          address: '202B, Inraprastha Tower, Wazirpur Industirai Area, Wazirpur, Delhi',
          contactperson: 'Amit Kumar',
          email: 'aarushinfotechwazirpur@gmail.com',
          phone1: 9716567903,
          phone2: 9555011965,
          state: 'Delhi',
          city: 'Delhi',
          location: "https://goo.gl/maps/PMzd7jrz56c1Dj4F8",
          expanded: false
        }
      ]
    },
    {
      state: 'Chandigarh',
      expanded: false,
      interneldata: [
        {
          title: 'Chandigarh - Punjab',
          shop: 'ELECTRO VOICE-17 Music Shop',
          address: 'SCO 89-90-91, Sector 17-D, CHD.-160017',
          contactperson: 'Sandeep Kumar',
          email: 'sandeeppasricha42@gmail.com',
          phone1: 9872001062,
          phone2: 172-2705522,
          state: 'Punjab',
          city: 'Chandigarh',
          location: "https://maps.app.goo.gl/vKc7hfBqh4ZQTAWR9",
          expanded: false
        }
      ]
    },
    {
      state: 'Haryana',
      expanded: false,
      interneldata: [
        {
          title: 'Gurgaon - Haryana',
          shop: 'Infotech Technology',
          address: 'Office no 27,super market opposite old civil hospital near sadar bazar Gurgaon pincode 122001',
          contactperson: 'Sunil Kumar',
          email: 'infoingurgaon@gmail.com',
          phone1: 9717878280,
          phone2: 8010839044,
          state: 'Haryana',
          city: 'Gurgaon',
          location: "https://goo.gl/maps/V1pqJ6jSCTjQJjfq7",
          expanded: false
        },
        {
          title: 'Haryana - Hissar',
          shop: 'Tech Solution (Hisar, HR)',
          address: 'SCF 30 Red Cross Market, Behind White House Computer, Near Hotel Disire & HDFC Bank, Hisar, Haryana',
          contactperson: 'Vinay',
          email: 'solutions.apace@gmail.com',
          phone1: 9896826726,
          phone2: '',
          state: 'Haryana',
          city: 'Hissar',
          location: "https://www.google.com/maps/place/29%C2%B009'18.6%22N+75%C2%B043'18.1%22E/@29.1551727,75.7195083,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x25e1a24fa4a6f56b!8m2!3d29.155168!4d75.721697?hl=en",
          expanded: false
        },
        {
          title: 'Rohtak - Haryana',
          shop: 'S.D. ENTERPRISES -ROHTAK',
          address: 'PLOT NO. 46, NEAR RTO OFFICE, NEW EKTA COLONY, ROHTAK, HARYANA, 124001',
          contactperson: 'Sunil',
          email: 'Sd.enterprise@gmail.com',
          phone1: 9813683737,
          phone2: '',
          state: 'Haryana',
          city: 'Rohtak',
          location: "",
          expanded: false
        }
      ]
    },
    {
      state: 'Jammu and Kashmir',
      expanded: false,
      interneldata: [
        {
          title: 'JAMMU - Jammu and Kashmir',
          shop: 'K.S TRADE LINKS (JAMMU,PARMOD SHARMA)',
          address: '705-A, ASHOK NAGAR, SATWARI, JAMMU,PIN CODE-180003',
          contactperson: 'PARMOD SHARMA',
          email: 'KSTRADELINKSJMU@GMAIL.COM',
          phone1: 9858548940,
          phone2: 8716000061,
          state: 'JAMMU',
          city: 'Jammu and Kashmir',
          location: "",
          expanded: false
        },
        {
          title: 'SRINAGAR - Jammu and Kashmir',
          shop: 'COMPUTER RENAISSANCE, KASHMIR (NASIR JI)',
          address: 'KAPTA HOUSE, ABI GUZAR, SRINAGAR - 190001',
          contactperson: 'NASIR WANI',
          email: 'COMPREN.SGR@GMAIL.COM',
          phone1: 943553874,
          phone2: '',
          state: 'SRINAGAR',
          city: 'Jammu and Kashmir',
          location: "",
          expanded: false
        }
      ]
    },
    {
      state: 'Punjab',
      expanded: false,
      interneldata: [
        {
          title: 'LUDHIANA - Punjab',
          shop: 'GEONIX SERVICE CENTER , LUDHIANA',
          address: 'B - 18, 3310/1, GANDHI COLONY, KOCHAR MARKET, GURCHARAN PARK, LUDHIANA - 141008',
          contactperson: 'MR. GHANSHYAM',
          email: 'servicemanager@geonix.in',
          phone1: 8968798740,
          phone2: '',
          state: 'Punjab',
          city: 'LUDHIANA',
          location: "",
          expanded: false
        },
        {
          title: 'JALANDHAR - Punjab',
          shop: 'MAHENDRU TELECOM',
          address: 'Office No. â€“ 2, 2nd Floor, Monika Tower, Near Milap Chowk, Jalandhar 144001',
          contactperson: 'MR. ARPAN',
          email: 'ABC@GMAIL.COM',
          phone1: 9803590001,
          phone2: '',
          state: 'Punjab',
          city: 'JALANDHAR',
          location: "",
          expanded: false
        },
        {
          title: 'PATIALA - Punjab',
          shop: 'TECH SERVICE POINT - PATIALA',
          address: '168/2 JOURIAN BHATIAN ADJOINING JAIN LEHNGA &DUPPTTA HUSE NEAR GARG SALES PATIALA-147001',
          contactperson: 'JASPALSINGH',
          email: 'patiala.asp@zebcare.in',
          phone1: 7696113413,
          phone2: '',
          state: 'Punjab',
          city: 'PATIALA',
          location: "",
          expanded: false
        },
        {
          title: 'BATHINDA - Punjab',
          shop: 'Citizen Computers - Bhatinda',
          address: 'Near Canara Bank, Citizen Coruputeru, Amrik Singh Road,ru, Amrik Singh Road, Bathinda, Bathinda, Punjab, 151001',
          contactperson: 'SUMIT GARG',
          email: 'citizenbti@gmail.com',
          phone1: 9814466174,
          phone2: 987285385,
          state: 'Punjab',
          city: 'BATHINDA',
          location: "",
          expanded: false
        },
        {
          title: 'AMRITSAR - Punjab',
          shop: 'Unique Electronics. AMRITSAR',
          address: 'G.F.4, G.N.D.U. SHOPPING COMPLEX, NEAR HDFC BAN G.T. ROAD 143001',
          contactperson: 'Sukhwinder Singh',
          email: 's4sukh@yahoo.com',
          phone1: 9815027811,
          phone2: 9815027811,
          state: 'Punjab',
          city: 'AMRITSAR',
          location: "",
          expanded: false
        },
      ]
    },
    {
      state: 'Uttar Pradesh',
      expanded: false,
      interneldata: [
        {
          title: 'LUCKNOW - Uttar Pradesh',
          shop: 'VRINDA LAPTOP SALES & SERVICE ',
          address: 'G-32 Ground floor Opp Red apple Tej kumar plaza near Hotel Levana hazratganj lucknow 226001',
          contactperson: 'Mr. Alok Rastogi',
          email: 'VRINDALSS23@GMAIL.COM',
          phone1: 9235566533,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'LUCKNOW',
          location: "https://goo.gl/maps/QzjZok2D6KgXgjh2A",
          expanded: false
        },
        {
          title: 'ALLAHABAD - Uttar Pradesh',
          shop: 'R R SOLUTION',
          address: 'F -3, FIRST FLOOR, INDRA BHAWAN, CIVIL LINES, ALLAHABAD, UP - 211001',
          contactperson: 'SHAD USMANI',
          email: 'rrsolutionallahabad@gmail.com',
          phone1: 9305567586,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'ALLAHABAD',
          location: "",
          expanded: false
        },
        {
          title: 'MEERUT - Uttar Pradesh',
          shop: 'S.S.INFOTECH',
          address: 'SHOP NO -220 KAVERI COMPLEX P.L.SHARMA ROAD MEERUT.250001',
          contactperson: 'Mr. Sachin Sharma',
          email: '',
          phone1: 9997479018,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'MEERUT',
          location: "https://goo.gl/maps/ic25TaLZNg1gZJLc8",
          expanded: false
        },
        {
          title: 'KANPUR NAGAR - Uttar Pradesh',
          shop: 'VINARS IT SOLUTION (KANPUR, ARSHAD)',
          address: 'UGD-10, 2 ND FLOOR, SOMDUTT PLAZA, THE MALL,',
          contactperson: 'ARSHAD',
          email: 'VINARS.INFO@GMAIL.COM',
          phone1: 7054222211,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'KANPUR NAGAR',
          location: "",
          expanded: false
        },
        {
          title: 'Bareilly - Uttar Pradesh',
          shop: 'MP INFOTECH SERVICE',
          address: '146, 2nd Floor, Bhagwati Complex,Near Circuit House churaha, Civil Lines,Bareilly - 243001',
          contactperson: 'Mr Yogesh',
          email: 'mpinfotechservices@gmail.com',
          phone1: 8273862961,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'Bareilly',
          location: "https://goo.gl/maps/vpBopyuKowmrN7Bs6",
          expanded: false
        },
        {
          title: 'Ghaziabad - Uttar Pradesh',
          shop: 'COMPLETE COMPUTER SOLUTION',
          address: '101, 1st Floor, 77, Rahul Complex, Ram Nagar Kirana Mandi Chowk, Ambedkar Road, Ghaziabad -201001',
          contactperson: 'Mr. Anuj',
          email: 'ccsgzb@gmail.com',
          phone1: 9319508080,
          phone2: 9897003153,
          state: 'Uttar Pradesh',
          city: 'Ghaziabad',
          location: "https://goo.gl/maps/NwUAfWZApTWd6HW9A",
          expanded: false
        },
        {
          title: 'AGRA - Uttar Pradesh',
          shop: 'KAMAL COMPUTER SOLUTION',
          address: 'Ground floor, Tilak complex 27-Tilak road Dehradun.248001',
          contactperson: 'KAMAL ARORA',
          email: 'kcsinfo79@gmail.com',
          phone1: 9897365547,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'AGRA',
          location: "https://goo.gl/maps/TPnZjjDA6mHVCbox7",
          expanded: false
        },
        {
          title: 'GORAKHPUR - Uttar Pradesh',
          shop: 'MULTI CARE INFO SYSTEM',
          address: 'R.K. Trade Centre Opp. Hotel San Plaza Cinema Road, Gorakhpur',
          contactperson: 'Mr. Puran Sharma',
          email: 'multicare.gkp@gmail.com',
          phone1: 9997479018,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'GORAKHPUR',
          location: "https://goo.gl/maps/ZRsPRqs3DhtFcZPt5",
          expanded: false
        },
        {
          title: 'MUZAFFARNAGAR - Uttar Pradesh',
          shop: 'M.I.ENTERPRISES',
          address: 'SHOP NO. 32 KAMDHENU MARKET OPP. BANK OF BADODA',
          contactperson: 'RIZWAN QURESHI',
          email: 'miworldenterprise@gmail.com',
          phone1: 8755522281,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'MUZAFFARNAGAR',
          location: "",
          expanded: false
        },
        {
          title: 'ALIGARH - Uttar Pradesh',
          shop: 'M/S MAHALAXMI SALES & SERVICES--ALIGARH',
          address: '0, KINGS WAY PLAZA, OPPOSITE S M B INTER COLLEGE,RAMGHAT ROAD,ALIGARH, Aligarh, Aligarh, Uttar Pradesh, 202001',
          contactperson: 'ANAND KUMAR SINGH',
          email: 'lavrajput4@gmail.com',
          phone1: 7906166957,
          phone2: '',
          state: 'Uttar Pradesh',
          city: 'ALIGARH',
          location: "",
          expanded: false
        },
      ]
    },
    {
      state: 'Uttar Pradesh',
      expanded: false,
      interneldata: [
        {
          title: 'Dehradun - Uttarakhand',
          shop: 'GREEN TECH SERVICE',
          address: 'Ground floor, Tilak complex 27-Tilak road Dehradun.248001',
          contactperson: 'Mr.Mohit aswal',
          email: '',
          phone1: 9897014419,
          phone2: 9897014432,
          state: 'Uttarakhand',
          city: 'Dehradun',
          location: "https://goo.gl/maps/Dcnp2tanrLusQz6C6",
          expanded: false
        }
      ]
    }
  ]

  southcenters = [
    {
      state: 'Karnataka',
      expanded: false,
      interneldata: [
        {
          title: 'Hubballi - Karnataka',
          shop: 'JASMINE SALES & MARKETING, HUBBALLI',
          address: '139,USG-2 STAGE, LBSquare (HARSHA COMPLEX) STATION ROAD,HUBBALLI, PIN CODE-580020 (KARNATAK)',
          contactperson: 'NIZAM A BELGAUMKAR',
          email: 'NIZAM.BEL@GMAIL.COM',
          phone1: 8364253102,
          phone2: '',
          state: 'Karnataka',
          city: 'Hubballi',
          location: "",
          expanded: false
        },
        {
          title: 'Belgaum - Karnataka',
          shop: 'ELITE TELE COMMUNICATION(TANSEER JI,BELGAUM)',
          address: '2983 OPP. SHEETAL HOTEL KHADE BAZAR BELGAUM',
          contactperson: 'TANSEER JI',
          email: 'TANSEERJI@GMAIL.COM',
          phone1: 9886823699,
          phone2: '',
          state: 'Karnataka',
          city: 'Belgaum',
          location: "",
          expanded: false
        },
        {
          title: 'Bangalore - Karnataka',
          shop: 'Srinivas Telecom (Basvan Gudj)',
          address: '85/1, D.V.G Road, Basvan Gudj, Opp. Liberty Showroom, Bangalore, Karnataka',
          contactperson: 'D.RAJESH',
          email: 'solutions.apace@gmail.com',
          phone1: 9886114663,
          phone2: 80-41203490,
          state: 'Karnataka',
          city: 'Bangalore',
          location: "https://www.google.com/maps/place/12%C2%B056'24.6%22N+77%C2%B034'16.4%22E/@12.9401745,77.5690192,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf67334f41c719887!8m2!3d12.9401745!4d77.5712079?hl=en",
          expanded: false
        },
        {
          title: 'Bangalore - Karnataka',
          shop: 'GEONIX SERVICE CENTRE (BANGLORE)',
          address: '417, 4TH FLOOR,NO 6/2,LUCIA CITY CENTER, OTC ROAD,NEXT TO SHARADA CINEMA,BANGALORE PIN CODE â€“ 560002',
          contactperson: 'RAVI KURNI',
          email: 'GEONIXSUKHITH@GMAIL.COM',
          phone1: 8920896553,
          phone2: '',
          state: 'Karnataka',
          city: 'Bangalore',
          location: "",
          expanded: false
        },
      ]
    },
    {
      state: 'Kerala',
      expanded: false,
      interneldata: [
        {
          title: 'Kerala - Kochi ',
          shop: 'KR INFOWAY',
          address: "KR INFOWAY 61/446, 2nd floor Manikkath chambers Karimpatta road, Pallimukku Kochi (Kerala) - 682016",
          contactperson: '',
          email: 'carebykr@gmail.com',
          phone1: 9544735177,
          phone2: "",
          state: 'Kerala',
          city: 'Kochi ',
          location: "",
          expanded: false
        }
      ]
    },
    {
      state: 'Tamil Nadu',
      expanded: false,
      interneldata: [
        {
          title: 'MADURAI - Tamil Nadu',
          shop: 'SHARP COMPUTER SYSTEMS (Ganeshan Ji)',
          address: "No:145, NORTH MASI STREET, MADURAI- 625001",
          contactperson: 'MR GANESHAN',
          email: 'scsgroups_it@yahoo.co.in',
          phone1: 9842956390,
          phone2: "",
          state: 'Tamil Nadu',
          city: 'MADURAI ',
          location: "",
          expanded: false
        },
        {
          title: 'Chennai - Tamil Nadu',
          shop: 'SMART COMPUTER SERVICES(CHENNAI,SHANKAR)',
          address: "ADD :- NO3, FIRST FLOOR, RAHEJA COMPLEX, 834,ANNA SALAI, CHENNAI-2",
          contactperson: 'SHANKAR',
          email: 'SMART.SERVICES@YAHOO.COM',
          phone1: 7667255551,
          phone2: 7904956192,
          state: 'Tamil Nadu',
          city: 'Chennai ',
          location: "",
          expanded: false
        },
        {
          title: 'COIMBATORE - Tamil Nadu',
          shop: 'LPD TECHNOLOGY----Coimbatore',
          address: "125,126, KUMARAN COMPLEX, 100 FEET ROAD , 5TH STREET, GANDHIPURAM, Coimbatore, Tamil Nadu, 641012",
          contactperson: 'R.sakthivel',
          email: 'lpdtechcbe@gmail.com',
          phone1: 9976096860,
          phone2: '',
          state: 'Tamil Nadu',
          city: 'COIMBATORE ',
          location: "",
          expanded: false
        },
      ]
    }
  ]

  eastcenters = [
    {
      state: 'Assam',
      expanded: false,
      interneldata: [
        {
          title: 'Guwahati - Assam',
          shop: 'FIX 24 -DATAMSION NORTH -EAST',
          address: "SAHIDA MARKET LANE, 1ST, SAHIDA MARKET LANE, SHAZIA COMPLEX, SS ROAD, Lakhtokia, Guwahati, Kamrup Metropolitan, Assam, 781001",
          contactperson: 'SAHAJ AGGARWAL',
          email: 'SAHAJAGARWAL@DATAMASIONSERVICES.COM',
          phone1: 7575950003,
          phone2: "",
          state: 'Assam',
          city: 'Guwahati ',
          location: "",
          expanded: false
        }
      ]
    },
    {
      state: 'Bihar',
      expanded: false,
      interneldata: [
        {
          title: 'PATNA - Bihar',
          shop: 'EVERRISE INFOSOLUTION PVT LTD (BINAY PRAKASH)',
          address: "NARAYANI SADAN, BEHIND BP COMPLEX, LOHA SINGH LANE, KADAM KUAN, PATANA, BIHAR- 800003",
          contactperson: 'BINAY PRAKASH',
          email: 'Binay@eispl.org',
          phone1: 7323079220,
          phone2: 9386850514,
          state: 'Bihar',
          city: 'PATNA ',
          location: "",
          expanded: false
        }
      ]
    },
    {
      state: 'Chattisgarh',
      expanded: false,
      interneldata: [
        {
          title: 'Bilaspur - Chattisgarh',
          shop: 'COMPUTER CARE -BILASPUR',
          address: "Computer Care ,1st Floor,RS Chamber,Maharana Partap Chowk,Vyapar Vihar Road,Bilaspur Chattisgarh.",
          contactperson: 'SANJAY',
          email: 'computercarebsp@gmail.com',
          phone1: 9827177402,
          phone2: '',
          state: 'Chattisgarh',
          city: 'Bilaspur ',
          location: "",
          expanded: false
        },
        {
          title: 'Chhattisgarh - Raipur',
          shop: 'Shree Balaji Mobile',
          address: 'Shop No. 1, 2nd Floor, Mishra Bhawan, Tatparya Chowk, Raipur, Raipur, Chhattisgarh',
          contactperson: 'Rakesh Sharma',
          email: 'ajayelectronics3@gmail.com',
          phone1: 9907130045,
          phone2: 9300130045,
          state: 'Chhattisgarh',
          city: 'Raipur',
          location: "https://www.google.com/maps?q=21.2405666,81.6303767&z=17&hl=en",
          expanded: false
        },
      ]
    },
    {
      state: 'West Bengal',
      expanded: false,
      interneldata: [
        {
          title: 'Kolkata - West Bengal',
          shop: 'KOLKATA SERVICE CENTER (GX)',
          address: "BUILDING NO. - 52, WESTON STREET, 1ST FLOOR, KOLKATA, WEST BENGAL - 700013",
          contactperson: 'UTTAM',
          email: 'OPERATIONS@GEONIX.IN',
          phone1: 9874851634,
          phone2: '',
          state: 'West Bengal',
          city: 'Kolkata',
          location: "",
          expanded: false
        },
        {
          title: 'Siliguri - West Bengal',
          shop: 'SOFTECH HOUSE ---SILIGURI',
          address: "COLLEGE PARA, NEAR SILIGURI COLLEGE GATE N 2 SILIGURI 734001",
          contactperson: 'SANJOY GHOSH ---SILIGURI',
          email: 'SOFTCHSALES.SLG@GMAIL.COM',
          phone1: 9932286420,
          phone2: 9800020703,
          state: 'West Bengal',
          city: 'Siliguri',
          location: "",
          expanded: false
        }
      ]
    }
  ]

  westcenters = [
    {
      state: 'Gujarat',
      expanded: false,
      interneldata: [
        {
          title: 'SURAT - GUJRAT',
          shop: 'ICON INFOSYS',
          address: '6 JAYESH PARK, KAILASH NAGAR, SAGRAMPURA, SURAT,',
          contactperson: 'CHIRAG MODI (VIVEK)',
          email: 'DIGICARE.SURAT@GMAIL.COM',
          phone1: 9106889644,
          phone2: '',
          state: 'GUJRAT',
          city: 'SURAT',
          location: "https://goo.gl/maps/JX3cfvWvqMSCcPZy9",
          expanded: false
        },
        {
          title: 'Ahmedabad - Gujarat',
          shop: 'Om Techno Solutions',
          address: 'Shop No 10 - Gokul Complex, Near Sankalp Restaurant, Opp Swaminarayan Temple, Gurukul Drive in Road, Gurukul, AHmedabad - 380052',
          contactperson: 'Prakash Vaghela,  Anal Patel',
          email: '',
          phone1: 9313728752,
          phone2: 9898607621,
          state: 'Gujarat',
          city: 'Ahmedabad',
          location: "",
          expanded: false
        },
      ]
    },
    {
      state: 'Madhya Pradesh',
      expanded: false,
      interneldata: [
        {
          title: 'Indore - Madhya Pradesh',
          shop: 'Ajay Electronics',
          address: 'G-4, Yashwant Plaza,Opp. Railway Station, Indore, Madhya Pradesh',
          contactperson: 'Ajay Bari',
          email: 'ajayelectronics3@gmail.com',
          phone1: 7314281855,
          phone2: 9617451349,
          state: 'Madhya Pradesh',
          city: 'Indore',
          location: "https://www.google.com/maps/place/22%C2%B043'08.2%22N+75%C2%B052'09.5%22E/@22.7189369,75.8671121,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x3321ab4e44da2e7a!8m2!3d22.7189369!4d75.8693008?hl=en",
          expanded: false
        },
        {
          title: 'JABALPUR - Madhya Pradesh',
          shop: 'HYBRID COMPUTER AND ELECTRONICS',
          address: 'HYBRID COMPUTER AND ELECTRONICS, SETH COMPLEX RUSSEL CHOWK JABALPUR M.P',
          contactperson: '',
          email: 'hybridcomputers777@gmail.com',
          phone1: 8109621492,
          phone2: '',
          state: 'Madhya Pradesh',
          city: 'JABALPUR',
          location: "",
          expanded: false
        },
        {
          title: 'BHOPAL - Madhya Pradesh',
          shop: 'PROSERVE SOLUTIONS',
          address: '357, DYNAMIC CENTRE, PLOT NO. 241-242, ZONE-1, M.P NAGAR , BHOPAL- 462011',
          contactperson: 'RS TOMAR',
          email: 'PROSERVEBPL@GMAIL.COM',
          phone1: 7247070500,
          phone2: '',
          state: 'Madhya Pradesh',
          city: 'BHOPAL',
          location: "https://goo.gl/maps/No6bWzxZMTcWLdPe7",
          expanded: false
        },
        {
          title: 'GWALIOR - Madhya Pradesh',
          shop: 'REAL TECH COMPUTER AND SERVICES -Gwalior',
          address: 'S-96,sanjay Complex Jayendraganj,Lashkar',
          contactperson: 'SANJAY JHA',
          email: 'REAL.TECH@GMAIL.COM',
          phone1: 9300048484,
          phone2: '',
          state: 'Madhya Pradesh',
          city: 'GWALIOR',
          location: "",
          expanded: false
        },
      ]
    },
    {
      state: 'Maharashtra',
      expanded: false,
      interneldata: [
        {
          title: 'MUMBAI - Maharashtra',
          shop: 'AYUSH COMPUTER, ULHASNAGAR (ARUN MORE)',
          address: 'MARUTI COMPLEX, OFFICE NO. - 19, 1ST FLOOR, BEHIND TILSON MARKET, ULHASNAGAR, THANE - 421003',
          contactperson: 'ARUN MORE',
          email: 'morearun1988@gmail.com',
          phone1: 9975002362,
          phone2: 9833674847,
          state: 'Maharashtra',
          city: 'MUMBAI',
          location: "",
          expanded: false
        },
        {
          title: 'Nagpur - Maharashtra',
          shop: 'SHREEMATA ELECTRONIC SALES AND SERVICES (NAGPUR, ROHIT JI)',
          address: '1st Floor, Plot No.557, P.R. Sathe Marg, Near Devi Ahilya Mandir Dhantoli Nagpur-440012',
          contactperson: 'ROHIT PATRANGE',
          email: 'SHREEMATA.ETRNOICS@GMAIL.COM',
          phone1: 9823032385,
          phone2: '',
          state: 'Maharashtra',
          city: 'Nagpur',
          location: "",
          expanded: false
        },
        {
          title: 'MUMBAI - Maharashtra',
          shop: 'NANDAI COMPUTERS(NAVI MUMBAI,NISHA JI)',
          address: 'OFFICE NO C-487, 2ND FLOOR, SECTOR-17, VASHI PLAZA, VASHI NAVI MUMBAI, MH-27',
          contactperson: 'NISHA JI',
          email: 'ambicainfotech12@gmail.com',
          phone1: 9967477752,
          phone2: '',
          state: 'Maharashtra',
          city: 'MUMBAI',
          location: "",
          expanded: false
        },
        {
          title: 'MUMBAI - Maharashtra',
          shop: 'AMBICA INFOTECH',
          address: 'Shop No 38,3rd Flr , Yamuna Bldg, Topiwala Lane , Opp Lamington Rd Police Station , Grant Road',
          contactperson: 'Mr Mayank',
          email: 'ambicainfotech12@gmail.com',
          phone1: 9867072289,
          phone2: 22400300,
          state: 'Maharashtra',
          city: 'MUMBAI',
          location: "",
          expanded: false
        },
        {
          title: 'Pune - Maharashtra',
          shop: 'R P Technology',
          address: 'Shop No. 49, 1st Floor, Bhosale Shinde Arcade, J. M. Road Near Deccan Bus Stop, Pune - 411004.',
          contactperson: 'JAVED MOHSIN',
          email: 'rptech0109@gmail.com',
          phone1: 9049706457,
          phone2: 8149988841,
          state: 'Maharashtra',
          city: 'Pune',
          location: "",
          expanded: false
        },
      ]
    },
    {
      state: 'Odisha',
      expanded: false,
      interneldata: [
        {
          title: 'Bhubaneswar - Odisha',
          shop: 'ORITRUST SERVICES (BHUBANESWAR, GOBINDA JI)',
          address: '98, SAHEED NAGAR, BHUBANESWAR- 751007 ODISHA',
          contactperson: 'GOBINDA CHANDRA NAYAK',
          email: 'ORITRUST@GMAIL.COM',
          phone1: 7894452064,
          phone2: '',
          state: 'Odisha',
          city: 'Bhubaneswar',
          location: "",
          expanded: false
        },
        {
          title: 'Bhubaneswar - Odisha',
          shop: 'Spectrum Sales And Service',
          address: 'Plot 494 Saheed Nagar, 751007',
          contactperson: 'Jitendra Kumar',
          email: 'spectrumsalesservice@gmail.com',
          phone1: 9078800297,
          phone2: '',
          state: 'Odisha',
          city: 'Bhubaneswar',
          location: "",
          expanded: false
        }
      ]
    },
    {
      state: 'Rajasthan',
      expanded: false,
      interneldata: [
        {
          title: 'JAIPUR - Rajasthan',
          shop: 'GEONIX JAIPUR SERVICE CENTER',
          address: 'SHOP NO.T-38 ,3RD FLOOR ,AJMERI GATE RAISAR PALAZA, JAIPUR- 302001',
          contactperson: 'MR. AMIT',
          email: 'amit.the.gre8@gmail.com',
          phone1: 9929223922,
          phone2: '',
          state: 'Rajasthan',
          city: 'JAIPUR',
          location: "",
          expanded: false
        },
        {
          title: 'KOTA - RAJASTHAN',
          shop: 'ARDHAY INFOTECH',
          address: '2nd Floor Kalawati Paliwal Market Gumanpura Kota Rajasthan -324007',
          contactperson: 'VIRENDRA MODI',
          email: 'ARADHAY.INFOTECH@GMAIL.COM',
          phone1: 9772224494,
          phone2: 8764494929,
          state: 'RAJASTHAN',
          city: 'KOTA',
          location: "https://goo.gl/maps/fKgH4mz6gczmMTLX7",
          expanded: false
        },
        {
          title: 'Rajasthan - Jodhpur',
          shop: 'Vijay Communication (Jodhpur, RJ)',
          address: 'Gali No.2, Near Kohinoor Cinema, Behind of Andhra Bank, Masuriya, Jodhpur, Rajasthan',
          contactperson: 'Vijay Prajapat',
          email: 'solutions.apace@gmail.com',
          phone1: 7568705605,
          phone2: 291-2645825,
          state: 'Rajasthan',
          city: 'Jodhpur',
          location: "https://www.google.com/maps/place/26%C2%B016'36.4%22N+72%C2%B059'48.8%22E/@26.2767826,72.9946908,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x5f88e9601e776c90!8m2!3d26.2767826!4d72.9968795?hl=en",
          expanded: false
        }
      ]
    },
    {
      state: 'Telangana',
      expanded: false,
      interneldata: [
        {
          title: 'HYDERABAD - Telangana',
          shop: 'SHREE SAANVI COMMUNICATIONS',
          address: 'SHOP NO. - 307, PANCHASHEELA TOWER, PARKLANE, SECUNDERABAD - 500003',
          contactperson: 'MR. SRINIVAS',
          email: 'shreesaanvicommunications@gmail.com',
          phone1: 9885006457,
          phone2: '',
          state: 'Telangana',
          city: 'HYDERABAD',
          location: "",
          expanded: false
        }
      ]
    }
  ]

  togglePanel(panel): void {
    panel.expanded = !panel.expanded;
  }

}
