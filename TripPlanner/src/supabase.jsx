import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qcrydpbedggbkelwfrjq.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjcnlkcGJlZGdnYmtlbHdmcmpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTczMTY1NCwiZXhwIjoyMDIxMzA3NjU0fQ.sZne3DM7KpHaOzGdgcwqLj6uvc_EYhYqgHQV_ksAQMo";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
const GOOGLE_MAPS_API_BASE_URL = "https://maps.googleapis.com/maps/api/place/"

export async function fetchPlaceDataFromSupabase() {
  const { data, error } = await supabase
    .from('google_activities')
    .select('*');

  if (error) {
    console.error('Error fetching place data:', error.message);
    return [];
  }

  return data;
}

// async function get_place_id(place_name) {
//   try {
//     const response = await fetch(GOOGLE_MAPS_API_BASE_URL + 
//       "findplacefromtext/json?inputtype=textquery&input=" + 
//       place_name + "&key=" + GOOGLE_API_KEY,
//       {
//         method: "GET",
//         headers: {"Content-Type": "application/json",},
//         // body: JSON.stringify({place_name})
//       });

//     if (!response.ok) {
//       throw new Error("Failed to fetch data from get_place_id")
//     }

//     const data = await response.json();
//     return data["candidates"][0]["place_id"]
//   } catch (error) {
//     console.error('Error fetching place ID:', error.message);
//     return null;
//   }
// }

export async function addPlace(place_name) {

  // console.log(get_place_id(place_name))
  // const { data, error } = await supabase.rpc('create_google_activity', {
  //   p_address, 
  //   p_name, 
  //   p_photo_reference, 
  //   p_place_id, 
  //   p_price_level, 
  //   p_trip_id, 
  //   p_website
  // })
  // if (error) console.error(error)
  // else console.log(data)
}

// get place id from text
// get place details from place id
// add the place details to the db where photo is the google url

