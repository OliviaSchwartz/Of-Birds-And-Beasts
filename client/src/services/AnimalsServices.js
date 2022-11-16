import Client from './api'

export const GetAnimals = async () => {
  try {
    const res = await Client.get('/animal')
    return res.data
  } catch (error) {
    throw error
  }
}
