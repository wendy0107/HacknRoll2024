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
export async function addTrip(country, start_date, end_date) {
  console.log(typeof start_date)
  let { data, error } = await supabase
  .rpc('add_trip', {
    p_country : country, 
    p_end_date : end_date,
    p_start_date : start_date
  })
if (error) console.error(error)
else console.log(data)
}

export async function fetchTripDataFromSupabase() {
  const { data, error } = await supabase
  .from('trips')
  .select('*');

  if (error) {
    console.error('Error fetching trip data:', error.message);
    return [];
  }
  console.log("function called")
  console.log(data)
  return data;
}

// get place id from text
// get place details from place id
// add the place details to the db where photo is the google url

