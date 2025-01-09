export async function GetMeals() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
