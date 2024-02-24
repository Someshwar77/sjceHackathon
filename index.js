let ariyalur = document.getElementById("Ariyalur");
let chennai = document.getElementById("Chennai");
let erode = document.getElementById("Erode");
let chengalpattu = document.getElementById("Chengalpattu");
let coimbatore = document.getElementById("Coimbatore");
let cuddalore = document.getElementById("Cuddalore");
let dharmapuri = document.getElementById("Dharmapuri");
let dindigul = document.getElementById("Dindigul");
let kallakurichi = document.getElementById("Kallakurichi");
let kanchipuram = document.getElementById("Kanchipuram");
let kanyakumari = document.getElementById("Kanyakumari");
let krishnagiri = document.getElementById("Krishnagiri");
let karur = document.getElementById("Karur");
let madurai = document.getElementById("Madurai");
let nagapattinam = document.getElementById("Nagapattinam");
let namakkal = document.getElementById("Namakkal");
let nilgiris = document.getElementById("Nilgiris");
let perambalur = document.getElementById("Perambalur");
let pudukkottai = document.getElementById("Pudukkottai");
let ramanathapuram = document.getElementById("Ramanathapuram");
let salem = document.getElementById("Salem");
let sivaganga = document.getElementById("Sivaganga");
let tenkasi = document.getElementById("Tenkasi");
let thanjavur = document.getElementById("Thanjavur");
let thoothukudi = document.getElementById("Thoothukudi");
let tiruchirappalli = document.getElementById("Tiruchirappalli");
let tirunelveli = document.getElementById("Tirunelveli");
let tirupathur = document.getElementById("Tirupathur");
let tiruppur = document.getElementById("Tiruppur");
let tiruvallur = document.getElementById("Tiruvallur");
let theni = document.getElementById("Theni");
let tiruvannamalai = document.getElementById("Tiruvannamalai");
let tiruvarur = document.getElementById("Tiruvarur");
let vellore = document.getElementById("Vellore");
let viluppuram = document.getElementById("Viluppuram");
let virudhunagar = document.getElementById("Virudhunagar");

let main = document.getElementById("main");
let option = document.getElementById("toDistrict");
let fromDistrict = document.getElementById("fromDistrict");
let toDistrict = document.getElementById("toDistrict");
let district = document.getElementById("district");
let submitBtn = document.getElementById("submit-btn");

async function getLocation(loc) {
  var location = loc;
  var apiUrl =
    "https://nominatim.openstreetmap.org/search?format=json&q=" + location;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Location not found.");
    } else {
      var latitude = data[0].lat;
      var longitude = data[0].lon;
      return { latitude, longitude };
    }
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}

function distance(lat1, lon1, lat2, lon2) {
    // Convert latitude and longitude from degrees to radians
    const R = 6371.0; // Radius of the Earth in kilometers

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
}

// Example coordinates for New York City and Los Angeles
const lat1 = 40.7128;
const lon1 = -74.0060; // New York City
const lat2 = 34.0522;
const lon2 = -118.2437; // Los Angeles

async function search() {
  console.log(fromDistrict.value);
  let fromLatLong = await getLocation(fromDistrict.value);
  let toLatLong = await getLocation(toDistrict.value);
  console.log(fromLatLong,toLatLong)
  let km=distance(fromLatLong.latitude,fromLatLong.longitude, toLatLong.latitude,toLatLong.longitude);
  let cost=Math.floor(Number(km));
  console.log(cost*2+"Rupees");

  console.log(option.value);
  main.style.display = "none";
  submitBtn.style.display = "block";


    switch (option.value) {
        case "Ariyalur":
            ariyalur.style.display = "block";
            break;
        case "Chennai":
            chennai.style.display = "block";
            break;
        case "Chengalpattu":
            chengalpattu.style.display = "block";
            break;
        case "Chidambaram":
            chidambaram.style.display = "block";
            break;
        case "Coimbatore":
            coimbatore.style.display = "block";
            break;
        case "Cuddalore":
            cuddalore.style.display = "block";
            break;
        case "Dharmapuri":
            dharmapuri.style.display = "block";
            break;
        case "Dindigul":
            dindigul.style.display = "block";
            break;
        case "Erode":
            erode.style.display = "block";
            break;
        case "Kallakurichi":
            kallakurichi.style.display = "block";
            break;
        case "Kancheepuram":
            kancheepuram.style.display = "block";
            break;
        case "Kanyakumari":
            kanyakumari.style.display = "block";
            break;
        case "Karur":
            karur.style.display = "block";
            break;
        case "Krishnagiri":
            krishnagiri.style.display = "block";
            break;
        case "Madurai":
            madurai.style.display = "block";
            break;
        case "Nagapattinam":
            nagapattinam.style.display = "block";
            break;
        case "Namakkal":
            namakkal.style.display = "block";
            break;
        case "Nilgiris":
            nilgiris.style.display = "block";
            break;
        case "Perambalur":
            perambalur.style.display = "block";
            break;
        case "Pudukkottai":
            pudukkottai.style.display = "block";
            break;
        case "Ramanathapuram":
            ramanathapuram.style.display = "block";
            break;
        case "Salem":
            salem.style.display = "block";
            break;
        case "Sivaganga":
            sivaganga.style.display = "block";
            break;
        case "Tenkasi":
            tenkasi.style.display = "block";
            break;
        case "Thanjavur":
            thanjavur.style.display = "block";
            break;
        case "Theni":
            theni.style.display = "block";
            break;
        case "Thoothukudi":
            thoothukudi.style.display = "block";
            break;
        case "Tiruchirappalli":
            tiruchirappalli.style.display = "block";
            break;
        case "Tirunelveli":
            tirunelveli.style.display = "block";
            break;
        case "Tirupattur":
            tirupattur.style.display = "block";
            break;
        case "Tiruppur":
            tiruppur.style.display = "block";
            break;
        case "Tiruvallur":
            tiruvallur.style.display = "block";
            break;
        case "Tiruvannamalai":
            tiruvannamalai.style.display = "block";
            break;
        case "Tiruvarur":
            tiruvarur.style.display = "block";
            break;
        case "Vellore":
            vellore.style.display = "block";
            break;
        case "Viluppuram":
            viluppuram.style.display = "block";
            break;
        case "Virudhunagar":
            virudhunagar.style.display = "block";
            break;
        default:
            console.log("Invalid district selected.");
    }
}


function price(){
    document.getElementById("submit-btn").style.display="none";
    document.getElementById("price").style.display="block";
}