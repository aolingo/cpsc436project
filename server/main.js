import { Meteor } from 'meteor/meteor';
import { Restaurants } from '../imports/api/restaurants';
import { Reservations } from '../imports/api/reservations';

// Assign newly created user to default role of customer
Accounts.onCreateUser(function (options, user) {
  // Semantics for adding things to users after the user document has been inserted
  if (typeof (user.services.google) != "undefined") {
    user.username = user.services.google.name;
  }

  if (typeof (user.services.facebook) != "undefined") {
    user.username = user.services.facebook.name;
  }

  user.role = "customer";

  return user;
});

// Populate database with initial restaurants if it's currently empty
Meteor.startup(() => {

  if (Restaurants.find().count() === 0) {
    const data = [
      {
        restaurantId: "sushibarshu",
        name: 'Sushi Bar Shu',
        owner: "2uqqAQpxi3hdNWxRd",
        description: "Providing an omakase sushi experience while using fresh, seasonal seafood from Japan.",
        photo: 'http://www.makotojapanesebuffet.com/index_sushi_1_files/vlb_images5/23.jpg',
        photo2: "https://images1.houstonpress.com/imager/u/original/7423511/9683304.0.jpg",
        contactInfo: {
          phone: 6044281868,
          website: 'https://www.instagram.com/sushibarshu',
          postalCode: "V6P 4Z5",
          state: "BC",
          city: 'Vancouver',
          address: '8099 Graville Street',
          lat: 49.212468,
          lng: -123.140667
        },
        reservationInfo: {
          seats: 30,
          timeSlots: [1900],
          maxParty: 3,
          closedDays: ["Monday"]
        }
      },
      {
        restaurantId: "bauhaus",
        name: 'Bauhaus Restaurant',
        owner: "2uqqAQpxi3hdNWxRd",
        description: "Bauhaus sets a new standard for refined dining in Vancouver. Owned by German film director Uwe Boll, the award-winning restaurant is known for its modern take on German cuisine and attention to detail. The menu delicately balances European cuisine with west coast influences. The chef’s creativity can be seen, tasted and felt in each of their creations.",
        photo: 'https://www.theworlds50best.com/discovery/filestore/jpg/Bauhaus-DCI2017-interior.jpg',
        photo2: "http://www.snowchimp.com/wp-content/uploads/2017/03/Andrea-Greenway-Bauhaus-Restaurant-Web-05.jpg",
        contactInfo: {
          phone: 6049741147,
          website: 'https://bauhaus-restaurant.com',
          postalCode: "V6P 4Z5",
          state: "BC",
          city: 'Vancouver',
          address: '1 W Cordova St',
          lat: 49.2822948,
          lng: -123.1195584
        },
        reservationInfo: {
          seats: 30,
          timeSlots: [1900],
          maxParty: 3,
          closedDays: ["Monday"]
        }
      },
      {
        restaurantId: "farmersapprentice",
        name: "Farmer's Apprentice",
        owner: "2uqqAQpxi3hdNWxRd",
        description: "Located in Vancouver's South Granville - Kitsalino neighbourhood, Farmer's Apprentice is a reflection of BC's organic farmers, fishermen, and purveyors. The Pacific Northwest, vegetable forward menu seeks to support sustainable food systems, and is complimented by natural wine offerings, knowledgable staff and an approachable setting.",
        photo: 'https://farm3.staticflickr.com/2882/11302596064_7aac176bf6_b.jpg',
        photo2: "https://i2.wp.com/early-volcano.flywheelsites.com/wp-content/uploads/2013/11/2013-11-02-11-26-14.jpg",
        contactInfo: {
          phone: 6046202070,
          website: 'https://farmersapprentice.ca',
          postalCode: "V6P 4Z5",
          state: "BC",
          city: 'Vancouver',
          address: '1535 Graville Street',
          lat: 49.266395,
          lng: -123.1417907
        },
        reservationInfo: {
          seats: 30,
          timeSlots: [1100, 1115, 1130, 1145, 1200, 1215, 1230, 1245, 1300, 1315, 1330, 1345, 1730, 1745, 1800, 1915, 1930, 1945, 2000, 2100],
          maxParty: 6,
          closedDays: ["Monday"]
        }
      },
      {
        restaurantId: "cacao",
        name: "Cacao",
        owner: "2uqqAQpxi3hdNWxRd",
        description: "Our kitchen represents a progressive and fresh Latin American menu, created with a sinuous, steady hand and a focus on high quality, regional ingredients. Located within the charming and friendly neighbourhood of Kitsilano, Cacao is the very kind of neighbourhood corner post that becomes a favourite refuge after a long day, a place to gather and celebrate old friendships, new beginnings. A place to discover, or re-discover Latin American cuisine at its finest. Unpretentious. Surprising. Delightful. Lingering.",
        photo: 'http://www.nomss.com/wp-content/uploads/2016/11/Cacao-Restaurant-Vancouver-Chef-Jefferson-Alvarez-Instanomss-Nomss-Delicious-Food-Photography-Healthy-Travel-Lifestyle1195.jpg',
        photo2: "http://www.cacaodeli.com/images/gallery/gallery-9.jpg",
        contactInfo: {
          phone: 6047315370,
          website: 'https://cacao-vancouver.squarespace.com/',
          postalCode: "V6J 1G5",
          state: "BC",
          city: 'Vancouver',
          address: '1898 W 1st Ave',
          lat: 49.2704979,
          lng: -123.1498957
        },
        reservationInfo: {
          seats: 30,
          timeSlots: [1100, 1115, 1130, 1145, 1200, 1215, 1230, 1245, 1300, 1315, 1330, 1345, 1730, 1745, 1800, 1915, 1930, 1945, 2000, 2100],
          maxParty: 6,
          closedDays: ["Monday"]
        }
      },
      {
        restaurantId: "poplargrovewinery",
        name: "Poplar Grove Winery",
        owner: "2uqqAQpxi3hdNWxRd",
        description: "At Poplar Grove, great wines are born from the courage to see what's possible and a passionate desire to work with our estate fruit to bring the Okanagan's full potential into each bottle. This is what we strive for each day.",
        photo: "http://naramatabench.com/wp-content/uploads/2011/09/poplar-grove-winery-naramata.jpg",
        photo2: "https://www.straight.com/files/v3/images/15/04/poplar_grove_winery.png",
        contactInfo: {
          phone: 2504939463,
          website: "https://www.poplargrove.ca/",
          postalCode: "V2A 8S5",
          state: "BC",
          city: 'Penticton',
          address: "425 Middle Bench Road North",
          lat: 49.5123363,
          lng: -119.5760359
        },
        reservationInfo: {
          seats: 30,
          timeSlots: [1300, 1400, 1500],
          closedDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          maxParty: 15
        }
      },
      {
        restaurantId: "wildebeest",
        name: "Wildebeest",
        owner: "2uqqAQpxi3hdNWxRd",
        description: "Wildebeest invites you to experience deliciously decadent yet simple country cooking. Explore a farm-to-table menu paired with a diverse selection of Old and New World wines and a carefully crafted cocktail list. Set in a refurbished 19th century building, the multi-level space offers a front house cocktail bar & lounge, open-concept kitchen, an inviting dining room with banquette seating, and an intimately-set private dining room.",
        photo: "https://www.straight.com/files/gallery/adhoc/Wildebeast2_sm_0.jpg",
        photo2: "https://www.vancouvermom.ca/wp-content/uploads/2013/09/credit-Andrew-Morrison.jpg",
        contactInfo: {
          phone: 2507640078,
          website: "https://tantalus.ca/",
          postalCode: "V6B 1G8",
          state: "BC",
          city: 'Vancouver',
          address: "120 West Hastings Street",
          lat: 49.2819194,
          lng: -123.1101953
        },
        reservationInfo: {
          seats: 30,
          timeSlots: [1100, 1115, 1130, 1145, 1200, 1215, 1230, 1245, 1300, 1315, 1330, 1345, 1730, 1745, 1800, 1915, 1930, 1945, 2000, 2100],
          maxParty: 6,
          closedDays: ["Monday"]
        }
      }
    ];

    data.forEach((restaurant) => {
      Restaurants.insert(restaurant)
    });
  }
});
