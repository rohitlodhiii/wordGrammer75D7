
export default async function getWord (searchWord) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
  if (!res.ok) {
    const errorMessage = {
      title: 'No word Found',
      message: `Sorry ,There is no word as ${searchWord}, We will look forward to it !`,
      resolution: 'Upto then you can search any other word , Have a good day !',
      status: res.status
    }
    throw errorMessage
  }
  const data = await res.json()
  return data
}
